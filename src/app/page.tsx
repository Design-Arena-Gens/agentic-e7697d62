"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Network", href: "#network" },
  { label: "Pricing", href: "#pricing" },
  { label: "Security", href: "#security" },
  { label: "Support", href: "#support" },
];

const features = [
  {
    title: "One-Tap Secure Access",
    description:
      "Connect to the fastest server in seconds with smart routing that adapts to your location and bandwidth.",
    highlight: "Auto-Selection",
  },
  {
    title: "Quantum-Safe Encryption",
    description:
      "Shield your data with ChaCha20-Poly1305, rotating keys, and forward secrecy designed for post-quantum resilience.",
    highlight: "256-bit keys",
  },
  {
    title: "Streaming Unlocked",
    description:
      "Access geo-locked libraries across Netflix, Hulu, BBC iPlayer, and more with streaming-optimized nodes.",
    highlight: "Global Catalogs",
  },
  {
    title: "Double-Hop Routing",
    description:
      "Route traffic through two hardened relay locations for an additional layer of anonymity without speed drops.",
    highlight: "Dual Relay",
  },
  {
    title: "Always-On Kill Switch",
    description:
      "Block all network activity the instant a VPN tunnel is interrupted to prevent accidental exposure.",
    highlight: "Failsafe",
  },
  {
    title: "Trusted No-Logs Policy",
    description:
      "Independently audited infrastructure built on RAM-only servers - your activity is never stored or sold.",
    highlight: "Audited",
  },
];

const coverage = [
  { region: "North America", latency: "14 ms median", cities: 28 },
  { region: "Europe", latency: "18 ms median", cities: 33 },
  { region: "Asia Pacific", latency: "22 ms median", cities: 21 },
  { region: "South America", latency: "34 ms median", cities: 12 },
  { region: "Middle East & Africa", latency: "41 ms median", cities: 9 },
];

const enterpriseFeatures = [
  "Dedicated gateways with static IPs",
  "SAML SSO & Okta support",
  "Centralized account provisioning",
  "Split tunneling policies",
  "Private WireGuard peers",
  "24/7 SOC-2 compliant support",
];

const pricingPlans = [
  {
    tier: "Essential",
    monthly: 11,
    yearly: 7,
    description: "Ideal for personal browsing and streaming on up to 5 devices.",
    benefits: [
      "5000+ global servers",
      "Streaming-optimized routes",
      "Malware & tracker shield",
      "24/7 chat support",
    ],
    emphasized: false,
  },
  {
    tier: "Pro",
    monthly: 16,
    yearly: 10,
    description: "Best for power users who demand maximum performance and privacy.",
    benefits: [
      "Everything in Essential",
      "Dedicated IP add-on",
      "Double-hop routing",
      "Smart home router support",
      "Advanced automation API",
    ],
    emphasized: true,
  },
  {
    tier: "Teams",
    monthly: 22,
    yearly: 15,
    description: "Secure remote workforces with centralized management and audits.",
    benefits: [
      "10 admin seats included",
      "Device posture enforcement",
      "Audit-ready session logs",
      "Priority escalation channel",
    ],
    emphasized: false,
  },
];

const testimonials = [
  {
    name: "Mina Alvarez",
    role: "Travel Photographer",
    quote:
      "I upload and stream from cafes around the world. LumenVPN keeps my footage safe and my connections blazing fast.",
  },
  {
    name: "Daniel Kim",
    role: "Security Engineer",
    quote:
      "The transparency reports and RAM-only servers are the gold standard. Finally, a VPN I can recommend to colleagues.",
  },
  {
    name: "Aanya Patel",
    role: "Operations Lead, Nimbus Cloud",
    quote:
      "Dedicated gateways and SSO made onboarding our remote teams effortless. Support turnaround is phenomenal.",
  },
];

const faqs = [
  {
    question: "Which devices are supported?",
    answer:
      "Install native apps for iOS, Android, macOS, Windows, and Linux. Router firmware covers Apple TV, PlayStation, and any smart device on your network.",
  },
  {
    question: "Do you log any activity?",
    answer:
      "No. Our infrastructure runs on RAM-only servers with disk encryption disabled. Independent audits validate that we cannot store or correlate traffic.",
  },
  {
    question: "What protocols can I use?",
    answer:
      "WireGuard with post-quantum key exchange comes standard, and OpenVPN UDP/TCP is available for legacy compatibility. All ports are forwarded through our global mesh.",
  },
  {
    question: "Can I try it risk-free?",
    answer:
      "Yes. Every plan includes a 30-day money-back guarantee. Cancel anytime inside the dashboard or with support via live chat.",
  },
];

const devices = [
  "macOS",
  "Windows",
  "iOS",
  "Android",
  "Linux",
  "Apple TV",
  "Smart TVs",
  "PlayStation",
  "Xbox",
  "ChromeOS",
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L8.5 11.086l6.543-6.543a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M11.293 3.293a1 1 0 011.414 0l5 5a.997.997 0 01.103.123.996.996 0 01.083.123c.026.052.045.105.058.16.007.03.01.06.014.091A1.014 1.014 0 0118 9v2a1 1 0 11-2 0V9.414l-2.293 2.293a1 1 0 01-1.414-1.414L13.586 8H3a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l1.5 5.25L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-.75L12 3z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 17l.75 2.5L22 20l-2.25.5L19 23l-.75-2.5L16 20l2.25-.5L19 17zM4 15l.75 2.5L7 18l-2.25.5L4 21l-.75-2.5L1 18l2.25-.5L4 15z"
      />
    </svg>
  );
}

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly",
  );

  const sortedDevices = useMemo(
    () =>
      devices.slice().sort((a, b) => {
        if (a.length === b.length) {
          return a.localeCompare(b);
        }
        return a.length - b.length;
      }),
    [],
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/3 h-[32rem] w-[32rem] rounded-full bg-indigo-500/30 blur-3xl"></div>
        <div className="absolute -right-1/4 -top-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-10 md:px-12 lg:px-16">
        <header className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/10 bg-slate-950/70 px-6 py-5 backdrop-blur">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/30">
              <SparkleIcon />
            </div>
            <div>
              <span className="text-lg font-semibold leading-tight tracking-tight">
                LumenVPN
              </span>
              <p className="text-xs text-slate-400">
                Private access. Blazing fast.
              </p>
            </div>
          </Link>
          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#download"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Download App
            </a>
            <a
              href="#pricing"
              className="rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:shadow-cyan-400/40"
            >
              Start Free Trial
            </a>
          </div>
        </header>

        <main className="mt-16 space-y-24">
          <section
            id="hero"
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/70 px-8 pb-16 pt-14 shadow-[0_40px_120px_-40px_rgba(56,189,248,0.4)] backdrop-blur"
          >
            <div className="absolute -left-1/3 top-14 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"></div>
            <div className="absolute -right-1/4 bottom-10 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl"></div>
            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center">
              <div className="flex-1 space-y-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ultra-low latency mesh
                </p>
                <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
                  Secure every connection with <span className="text-cyan-300">LumenVPN</span>
                </h1>
                <p className="max-w-xl text-lg text-slate-300">
                  5,200+ RAM-only servers in 63 countries, powered by quantum-safe encryption and optimized for streaming, gaming, and remote teams.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#pricing"
                    className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:shadow-cyan-400/60"
                  >
                    Get Started
                    <ArrowRightIcon />
                  </a>
                  <a
                    href="#security"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/40 hover:text-cyan-100"
                  >
                    Explore Security
                  </a>
                </div>
                <dl className="grid gap-5 text-sm text-slate-300 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs uppercase tracking-widest text-slate-400">
                      Independent audits
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold text-white">
                      3
                    </dd>
                    <p className="mt-1 text-xs text-slate-400">
                      By Cure53 and Deloitte (2022-2024)
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs uppercase tracking-widest text-slate-400">
                      Average speed boost
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold text-white">
                      37%
                    </dd>
                    <p className="mt-1 text-xs text-slate-400">
                      Stream and game without throttling
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs uppercase tracking-widest text-slate-400">
                      Countries covered
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold text-white">
                      63
                    </dd>
                    <p className="mt-1 text-xs text-slate-400">
                      With 5,200+ high-speed nodes
                    </p>
                  </div>
                </dl>
              </div>
              <div className="relative flex-1">
                <div className="absolute -right-5 -top-5 h-28 w-28 rounded-3xl border border-cyan-200/20 bg-cyan-200/10 blur-3xl"></div>
                <div className="relative mx-auto w-full max-w-lg rounded-[2.5rem] border border-cyan-200/20 bg-slate-900/70 p-6 shadow-[0_30px_80px_-40px_rgba(165,243,252,0.6)] backdrop-blur">
                  <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Mesh latency
                      </p>
                      <p className="text-xs text-slate-400">Global median</p>
                    </div>
                    <span className="text-lg font-semibold text-emerald-300">
                      19 ms
                    </span>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <p>Realtime packet integrity</p>
                      <p>99.99%</p>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-800">
                      <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-cyan-400"></div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3 rounded-2xl border border-white/5 bg-white/5 p-4">
                    <h3 className="text-sm font-semibold text-white">
                      Live connections
                    </h3>
                    <div className="space-y-3 text-xs text-slate-300">
                      <div className="flex items-center justify-between">
                        <span>Tokyo - Double-Hop</span>
                        <span className="flex items-center gap-2 text-emerald-300">
                          54 ms
                          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Seattle - Streaming</span>
                        <span className="flex items-center gap-2 text-emerald-300">
                          22 ms
                          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Berlin - WireGuard</span>
                        <span className="flex items-center gap-2 text-yellow-300">
                          33 ms
                          <span className="h-2 w-2 rounded-full bg-yellow-300"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-cyan-200/30 bg-cyan-200/10 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Auto-shield enabled
                      </p>
                      <p className="text-xs text-cyan-100">Real-time threat blocking</p>
                    </div>
                    <div className="h-3 w-12 rounded-full bg-emerald-400/30">
                      <div className="h-full w-10 rounded-full bg-emerald-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="features"
            className="space-y-12 rounded-[2.5rem] border border-white/10 bg-slate-950/70 px-8 py-14 backdrop-blur"
          >
            <div className="space-y-4 text-center md:text-left">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/80">
                Engineered for Trust
              </p>
              <h2 className="text-4xl font-semibold text-white md:text-5xl">
                Privacy tools without the headaches
              </h2>
              <p className="max-w-2xl text-base text-slate-300">
                LumenVPN unites next-gen security, autonomous routing, and delightful apps so every team member stays protected without sacrificing performance.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-200/20 blur-2xl transition group-hover:scale-105"></div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100">
                    {feature.highlight}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="network"
            className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/60 to-slate-950/90 px-8 py-14 backdrop-blur"
          >
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="flex-1 space-y-5">
                <p className="text-sm uppercase tracking-[0.4em] text-sky-200/80">
                  Global Footprint
                </p>
                <h2 className="text-4xl font-semibold text-white">
                  A mesh built for blazing speed
                </h2>
                <p className="text-base text-slate-300">
                  Our self-healing network measures latency hundreds of times per minute, automatically routing you to the most resilient pathway. Enterprise-grade gateway clusters keep performance stable even at peak demand.
                </p>
                <dl className="space-y-4 text-sm text-slate-200">
                  {coverage.map((item) => (
                    <div
                      key={item.region}
                      className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:flex-row md:items-center md:justify-between"
                    >
                      <dt className="font-semibold text-white">{item.region}</dt>
                      <dd className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                        <span>{item.latency}</span>
                        <span>{item.cities} cities live</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="relative flex-1">
                <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl"></div>
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8">
                  <p className="text-sm font-medium text-slate-200">
                    Smart routing heatmap
                  </p>
                  <div className="mt-6 aspect-[4/3] rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-indigo-400/10 to-purple-400/10 p-6">
                    <div className="grid h-full grid-cols-12 grid-rows-6 gap-3">
                      {Array.from({ length: 72 }).map((_, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-cyan-300/30 transition hover:scale-110 hover:bg-cyan-200/80"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-slate-400">
                    Updated every 60 seconds from real user telemetry. Nodes with the lowest jitter are automatically promoted.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="security"
            className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-slate-950/70 px-8 py-14 backdrop-blur lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.4em] text-indigo-200/80">
                Built-In Safety
              </p>
              <h2 className="text-4xl font-semibold text-white">
                Real-time protection that evolves with threats
              </h2>
              <p className="text-base text-slate-300">
                LumenShield blocks malware, trackers, and phishing domains at the DNS edge, while device posture checks keep zero-trust policies intact.
              </p>
              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white">Threat Radar</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    AI-assisted monitoring detects traffic anomalies, raising alerts and blocking threats before they reach your devices.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                      <p className="text-slate-400">Malicious domains blocked</p>
                      <p className="mt-2 text-2xl font-semibold text-emerald-300">18,420</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                      <p className="text-slate-400">Tracker networks disabled</p>
                      <p className="mt-2 text-2xl font-semibold text-indigo-300">6,312</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl border border-cyan-200/30 bg-cyan-200/10 p-6">
                  <h3 className="text-lg font-semibold text-white">Device posture</h3>
                  <p className="mt-2 text-sm text-slate-200">
                    Enforce OS updates, disk encryption, and MFA before devices connect to corporate resources.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-[2.5rem] border border-white/10 bg-white/5 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-indigo-200/80">
                  Enterprise Suite
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Control dashboard
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Deploy policies in seconds, monitor live sessions, and integrate via REST or Terraform to automate onboarding.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {enterpriseFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200">
                        <CheckIcon />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">
                  Platform Support
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
                  {sortedDevices.map((device) => (
                    <span
                      key={device}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    >
                      {device}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="pricing"
            className="rounded-[2.5rem] border border-white/10 bg-slate-950/70 px-8 py-14 backdrop-blur"
          >
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
              <div className="flex-1 space-y-5">
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/80">
                  Simple Plans
                </p>
                <h2 className="text-4xl font-semibold text-white">
                  One subscription, all the privacy perks
                </h2>
                <p className="text-base text-slate-300">
                  Switch between monthly and yearly billing. Annual plans include two months free and priority support upgrades.
                </p>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 p-2 text-sm font-semibold text-slate-200">
                  <button
                    type="button"
                    onClick={() => setBillingCycle("monthly")}
                    className={`rounded-full px-4 py-2 transition ${
                      billingCycle === "monthly"
                        ? "bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-950 shadow-lg shadow-cyan-400/20"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingCycle("yearly")}
                    className={`rounded-full px-4 py-2 transition ${
                      billingCycle === "yearly"
                        ? "bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-950 shadow-lg shadow-cyan-400/20"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    Yearly
                  </button>
                </div>
              </div>
              <div className="grid flex-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pricingPlans.map((plan) => {
                  const price =
                    billingCycle === "monthly" ? plan.monthly : plan.yearly;
                  return (
                    <div
                      key={plan.tier}
                      className={`flex h-full flex-col justify-between rounded-3xl border bg-white/5 p-6 ${
                        plan.emphasized
                          ? "border-cyan-200/40 shadow-[0_20px_60px_-30px_rgba(125,211,252,0.7)]"
                          : "border-white/10"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold text-white">
                            {plan.tier}
                          </h3>
                          {plan.emphasized && (
                            <span className="rounded-full border border-cyan-200/30 bg-cyan-200/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-100">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-300">{plan.description}</p>
                        <p className="text-4xl font-semibold text-white">
                          ${price}
                          <span className="text-sm font-normal text-slate-400">
                            /mo
                          </span>
                        </p>
                        {billingCycle === "yearly" && (
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                            Save 38% yearly
                          </p>
                        )}
                        <ul className="space-y-3 text-sm text-slate-200">
                          {plan.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3">
                              <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200">
                                <CheckIcon />
                              </div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href="#download"
                        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                          plan.emphasized
                            ? "bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-950 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50"
                            : "border border-white/10 text-white hover:border-cyan-200/40 hover:text-cyan-100"
                        }`}
                      >
                        Choose Plan
                        <ArrowRightIcon />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section
            id="support"
            className="rounded-[2.5rem] border border-white/10 bg-slate-950/70 px-8 py-14 backdrop-blur"
          >
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/80">
                  Customers Love Us
                </p>
                <h2 className="text-4xl font-semibold text-white">
                  Trusted by creators, gamers, and global teams
                </h2>
                <div className="space-y-6">
                  {testimonials.map((testimonial) => (
                    <blockquote
                      key={testimonial.name}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200"
                    >
                      <p className="text-base leading-7 text-white">
                        "{testimonial.quote}"
                      </p>
                      <footer className="mt-4 text-xs text-slate-400">
                        {testimonial.name} - {testimonial.role}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
              <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/80">
                  Faq
                </p>
                <div className="mt-4 space-y-4">
                  {faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-2xl border border-white/10 bg-slate-950/80 p-4"
                    >
                      <summary className="list-none cursor-pointer text-sm font-semibold text-white outline-none transition group-open:text-cyan-200">
                        {faq.question}
                      </summary>
                      <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="download"
            className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/20 via-slate-950 to-indigo-500/20 px-8 py-14 backdrop-blur"
          >
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-100">
                  Get the App
                </p>
                <h2 className="text-4xl font-semibold text-white">
                  Ready to reclaim your privacy?
                </h2>
                <p className="text-base text-slate-200">
                  Download the LumenVPN app, connect instantly, and let smart routing do the hard work. Upgrade, downgrade, or cancel anytime.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/40 transition hover:bg-slate-900"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                      IOS
                    </span>
                    macOS & iOS
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/20 transition hover:bg-slate-100"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
                      APK
                    </span>
                    Android & TV
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:text-cyan-100"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                      DESK
                    </span>
                    Windows & Linux
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -right-6 top-10 h-24 w-24 rounded-full bg-white/15 blur-2xl"></div>
                <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_-40px_rgba(59,130,246,0.6)]">
                  <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/80">
                    Quick Start
                  </p>
                  <ol className="mt-5 space-y-4 text-sm text-slate-200">
                    <li className="flex gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/20 font-semibold text-cyan-200">
                        1
                      </span>
                      <div>
                        <p className="font-semibold text-white">
                          Create your account
                        </p>
                        <p className="text-slate-300">
                          Start with an email or sign in with Google & Apple SSO to sync devices.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/20 font-semibold text-cyan-200">
                        2
                      </span>
                      <div>
                        <p className="font-semibold text-white">
                          Choose your mode
                        </p>
                        <p className="text-slate-300">
                          Toggle streaming, gaming, or private browsing profiles - each optimized for speed.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/20 font-semibold text-cyan-200">
                        3
                      </span>
                      <div>
                        <p className="font-semibold text-white">
                          Connect with one tap
                        </p>
                        <p className="text-slate-300">
                          Auto-select the best server or pin your favorites for future sessions.
                        </p>
                      </div>
                    </li>
                  </ol>
                  <a
                    href="#pricing"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:shadow-cyan-400/50"
                  >
                    Start 30-day trial
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-20 rounded-[2.5rem] border border-white/10 bg-slate-950/80 px-8 py-12 backdrop-blur">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">LumenVPN</h3>
              <p className="mt-2 text-sm text-slate-400">
                Copyright {new Date().getFullYear()} Lumen Privacy Labs - Crafted for a safer internet.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <a href="#privacy" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#support" className="hover:text-white">
                Support
              </a>
              <a href="mailto:support@lumenvpn.com" className="hover:text-white">
                support@lumenvpn.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
