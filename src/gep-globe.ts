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
      /* BasicMaterial = texture reads flat (no half-lit sphere); logo-style globe */
      const mat = new THREE.MeshBasicMaterial({ map: this._colorTex })
      this._mat = mat
      const globe = new THREE.Mesh(geo, mat)
      globe.rotation.set(0, 0, 0)
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

      /* Lights unused with MeshBasicMaterial; keep rim ref for accent API */
      this._rim = null

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
        /*
         * Metallic silver: vertical + radial sheen only (no left→right gradient —
         * that reads as two hemispheres on the sphere).
         */
        const g = ctx.createLinearGradient(0, 0, 0, c.height)
        g.addColorStop(0, '#96A2AE')
        g.addColorStop(0.42, '#B0BAC6')
        g.addColorStop(0.58, '#8F9CAA')
        g.addColorStop(1, '#788592')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, c.width, c.height)

        const spec = ctx.createRadialGradient(
          c.width * 0.5,
          c.height * 0.46,
          c.width * 0.02,
          c.width * 0.5,
          c.height * 0.46,
          c.width * 0.5,
        )
        spec.addColorStop(0, 'rgba(255, 255, 255, 0.16)')
        spec.addColorStop(0.55, 'rgba(255, 255, 255, 0.04)')
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
        fills: {
          classicOcean?: boolean
          bg: string
          land: string
          grid?: GridSpec
          gridOnTop?: boolean
          blur?: number
        },
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
        if (fills.grid && !fills.gridOnTop) strokeGrid(ctx, c, fills.grid)
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
        if (fills.grid && fills.gridOnTop) strokeGrid(ctx, c, fills.grid)
        tex.needsUpdate = true
      }

      const classicGrid: GridSpec = {
        boldStroke: 'rgba(30, 38, 48, 0.38)',
        boldWidth: 3.75,
        stroke: 'rgba(245, 248, 252, 0.94)',
        meridians: 24,
        parallels: 13,
        lineWidth: 2.35,
      }

      /* Classic GEP: metallic ocean → continents → light grid on top */
      draw(this._colorTex, {
        classicOcean: true,
        bg: ocean,
        land,
        grid: classicGrid,
        gridOnTop: true,
      })
      draw(this._dispTex, { bg: '#000000', land: '#ffffff', blur: 3 })
    }
  }

  customElements.define('gep-globe', GepGlobe)
})()

export {}
