import type { ReactNode } from 'react'
import { Button, Card, Link, SiteNav, Tag } from '@sonnyhuynh/ui'

// A section is a surface panel on the page: the tonal step separates it, no rules.
function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4 bg-surface px-4 py-6 sm:p-8">
      <h2 className="m-0 font-mono text-heading font-normal">{title}</h2>
      {children}
    </section>
  )
}

function App() {
  return (
    <>
      <SiteNav current="resume" />
      <main className="mx-auto flex max-w-[744px] flex-col gap-2 px-2 pt-8 pb-16 sm:gap-4 sm:px-8">
        <section className="flex flex-col gap-4 px-2 pb-10 sm:px-8 sm:pb-12">
          <p className="m-0 font-mono text-meta text-ink-muted">location · open to work</p>
          <h1 className="m-0 font-mono text-display font-normal">Sonny Huynh</h1>
          <p className="m-0 text-body text-ink-muted">
            One or two sentences about what you do and what you're looking for.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Button variant="primary" href="mailto:hello@sonnyhuynh.dev">Contact</Button>
            <Button href="/resume.pdf">Download resume</Button>
          </div>
        </section>

        <Panel title="Experience">
          <article className="flex flex-col gap-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="m-0 text-title">Role · Company</h3>
              <span className="font-mono text-meta text-ink-muted">2022 — 2025</span>
            </div>
            <p className="m-0 text-body text-ink-muted">
              What you did and why it mattered, with a <Link href="#">link</Link> where useful.
            </p>
            <div className="flex flex-wrap gap-1">
              <Tag>react</Tag>
              <Tag>rails</Tag>
            </div>
          </article>
        </Panel>

        <Panel title="Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card href="#" meta="2026 · react · vite" title="Project name" footer={<Tag tone="sage" dot>live</Tag>}>
              <p>One-line description.</p>
            </Card>
            <Card meta="2025 · rails" title="Project name" footer={<Tag tone="eucalyptus">photography</Tag>}>
              <p>One-line description.</p>
            </Card>
          </div>
        </Panel>

        <footer className="flex flex-wrap justify-between gap-4 bg-surface-muted px-4 py-4 font-mono text-meta text-ink-muted sm:px-8">
          <span>© 2026 Sonny Huynh</span>
          <span className="flex gap-4">
            <Link href="#" muted>github</Link>
            <Link href="#" muted>linkedin</Link>
            <Link href="mailto:hello@sonnyhuynh.dev" muted>email</Link>
          </span>
        </footer>
      </main>
    </>
  )
}

export default App
