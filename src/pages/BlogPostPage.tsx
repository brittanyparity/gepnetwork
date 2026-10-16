import { useState, type FormEvent } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { GoldRule, SectionWrap } from '../components/PageChrome'
import { Reveal, RevealGroup } from '../components/Reveal'
import { BLOG_POSTS, getBlogPost, type BlogBlock } from '../content/blogPosts'
import { FOOTER_SOCIAL } from '../site'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) =>
        block.type === 'heading' ? (
          <h2
            key={`${block.text}-${i}`}
            className="uppercase leading-tight pt-4"
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: DISPLAY_TITLE_WEIGHT,
              fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
              color: 'var(--gep-text)',
            }}
          >
            {block.text}
          </h2>
        ) : (
          <p
            key={`${i}-${block.text.slice(0, 24)}`}
            className="text-base leading-relaxed font-normal"
            style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)', fontWeight: 500 }}
          >
            {block.text}
          </p>
        ),
      )}
    </div>
  )
}

function BlogCallout({ children }: { children: string }) {
  return (
    <aside
      className="my-10 pl-6 py-5 pr-6 border-l-4"
      style={{
        borderColor: 'var(--gep-accent)',
        background: 'color-mix(in srgb, var(--gep-accent) 8%, var(--gep-bg-alt))',
      }}
    >
      <p className="text-base leading-relaxed font-medium italic" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
        {children}
      </p>
    </aside>
  )
}

function BlogShare({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false)
  const url = typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : `/blog/${slug}`
  const encoded = encodeURIComponent(url)
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-4 py-8 border-y" style={{ borderColor: 'var(--gep-divider)' }}>
      <span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
        Share
      </span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs tracking-widest uppercase font-semibold hover:opacity-80 transition-opacity"
        style={{ fontFamily: FONT_BODY, color: 'var(--gep-accent)' }}
      >
        LinkedIn
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs tracking-widest uppercase font-semibold hover:opacity-80 transition-opacity"
        style={{ fontFamily: FONT_BODY, color: 'var(--gep-accent)' }}
      >
        Facebook
      </a>
      {FOOTER_SOCIAL.find((s) => s.id === 'instagram') ? (
        <a
          href={FOOTER_SOCIAL.find((s) => s.id === 'instagram')!.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase font-semibold hover:opacity-80 transition-opacity"
          style={{ fontFamily: FONT_BODY, color: 'var(--gep-accent)' }}
        >
          Instagram
        </a>
      ) : null}
      <button
        type="button"
        onClick={copyLink}
        className="text-xs tracking-widest uppercase font-semibold hover:opacity-80 transition-opacity"
        style={{ fontFamily: FONT_BODY, color: 'var(--gep-accent)' }}
      >
        {copied ? 'Link copied' : 'Copy link'}
      </button>
    </div>
  )
}

function BlogComments() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', comment: '' })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    fontFamily: FONT_BODY,
    background: 'var(--gep-bg)',
    color: 'var(--gep-text)',
    border: '1px solid var(--gep-divider)',
  }

  return (
    <div className="mt-12">
      <h2
        className="uppercase leading-tight mb-6"
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: DISPLAY_TITLE_WEIGHT,
          fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
          color: 'var(--gep-text)',
        }}
      >
        Comments
      </h2>
      {submitted ? (
        <p className="text-sm" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
          Thank you for your comment. Our team reviews submissions before they appear on the site.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-xl">
          <input
            required
            type="text"
            placeholder="Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 text-sm focus:outline-none"
            style={inputStyle}
          />
          <input
            required
            type="email"
            placeholder="Email *"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 text-sm focus:outline-none"
            style={inputStyle}
          />
          <textarea
            required
            rows={5}
            placeholder="Your comment *"
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
            className="w-full px-4 py-3 text-sm focus:outline-none resize-y"
            style={inputStyle}
          />
          <button
            type="submit"
            className="self-start px-8 py-3 text-xs tracking-widest uppercase font-semibold"
            style={{ background: 'var(--gep-accent)', color: 'var(--gep-accent-text)', fontFamily: FONT_BODY }}
          >
            Post Comment
          </button>
        </form>
      )}
    </div>
  )
}

function RecentPosts({ currentSlug }: { currentSlug: string }) {
  const others = BLOG_POSTS.filter((p) => p.slug !== currentSlug)

  return (
    <aside>
      <GoldRule />
      <h2
        className="uppercase leading-tight mb-6"
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: DISPLAY_TITLE_WEIGHT,
          fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
          color: 'var(--gep-text)',
        }}
      >
        Recent Posts
      </h2>
      <ul className="flex flex-col gap-5">
        {others.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className="flex gap-3 group">
              <img src={post.thumbnail} alt="" className="w-16 h-16 object-cover flex-shrink-0 opacity-90 group-hover:opacity-100" />
              <span>
                <span
                  className="block text-sm leading-snug font-medium group-hover:underline"
                  style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}
                >
                  {post.title}
                </span>
                <span className="block text-xs mt-1" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
                  {post.date}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="inline-block mt-8 text-xs tracking-widest uppercase font-semibold hover:opacity-80"
        style={{ fontFamily: FONT_BODY, color: 'var(--gep-accent)' }}
      >
        Contact GEP Network →
      </Link>
    </aside>
  )
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = slug ? getBlogPost(slug) : undefined
  if (!post) return <Navigate to="/" replace />

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16" style={{ background: 'var(--gep-bg)' }}>
        <img src={post.heroImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(23,20,15,0.55), var(--gep-bg))' }} />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Blog', to: '/blog/future-of-event-production' },
              { label: post.title },
            ]}
          />
          <Reveal direction="fade">
            <GoldRule />
            <p className="text-xs tracking-[0.22em] uppercase mb-3 font-medium" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
              {post.date}
            </p>
            <h1
              className="uppercase leading-tight max-w-4xl"
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: DISPLAY_TITLE_WEIGHT,
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                letterSpacing: '0.02em',
                color: 'var(--gep-text)',
              }}
            >
              {post.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <SectionWrap>
        <div className="grid lg:grid-cols-[1fr_min(320px,28%)] gap-14 max-w-6xl">
          <Reveal direction="up">
            <img src={post.heroImage} alt="" className="w-full aspect-[16/9] object-cover mb-10" />
            <BlogBody blocks={post.blocks} />
            <BlogCallout>{post.callout}</BlogCallout>
            <BlogShare title={post.title} slug={post.slug} />
            <BlogComments />
          </Reveal>
          <Reveal direction="left" delay={100}>
            <RecentPosts currentSlug={post.slug} />
          </Reveal>
        </div>
      </SectionWrap>

      <SectionWrap alt>
        <RevealGroup direction="fade" step={55} className="max-w-3xl mx-auto text-center">
          <h2
            className="uppercase leading-tight mb-4"
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: DISPLAY_TITLE_WEIGHT,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: 'var(--gep-text)',
            }}
          >
            Planning Your Next Production?
          </h2>
          <p className="text-base mb-6" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
            Talk with GEP Network about tours, festivals, corporate events, and storage.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-xs tracking-widest uppercase font-semibold border transition-all duration-200"
            style={{
              fontFamily: FONT_BODY,
              borderColor: 'var(--gep-accent)',
              color: 'var(--gep-accent)',
              background: 'transparent',
            }}
          >
            Contact Us
          </Link>
        </RevealGroup>
      </SectionWrap>
    </>
  )
}
