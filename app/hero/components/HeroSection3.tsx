"use client";

import React from "react";
import Link from "next/link";
import { TailarkHeader } from "./TailarkHeader";
import { AnalyticsChart } from "./AnalyticsChart";
import { PerspectiveSponsorLogos, OpenAIBadgeIcon, TailarkMark } from "./sponsor-logos";
import { TrendingUp } from "./icons";

export interface HeroSection3Props {
  title?: React.ReactNode;
  subtitle?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}

export function HeroSection3({
  title = "Powerful Analytics for Smarter Decisions",
  subtitle = "Our comprehensive analytics and experimentation platform empowers your team to make data-driven decisions.",
  primaryCta = { text: "Start Testing for free", href: "#" },
  secondaryCta = { text: "Book a Demo", href: "#" },
}: HeroSection3Props) {
  return (
    <div className="bg-background text-foreground selection:bg-foreground/10 selection:text-primary">
      {/* 1. Header Navigation */}
      <TailarkHeader />

      <main className="bg-background">
        {/* 2. Hero Headline & CTA */}
        <section id="home" className="mx-auto max-w-5xl px-6 pt-32 text-center">
          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold text-balance text-foreground sm:mt-12 sm:text-6xl tracking-tight">
              {title}
            </h1>
            <p className="mt-4 mb-8 text-lg text-balance text-muted-foreground">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={primaryCta.href}
                className="inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 active:scale-98"
              >
                {primaryCta.text}
              </Link>
            </div>
            <span className="mt-3 block text-center text-sm text-muted-foreground">
              No credit card required!
            </span>
          </div>
        </section>

        {/* 3. Dashboard Card Illustration */}
        <section className="relative mt-8 border-y border-foreground/10 sm:mt-16">
          <div className="relative z-10 mx-auto max-w-6xl border-x px-3">
            <div className="h-180 overflow-hidden border-x shadow-md shadow-black/6.5">
              <div
                aria-hidden="true"
                className="h-3 w-full bg-[repeating-linear-gradient(-90deg,var(--color-foreground),var(--color-foreground)_1px,transparent_1px,transparent_4px)] opacity-5"
              />
              <div className="min-w-screen bg-background dark:bg-background/95 sm:scale-97 xl:scale-74 lg:scale-89 2xl:max-w-340 2xl:min-w-300 grid origin-top-left scale-95 border-t lg:grid-cols-[auto_1fr]">
                {/* Left Sidebar */}
                <div className="p-4.5 grid w-72 grid-rows-[auto_1fr] max-lg:hidden">
                  <div className="hover:bg-foreground/5 flex cursor-pointer items-center gap-2 rounded-lg p-1">
                    <div className="inset-ring-1 inset-ring-foreground/15 bg-radial flex size-7 rounded-md from-zinc-500/75 to-zinc-500 *:size-4">
                      <TailarkMark className="size-5 text-primary-foreground m-auto drop-shadow" />
                    </div>
                    <span className="text-sm font-medium">Tailark Pro</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up-down ml-auto size-3.5 opacity-50"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                  </div>

                  <div className="mt-5 flex flex-col gap-1.5">
                    <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3.5 py-2 text-sm font-medium bg-illustration ring-border-illustration shadow-black/6.5 shadow-xs ring-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house size-4 opacity-75"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                      Dashboard
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground hover:bg-foreground/3 hover:text-foreground transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-pie size-4 opacity-75"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" /><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /></svg>
                      Analytics
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground hover:bg-foreground/3 hover:text-foreground transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb size-4 opacity-75"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
                      AI Insights
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground hover:bg-foreground/3 hover:text-foreground transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain size-4 opacity-75"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" /><path d="M3.477 10.896a4 4 0 0 1 .585-.396" /><path d="M19.938 10.5a4 4 0 0 1 .585.396" /><path d="M6 18a4 4 0 0 1-1.967-.516" /><path d="M19.967 17.484A4 4 0 0 1 18 18" /></svg>
                      Predictions
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground hover:bg-foreground/3 hover:text-foreground transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open size-4 opacity-75"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg>
                      Reports
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground hover:bg-foreground/3 hover:text-foreground transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round size-4 opacity-75"><path d="M18 21a8 8 0 0 0-16 0" /><circle cx="10" cy="8" r="5" /><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" /></svg>
                      Customers
                    </div>

                    <div className="py-4">
                      <div className="text-muted-foreground pl-3.5 text-xs font-medium">Projects</div>
                      <div className="mt-3 flex flex-col gap-1.5">
                        <div className="hover:bg-foreground/3 flex cursor-pointer items-center gap-3 rounded-lg px-3.5 py-2 text-sm font-medium text-foreground">
                          <div className="flex size-4 *:m-auto"><div className="size-2 rounded-full bg-primary" /></div>
                          pro.tailark.com
                        </div>
                        <div className="hover:bg-foreground/3 flex cursor-pointer items-center gap-3 rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                          <div className="flex size-4 *:m-auto"><div className="size-2 rounded-full bg-muted-foreground/75" /></div>
                          tailark.com
                        </div>
                        <div className="hover:bg-foreground/3 flex cursor-pointer items-center gap-3 rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                          <div className="flex size-4 *:m-auto"><div className="size-2 rounded-full bg-muted-foreground/75" /></div>
                          irung.me
                        </div>
                      </div>
                    </div>

                    <div className="text-muted-foreground hover:bg-foreground/3 hover:text-foreground mt-auto flex cursor-pointer items-center gap-3 rounded-lg px-3.5 py-2 font-medium transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cog size-4 opacity-75"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 2v2" /><path d="M12 22v-2" /><path d="m17 20.66-1-1.73" /><path d="M11 10.27 7 3.34" /><path d="m20.66 17-1.73-1" /><path d="m3.34 7 1.73 1" /><path d="M14 12h8" /><path d="M2 12h2" /><path d="m20.66 7-1.73 1" /><path d="m3.34 17 1.73-1" /><path d="m17 3.34-1 1.73" /><path d="m11 13.73-4 6.93" /></svg>
                      Settings
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:py-1 lg:pr-1">
                  <div className="ring-border shadow-black/6.5 dark:bg-card bg-card/95 shadow ring-1 lg:rounded-xl">
                    <div className="max-h-237 no-scrollbar mask-b-from-95% p-2">
                      {/* Metric Filters */}
                      <div className="flex gap-2 px-3.5 pt-2 *:cursor-pointer max-lg:mt-6">
                        <div className="flex items-center gap-2 rounded-full border p-1 pl-2.5">
                          <div className="text-muted-foreground text-nowrap text-xs font-medium">Revenue</div>
                          <div className="bg-card ring-border shadow-black/6.5 flex size-5 cursor-pointer rounded-full shadow ring-1 *:m-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up-down size-3.5 opacity-50"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border p-1 pl-2.5">
                          <div className="text-muted-foreground text-nowrap text-xs font-medium">Last 30 days</div>
                          <div className="bg-card ring-border shadow-black/6.5 flex size-5 cursor-pointer rounded-full shadow ring-1 *:m-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up-down size-3.5 opacity-50"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border p-1 pl-2.5">
                          <div className="text-muted-foreground text-nowrap text-xs font-medium">Daily</div>
                          <div className="bg-card ring-border shadow-black/6.5 flex size-5 cursor-pointer rounded-full shadow ring-1 *:m-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up-down size-3.5 opacity-50"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                          </div>
                        </div>
                      </div>

                      {/* Stat Cards */}
                      <div className="p-3 max-lg:mt-6 lg:p-6">
                        <div className="mb-6 space-y-1.5">
                          <div className="text-foreground font-medium">Overview</div>
                          <div className="text-muted-foreground text-sm">Your main activities data</div>
                        </div>

                        <div className="*:ring-border-illustration *:bg-illustration *:shadow-black/6.5 grid grid-cols-2 gap-1.5 *:flex *:flex-col *:justify-between *:rounded-xl *:p-4 *:shadow *:ring-1 md:grid-cols-4 lg:gap-3 lg:*:p-5">
                          <div>
                            <div className="text-muted-foreground flex items-center gap-2 text-xs">
                              Total Balance
                              <div className="flex items-center gap-1">
                                <div className="rounded-xs flex size-3 bg-emerald-600">
                                  <TrendingUp className="m-auto size-2 text-white" />
                                </div>
                                <span className="border-t border-transparent text-[11px] font-medium text-emerald-600 dark:text-emerald-400">65%</span>
                              </div>
                            </div>
                            <div className="mt-8">
                              <span className="text-foreground align-baseline text-xl font-semibold">$23,056</span>
                              <span className="text-foreground/50 align-baseline text-xl font-bold">.56</span>
                            </div>
                          </div>

                          <div>
                            <div className="text-muted-foreground text-xs">Orders</div>
                            <div className="text-foreground mt-8 align-baseline text-xl font-semibold">562</div>
                          </div>

                          <div>
                            <div className="text-muted-foreground flex items-center gap-2 text-xs">
                              Customers
                              <div className="flex items-center gap-1">
                                <div className="rounded-xs flex size-3 bg-rose-600">
                                  <TrendingUp className="m-auto size-2 text-white" />
                                </div>
                                <span className="border-t border-transparent text-[11px] font-medium text-rose-600 dark:text-rose-400">5%</span>
                              </div>
                            </div>
                            <div className="text-foreground mt-8 align-baseline text-xl font-semibold">456</div>
                          </div>

                          <div>
                            <div className="text-muted-foreground flex items-center gap-2 text-xs">
                              Recurring Revenue
                              <div className="flex items-center gap-1">
                                <div className="rounded-xs flex size-3 bg-emerald-600">
                                  <TrendingUp className="m-auto size-2 text-white" />
                                </div>
                                <span className="border-t border-transparent text-[11px] font-medium text-emerald-600 dark:text-emerald-400">65%</span>
                              </div>
                            </div>
                            <div className="mt-8">
                              <span className="text-foreground align-baseline text-xl font-semibold">$23,056</span>
                              <span className="text-foreground/50 align-baseline text-xl font-bold">.56</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Activity Chart */}
                      <div className="mt-6">
                        <div className="space-y-1.5 px-3 lg:px-6">
                          <div className="text-foreground font-medium">Activity</div>
                          <div className="text-muted-foreground text-sm">Visitors and page views</div>
                        </div>
                        <div className="mt-4 pb-6">
                          <div className="relative w-full">
                            <AnalyticsChart className="overflow-visible" />
                          </div>
                        </div>
                      </div>

                      {/* AI Insights Cards */}
                      <div className="relative z-10 p-3 lg:p-6">
                        <div className="space-y-1.5">
                          <div className="text-foreground font-medium">AI Insights</div>
                          <div className="text-muted-foreground text-sm">Your data interpreted in an understandable language</div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="relative">
                            <div className="bg-linear-to-r/increasing absolute inset-0 rounded-full from-pink-400 via-teal-400 to-purple-400 opacity-15 blur dark:opacity-10" />
                            <div className="shadow-black/6.5 ring-border-illustration bg-illustration relative z-10 rounded-xl p-6 shadow-md ring-1">
                              <div className="flex gap-3">
                                <OpenAIBadgeIcon className="size-3.5 shrink-0" />
                                <div>
                                  <p className="text-muted-foreground -mt-0.5 text-[13px]">
                                    <span className="text-foreground font-medium">AI Insights:</span> Your revenue increased by 23% compared to last month. Top performing products are driving 65% of total sales.
                                  </p>
                                  <button type="button" className="text-primary mt-3 text-xs font-medium cursor-pointer">View Details</button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="relative">
                            <div className="shadow-black/6.5 ring-border-illustration bg-illustration relative z-10 rounded-xl p-6 shadow ring-1">
                              <div className="flex gap-3">
                                <OpenAIBadgeIcon className="size-3.5 shrink-0" />
                                <div>
                                  <p className="text-muted-foreground -mt-0.5 text-[13px]">
                                    <span className="text-foreground font-medium">Critical:</span> Customer churn rate has increased by 12% this week. Immediate attention required for retention strategies.
                                  </p>
                                  <button type="button" className="text-primary mt-3 text-xs font-medium cursor-pointer">View Details</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Social Proof / Sponsor Logos */}
        <section>
          <div className="mx-auto max-w-6xl border-x px-3">
            <div className="border-x py-8 md:py-16">
              <div className="mx-auto mb-12 max-w-xl text-balance text-center md:mb-16">
                <p className="text-muted-foreground mt-4 md:text-lg">
                  Tailark is trusted by leading teams from{" "}
                  <span className="text-foreground font-medium">Generative AI Companies,</span>{" "}
                  <span>Hosting Providers,</span>{" "}
                  <span>Payments Providers,</span>{" "}
                  <span>Streaming Providers</span>
                </p>
              </div>
              <PerspectiveSponsorLogos />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}