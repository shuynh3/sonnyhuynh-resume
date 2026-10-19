import type { ReactNode } from 'react'
import { MarkGithubIcon } from '@primer/octicons-react'
import { Button, Card, Link, SiteNav, Tag, ThemeToggle } from '@sonnyhuynh/ui'
import portrait from './assets/photos/self_portrait.webp'

const RESUME_PDF = '/sonny-huynh-resume.pdf'
const EMAIL = 'sonny.huynh.dev@gmail.com'
const GITHUB = 'https://github.com/shuynh3'
const LINKEDIN = 'https://linkedin.com/in/sonny-huynh-0'
const PHOTOS = 'https://photos.sonnyhuynh.dev'

const now = [
  { label: 'building', value: 'Personal projects using React.' },
  { label: 'shooting', value: 'Urban portraits and travel photos.' },
]

const gear = [
  { label: 'development', value: 'Macbook Air' },
  { label: 'camera', value: 'Sony A6100' },
  { label: 'lens', value: 'Sigma 28–70mm f/2.8' },
  { label: 'flash', value: 'Godox V480s' },
]

const work = [
  {
    dates: 'nov 2025 — now',
    role: 'Software Engineer II at Carvana',
    summary: "Backend services for Carvana's iOS app.",
    tags: ['.net', 'kafka', 'kubernetes'],
  },
  {
    dates: 'jan 2024 — apr 2025',
    role: 'Senior Software Engineer at StrongMind',
    summary: 'AI-powered education software and tooling.',
    tags: ['rails', 'aws', 'openai'],
  },
  {
    dates: 'may 2021 — dec 2023',
    role: 'Software Engineer at StrongMind',
    summary: 'Backend services for online course content.',
    tags: ['.net', 'python', 'azure'],
  },
]

const toolbox = [
  { label: 'languages', tags: ['ruby', 'javascript', 'python', 'c#'] },
  { label: 'frameworks', tags: ['rails', '.net', 'django', 'flask'] },
  {
    label: 'infra',
    tags: ['aws', 'azure', 'kubernetes', 'pulumi', 'terraform', 'github actions', 'azure devops', 'heroku'],
  },
]

const projects = [
  { meta: '2026 · react · vite · rails', title: 'sonnyhuynh.dev', href: '#', text: 'This site and its photo journal.' },
  {
    meta: 'react · node.js · gatsby',
    title: 'PayPal static-site-generator',
    href: '#',
    text: 'A Gatsby plugin for building online stores with PayPal checkout.',
  },
]

// Labelled value: mono label over a line of text. Used by the Now/Gear card.
function Item({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-meta text-ink-muted">{label}</span>
      <span className="text-body leading-6">{children}</span>
    </div>
  )
}

function Heading({ children }: { children: ReactNode }) {
  return <h2 className="m-0 font-mono text-heading font-normal">{children}</h2>
}

// A section on its own surface panel. The tonal step from the page is the separator.
function Panel({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`reveal flex flex-col gap-4 bg-surface px-4 py-6 sm:gap-6 sm:p-8 ${className}`}>
      {children}
    </section>
  )
}

// Stand-in for a photo until real images are added.
function PhotoSlot({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${label}`}
      className={`flex items-end bg-surface-muted p-2 font-mono text-meta text-ink-muted ${className}`}
    >
      [{label}]
    </div>
  )
}

function App() {
  return (
    <>
      <SiteNav current="resume">
        <ThemeToggle />
      </SiteNav>
      <main className="mx-auto flex max-w-[1024px] flex-col gap-2 px-2 pt-12 pb-12 sm:gap-4 sm:px-8 sm:pt-24 sm:pb-16">
        {/* Hero */}
        <section className="grid items-end gap-6 px-2 pb-10 md:grid-cols-[minmax(0,1fr)_280px] md:gap-16 md:px-8 md:pb-16">
          <div className="flex flex-col gap-4">
            <p className="rise m-0 font-mono text-meta text-ink-muted">Hi, I'm</p>
            <h1 className="rise d1 m-0 font-mono text-[40px] leading-[44px] font-normal tracking-[-0.03em] md:text-[64px] md:leading-[64px]">
              Sonny Huynh.
            </h1>
            <p className="rise d2 m-0 max-w-[560px] text-[18px] leading-7 md:text-[20px] md:leading-8">
              I'm a software engineer based in Chandler, Arizona. When I'm not at a keyboard, you can find a camera in
              my hands.
            </p>
            <p className="rise d3 m-0 max-w-[560px] text-body text-ink-muted">
              Five years building web applications with Ruby on Rails and .NET.
            </p>
            <div className="rise d3 flex flex-wrap gap-4 font-mono text-meta">
              <Link href={GITHUB} external muted>
                <MarkGithubIcon size={14} className="mr-1.5 -mt-0.5 inline-block align-middle" />
                github
              </Link>
              <Link href={LINKEDIN} external muted>
                linkedin
              </Link>
              <Link href={`mailto:${EMAIL}`} muted>
                email
              </Link>
              <Link href={PHOTOS} muted>
                photos
              </Link>
            </div>
            <div className="rise d4 flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap">
              <Button variant="primary" href="#say-hi" className="min-h-11 sm:min-h-0">
                Say hi
              </Button>
              <Button href={RESUME_PDF} className="min-h-11 sm:min-h-0">
                Download resume
              </Button>
            </div>
          </div>
          {/* Polaroid-style frame: eucalyptus mat with a deeper bottom edge around a square photo.
              The date stamp mimics a film camera's orange imprint, so it is the one color outside the tokens. */}
          <figure className="rise relative order-first m-0 w-[112px] rotate-2 bg-eucalyptus p-2 pb-8 md:order-none md:w-[280px] md:p-4 md:pb-0">
            {/* Thumbtack pinning the polaroid to the page. */}
            <span
              aria-hidden="true"
              className="absolute -top-1.5 left-1/2 z-10 size-3 -translate-x-1/2 rounded-full bg-accent"
            />
            <div className="relative">
              <img
                src={portrait}
                alt="Sonny Huynh in a black shirt and tie"
                width={560}
                height={560}
                className="block aspect-square w-full object-cover"
              />
              <time
                dateTime="2026-10-12"
                className="absolute top-1 left-2 font-mono text-meta text-[#ff9a3c] [text-shadow:0_0_4px_rgb(255_120_40/0.6)] md:top-2 md:left-3"
              >
                10 12 '26
              </time>
            </div>
            <figcaption className="hidden h-16 items-end justify-end pb-4 whitespace-nowrap font-mono text-meta text-on-accent md:flex">
              50mm 1/125 f/2.8 ISO100
            </figcaption>
          </figure>
        </section>

        {/* Now and gear */}
        <section className="reveal flex flex-col gap-8 bg-surface px-4 py-6 sm:p-8">
          <div className="grid gap-3 md:grid-cols-2 md:gap-6">
            {now.map((i) => (
              <Item key={i.label} label={i.label}>
                {i.value}
              </Item>
            ))}
          </div>
          <div className="grid gap-3 md:grid-cols-4 md:gap-6">
            {gear.map((i) => (
              <Item key={i.label} label={i.label}>
                {i.value}
              </Item>
            ))}
          </div>
        </section>

        {/* Off the clock */}
        <section className="flex flex-col gap-2 pt-8 pb-2 sm:gap-4 sm:px-8 sm:pt-12 sm:pb-4">
          <h2 className="reveal m-0 mx-2 mb-2 font-mono text-heading font-normal sm:mx-0 sm:mb-0">Off the clock</h2>
          <div className="grid gap-2 md:grid-cols-3 md:auto-rows-[220px] md:gap-4">
            <a
              href={PHOTOS}
              className="reveal tile flex flex-col gap-4 bg-sage p-4 text-on-accent no-underline md:col-span-2 md:row-span-2 md:gap-5 md:p-6"
            >
              <span className="flex justify-between gap-4 font-mono text-meta">
                <span>01 · photography</span>
                <span>photos.sonnyhuynh.dev ↗</span>
              </span>
              <span className="grid min-h-0 grow grid-cols-[3fr_2fr] grid-rows-[120px_120px] gap-1.5 md:grid-rows-2 md:gap-2">
                <PhotoSlot label="portrait · city" className="row-span-2" />
                <PhotoSlot label="friends · street" />
                <PhotoSlot label="candid · night" />
              </span>
              <span className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
                <span className="max-w-[440px] text-[20px] leading-[26px] font-medium md:text-[22px] md:leading-7">
                  People in the city &amp; Travel photos.
                </span>
                <span className="font-mono text-meta">sony a6100 · sigma 28–70mm f/2.8</span>
              </span>
            </a>
            <div className="reveal tile flex flex-col gap-4 bg-eucalyptus p-4 text-on-accent md:row-span-2 md:gap-5 md:p-6">
              <span className="font-mono text-meta">02 · travel</span>
              <PhotoSlot label="travel · sight" className="h-40 md:h-auto md:grow" />
              <span className="text-title">traveling with a camera</span>
            </div>
          </div>
        </section>

        {/* Work */}
        <Panel className="mt-6 sm:mt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <Heading>Work</Heading>
            <Link href={RESUME_PDF}>Full resume (PDF)</Link>
          </div>
          <div className="flex flex-col gap-2">
            {work.map((w) => (
              <div
                key={w.role}
                className="grid items-baseline gap-1 bg-surface-muted p-4 md:grid-cols-[160px_minmax(0,1fr)_auto] md:gap-4"
              >
                <span className="font-mono text-meta text-ink-muted">{w.dates}</span>
                <span className="flex flex-col gap-1">
                  <span className="text-title">{w.role}</span>
                  <span className="text-small text-ink-muted">{w.summary}</span>
                </span>
                <span className="flex gap-1 pt-1 md:pt-0">
                  {w.tags.map((t) => (
                    <Tag key={t} tone="sage">
                      {t}
                    </Tag>
                  ))}
                </span>
              </div>
            ))}
          </div>
          <div className="grid items-baseline gap-x-4 gap-y-3 px-1 pt-2 md:grid-cols-[160px_minmax(0,1fr)] md:px-4">
            {toolbox.map((g) => (
              <div key={g.label} className="contents">
                <span className="font-mono text-meta text-ink-muted md:leading-[22px]">{g.label}</span>
                <span className="-mt-1.5 flex flex-wrap gap-1 md:mt-0">
                  {g.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </Panel>

        {/* Education */}
        <Panel>
          <Heading>Education</Heading>
          <div className="grid items-baseline gap-1 bg-surface-muted p-4 md:grid-cols-[160px_minmax(0,1fr)] md:gap-4">
            <span className="font-mono text-meta text-ink-muted">2020</span>
            <span className="flex flex-col gap-1">
              <span className="text-title">B.S. Computer Science</span>
              <span className="text-small text-ink-muted">
                Arizona State University - Ira A. Fulton Schools of Engineering
              </span>
            </span>
          </div>
        </Panel>

        {/* Projects */}
        <Panel>
          <Heading>Things I've made</Heading>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <Card key={p.title} href={p.href} meta={p.meta} title={p.title}>
                <p>{p.text}</p>
              </Card>
            ))}
          </div>
        </Panel>

        {/* Say hi */}
        <section
          id="say-hi"
          className="reveal mt-6 flex flex-col gap-4 bg-pistachio px-4 py-8 text-on-accent sm:mt-8 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-6 md:px-8 md:py-12"
        >
          <div className="flex flex-col gap-2">
            <h2 className="m-0 font-mono text-[28px] leading-8 font-normal tracking-[-0.02em] md:text-[32px] md:leading-9">
              Say hi.
            </h2>
            <p className="m-0 text-body">Work, photos, or a travel recommendation. All welcome.</p>
          </div>
          <Button href={`mailto:${EMAIL}`} className="min-h-11 md:min-h-0">
            {EMAIL}
          </Button>
        </section>

        <footer className="flex flex-col-reverse gap-2 px-2 pt-6 font-mono text-meta text-ink-muted md:flex-row md:flex-wrap md:justify-between md:gap-4 md:px-8">
          <span>© 2026 Sonny Huynh</span>
          <span className="flex gap-4">
            <Link href={GITHUB} muted>
              github
            </Link>
            <Link href={LINKEDIN} muted>
              linkedin
            </Link>
            <Link href={PHOTOS} muted>
              photos
            </Link>
          </span>
        </footer>
      </main>
    </>
  )
}

export default App
