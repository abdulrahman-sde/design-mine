import React from "react";
import Link from "next/link";
import { HeroNavigation, StickyNavigation } from "../components/Navigation";
import { HeroIllustration } from "../components/HeroIllustration";
import { BenchmarkCharts } from "../components/BenchmarkCharts";
import {
  HighlightAnimatedText,
  TextScramble,
  BYOKIllustration,
  MemoryIllustration,
  Icons3DGrid,
  RiveCard,
} from "../components/Animations";
import { ChevronRightIcon, ArrowUpRightIcon } from "../components/Icons";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <div className="p-2 pb-0! md:p-4">
          <div
            className="bg-muted relative overflow-hidden rounded-xl bg-cover bg-center shadow-xl md:rounded-2xl lg:rounded-3xl"
            style={{
              backgroundImage:
                "url(/media/background.2tnr0c16bt-fz.webp)",
            }}
          >
            <HeroNavigation />

            <header className="relative z-1 py-16 text-center max-sm:px-8 max-sm:text-left">
              <a
                className="font-display text-primary/70 border-primary/20 hover:bg-foreground/5 mb-4 inline-flex h-6 items-center gap-0.5 rounded-full border px-2.5 text-xs font-[550] tracking-[0.01em]"
                href="https://www.ycombinator.com/companies/aside"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Backed by Y Combinator</span>
                <ChevronRightIcon className="-mr-1.5 size-3 opacity-50" />
              </a>

              <h1
                data-slot="heading"
                className="font-display! text-primary font-semimedium tracking-display md:text-display-md text-4xl leading-10 md:leading-12 xl:text-5xl xl:leading-13 mb-8 font-normal!"
              >
                <span
                  style={{
                    display: "inline-block",
                    verticalAlign: "top",
                    textDecoration: "inherit",
                    textWrap: "balance",
                  }}
                >
                  The most intelligent AI assistant, <br />
                  but it’s a browser.
                </span>
              </h1>

              <Link
                href="/download"
                data-slot="button"
                className="group/button focus-visible:border-ring focus-visible:ring-ring/50 inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 active:not-aria-[haspopup]:scale-95 bg-primary text-primary-foreground hover:bg-primary/80 h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 md:h-10 md:px-3 md:text-base rounded-full! px-3! max-sm:h-11! max-sm:px-4! max-sm:text-base! [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  aria-hidden="true"
                  focusable="false"
                  data-icon="inline-start"
                >
                  <path
                    d="M19 20C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21C4 20.4477 4.44772 20 5 20H19ZM12 2C12.5523 2 13 2.44772 13 3V15.0859L15.543 12.543C15.9335 12.1525 16.5665 12.1525 16.957 12.543C17.3475 12.9335 17.3475 13.5665 16.957 13.957L13.7676 17.1465C12.7913 18.1226 11.2087 18.1227 10.2324 17.1465L7.04297 13.957C6.65247 13.5665 6.65246 12.9335 7.04297 12.543C7.43348 12.1525 8.06651 12.1525 8.45703 12.543L11 15.0859V3C11 2.44772 11.4477 2 12 2Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="font-[450] max-sm:hidden">
                  Download for macOS
                </span>
                <span className="sm:hidden">Download</span>
              </Link>
            </header>

            <div className="relative z-1 -mb-32 w-full">
              <HeroIllustration />
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 rounded-xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] md:rounded-2xl lg:rounded-3xl"
            />
          </div>
        </div>

        {/* Sticky Navigation (Reveals on Scroll) */}
        <StickyNavigation transparentOnHero={false} revealOnScroll={true} />
        <div className="-mb-24" />

        {/* Section 1: Introducing Aside */}
        <div className="mx-auto w-full border-b border-black/6">
          <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 gap-16 pt-24! md:pt-36! lg:flex!">
              <div className="mb-8 w-64 shrink-0">
                <Link
                  className="text-brand-content decoration-brand/50 inline-flex items-center gap-0.5 text-sm font-medium decoration-dotted decoration-2 underline-offset-4 hover:underline md:text-base"
                  href="/demo"
                >
                  Introducing Aside
                  <ChevronRightIcon className="size-4" />
                </Link>
              </div>
              <div className="space-y-8">
                <p
                  data-slot="heading"
                  className="font-display! text-muted-foreground text-base font-medium sm:text-lg xl:text-xl block font-normal!"
                >
                  <span className="font-semimedium text-primary">
                    Today’s AI browsers are broken.
                  </span>{" "}
                  They never complete a task. They say “I can’t do this” every
                  time. They stop every time the work gets real, and they still
                  lack the basics: speed and usability.
                </p>
                <p
                  data-slot="heading"
                  className="font-display! text-muted-foreground text-base font-medium sm:text-lg xl:text-xl block font-normal!"
                >
                  <span className="font-semimedium text-primary">
                    Aside is a browser rebuilt for people and agents.
                  </span>{" "}
                  It works across your logged-in websites and handles complex
                  work other agents can’t: messages, payments, internal tools,
                  and everything in between.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Unlimited capability + 3D Icons + Use Cases + SOTA Benchmark + Memory */}
        <section className="mx-auto w-full border-b border-black/6">
          <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="to-background bg-linear-to-b from-neutral-50">
              <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 pb-6!">
                <div className="text-center">
                  <p className="mb-2 lg:mb-6">
                    <Link
                      className="text-brand-content decoration-brand/50 inline-flex items-center gap-0.5 text-sm font-medium decoration-dotted decoration-2 underline-offset-4 hover:underline md:text-base"
                      href="/features/browser-agent"
                    >
                      Unlimited capability
                      <ChevronRightIcon className="size-4" />
                    </Link>
                  </p>
                  <h2
                    data-slot="heading"
                    className="font-display! text-primary font-semimedium xl:text-display-md text-3xl leading-9 sm:text-4xl sm:leading-11 xl:leading-12"
                  >
                    <span
                      style={{
                        display: "inline-block",
                        verticalAlign: "top",
                        textDecoration: "inherit",
                        textWrap: "balance",
                      }}
                    >
                      Anything you do in a browser,
                      <br />
                      Aside can do for you.
                    </span>
                  </h2>
                </div>
              </div>

              <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 p-0!">
                <Icons3DGrid />
              </div>
            </div>

            <div className="border-x border-black/6 px-6 py-12 sm:px-8 md:py-16 xl:px-66 py-24! md:px-24 lg:px-48">
              <p className="text-base xl:text-lg text-primary">
                Unlike other AI agents that rely on integrations, Aside just
                uses websites and accounts directly, just like you do. That
                means you can ask any task in your mind anytime you need. The
                only wall is the imagination.
              </p>
            </div>

            {/* 3 Animated Rive Use Case Cards */}
            <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 snap-x snap-mandatory scroll-pr-4 scroll-pl-4 scrollbar-none overflow-x-auto scroll-smooth p-0! pb-24! md:scroll-pr-6 md:scroll-pl-6 lg:overflow-visible">
              <div className="flex gap-4 pl-4 md:gap-6 md:pl-6 lg:grid lg:grid-cols-3 lg:px-6">
                <div className="shrink-0 snap-start w-80 lg:w-auto">
                  <div className="pointer-events-none relative w-full overflow-hidden rounded-lg bg-neutral-100 select-none md:h-64 h-72 lg:h-80 2xl:h-96">
                    <RiveCard
                      src="/assets/usecases.riv"
                      artboard="usecase-1"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                      <span>Signing in</span> Aside signs in and works across
                      your email, dashboards, and internal tools.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 snap-start w-80 lg:w-auto">
                  <div className="pointer-events-none relative w-full overflow-hidden rounded-lg bg-neutral-100 select-none md:h-64 h-72 lg:h-80 2xl:h-96">
                    <RiveCard
                      src="/assets/usecases.riv"
                      artboard="usecase-2"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                      <span>Communications</span> Aside handles comments,
                      replies, and follow-ups for you.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 snap-start w-80 lg:w-auto">
                  <div className="pointer-events-none relative w-full overflow-hidden rounded-lg bg-neutral-100 select-none md:h-64 h-72 lg:h-80 2xl:h-96">
                    <RiveCard
                      src="/assets/usecases.riv"
                      artboard="usecase-3"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                      <span>Docs and Spreadsheets</span> Aside can work with
                      files directly on your computer.
                    </p>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="-ml-4 w-4 shrink-0 snap-end md:-ml-6 md:w-6 lg:hidden"
                />
              </div>
            </div>

            <div className="border-b border-dashed border-black/6" />

            {/* SOTA Benchmark Charts */}
            <div className="border-x border-black/6 px-6 py-12 sm:px-8 md:px-14 md:py-16 xl:px-66 pb-10">
              <div className="space-y-3">
                <h3
                  data-slot="heading"
                  className="font-display! text-primary text-2xl leading-8 font-medium xl:text-3xl xl:leading-10"
                >
                  The <HighlightAnimatedText>SOTA</HighlightAnimatedText>{" "}
                  browser agent.
                </h3>
                <p className="text-muted-foreground text-base xl:text-lg">
                  Aside ranked #1 on three browser agent benchmarks:
                  Online-Mind2Web, BU-Bench-V1, and Odysseys, surpassing OpenAI,
                  Anthropic, and Browser Use.{" "}
                  <a
                    className="text-brand-content decoration-brand/40 hover:decoration-brand inline-block font-medium underline decoration-dotted underline-offset-3"
                    href="/sota"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>

            <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 pt-0! max-md:px-0!">
              <BenchmarkCharts />
            </div>

            <div className="border-b border-dashed border-black/6" />

            {/* Memory Section */}
            <div className="bg-[linear-gradient(to_bottom,var(--color-background)_18%,var(--color-neutral-50)_100%)]">
              <div className="border-x border-black/6 px-6 py-12 sm:px-8 md:px-14 md:py-16 xl:px-66">
                <div className="space-y-3">
                  <h3
                    data-slot="heading"
                    className="font-display! text-primary text-2xl leading-8 font-medium xl:text-3xl xl:leading-10"
                  >
                    <span
                      style={{
                        display: "inline-block",
                        verticalAlign: "top",
                        textDecoration: "inherit",
                        textWrap: "balance",
                      }}
                    >
                      <HighlightAnimatedText>Memory</HighlightAnimatedText> that
                      knows what you’re working on.
                    </span>
                  </h3>
                  <p className="text-muted-foreground text-base xl:text-lg">
                    Aside knows which sites to use for which work. It turns your
                    browsing history into memory, so you don’t have to repeat
                    context every time. All memory stays local on your device
                    and is never shared with anyone.{" "}
                    <Link
                      className="text-brand-content decoration-brand/40 hover:decoration-brand inline-block font-medium underline decoration-dotted underline-offset-3"
                      href="/features/memory"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>

              <MemoryIllustration />
            </div>
          </div>
        </section>

        {/* Section 3: Password Manager & Aside Vault */}
        <section className="mx-auto w-full border-b border-black/6">
          <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36">
              <p className="mb-2 lg:mb-6">
                <Link
                  className="text-brand-content decoration-brand/50 inline-flex items-center gap-0.5 text-sm font-medium decoration-dotted decoration-2 underline-offset-4 hover:underline md:text-base"
                  href="/features/password-manager"
                >
                  Password Manager
                  <ChevronRightIcon className="size-4" />
                </Link>
              </p>
              <h2
                data-slot="heading"
                className="font-display! text-primary font-semimedium xl:text-display-md text-3xl leading-9 sm:text-4xl sm:leading-11 xl:leading-12 mb-4"
              >
                Password that <br className="md:hidden" />
                <TextScramble>works with AI</TextScramble>.
              </h2>
              <p className="text-muted-foreground text-base xl:text-lg">
                AI agents stop at login screen and ask you to log in every
                time. <br className="hidden sm:block" /> Aside lets agents sign
                in through autofill, without ever exposing your credentials to
                the AI.
              </p>
            </div>

            <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 snap-x snap-mandatory scroll-pr-4 scroll-pl-4 scrollbar-none overflow-x-auto scroll-smooth p-0! pb-24! md:scroll-pr-6 md:scroll-pl-6 lg:overflow-visible">
              <div className="flex gap-4 pl-4 md:gap-6 md:pl-6 lg:grid lg:grid-cols-3 lg:px-6">
                <div className="shrink-0 snap-start w-80 lg:w-auto">
                  <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg bg-neutral-100 select-none md:h-64 lg:h-80 2xl:h-96">
                    <img
                      alt="Secrets stay invisible to AI"
                      loading="eager"
                      className="object-cover absolute inset-0 size-full"
                      src="/media/1.1d6n3khmb26p_.webp"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                      <span>Secrets stay invisible to AI</span> Credentials are
                      autofilled into websites, not exposed to the agent.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 snap-start w-80 lg:w-auto">
                  <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg bg-neutral-100 select-none md:h-64 lg:h-80 2xl:h-96">
                    <img
                      alt="Human approval at the edge"
                      loading="eager"
                      className="object-cover absolute inset-0 size-full"
                      src="/media/2.23cqtpb5x3dng.webp"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                      <span>Human approval at the edge</span> Sensitive actions
                      like payments, posts, and messages always wait for your
                      confirmation.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 snap-start w-80 lg:w-auto">
                  <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg bg-neutral-100 select-none md:h-64 lg:h-80 2xl:h-96">
                    <img
                      alt="A record of every access"
                      loading="eager"
                      className="object-cover absolute inset-0 size-full"
                      src="/media/3.2t8whzu_s0tv6.webp"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                      <span>A record of every access</span> Every credential use
                      is logged, so you know exactly what the agent touched.
                    </p>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="-ml-4 w-4 shrink-0 snap-end md:-ml-6 md:w-6 lg:hidden"
                />
              </div>
            </div>

            <div className="border-b border-dashed border-black/6" />

            <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 flex flex-col gap-6 p-0! md:flex-row">
              <div className="flex grow flex-col px-6 py-8 sm:px-8 sm:py-10 xl:px-16 xl:py-12">
                <h3
                  data-slot="heading"
                  className="font-display! text-primary text-2xl leading-8 font-medium xl:text-3xl xl:leading-10 leading-8! sm:leading-9!"
                >
                  Aside Vault
                  <br className="hidden sm:block" />{" "}
                  <span
                    style={{
                      display: "inline-block",
                      verticalAlign: "top",
                      textDecoration: "inherit",
                      textWrap: "balance",
                    }}
                  >
                    <span className="text-muted-foreground/60">
                      The first password manager built for agents.
                    </span>
                  </span>
                </h3>
                <div className="min-h-32 py-4 md:grow">
                  <Link
                    data-slot="button"
                    className="group/button focus-visible:border-ring focus-visible:ring-ring/50 inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] h-9 gap-1.5 px-2.5 md:h-10 md:px-3 md:text-base"
                    href="/features/password-manager"
                  >
                    Learn more
                  </Link>
                </div>
                <ul className="space-y-4">
                  <li>
                    <p className="text-sm xl:text-base text-primary font-medium">
                      Hardware-backed E2E encryption
                    </p>
                    <p className="text-muted-foreground text-sm xl:text-base">
                      Your data is full encrypted in local and protected by
                      Secure Enclave.
                    </p>
                  </li>
                  <li>
                    <p className="text-sm xl:text-base text-primary font-medium">
                      Scoped access and audit log
                    </p>
                    <p className="text-muted-foreground text-sm xl:text-base">
                      Give the agent access only to what each task needs. See
                      what it used, when, and why.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative flex aspect-4/3 w-full items-center justify-center bg-mist-800 sm:max-lg:hidden md:aspect-square md:h-full lg:aspect-auto lg:h-auto lg:w-[42%] lg:shrink-0 lg:self-stretch xl:w-140">
                <img
                  alt="Password Manager"
                  loading="eager"
                  className="object-cover absolute inset-0 size-full"
                  src="/media/banner.1c099t9pt7-1c.webp"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Privacy and Control (4 Cards including BYOKIllustration) */}
        <div className="mx-auto w-full border-b border-black/6">
          <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="bg-neutral-50">
              <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 text-center">
                <div className="mx-auto w-full">
                  <p className="mb-2 lg:mb-6">
                    <Link
                      className="text-brand-content decoration-brand/50 inline-flex items-center gap-0.5 text-sm font-medium decoration-dotted decoration-2 underline-offset-4 hover:underline md:text-base"
                      href="/policy/privacy"
                    >
                      Privacy and control
                      <ChevronRightIcon className="size-4" />
                    </Link>
                  </p>
                  <h2
                    data-slot="heading"
                    className="font-display! text-primary font-semimedium xl:text-display-md text-3xl leading-9 sm:text-4xl sm:leading-11 xl:leading-12 mb-4"
                  >
                    <span
                      style={{
                        display: "inline-block",
                        verticalAlign: "top",
                        textDecoration: "inherit",
                        textWrap: "balance",
                      }}
                    >
                      <TextScramble>Private</TextScramble> enough to use real
                      data.
                    </span>
                  </h2>
                  <p className="text-muted-foreground text-base xl:text-lg mx-auto max-w-(--breakpoint-sm)">
                    Aside runs on your device, keeps data protected, and gates
                    sensitive actions for your review.
                  </p>
                </div>
              </div>

              <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 snap-x snap-mandatory scroll-pr-6 scroll-pl-6 scrollbar-none overflow-x-auto scroll-smooth p-0! lg:overflow-visible">
                <div className="flex gap-6 pl-6 lg:grid lg:grid-cols-4 lg:px-6">
                  <div className="shrink-0 snap-start w-80 lg:w-auto">
                    <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg select-none md:h-64 lg:h-80 2xl:h-96 bg-background">
                      <img
                        alt="Local by default"
                        loading="eager"
                        className="object-cover absolute inset-0 size-full"
                        src="/media/1.3-b62prl6in98.png"
                      />
                    </div>
                    <div className="px-4 py-5">
                      <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                        <span>Local by default</span> Tasks, memory, and data
                        stay on your device. Nothing is shared with LLM
                        providers.
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 snap-start w-80 lg:w-auto">
                    <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg select-none md:h-64 lg:h-80 2xl:h-96 bg-background">
                      <img
                        alt="Encrypted by your password"
                        loading="eager"
                        className="object-cover absolute inset-0 size-full"
                        src="/media/2.3ukhkerkzdgq8.png"
                      />
                    </div>
                    <div className="px-4 py-5">
                      <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                        <span> Encrypted by your password</span> Everything is
                        secured in Secure Enclave and post-quantum encryption.
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 snap-start w-80 lg:w-auto">
                    <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg select-none md:h-64 lg:h-80 2xl:h-96 bg-background">
                      <img
                        alt="Sandbox with guardrails"
                        loading="eager"
                        className="object-cover absolute inset-0 size-full"
                        src="/media/3.3tb2mnvz7y2i6.png"
                      />
                    </div>
                    <div className="px-4 py-5">
                      <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                        <span>Sandbox with guardrails</span> Aside isolates
                        filesystem and network access to help keep your data
                        protected.
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 snap-start w-80 lg:w-auto">
                    <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg select-none md:h-64 lg:h-80 2xl:h-96 bg-background">
                      <BYOKIllustration />
                    </div>
                    <div className="px-4 py-5">
                      <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                        <span>Bring your own subscription</span> Use your
                        ChatGPT or Claude subscriptions, or bring your own API
                        key.
                      </p>
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    className="-ml-6 w-6 shrink-0 snap-end lg:hidden"
                  />
                </div>
              </div>

              <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 pt-4 pb-16 xl:pb-24" />
            </div>
          </div>
        </div>
      
      {/* Discreet floating control bar for preview navigation */}
      <aside
        aria-label="Preview controls"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white/90 p-1.5 shadow-xl backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/90 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-all hover:scale-105"
      >
        <Link
          href="/"
          className="rounded-full px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5"
        >
          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Catalog
        </Link>
        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
        <span className="px-2 font-mono text-[11px] text-zinc-500">
          Aside Landing
        </span>
      </aside>
</main>

      {/* Bottom CTA Banner */}
      <div className="mx-auto w-full py-14 pb-0 sm:py-16 xl:py-24 xl:pb-0">
        <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
          <div className="bg-landing-banner rounded-2xl bg-cover bg-center px-6 py-16 text-center sm:px-8 sm:py-24 xl:py-32">
            <div className="mb-8 pt-4 sm:mb-10 sm:pt-8">
              <h2
                data-slot="heading"
                className="font-display! text-primary font-semimedium xl:text-display-md text-3xl leading-9 sm:text-4xl sm:leading-11 xl:leading-12"
              >
                Crafted for both human and agent.
                <br />
                Start using today.
              </h2>
            </div>
            <Link
              href="/download"
              data-slot="button"
              className="group/button focus-visible:border-ring focus-visible:ring-ring/50 inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none bg-primary text-primary-foreground hover:bg-primary/80 h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 md:h-11 md:gap-2 md:px-3 md:text-base md:has-data-[icon=inline-end]:pr-2.5 md:has-data-[icon=inline-start]:pl-2.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 md:[&_svg:not([class*='size-'])]:size-4.5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                aria-hidden="true"
                focusable="false"
                data-icon="inline-start"
              >
                <path
                  d="M3 17V15C3 14.4477 3.44772 14 4 14C4.55228 14 5 14.4477 5 15V17C5 18.1046 5.89542 19 7 19H17C18.1046 19 19 18.1046 19 17V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V17C21 19.2092 19.2092 21 17 21H7C4.79088 21 3 19.2092 3 17ZM11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V12.0859L14.793 10.293C15.1835 9.90244 15.8165 9.90244 16.207 10.293C16.5976 10.6835 16.5976 11.3165 16.207 11.707L12.707 15.207C12.3165 15.5976 11.6835 15.5976 11.293 15.207L7.79297 11.707C7.40244 11.3165 7.40244 10.6835 7.79297 10.293C8.18349 9.90244 8.81651 9.90244 9.20703 10.293L11 12.0859V4Z"
                  fill="currentColor"
                />
              </svg>
              Download for macOS
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-14 sm:py-16 xl:py-24" data-table-of-contents-boundary="true">
        <div className="mx-auto w-full pb-12 sm:pb-16 xl:pb-20">
          <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 xl:flex xl:flex-wrap xl:gap-x-3 xl:gap-y-6">
              <li className="min-w-0 space-y-3 text-sm font-medium xl:max-w-60 xl:min-w-40 xl:shrink-0 xl:grow xl:last:grow-0">
                <p className="text-muted-foreground/80">Features</p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/features/browser-agent"
                    >
                      Browser agent
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/features/password-manager"
                    >
                      Password Manager
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/features/memory"
                    >
                      Memory
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="min-w-0 space-y-3 text-sm font-medium xl:max-w-60 xl:min-w-40 xl:shrink-0 xl:grow xl:last:grow-0">
                <p className="text-muted-foreground/80">Use cases</p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/blog/operations"
                    >
                      Operations
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/blog/hr"
                    >
                      Hiring Teams
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/blog/sales"
                    >
                      Sales
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/blog/developers"
                    >
                      Developers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/blog/researchers"
                    >
                      Researchers
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="min-w-0 space-y-3 text-sm font-medium xl:max-w-60 xl:min-w-40 xl:shrink-0 xl:grow xl:last:grow-0">
                <p className="text-muted-foreground/80">Resources</p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/download"
                    >
                      Download
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="https://docs.aside.com/changelog/components"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Changelog
                      <ArrowUpRightIcon className="mb-px ml-0.5 inline-block size-3.5 align-middle" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Docs
                      <ArrowUpRightIcon className="mb-px ml-0.5 inline-block size-3.5 align-middle" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/community"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Community
                      <ArrowUpRightIcon className="mb-px ml-0.5 inline-block size-3.5 align-middle" />
                    </a>
                  </li>
                </ul>
              </li>

              <li className="min-w-0 space-y-3 text-sm font-medium xl:max-w-60 xl:min-w-40 xl:shrink-0 xl:grow xl:last:grow-0">
                <p className="text-muted-foreground/80">Company</p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/manifesto"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <a
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="https://www.ycombinator.com/companies/aside/jobs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Careers
                      <ArrowUpRightIcon className="mb-px ml-0.5 inline-block size-3.5 align-middle" />
                    </a>
                  </li>
                </ul>
              </li>

              <li className="min-w-0 space-y-3 text-sm font-medium xl:max-w-60 xl:min-w-40 xl:shrink-0 xl:grow xl:last:grow-0">
                <ul className="space-y-3">
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/pricing"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/policy/terms"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="/policy/privacy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <a
                      className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                      href="https://trust.aside.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Trust Center
                      <ArrowUpRightIcon className="mb-px ml-0.5 inline-block size-3.5 align-middle" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto w-full py-6">
          <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
            <hr className="text-neutral-50" />
          </div>
        </div>

        <div className="mx-auto w-full">
          <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-muted-foreground/80 text-sm">
              © 2026 Aside Computer Inc.
            </p>
            <ul className="text-muted-foreground [&_a]:hover:text-primary inline-flex items-center gap-2 [&_svg]:size-5">
              <li>
                <a
                  aria-label="Follow us on X (Formerly Twitter)"
                  href="https://x.com/AsideAI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <path
                      d="M17.5652 3.25H20.5319L14.0505 10.6628L21.6753 20.75H15.7052L11.0291 14.6322L5.67867 20.75H2.71018L9.64264 12.8212L2.32812 3.25H8.44986L12.6766 8.84192L17.5652 3.25ZM16.524 18.9731H18.1679L7.55663 4.93359H5.79257L16.524 18.9731Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  aria-label="Follow us on LinkedIn"
                  href="https://www.linkedin.com/showcase/asidehq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <path
                      d="M19.65 3H4.35C3.99196 3 3.64858 3.14223 3.39541 3.39541C3.14223 3.64858 3 3.99196 3 4.35V19.65C3 20.008 3.14223 20.3514 3.39541 20.6046C3.64858 20.8578 3.99196 21 4.35 21H19.65C20.008 21 20.3514 20.8578 20.6046 20.6046C20.8578 20.3514 21 20.008 21 19.65V4.35C21 3.99196 20.8578 3.64858 20.6046 3.39541C20.3514 3.14223 20.008 3 19.65 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.625C6.74056 8.61616 6.4406 8.51632 6.18758 8.33797C5.93456 8.15962 5.7397 7.91066 5.62737 7.6222C5.51503 7.33374 5.49019 7.01857 5.55595 6.71607C5.6217 6.41358 5.77515 6.13716 5.9971 5.92138C6.21906 5.70559 6.49968 5.55999 6.80391 5.50278C7.10814 5.44556 7.42248 5.47927 7.70766 5.59969C7.99284 5.7201 8.23622 5.92189 8.40737 6.17983C8.57853 6.43778 8.66987 6.74044 8.67 7.05C8.66289 7.47331 8.4885 7.8766 8.18495 8.17173C7.88139 8.46685 7.47335 8.62982 7.05 8.625ZM18.3 18.3H15.6V14.034C15.6 12.756 15.06 12.297 14.358 12.297C13.5815 12.297 12.9 12.831 12.9 13.971V18.3H10.2V10.2H12.81V11.37C13.3 10.5 14.2 10.11 15.24 10.11C16.635 10.11 18.264 10.884 18.264 13.404L18.3 18.3Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  aria-label="Backed by Y Combinator"
                  className="hover:text-orange-500!"
                  href="https://www.ycombinator.com/companies/aside"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5 2.5V21.5H2.5V2.5H21.5ZM7.07715 6.83496L11.1689 12.9424V17.166H12.7715V12.9424L16.8633 6.83496H14.9092L11.9775 11.3467L9.03125 6.83496H7.07715Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Floating preview navigation */}
      <aside
        aria-label="Preview controls"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-black/10 bg-white/90 p-1.5 shadow-xl backdrop-blur-md text-xs font-medium text-black transition-all hover:scale-105"
      >
        <Link
          href="/"
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-black transition-colors hover:bg-black/5"
        >
          <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span>Home</span>
        </Link>
        <div className="h-4 w-px bg-black/10" />
        <Link
          href="/hero"
          className="rounded-full px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:text-black hover:bg-black/5"
        >
          Heroes
        </Link>
        <Link
          href="/illustration"
          className="rounded-full px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:text-black hover:bg-black/5"
        >
          Illustrations
        </Link>
      </aside>
    </>
  );
}
