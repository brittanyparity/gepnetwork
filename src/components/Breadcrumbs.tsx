import { Link } from 'react-router-dom'
import { FONT_BODY } from '../site'

export type BreadcrumbItem = {
  label: string
  to?: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-4 page-hero-fade page-hero-fade-delay-1">
      <ol
        className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] tracking-[0.14em] uppercase"
        style={{ fontFamily: FONT_BODY }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2 min-w-0">
              {index > 0 ? (
                <span aria-hidden className="opacity-45 shrink-0">
                  /
                </span>
              ) : null}
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="transition-colors hover:opacity-100 truncate max-w-[14rem] sm:max-w-none"
                  style={{ color: 'inherit', opacity: 0.72 }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="truncate max-w-[16rem] sm:max-w-none"
                  style={{ opacity: isLast ? 1 : 0.72 }}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
