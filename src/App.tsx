import { Button, Card, Link, SiteNav, Tag } from '@sonnyhuynh/ui'

function App() {
  return (
    <>
      <SiteNav current="resume" />
      <main className="mx-auto max-w-[680px] px-4 pt-8 pb-16 sm:px-8">
        <p className="font-mono text-meta text-ink-muted">location · open to work</p>
        <h1 className="mt-2 mb-4 font-mono text-display font-normal">Sonny Huynh</h1>
        <p className="text-body text-ink-muted">One or two sentences about what you do and what you're looking for.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button variant="primary" href="mailto:hello@sonnyhuynh.dev">Contact</Button>
          <Button href="/resume.pdf">Download resume</Button>
        </div>

        <section className="mt-16">
          <h2 className="border-b border-ink pb-2 font-mono text-heading font-normal">Experience</h2>
          <div className="mt-8 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-title">Role · Company</h3>
            <span className="font-mono text-meta text-ink-muted">2022 — 2025</span>
          </div>
          <p className="mt-2 text-body text-ink-muted">
            What you did and why it mattered, with a <Link href="#">link</Link> where useful.
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            <Tag>react</Tag>
            <Tag>rails</Tag>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="border-b border-ink pb-2 font-mono text-heading font-normal">Projects</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card href="#" meta="2026 · react · vite" title="Project name" footer={<Tag tone="sage" dot>live</Tag>}>
              <p>One-line description.</p>
            </Card>
            <Card meta="2025 · rails" title="Project name" footer={<Tag tone="eucalyptus">photography</Tag>}>
              <p>One-line description.</p>
            </Card>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
