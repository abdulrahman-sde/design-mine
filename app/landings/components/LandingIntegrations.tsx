import React from "react";

export function LandingIntegrations() {
  return (
    <section className="@container py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="@3xl:grid-cols-3 @3xl:gap-12 relative grid">
          <div className="@3xl:pb-3 flex flex-col justify-between gap-12">
            <div>
              <h2 className="relative z-10 text-balance text-4xl font-semibold md:text-5xl">Powerful integrations with our API</h2>
              <p className="text-muted-foreground my-6 max-w-2xl">Generate payment links at scale, enabling seamless marketing campaigns, efficient sales processes, and faster payment.</p>
            </div>
            <div className="max-w-56 space-y-3">
              <h3 className="font-medium">Native IDE Support</h3>
              <div className="*:bg-foreground/5 grid grid-cols-3 gap-0.5 *:flex *:items-center *:justify-center *:rounded *:px-2 *:py-3">
                <div className="rounded-l-lg!">
                  <svg className="size-5" fill="none" viewBox="0 0 100 100">
                    <path fill="#5E6AD2" d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z" />
                  </svg>
                </div>
                <div>
                  <svg className="size-5" viewBox="0 0 256 222" preserveAspectRatio="xMidYMid">
                    <path d="m128 0 128 221.705H0z" />
                  </svg>
                </div>
                <div className="rounded-r-lg!">
                  <svg className="size-5" viewBox="0 0 256 116" preserveAspectRatio="xMidYMid">
                    <path fill="#FFF" d="m202.357 49.394-5.311-2.124C172.085 103.434 72.786 69.289 66.81 85.997c-.996 11.286 54.227 2.146 93.706 4.059 12.039.583 18.076 9.671 12.964 24.484l10.069.031c11.615-36.209 48.683-17.73 50.232-29.68-2.545-7.857-42.601 0-31.425-35.497Z" />
                    <path fill="#F4811F" d="M176.332 108.348c1.593-5.31 1.062-10.622-1.593-13.809-2.656-3.187-6.374-5.31-11.154-5.842L71.17 87.634c-.531 0-1.062-.53-1.593-.53-.531-.532-.531-1.063 0-1.594.531-1.062 1.062-1.594 2.124-1.594l92.946-1.062c11.154-.53 22.839-9.56 27.087-20.182l5.312-13.809c0-.532.531-1.063 0-1.594C191.203 20.182 166.772 0 138.091 0 111.535 0 88.697 16.995 80.73 40.896c-5.311-3.718-11.684-5.843-19.12-5.31-12.747 1.061-22.838 11.683-24.432 24.43-.531 3.187 0 6.374.532 9.56C16.996 70.107 0 87.103 0 108.348c0 2.124 0 3.718.531 5.842 0 1.063 1.062 1.594 1.594 1.594h170.489c1.062 0 2.125-.53 2.125-1.594l1.593-5.842Z" />
                    <path fill="#FAAD3F" d="M205.544 48.863h-2.656c-.531 0-1.062.53-1.593 1.062l-3.718 12.747c-1.593 5.31-1.062 10.623 1.594 13.809 2.655 3.187 6.373 5.31 11.153 5.843l19.652 1.062c.53 0 1.062.53 1.593.53.53.532.53 1.063 0 1.594-.531 1.063-1.062 1.594-2.125 1.594l-20.182 1.062c-11.154.53-22.838 9.56-27.087 20.182l-1.063 4.78c-.531.532 0 1.594 1.063 1.594h70.108c1.062 0 1.593-.531 1.593-1.593 1.062-4.25 2.124-9.03 2.124-13.81 0-27.618-22.838-50.456-50.456-50.456" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="@3xl:col-span-2 mt-auto h-fit max-lg:-mx-6 max-lg:overflow-hidden max-lg:pb-16 max-lg:pl-6 max-lg:pt-12">
            <div className="bg-card min-w-3xl ring-foreground/10 overflow-hidden rounded-2xl p-1 shadow-2xl shadow-indigo-900/35 ring-1 backdrop-blur">
              <div className="relative aspect-video origin-top rounded-xl">
                <img alt="app screenshot" loading="lazy" width="1520" height="1013" decoding="async" data-nimg="1" className="object-top-left size-full object-cover" style={{ color: "transparent" }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1520px" srcSet="/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Ftailark%2Fassets%2Frefs%2Fheads%2Fmain%2Fcircle-4_lkhxqm.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Ftailark%2Fassets%2Frefs%2Fheads%2Fmain%2Fcircle-4_lkhxqm.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Ftailark%2Fassets%2Frefs%2Fheads%2Fmain%2Fcircle-4_lkhxqm.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Ftailark%2Fassets%2Frefs%2Fheads%2Fmain%2Fcircle-4_lkhxqm.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Ftailark%2Fassets%2Frefs%2Fheads%2Fmain%2Fcircle-4_lkhxqm.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Ftailark%2Fassets%2Frefs%2Fheads%2Fmain%2Fcircle-4_lkhxqm.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Ftailark%2Fassets%2Frefs%2Fheads%2Fmain%2Fcircle-4_lkhxqm.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Ftailark%2Fassets%2Frefs%2Fheads%2Fmain%2Fcircle-4_lkhxqm.png&amp;w=3840&amp;q=75 3840w" src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-4_lkhxqm.png"/>
              </div>
            </div>
          </div>
        </div>
        <div className="@4xl:gap-12 @4xl:grid-cols-3 relative grid grid-cols-2 gap-6 lg:mt-16">
          <div className="space-y-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock2 fill-foreground/10 size-4">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 10" />
            </svg>
            <h3 className="mt-3 font-medium">Speed Is Everything</h3>
            <p className="text-muted-foreground line-clamp-2 text-sm">Tailark is a fast and efficient AI-powered code editor that can help you write code faster and more efficiently.</p>
          </div>
          <div className="space-y-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap fill-foreground/10 size-4">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
            <h3 className="mt-3 font-medium">Speed Is Everything</h3>
            <p className="text-muted-foreground line-clamp-2 text-sm">Tailark is a fast and efficient AI-powered code editor that can help you write code faster and more efficiently.</p>
          </div>
          <div className="space-y-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days fill-foreground/10 size-4">
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>
            <h3 className="mt-3 font-medium">Speed Is Everything</h3>
            <p className="text-muted-foreground line-clamp-2 text-sm">Tailark is a fast and efficient AI-powered code editor that can help you write code faster and more efficiently.</p>
          </div>
          <div className="space-y-1.5 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days fill-foreground/10 size-4">
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>
            <h3 className="mt-3 font-medium">Speed Is Everything</h3>
            <p className="text-muted-foreground line-clamp-2 text-sm">Tailark is a fast and efficient AI-powered code editor that can help you write code faster and more efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
