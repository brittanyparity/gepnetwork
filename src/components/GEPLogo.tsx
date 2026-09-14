type GEPLogoProps = {
  className?: string
  /** Total logo height in pixels */
  height?: number
  color?: string
}

function GlobeGraphic({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="1.25" opacity="0.9">
        <circle cx="50" cy="50" r="46" />
        <ellipse cx="50" cy="50" rx="46" ry="14" />
        <ellipse cx="50" cy="50" rx="46" ry="26" />
        <ellipse cx="50" cy="50" rx="46" ry="36" />
        <ellipse cx="50" cy="50" rx="14" ry="46" />
        <ellipse cx="50" cy="50" rx="26" ry="46" />
        <ellipse cx="50" cy="50" rx="36" ry="46" />
      </g>
      <g fill={color} opacity="0.4">
        <path d="M28 38c8-10 22-14 34-10 6 2 10 6 12 11-14 2-26 8-34 18-4-6-8-13-12-19z" />
        <path d="M52 58c10 4 20 3 28-2-2 8-8 14-16 17-10 4-20 2-28-4 6-4 11-8 16-11z" />
      </g>
    </svg>
  )
}

function StyledLetterE({ height, color }: { height: number; color: string }) {
  const barH = height * 0.09
  const barW = height * 0.38
  const gap = height * 0.07
  return (
    <span
      className="inline-flex flex-col justify-center shrink-0"
      style={{ height, gap, marginRight: height * 0.02 }}
      aria-hidden="true"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block shrink-0"
          style={{ width: barW, height: barH, backgroundColor: color }}
        />
      ))}
    </span>
  )
}

export default function GEPLogo({ className = '', height = 48, color = '#ffffff' }: GEPLogoProps) {
  const gFont = "'Century Gothic', 'CenturyGothic', 'AppleGothic', 'Didact Gothic', sans-serif"
  const wordFont = "'Bruno Ace', sans-serif"

  const gSize = height * 0.98
  const epSize = height * 0.58
  const networkSize = height * 0.36

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      style={{ height, color }}
      role="img"
      aria-label="GEP Network"
    >
      <div
        className="relative shrink-0 flex items-center justify-center"
        style={{ width: height * 1.02, height }}
      >
        <div
          className="absolute pointer-events-none gep-logo-globe overflow-hidden rounded-full"
          style={{
            width: height * 0.58,
            height: height * 0.58,
            left: height * 0.14,
            top: height * 0.22,
            zIndex: 0,
          }}
        >
          <div className="gep-globe-spin h-full w-full">
            <GlobeGraphic color={color} />
          </div>
        </div>
        <span
          className="relative z-10 leading-none"
          style={{
            fontFamily: gFont,
            fontWeight: 700,
            fontSize: gSize,
            lineHeight: 1,
            color,
          }}
        >
          G
        </span>
      </div>

      <StyledLetterE height={height} color={color} />

      <span
        className="uppercase leading-none shrink-0"
        style={{
          fontFamily: wordFont,
          fontSize: epSize,
          letterSpacing: '0.06em',
          color,
          marginRight: height * 0.06,
        }}
      >
        P
      </span>

      <span
        className="uppercase leading-none shrink-0"
        style={{
          fontFamily: wordFont,
          fontSize: networkSize,
          letterSpacing: '0.14em',
          color,
          marginTop: height * 0.06,
        }}
      >
        NETWORK
      </span>
    </div>
  )
}
