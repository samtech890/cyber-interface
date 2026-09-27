import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: '01 / HOME', href: '#home' },
  { label: '02 / WORK', href: '#work' },
  { label: '03 / SERVICES', href: '#services' },
  { label: '04 / ABOUT', href: '#about' },
]

const marqueeItems = [
  'WEB DEVELOPMENT',
  '/',
  'APP DEVELOPMENT',
  '/',
  'AI SYSTEMS',
  '/',
  'AUTOMATION',
  '/',
  'DIGITAL PRODUCTS',
]

const workItems = [
  {
    number: 'PROJECT_01',
    name: 'Nova Commerce',
    description: 'E-commerce platform',
    tags: ['UX', 'SHOPPING', 'REACT'],
  },
  {
    number: 'PROJECT_02',
    name: 'Orbit AI',
    description: 'AI product interface',
    tags: ['AI', 'UX', 'DESIGN'],
  },
  {
    number: 'PROJECT_03',
    name: 'Grid Labs',
    description: 'Technology company website',
    tags: ['BRAND', 'WEB', 'CMS'],
  },
]

const services = [
  {
    number: '01',
    title: 'WEB DEVELOPMENT',
    description: 'Modern responsive websites and web applications.',
  },
  {
    number: '02',
    title: 'APP DEVELOPMENT',
    description: 'Clean interfaces and functional digital products.',
  },
  {
    number: '03',
    title: 'AI INTEGRATION',
    description: 'AI-powered features and intelligent user experiences.',
  },
  {
    number: '04',
    title: 'BUG FIXING',
    description: 'Finding and fixing frontend and application issues.',
  },
  {
    number: '05',
    title: 'AUTOMATION',
    description: 'Simple digital workflows that reduce repetitive work.',
  },
]

const process = [
  { number: '01', title: 'DISCOVER', description: 'Understand the idea and requirements.' },
  { number: '02', title: 'BUILD', description: 'Design and develop the frontend experience.' },
  { number: '03', title: 'LAUNCH', description: 'Test, refine, and prepare the final product.' },
]

const terminalSkills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'AI', 'Automation']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(7,11,13,0.8)] backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-2 text-[11px] font-medium tracking-[0.24em] text-white uppercase">
            <span className="text-[var(--muted)]">//</span>
            <span>DEV.SYSTEM</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] font-medium tracking-[0.24em] text-[var(--muted)] transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/[0.02] px-4 py-2 text-[10px] font-medium tracking-[0.22em] uppercase text-white transition hover:border-white/20 hover:bg-white/[0.04]"
            >
              CONTACT
              <ArrowUpRight size={14} />
            </a>
            <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_rgba(122,231,200,0.9)]" />
              SYSTEM ONLINE
            </div>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white/[0.02] text-white md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[var(--line)] bg-[var(--panel)] md:hidden">
            <nav className="mx-auto flex max-w-[1320px] flex-col gap-3 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[10px] tracking-[0.24em] text-[var(--muted)] uppercase"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="mt-2 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white"
                onClick={() => setMobileOpen(false)}
              >
                CONTACT <ArrowUpRight size={14} />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden border-b border-[var(--line)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,231,200,0.08),transparent_40%)]" />
          <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="relative z-10"
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/[0.02] px-3 py-1.5 text-[10px] tracking-[0.24em] uppercase text-[var(--muted)]">
                <span className="text-[var(--accent)]">&gt;</span>
                initializing digital_system...
              </div>

              <h1 className="max-w-[660px] text-5xl font-medium leading-[0.96] tracking-[-0.08em] text-white sm:text-6xl lg:text-[6.2rem]">
                BUILDING
                <br />
                <span className="text-[var(--accent)]">DIGITAL SYSTEMS</span>
                <br />
                FOR THE MODERN WEB.
              </h1>

              <p className="mt-8 max-w-[610px] text-base leading-7 text-[var(--muted)] sm:text-lg">
                Full-stack development, modern web experiences, and digital products built with clean technology.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-[10px] font-medium tracking-[0.22em] uppercase text-[#05130d] transition hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(122,231,200,0.2)]"
                >
                  VIEW WORK
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white/[0.02] px-5 py-3 text-[10px] font-medium tracking-[0.22em] uppercase text-white transition hover:border-white/20 hover:bg-white/[0.04]"
                >
                  CONTACT
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[var(--muted)]">
                <span className="text-[var(--accent)]">&gt;</span>
                <span>status: ready_to_build</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative z-10"
            >
              <div className="terminal-shell mx-auto max-w-[520px] rounded-[24px] border border-[var(--line)] bg-[rgba(10,16,18,0.9)] p-0 shadow-[0_30px_80px_rgba(2,6,7,0.6)]">
                <div className="flex items-center gap-3 border-b border-[var(--line)] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff7a7a]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f6d75d]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#7ae7c8]" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">
                    <span className="text-[var(--text)]">●</span>
                    <span>DEV.SYSTEM</span>
                  </div>
                </div>

                <div className="space-y-1 p-5 font-mono text-[11px] leading-6 text-[var(--text)] sm:text-[12px]">
                  <div className="text-[var(--muted)]">$ npm run build</div>
                  <div className="text-[var(--muted)]">&gt; compiling interface...</div>
                  <div className="text-[var(--muted)]">&gt; optimizing components...</div>
                  <div className="text-[var(--muted)]">&gt; checking system...</div>
                  <div className="text-[var(--accent)]">&gt; build complete ✓</div>
                  <div className="pt-3 text-[var(--muted)]">$ system_status</div>
                  <div className="pt-1 text-[15px] font-medium tracking-[0.28em] text-white uppercase">ONLINE</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="overflow-hidden border-b border-[var(--line)] bg-[rgba(255,255,255,0.01)] py-3">
          <div className="marquee-track flex min-w-max items-center gap-8 whitespace-nowrap text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--muted)]">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="inline-flex items-center gap-8">
                {item}
                <span className="text-[var(--accent)]">/</span>
              </span>
            ))}
          </div>
        </div>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="border-b border-[var(--line)]"
        >
          <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
            <div>
              <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--muted)]">01 / ABOUT</p>
              <h2 className="mt-8 max-w-[420px] text-4xl font-medium leading-[0.96] tracking-[-0.08em] text-white sm:text-5xl">
                TECHNOLOGY
                <br />
                WITHOUT THE
                <br />
                COMPLEXITY.
              </h2>
            </div>

            <div className="space-y-8">
              <p className="max-w-[640px] text-base leading-7 text-[var(--muted)] sm:text-lg">
                We build modern websites, applications, and digital experiences that are simple to use, fast, and designed around real business needs.
              </p>

              <div className="grid max-w-[540px] gap-4 border border-[var(--line)] bg-white/[0.02] p-5 sm:grid-cols-3">
                <div>
                  <p className="mb-2 text-[10px] tracking-[0.24em] uppercase text-[var(--muted)]">SYSTEM</p>
                  <p className="text-sm text-white">WEB / APP / AI</p>
                </div>
                <div>
                  <p className="mb-2 text-[10px] tracking-[0.24em] uppercase text-[var(--muted)]">STACK</p>
                  <p className="text-sm text-white">REACT / NODE / NEXT</p>
                </div>
                <div>
                  <p className="mb-2 text-[10px] tracking-[0.24em] uppercase text-[var(--muted)]">STATUS</p>
                  <p className="text-sm text-white">AVAILABLE</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="work"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="border-b border-[var(--line)]"
        >
          <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--muted)]">02 / SELECTED WORK</p>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.06em] text-white sm:text-5xl">RECENT BUILDS</h2>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {workItems.map((project) => (
                <motion.article
                  key={project.number}
                  whileHover={{ y: -4 }}
                  className="group rounded-[24px] border border-[var(--line)] bg-white/[0.01] p-4 transition-colors hover:border-white/20"
                >
                  <div className="mb-5 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">
                    <span>{project.number}</span>
                    <span className="inline-flex items-center gap-1 text-[var(--accent)]">
                      VIEW PROJECT
                      <ArrowUpRight size={12} />
                    </span>
                  </div>

                  <div className="relative mb-5 overflow-hidden rounded-[18px] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4">
                    <div className="aspect-[16/10] overflow-hidden rounded-[12px] border border-[var(--line)] bg-[radial-gradient(circle_at_top,rgba(122,231,200,0.25),rgba(12,17,19,0.92)_42%)] p-3 transition duration-500 group-hover:scale-[1.03]">
                      <div className="grid h-full grid-cols-[1fr_0.7fr] gap-3">
                        <div className="rounded-[10px] border border-[var(--line)] bg-[rgba(255,255,255,0.03)]" />
                        <div className="space-y-3">
                          <div className="h-12 rounded-[10px] border border-[var(--line)] bg-[rgba(122,231,200,0.12)]" />
                          <div className="h-20 rounded-[10px] border border-[var(--line)] bg-[rgba(255,255,255,0.04)]" />
                          <div className="h-16 rounded-[10px] border border-[var(--line)] bg-[rgba(255,255,255,0.03)]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-medium tracking-[-0.05em] text-white">{project.name}</h3>
                    <ArrowRight size={18} className="text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  </div>

                  <p className="mt-2 text-sm text-[var(--muted)]">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--line)] bg-white/[0.02] px-2 py-1 text-[10px] tracking-[0.18em] uppercase text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="services"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="border-b border-[var(--line)]"
        >
          <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--muted)]">03 / SERVICES</p>
            </div>

            <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {services.map((service) => (
                <li key={service.number} className="group flex flex-col gap-4 py-6 transition md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-[11px] tracking-[0.22em] uppercase text-[var(--muted)]">{service.number}</span>
                    <div>
                      <p className="text-xl font-medium tracking-[-0.04em] text-white md:text-2xl">{service.title}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <p className="max-w-[560px] text-sm leading-6 text-[var(--muted)] md:text-base">{service.description}</p>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] bg-white/[0.02] text-[var(--accent)] opacity-0 transition duration-300 group-hover:opacity-100">
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="border-b border-[var(--line)]"
        >
          <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="terminal-shell overflow-hidden rounded-[26px] border border-[var(--line)] bg-[rgba(8,12,14,0.9)]">
                <div className="border-b border-[var(--line)] px-5 py-3 text-[10px] tracking-[0.28em] uppercase text-[var(--muted)]">
                  TERMINAL / INTERACTIVE
                </div>
                <div className="space-y-3 p-5 font-mono text-[11px] leading-6 text-[var(--muted)] sm:text-[12px]">
                  <div className="text-[var(--text)]">$ whoami</div>
                  <div>&gt; digital_builder</div>
                  <div className="text-[var(--text)]">$ skills</div>
                  {terminalSkills.map((skill) => (
                    <div key={skill}>&gt; {skill}</div>
                  ))}
                  <div className="text-[var(--text)]">$ status</div>
                  <div className="text-[var(--accent)]">&gt; AVAILABLE_FOR_PROJECTS</div>
                  <div className="flex items-center gap-1 pt-2 text-[var(--text)]">
                    <span className="terminal-cursor inline-block h-4 w-2 bg-[var(--accent)]" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--muted)]">TECH STACK</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[22px] border border-[var(--line)] bg-white/[0.02] p-4">
                    <Code2 className="mb-3 text-[var(--accent)]" size={20} />
                    <p className="mb-2 text-[10px] tracking-[0.24em] uppercase text-[var(--muted)]">BUILD</p>
                    <p className="text-base text-white">Frontend systems</p>
                  </div>
                  <div className="rounded-[22px] border border-[var(--line)] bg-white/[0.02] p-4">
                    <Bot className="mb-3 text-[var(--accent)]" size={20} />
                    <p className="mb-2 text-[10px] tracking-[0.24em] uppercase text-[var(--muted)]">AI</p>
                    <p className="text-base text-white">Conversational tools</p>
                  </div>
                  <div className="rounded-[22px] border border-[var(--line)] bg-white/[0.02] p-4">
                    <Cpu className="mb-3 text-[var(--accent)]" size={20} />
                    <p className="mb-2 text-[10px] tracking-[0.24em] uppercase text-[var(--muted)]">SYSTEM</p>
                    <p className="text-base text-white">Backend logic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="border-b border-[var(--line)]"
        >
          <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--muted)]">ABOUT / PROCESS</p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {process.map((step) => (
                <div key={step.number} className="rounded-[22px] border border-[var(--line)] bg-white/[0.02] p-5">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[var(--muted)]">{step.number}</span>
                    <Check size={14} className="text-[var(--accent)]" />
                  </div>
                  <p className="mb-4 text-[10px] tracking-[0.24em] uppercase text-[var(--muted)]">{step.title}</p>
                  <p className="text-base leading-7 text-[var(--muted)]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="cta"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="border-b border-[var(--line)]"
        >
          <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8">
            <div className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(122,231,200,0.04),rgba(255,255,255,0.02))] p-8 sm:p-10">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--muted)]">&gt; ready_to_start?</p>
              <h2 className="mt-6 max-w-[700px] text-4xl font-medium leading-[0.96] tracking-[-0.08em] text-white sm:text-6xl">
                LET&apos;S BUILD
                <br />
                SOMETHING.
              </h2>
              <p className="mt-6 max-w-[520px] text-base leading-7 text-[var(--muted)] sm:text-lg">
                Have an idea, website, or application that needs to be built?
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="mailto:hello@dev.system"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-[10px] font-medium tracking-[0.22em] uppercase text-[#05130d] transition hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(122,231,200,0.2)]"
                >
                  START A PROJECT
                  <ArrowUpRight size={16} />
                </a>
                <span className="terminal-cursor inline-block h-5 w-2 bg-[var(--accent)]" />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="mx-auto max-w-[1320px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-t border-[var(--line)] pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.24em] uppercase text-white">
            <span className="text-[var(--muted)]">//</span>
            <span>DEV.SYSTEM</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_rgba(122,231,200,0.9)]" />
            <span>STATUS: ONLINE</span>
          </div>

          <div className="flex items-center gap-6 text-[10px] tracking-[0.22em] uppercase text-[var(--muted)]">
            <a href="https://github.com" className="transition hover:text-white">GITHUB</a>
            <a href="https://linkedin.com" className="transition hover:text-white">LINKEDIN</a>
            <a href="https://x.com" className="transition hover:text-white">X</a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[var(--line)] pt-5 text-center text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DEV.SYSTEM</p>
          <p>ALL SYSTEMS OPERATIONAL.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
