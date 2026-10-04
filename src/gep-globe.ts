// <gep-globe> — solid rotating globe with raised continents (Natural Earth via world-atlas)
;(function () {
  if (customElements.get('gep-globe')) return

  const SCRIPTS = [
    [
      'https://unpkg.com/d3@7.9.0/dist/d3.min.js',
      'sha384-CjloA8y00+1SDAUkjs099PVfnY2KmDC2BZnws9kh8D/lX1s46w6EPhpXdqMfjK6i',
    ],
    [
      'https://unpkg.com/topojson-client@3.1.0/dist/topojson-client.min.js',
      'sha384-Ukv1p/xTma6P4/2bY5KzWBw+ydSpXmhCMtyciIQVDJ1RmOxtCYNMF1uXT9T63H67',
    ],
  ] as const

  const loaded: Record<string, Promise<void>> = {}

  function loadScript(src: string, integrity: string) {
    if (loaded[src]) return loaded[src]
    loaded[src] = new Promise((res, rej) => {
      const s = document.createElement('script')
      s.src = src
      s.integrity = integrity
      s.crossOrigin = 'anonymous'
      s.onload = () => res()
      s.onerror = () => rej(new Error(`Failed to load ${src}`))
      document.head.appendChild(s)
    })
    return loaded[src]
  }

  let worldPromise: Promise<{ type: string; features: unknown[] }> | null = null

  function getWorld() {
    if (!worldPromise) {
      worldPromise = (async () => {
        await Promise.all(SCRIPTS.map(([s, i]) => loadScript(s, i)))
        const topo = await fetch(
          'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json',
        ).then((r) => r.json())
        const topojson = (window as Window & { topojson?: { feature: (t: unknown, o: unknown) => { type: string; features: unknown[] } } })
          .topojson
        if (!topojson) throw new Error('topojson not loaded')
        return topojson.feature(topo, (topo as { objects: { countries: unknown } }).objects.countries)
      })()
    }
    return worldPromise
  }

  type CanvasTextureWithCanvas = { _canvas: HTMLCanvasElement; needsUpdate: boolean }

  class GepGlobe extends HTMLElement {
    _booted = false
    _canvas: HTMLCanvasElement | null = null
    _raf = 0
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _mat: any = null
    _colorTex: CanvasTextureWithCanvas | null = null
    _dispTex: CanvasTextureWithCanvas | null = null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    THREE: any = null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _rim: any = null
    _features: { type: string; features: unknown[] } | null = null

    static get observedAttributes() {
      return ['land', 'ocean', 'accent', 'speed']
    }

    connectedCallback() {
      if (this._booted) return
      this._booted = true
      this.style.display = 'block'
      this.style.position = 'absolute'
      this.style.inset = '0'
      this.style.width = '100%'
      this.style.height = '100%'
      this._canvas = document.createElement('canvas')
      this._canvas.style.cssText = 'width:100%;height:100%;display:block'
      this.appendChild(this._canvas)
      this._boot().catch((e) => console.warn('[gep-globe]', e))
    }

    attributeChangedCallback() {
      if (this._mat) this._paint()
    }

    disconnectedCallback() {
      if (this._raf) cancelAnimationFrame(this._raf)
    }

    async _boot() {
      const THREE = await import(/* @vite-ignore */ 'https://unpkg.com/three@0.160.0/build/three.module.js')
      this.THREE = THREE
      const canvas = this._canvas!
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true })
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2))
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100)
      camera.position.set(0, 0, 8.4)

      const geo = new THREE.SphereGeometry(2, 256, 128)
      this._colorTex = this._makeTexture('color')
      this._dispTex = this._makeTexture('disp')
      const mat = new THREE.MeshStandardMaterial({
        map: this._colorTex,
        displacementMap: this._dispTex,
        displacementScale: 0.055,
        bumpMap: this._dispTex,
        bumpScale: 0.9,
        roughness: 0.42,
        metalness: 0.32,
      })
      this._mat = mat
      const globe = new THREE.Mesh(geo, mat)
      globe.rotation.z = -0.38
      scene.add(globe)

      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(2.09, 64, 32),
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.045,
          side: THREE.BackSide,
        }),
      )
      scene.add(halo)

      scene.add(new THREE.AmbientLight(0xffffff, 1.15))
      const key = new THREE.DirectionalLight(0xffffff, 2.0)
      key.position.set(4, 3, 5)
      scene.add(key)
      const rim = new THREE.DirectionalLight(0xffffff, 1.3)
      rim.position.set(-5, 1.5, -1.5)
      scene.add(rim)
      this._rim = rim
      const fill = new THREE.DirectionalLight(0xffffff, 0.5)
      fill.position.set(-2, -3, 2)
      scene.add(fill)

      this._paint()

      const resize = () => {
        const w = this.clientWidth || 400
        const h = this.clientHeight || w
        renderer.setSize(w, h, false)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
      resize()
      new ResizeObserver(resize).observe(this)

      let last = performance.now()
      const tick = (t: number) => {
        this._raf = requestAnimationFrame(tick)
        const dt = Math.min((t - last) / 1000, 0.1)
        last = t
        globe.rotation.y += dt * (parseFloat(this.getAttribute('speed') || '') || 0.18)
        renderer.render(scene, camera)
      }
      this._raf = requestAnimationFrame(tick)

      getWorld()
        .then((f) => {
          this._features = f
          this._paint()
        })
        .catch(() => {})
    }

    _makeTexture(kind: 'color' | 'disp'): CanvasTextureWithCanvas {
      const THREE = this.THREE
      const c = document.createElement('canvas')
      c.width = 2048
      c.height = 1024
      const tex = new THREE.CanvasTexture(c) as CanvasTextureWithCanvas
      tex.colorSpace = kind === 'color' ? THREE.SRGBColorSpace : THREE.NoColorSpace
      tex.anisotropy = 8
      tex._canvas = c
      return tex
    }

    _paint() {
      if (!this._colorTex || !this._dispTex) return
      const land = this.getAttribute('land') || '#0A0C10'
      const ocean = this.getAttribute('ocean') || '#E6EEF6'
      const accent = this.getAttribute('accent') || '#FF5F1F'
      if (this._rim && this.THREE) this._rim.color = new this.THREE.Color(accent)

      type GridSpec = {
        stroke: string
        meridians: number
        parallels: number
        lineWidth: number
        /** Second pass for embossed / bold wire look */
        boldStroke?: string
        boldWidth?: number
      }

      const paintClassicOcean = (ctx: CanvasRenderingContext2D, c: HTMLCanvasElement) => {
        const g = ctx.createLinearGradient(0, c.height * 0.06, c.width, c.height * 0.94)
        g.addColorStop(0, '#C8D4E2')
        g.addColorStop(0.32, '#F2F6FA')
        g.addColorStop(0.58, '#E8EEF5')
        g.addColorStop(1, '#9AADBF')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, c.width, c.height)

        const spec = ctx.createRadialGradient(
          c.width * 0.34,
          c.height * 0.26,
          c.width * 0.02,
          c.width * 0.34,
          c.height * 0.26,
          c.width * 0.42,
        )
        spec.addColorStop(0, 'rgba(255, 255, 255, 0.62)')
        spec.addColorStop(0.45, 'rgba(255, 255, 255, 0.12)')
        spec.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = spec
        ctx.fillRect(0, 0, c.width, c.height)
      }

      const strokeGrid = (ctx: CanvasRenderingContext2D, c: HTMLCanvasElement, grid: GridSpec) => {
        const { stroke, meridians, parallels, lineWidth, boldStroke, boldWidth } = grid
        const drawLines = (style: string, width: number) => {
          ctx.strokeStyle = style
          ctx.lineWidth = width
          ctx.lineCap = 'round'
          for (let i = 1; i < meridians; i++) {
            const x = (c.width / meridians) * i
            ctx.beginPath()
            ctx.moveTo(x, 0)
            ctx.lineTo(x, c.height)
            ctx.stroke()
          }
          for (let i = 1; i < parallels; i++) {
            const y = (c.height / parallels) * i
            ctx.beginPath()
            ctx.moveTo(0, y)
            ctx.lineTo(c.width, y)
            ctx.stroke()
          }
        }
        if (boldStroke && boldWidth) drawLines(boldStroke, boldWidth)
        drawLines(stroke, lineWidth)
      }

      const draw = (
        tex: CanvasTextureWithCanvas,
        fills: { classicOcean?: boolean; bg: string; land: string; grid?: GridSpec; blur?: number },
      ) => {
        const c = tex._canvas
        const ctx = c.getContext('2d')!
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.filter = 'none'
        if (fills.classicOcean) {
          paintClassicOcean(ctx, c)
        } else {
          ctx.fillStyle = fills.bg
          ctx.fillRect(0, 0, c.width, c.height)
        }
        if (fills.grid) strokeGrid(ctx, c, fills.grid)
        const d3 = (window as Window & { d3?: { geoEquirectangular: () => { translate: (v: number[]) => unknown; scale: (v: number) => unknown }; geoPath: (p: unknown, c: CanvasRenderingContext2D) => (f: unknown) => void } }).d3
        if (this._features && d3) {
          const proj = d3
            .geoEquirectangular()
            .translate([c.width / 2, c.height / 2])
            .scale(c.width / (2 * Math.PI))
          if (fills.blur) ctx.filter = `blur(${fills.blur}px)`
          const path = d3.geoPath(proj, ctx)
          ctx.fillStyle = fills.land
          ctx.beginPath()
          path(this._features)
          ctx.fill()
          ctx.filter = 'none'
        }
        tex.needsUpdate = true
      }

      /* Classic GEP: light metallic ocean + bold grid, dark continents on top */
      draw(this._colorTex, {
        classicOcean: true,
        bg: ocean,
        land,
        grid: {
          boldStroke: 'rgba(255, 255, 255, 0.42)',
          boldWidth: 3.25,
          stroke: 'rgba(255, 255, 255, 0.92)',
          meridians: 24,
          parallels: 13,
          lineWidth: 1.85,
        },
      })
      draw(this._dispTex, { bg: '#000000', land: '#ffffff', blur: 3 })
    }
  }

  customElements.define('gep-globe', GepGlobe)
})()

export {}
