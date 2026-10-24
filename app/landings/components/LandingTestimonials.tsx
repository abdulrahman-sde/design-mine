import React from "react";

export function LandingTestimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mx-auto mb-16 max-w-2xl space-y-6 text-center">
          <span className="text-primary font-mono text-sm uppercase">Testimonials</span>
          <h2 className="text-foreground mt-8 text-balance text-4xl font-semibold md:text-5xl">What our customers are saying about Tailark Quartz</h2>
          <p className="text-muted-foreground text-balance text-lg">Join the increasing number of customers and advocates who rely on Tailark for seamless and effective user A/B testing.</p>
        </div>
        <div>
          <div className="relative mx-auto max-w-xl">
            <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-sm shadow-black/15 border border-transparent bg-card ring ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-9 w-9 absolute inset-y-0 -left-16 my-auto rounded-full max-md:hidden" aria-label="Previous testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up -translate-y-px">
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-sm shadow-black/15 border border-transparent bg-card ring ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-9 w-9 absolute inset-y-0 -right-16 my-auto rounded-full max-md:hidden" aria-label="Next testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down translate-y-px">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="ring-foreground/10 bg-card absolute inset-0 origin-bottom translate-y-6 rounded-2xl border border-transparent shadow-md ring-1" style={{ opacity: 1, transform: "scale(0.9)" }} />
            <div className="ring-foreground/10 bg-card absolute inset-0 origin-bottom translate-y-3 scale-95 rounded-2xl border border-transparent shadow-md ring-1" style={{ opacity: 1, transform: "none" }} />
            <div className="relative z-10 origin-bottom" style={{ opacity: 1, transform: "none" }}>
              <div data-slot="card" className="bg-card text-card-foreground ring-1 ring-foreground/10 relative space-y-8 rounded-2xl p-10 shadow-lg shadow-black/10" style={{ touchAction: "none" }}>
                <div>
                  <svg className="h-7 w-16" viewBox="0 0 251 83" fill="none">
                    <path d="M153.602 82.4612H173.519V0.015625H153.602V82.4612ZM118.632 58.9549C118.632 61.8498 116.201 64.2815 113.306 64.2815H101.726C98.8314 64.2815 96.3998 61.8498 96.3998 58.9549C96.3998 57.797 96.3998 25.722 96.3998 25.722H76.4831V60.5761C76.4831 74.8188 85.6309 82.3454 99.063 82.3454H118.516C130.906 82.3454 138.433 73.4292 138.433 60.5761V25.722H118.516C118.632 25.722 118.632 57.9128 118.632 58.9549ZM230.605 25.722C230.605 25.722 230.605 57.9128 230.605 58.9549C230.605 61.8498 228.174 64.2815 225.279 64.2815H213.699C210.805 64.2815 208.373 61.8498 208.373 58.9549C208.373 57.797 208.373 25.722 208.373 25.722H188.456V60.5761C188.456 74.8188 197.604 82.3454 211.036 82.3454H230.49C242.88 82.3454 250.406 73.4292 250.406 60.5761V25.722H230.605ZM39.7763 25.722C39.7763 25.722 29.4706 25.722 27.039 25.722C22.523 25.722 20.3229 26.8799 20.3229 26.8799V0.015625H0.40625V82.3454H20.2071V49.2282C20.2071 46.3334 22.6388 43.9017 25.5336 43.9017H37.1131C40.0079 43.9017 42.4396 46.3334 42.4396 49.2282V82.4612H62.3562V46.5649C62.3562 31.5117 52.2821 25.722 39.7763 25.722Z" fill="#1CE783" />
                  </svg>
                </div>
                <p className="text-lg before:mr-1 before:font-serif before:content-[&quot;\201C&quot;] after:ml-1 after:font-serif after:content-[&quot;\201D&quot;]">Implementing Tailark components helped us create a more engaging streaming interface. The responsive design system works flawlessly across devices, and we were able to maintain our brand identity while leveraging their robust component architecture.</p>
                <div className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                  <div className="ring-foreground/10 aspect-square size-12 overflow-hidden rounded-xl border border-transparent shadow-md shadow-black/15 ring-1">
                    <img src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="Avatar of Méschac Irung"/>
                  </div>
                  <div className="space-y-0.5 text-base *:block">
                    <span className="text-foreground font-medium">Méschac Irung</span>
                    <span className="text-muted-foreground text-sm">UI Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mb-9 mt-20 w-fit max-w-xl">
            <div aria-hidden="true" className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px -translate-[calc(50%-0.5px)]" />
            <div aria-hidden="true" className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
            <div aria-hidden="true" className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
            <div aria-hidden="true" className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
            <div className="relative grid grid-cols-2 border py-6">
              <span className="bg-foreground/10 border-card pointer-events-none absolute inset-y-4 left-1/2 w-0.5 rounded border-r" />
              <div className="space-y-4 px-6">
                <div aria-hidden="true" className="flex justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star fill-card stroke-card size-5 drop-shadow">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star fill-card stroke-card size-5 drop-shadow">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star fill-card stroke-card size-5 drop-shadow">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star fill-card stroke-card size-5 drop-shadow">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star fill-card stroke-card size-5 drop-shadow">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-balance text-center text-sm font-medium" style={{ opacity: 0 }}>
                  <span className="sr-only">25% Increase in total user engagement</span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>2</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>5</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>%</span>
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }} />
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>I</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>n</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>c</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>r</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>e</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>a</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>s</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>e</span>
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }} />
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>i</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>n</span>
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }} />
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>t</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>o</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>t</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>a</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>l</span>
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }} />
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>u</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>s</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>e</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>r</span>
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }} />
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>e</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>n</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>g</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>a</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>g</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>e</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>m</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>e</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>n</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>t</span>
                  </span>
                </p>
              </div>
              <div className="space-y-4 px-6">
                <div aria-hidden="true" className="flex justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap fill-card stroke-card size-5 drop-shadow">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap fill-card stroke-card size-5 drop-shadow">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap fill-card stroke-card size-5 drop-shadow">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap fill-card stroke-card size-5 drop-shadow">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap fill-card stroke-card size-5 drop-shadow">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-balance text-center text-sm font-medium" style={{ opacity: 0 }}>
                  <span className="sr-only">30% higher retention rate for subscribers</span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>3</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>0</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>%</span>
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }} />
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>h</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>i</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>g</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>h</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>e</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>r</span>
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }} />
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>r</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>e</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>t</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>e</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>n</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>t</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>i</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>o</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>n</span>
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }} />
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>r</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>a</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>t</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>e</span>
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }} />
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>f</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>o</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>r</span>
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }} />
                  </span>
                  <span className="inline-block whitespace-pre">
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>s</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>u</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>b</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>s</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>c</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>r</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>i</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>b</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>e</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>r</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre" style={{ opacity: 0 }}>s</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <a className="cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-9 px-4 py-2 mx-auto flex w-fit" href="#">
            Read more customer Stories
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
