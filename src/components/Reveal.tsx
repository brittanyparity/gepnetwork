import { Children, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade'

const DIR_CLASS: Record<RevealDirection, string> = {
  up: 'reveal-up',
  down: 'reveal-down',
  left: 'reveal-left',
  right: 'reveal-right',
  fade: 'reveal-fade',
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  style,
  as: Tag = 'div',
  once = true,
}: {
  children: ReactNode
  direction?: RevealDirection
  delay?: number
  className?: string
  style?: CSSProperties
  as?: 'div' | 'section' | 'article' | 'li' | 'span'
  once?: boolean
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      className={`reveal ${DIR_CLASS[direction]} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  )
}

/** Stagger children with increasing delay */
export function RevealStagger({
  children,
  direction = 'up',
  step = 90,
  className = '',
}: {
  children: ReactNode[]
  direction?: RevealDirection
  step?: number
  className?: string
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} direction={direction} delay={i * step}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}

/** Stagger any number of top-level children (text blocks, headings, etc.). */
export function RevealGroup({
  children,
  direction = 'fade',
  step = 60,
  className = '',
}: {
  children: ReactNode
  direction?: RevealDirection
  step?: number
  className?: string
}) {
  const items = Children.toArray(children).filter((child) => child !== null && child !== false)
  if (items.length === 0) return null
  if (items.length === 1) {
    return (
      <Reveal direction={direction} className={className}>
        {items[0]}
      </Reveal>
    )
  }
  return (
    <div className={className}>
      {items.map((child, i) => (
        <Reveal key={i} direction={direction} delay={i * step}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}
