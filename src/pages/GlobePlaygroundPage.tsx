import { useState } from 'react'

export default function GlobePlaygroundPage() {
  const [width, setWidth] = useState(280)
  const [aspect, setAspect] = useState(1.008)
  const [land, setLand] = useState('#0a0c10')
  const [ocean, setOcean] = useState('#96a2ae')
  const [speed, setSpeed] = useState(0.18)

  return (
    <main className="min-h-screen pt-24 pb-16 px-6" style={{ background: '#000032', color: '#fff' }}>
      <h1 className="text-lg font-semibold mb-2">GEP globe playground</h1>
      <p className="text-sm leading-relaxed max-w-2xl mb-8 opacity-75">
        Adjust the ellipse mask and colors here. Edit continents, ocean sheen, and grid in{' '}
        <code className="text-white/90">src/gep-globe.ts</code>, then redeploy or refresh dev. Works on{' '}
        <strong className="font-medium text-white">Vercel</strong> at{' '}
        <code className="text-white/90">/globe-playground</code> — no local Node required.
      </p>
      <div className="flex flex-wrap gap-8 items-start">
        <div
          className="relative shrink-0 rounded-full overflow-hidden"
          style={{
            width: `${width}px`,
            height: `${width * aspect}px`,
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15), 0 8px 24px rgba(0,0,0,0.35)',
          }}
        >
          <gep-globe land={land} ocean={ocean} speed={String(speed)} />
        </div>
        <div className="grid gap-4 min-w-[min(100%,20rem)] text-xs uppercase tracking-wider opacity-70">
          <label className="grid gap-1">
            Slot width (px)
            <input type="range" min={120} max={480} value={width} onChange={(e) => setWidth(Number(e.target.value))} />
          </label>
          <label className="grid gap-1">
            Aspect (height ÷ width)
            <input
              type="range"
              min={0.95}
              max={1.08}
              step={0.001}
              value={aspect}
              onChange={(e) => setAspect(Number(e.target.value))}
            />
          </label>
          <label className="grid gap-1">
            Land
            <input type="color" value={land} onChange={(e) => setLand(e.target.value)} />
          </label>
          <label className="grid gap-1">
            Ocean attribute
            <input type="color" value={ocean} onChange={(e) => setOcean(e.target.value)} />
          </label>
          <label className="grid gap-1">
            Rotation speed
            <input
              type="range"
              min={0}
              max={0.6}
              step={0.01}
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
            />
          </label>
        </div>
      </div>
      <style>{`
        gep-globe {
          display: block;
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </main>
  )
}
