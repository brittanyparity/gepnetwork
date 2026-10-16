import type { CSSProperties, ReactNode } from 'react'

export function AnimatedTitle({
  text,
  className = '',
  style,
}: {
  text: string
  className?: string
  style?: CSSProperties
}) {
  const words = text.split(' ')
  return (
    <span className={`anim-title ${className}`} style={style} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="anim-title-word" style={{ animationDelay: `${120 + i * 70}ms` }}>
          <span className="anim-title-inner" style={{ animationDelay: `${120 + i * 70}ms` }}>
            {word}
          </span>
          {i < words.length - 1 ? '\u00A0' : null}
        </span>
      ))}
    </span>
  )
}

export type { ReactNode }
