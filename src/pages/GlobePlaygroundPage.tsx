import { useMemo, useState, type CSSProperties } from 'react'

function SliderControl({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string
  value: number
  display: string
  min: number
  max: number
  step: number
  onChange: (v: number) => void
}) {
  return (
    <label className="grid gap-1.5">
      <span className="flex items-baseline justify-between gap-3 normal-case tracking-normal">
        <span>{label}</span>
        <span className="tabular-nums text-white font-medium shrink-0">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </label>
  )
}

export default function GlobePlaygroundPage() {
  const [gFontSizeRem, setGFontSizeRem] = useState(9)
  const [globeLeft, setGlobeLeft] = useState(51.5)
  const [globeTop, setGlobeTop] = useState(53)
  const [globeWidthEm, setGlobeWidthEm] = useState(0.535)
  const [globeHeightEm, setGlobeHeightEm] = useState(0.535)
  const [land, setLand] = useState('#0a0c10')
  const [ocean, setOcean] = useState('#96a2ae')
  const [speed, setSpeed] = useState(0.18)

  const lockupVars = useMemo(
    () =>
      ({
        '--gep-globe-in-g-left': `${globeLeft}%`,
        '--gep-globe-in-g-top': `${globeTop}%`,
        '--gep-globe-in-g-width': `${globeWidthEm}em`,
        '--gep-globe-in-g-height': `${globeHeightEm}em`,
      }) as CSSProperties,
    [globeLeft, globeTop, globeWidthEm, globeHeightEm],
  )

  const cssSnippet = `:root {
  --gep-globe-in-g-left: ${globeLeft}%;
  --gep-globe-in-g-top: ${globeTop}%;
  --gep-globe-in-g-width: ${globeWidthEm.toFixed(3)}em;
  --gep-globe-in-g-height: ${globeHeightEm.toFixed(3)}em;
}`

  const gFontPxApprox = (gFontSizeRem * 0.82 * 16).toFixed(0)

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 lg:px-10" style={{ background: '#000032', color: '#fff' }}>
      <h1 className="text-lg font-semibold mb-2">GEP globe playground</h1>
      <p className="text-sm leading-relaxed max-w-2xl mb-8 opacity-75">
        Century <strong className="text-white font-medium">G</strong> over the globe, same stacking as the live logo.
        Copy the CSS block below into <code className="text-white/90">src/index.css</code> when you find values you like.
        Texture and grid edits stay in <code className="text-white/90">src/gep-globe.ts</code>.
      </p>

      <div className="flex flex-wrap gap-10 items-start">
        <div
          className="gep-playground-lockup shrink-0 rounded-sm p-6"
          style={{ background: 'rgba(255,255,255,0.04)', ...lockupVars }}
        >
          <span
            className="gep-logo-century gep-logo-century--hero inline-flex items-center leading-none text-white"
            style={{ fontSize: `${gFontSizeRem}rem`, paddingLeft: '0.14em' }}
          >
            <span className="gep-logo-century__g">
              G
              <span className="gep-logo-century__globe" aria-hidden="true">
                <gep-globe land={land} ocean={ocean} speed={String(speed)} />
              </span>
            </span>
          </span>
        </div>

        <div className="grid gap-5 min-w-[min(100%,22rem)] max-w-md text-xs uppercase tracking-wider opacity-80 flex-1">
          <p className="normal-case tracking-normal text-sm opacity-90 mb-1">Lockup scale</p>
          <SliderControl
            label="G lockup font size"
            value={gFontSizeRem}
            display={`${gFontSizeRem.toFixed(2)} rem (~${gFontPxApprox}px G glyph)`}
            min={4}
            max={16}
            step={0.25}
            onChange={setGFontSizeRem}
          />

          <p className="normal-case tracking-normal text-sm opacity-90 mt-2 mb-1">Globe in G (matches site CSS vars)</p>
          <SliderControl
            label="Globe anchor — horizontal (left %)"
            value={globeLeft}
            display={`${globeLeft.toFixed(1)}%`}
            min={35}
            max={65}
            step={0.5}
            onChange={setGlobeLeft}
          />
          <SliderControl
            label="Globe anchor — vertical (top %)"
            value={globeTop}
            display={`${globeTop.toFixed(1)}%`}
            min={35}
            max={65}
            step={0.5}
            onChange={setGlobeTop}
          />
          <SliderControl
            label="Globe slot width"
            value={globeWidthEm}
            display={`${globeWidthEm.toFixed(3)} em`}
            min={0.45}
            max={0.95}
            step={0.005}
            onChange={setGlobeWidthEm}
          />
          <SliderControl
            label="Globe slot height"
            value={globeHeightEm}
            display={`${globeHeightEm.toFixed(3)} em`}
            min={0.45}
            max={0.95}
            step={0.005}
            onChange={setGlobeHeightEm}
          />

          <p className="normal-case tracking-normal text-sm opacity-90 mt-2 mb-1">Globe appearance</p>
          <label className="grid gap-1">
            <span className="flex justify-between normal-case tracking-normal">
              <span>Land color</span>
              <span className="tabular-nums text-white">{land}</span>
            </span>
            <input type="color" value={land} onChange={(e) => setLand(e.target.value)} className="max-w-[12rem]" />
          </label>
          <label className="grid gap-1">
            <span className="flex justify-between normal-case tracking-normal">
              <span>Ocean attribute</span>
              <span className="tabular-nums text-white">{ocean}</span>
            </span>
            <input type="color" value={ocean} onChange={(e) => setOcean(e.target.value)} className="max-w-[12rem]" />
          </label>
          <SliderControl
            label="Rotation speed"
            value={speed}
            display={speed.toFixed(2)}
            min={0}
            max={0.6}
            step={0.01}
            onChange={setSpeed}
          />
        </div>
      </div>

      <div className="mt-10 max-w-xl">
        <p className="text-xs uppercase tracking-wider opacity-60 mb-2">Paste into index.css</p>
        <pre
          className="text-xs leading-relaxed p-4 rounded-sm overflow-x-auto normal-case tracking-normal"
          style={{ background: 'rgba(0,0,0,0.35)', color: 'rgba(255,255,255,0.85)' }}
        >
          {cssSnippet}
        </pre>
      </div>
    </main>
  )
}
