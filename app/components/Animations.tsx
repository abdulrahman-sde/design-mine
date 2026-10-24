"use client";

import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
  useId,
} from "react";
import * as motion from "motion/react-client";
import {
  useInView,
  useReducedMotion,
  useMotionValue,
  useTransform,
} from "motion/react";
import {
  useRive,
  Layout,
  Fit,
  Alignment,
  EventType,
  LoopType,
} from "@rive-app/react-canvas";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  OfficialBrandSymbolSolidIcon,
  ClaudeaiSolidIcon,
  GeminiSolidIcon,
  OpenaiSolidIcon,
} from "./Icons";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ==========================================
// 1. GradientSweepText & HighlightAnimatedText
// ==========================================
const sweepInViewOpts = { once: false, amount: 0.6 };

const highlightSweepGradient = (([c0, c1, c2, c3, c4]: string[], base: string) =>
  `linear-gradient(90deg in srgb, ${base} 0%, ${base} 42%, ${c4} 50%, ${c3} 62%, ${c2} 70%, ${c1} 78%, ${c0} 84%, ${c0} 100%)`)(
  ["#D0D6D8", "#38BDF8", "#1662FD", "#38BDF8", "#D0D6D8"],
  "var(--color-mist-950)"
);

export function GradientSweepText({
  backgroundSize,
  baseColor = "var(--color-primary)",
  children,
  className,
  delay = 0,
  finishedClassName,
  finishedColor,
  sweepDuration,
  sweepGradient = "linear-gradient(90deg in oklch, #0000 0%, #0000 calc(50% - 15%), oklch(0.7 0.25 25) calc(50% - 12%), oklch(0.75 0.22 70) calc(50% - 8%), oklch(0.78 0.2 140) calc(50% - 4%), oklch(0.75 0.22 200) 50%, oklch(0.72 0.24 260) calc(50% + 4%), oklch(0.7 0.26 320) calc(50% + 8%), oklch(0.72 0.24 350) calc(50% + 12%), #0000 calc(50% + 15%), #0000 100%)",
  sweepRepeat = 1,
}: {
  backgroundSize?: string;
  baseColor?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  finishedClassName?: string;
  finishedColor?: string;
  sweepDuration?: number;
  sweepGradient?: string;
  sweepRepeat?: number;
}) {
  const finalColor = finishedColor ?? baseColor;
  const isDifferentColor = finalColor !== baseColor;
  const bgSize = backgroundSize ?? (isDifferentColor ? "400% 100%" : "250% 100%");
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const inView = useInView(ref, sweepInViewOpts);
  const hasTriggeredRef = useRef(false);
  const [runKey, setRunKey] = useState(0);
  const [phase, setPhase] = useState<"waiting" | "animating" | "finished">("waiting");

  useEffect(() => {
    if (!reducedMotion) {
      if (!inView) {
        hasTriggeredRef.current = false;
        setPhase("waiting");
        return;
      }
      if (!hasTriggeredRef.current) {
        setPhase("waiting");
        setRunKey((k) => k + 1);
      }
      hasTriggeredRef.current = true;
    }
  }, [inView, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || phase !== "waiting" || !inView) return;
    if (delay <= 0) {
      setPhase("animating");
      return;
    }
    const timer = setTimeout(() => setPhase("animating"), delay * 1000);
    return () => clearTimeout(timer);
  }, [runKey, delay, inView, phase, reducedMotion]);

  const animStyle = isDifferentColor
    ? { backgroundImage: sweepGradient, backgroundSize: bgSize }
    : {
        backgroundImage: `${sweepGradient}, linear-gradient(${baseColor}, ${baseColor})`,
        backgroundSize: `${bgSize}, auto`,
      };

  if (reducedMotion) {
    return (
      <span
        ref={ref}
        className={cn("inline", className, finishedClassName)}
        style={{ color: finalColor }}
      >
        {children}
      </span>
    );
  }

  return (
    <span ref={ref} className="inline">
      {phase === "animating" ? (
        <motion.span
          key={runKey}
          animate={{ backgroundPosition: "0% center" }}
          className={cn(
            "relative inline-block bg-clip-text text-transparent [background-repeat:no-repeat,padding-box]",
            className
          )}
          initial={{ backgroundPosition: "100% center" }}
          onAnimationComplete={() => setPhase("finished")}
          style={animStyle}
          transition={{
            duration: sweepDuration ?? (isDifferentColor ? 0.65 : 0.22),
            ease: [0.33, 0, 0.2, 1],
            repeat: isDifferentColor ? 0 : sweepRepeat,
          }}
        >
          {children}
        </motion.span>
      ) : phase === "finished" ? (
        <span
          className={cn(className, finishedClassName)}
          style={{ color: finalColor }}
        >
          {children}
        </span>
      ) : (
        <span className={className} style={{ color: baseColor }}>
          {children}
        </span>
      )}
    </span>
  );
}

export function HighlightAnimatedText({
  children,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <GradientSweepText
      baseColor="#D0D6D8"
      finishedClassName="text-mist-950"
      finishedColor="var(--color-mist-950)"
      sweepGradient={highlightSweepGradient}
      {...props}
    >
      {children}
    </GradientSweepText>
  );
}

// ==========================================
// 2. TextScramble ("works with AI", "Private")
// ==========================================
const scrambleInViewOpts = { once: true, margin: "0px 0px -20% 0px" as const };

export function TextScramble({ children }: { children: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const inView = useInView(ref, scrambleInViewOpts);
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setRevealedCount(children.length);
      return;
    }
    setRevealedCount(0);
    let count = 0;
    const timer = setInterval(() => {
      count += 1;
      setRevealedCount(count);
      if (count >= children.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [children, inView, reducedMotion]);

  return (
    <span ref={ref}>
      {children.split("").map((char, idx) => (
        <span key={idx}>{idx < revealedCount ? char : "*"}</span>
      ))}
    </span>
  );
}

// ==========================================
// 3. BYOKIllustration (Animated SVG Orbit & Mask)
// ==========================================
const BYOK_CENTER = 136;

const CopilotIcon = ({
  size = 24,
  ariaHidden = true,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number; ariaHidden?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    aria-hidden={ariaHidden}
    focusable="false"
    {...props}
  >
    <path
      d="M11.9974 21C6.15238 21 1.91016 17.2628 1.75 16.1919V13.6936C1.85891 12.8882 2.61741 11.5313 3.78463 11.0452C3.80128 10.9555 3.81538 10.8618 3.83075 10.7657C3.86791 10.531 3.90762 10.2732 3.99219 9.98076C3.73466 9.32925 3.66675 8.59053 3.66675 7.85694C3.66675 6.74117 3.83075 5.5882 4.55466 4.67121C5.2965 3.73114 6.46884 3.22968 8.04478 3.05398C9.58997 2.88212 10.943 3.09758 11.8168 4.03509C11.8808 4.10306 11.9398 4.1736 11.9949 4.2467C12.0512 4.1736 12.1153 4.10306 12.1781 4.03509C13.0519 3.09758 14.4049 2.88212 15.9501 3.05398C17.526 3.22968 18.6984 3.73114 19.4402 4.67121C20.1654 5.5882 20.3281 6.74117 20.3281 7.85694C20.3281 8.59053 20.2602 9.32925 20.0027 9.98076C20.0873 10.2732 20.1283 10.531 20.1641 10.7657C20.1795 10.8631 20.1949 10.9555 20.2115 11.0452C21.3954 11.539 22.1616 12.9318 22.25 13.7321V16.1329C22.25 17.1153 17.9565 21 11.9974 21ZM11.9974 19.0955C14.9187 19.0955 17.8707 17.6719 18.4062 17.2577V11.8006L18.3768 11.6519C17.749 11.9212 16.9994 12.0251 16.1641 12.0251C14.6958 12.0251 13.526 11.6057 12.6919 10.7541C12.417 10.4712 12.184 10.1503 12 9.80121C11.8142 10.1504 11.5795 10.4713 11.303 10.7541C10.4702 11.6057 9.30041 12.0251 7.83081 12.0251C6.99544 12.0251 6.24719 11.9212 5.61809 11.6519L5.58863 11.8006V17.2577C6.12547 17.6719 9.07619 19.0955 11.9974 19.0955ZM10.4138 5.34709C10.1665 5.08289 9.59766 4.81742 8.25875 4.96619C6.95316 5.11111 6.36378 5.48432 6.06397 5.86394C5.7475 6.26408 5.59119 6.87583 5.59119 7.85694C5.59119 8.87396 5.75647 9.35875 5.98581 9.61525C6.19338 9.84738 6.65078 10.1013 7.83338 10.1013C8.92628 10.1013 9.54897 9.79993 9.93206 9.40877C10.3357 8.9958 10.6073 8.34814 10.7226 7.41704C10.8725 6.21791 10.6752 5.62796 10.4138 5.34709ZM15.7374 4.96619C14.3998 4.81742 13.8309 5.08289 13.5836 5.34709C13.3223 5.62796 13.1237 6.21791 13.2736 7.41704C13.3902 8.34814 13.6618 8.9958 14.0654 9.40877C14.4485 9.79993 15.0699 10.1013 16.1641 10.1013C17.3454 10.1013 17.8041 9.84738 18.0116 9.61525C18.241 9.35875 18.4062 8.87396 18.4062 7.85694C18.4062 6.87583 18.2487 6.26408 17.9322 5.86394C17.6337 5.48432 17.0443 5.11111 15.7374 4.96619Z"
      fill="currentColor"
    />
    <path
      d="M9.7578 13.3076C10.2816 13.3076 10.7188 13.7459 10.7188 14.2694V16.1945C10.7188 16.718 10.2816 17.1564 9.7578 17.1564C9.23402 17.1564 8.79688 16.718 8.79688 16.1945V14.2694C8.79688 13.7459 9.23402 13.3076 9.7578 13.3076ZM15.2031 14.2694V16.1945C15.2031 16.718 14.766 17.1564 14.2422 17.1564C13.7184 17.1564 13.2812 16.718 13.2812 16.1945V14.2694C13.2812 13.7459 13.7184 13.3076 14.2422 13.3076C14.766 13.3076 15.2031 13.7459 15.2031 14.2694Z"
      fill="currentColor"
    />
  </svg>
);

const GrokWingIcon = ({
  size = 24,
  ariaHidden = true,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number; ariaHidden?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    aria-hidden={ariaHidden}
    focusable="false"
    {...props}
  >
    <path
      d="M24 6.45508C21.2263 7.35291 18.2395 8.56834 15.2891 10.2119C12.2829 11.8865 9.31418 14.0057 6.64648 16.6875H2.76562L3.19921 16.2559C4.91562 14.5976 11.2427 8.72788 24 5.69336V6.45508ZM18.0264 16.6875H14.9863L14.0635 16.0166H8.91406C9.27653 15.6947 9.64386 15.3824 10.0146 15.0791H12.7725L11.3457 14.041C11.8559 13.6614 12.3716 13.2976 12.8916 12.9492L18.0264 16.6875ZM22.8867 16.6875H19.8447L13.8516 12.3252C14.4037 11.9779 14.96 11.6471 15.5176 11.332L22.8867 16.6875ZM6.95996 8.64355L9.30468 10.3477C8.72128 10.6912 8.1747 11.0307 7.66503 11.3633L3.92187 8.6416L6.95996 8.64355Z"
      fill="currentColor"
    />
  </svg>
);

const OpenRouterIcon = ({
  size = 24,
  ariaHidden = true,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number; ariaHidden?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    aria-hidden={ariaHidden}
    focusable="false"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.545 5.22544C18.6693 5.22544 19.7475 5.67207 20.5425 6.46707C21.3375 7.26206 21.7842 8.34031 21.7842 9.46461C21.7842 10.5889 21.3375 11.6672 20.5425 12.4622C19.7475 13.2572 18.6693 13.7038 17.545 13.7038L21.75 17.9088C22.2833 18.4429 21.9058 19.3563 21.15 19.3563H9.06666C7.19268 19.3563 5.39546 18.6118 4.07036 17.2867C2.74526 15.9616 2.00082 14.1644 2.00082 12.2904C2.00082 10.4165 2.74526 8.61925 4.07036 7.29414C5.39546 5.96904 7.19268 5.22461 9.06666 5.22461H17.5458L17.545 5.22544ZM9.06582 8.05044C7.94131 8.05044 6.86285 8.49716 6.06769 9.29231C5.27254 10.0875 4.82582 11.1659 4.82582 12.2904C4.82582 13.415 5.27254 14.4934 6.06769 15.2886C6.86285 16.0837 7.94131 16.5304 9.06582 16.5304C10.1902 16.5304 11.2686 16.0838 12.0637 15.2887C12.8587 14.4936 13.3054 13.4153 13.3054 12.2909C13.3054 11.1665 12.8587 10.0881 12.0637 9.29302C11.2686 8.49795 10.1902 8.05044 9.06582 8.05044Z"
      fill="currentColor"
    />
  </svg>
);

const BYOK_ICONS = [
  OpenaiSolidIcon,
  ClaudeaiSolidIcon,
  GeminiSolidIcon,
  CopilotIcon,
  GrokWingIcon,
  OpenRouterIcon,
];

const getOrbitAngle = (idx: number) => (360 / BYOK_ICONS.length) * idx;
const round3 = (n: number) => Number(n.toFixed(3));
const toPx = (n: number) => `${round3(n)}px`;

function OrbitingIcon({
  Icon,
  angle,
  orbit,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  angle: number;
  orbit: ReturnType<typeof useMotionValue<number>>;
}) {
  const x = useTransform(orbit, (deg) =>
    toPx(110 * Math.sin(((angle + deg) * Math.PI) / 180))
  );
  const y = useTransform(orbit, (deg) =>
    toPx(-110 * Math.cos(((angle + deg) * Math.PI) / 180))
  );
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ x, y, width: "52px", height: "52px" }}
    >
      <Icon className="text-muted-foreground/40 size-full" />
    </motion.div>
  );
}

function OrbitRingSvg({
  orbit,
}: {
  orbit: ReturnType<typeof useMotionValue<number>>;
}) {
  const rawId = useId();
  const maskId = rawId.replace(/:/g, "");
  return (
    <svg
      aria-hidden="true"
      className="text-muted-foreground/20 absolute inset-0"
      height={272}
      width={272}
    >
      <defs>
        <mask id={maskId}>
          <rect fill="white" height={272} width={272} />
          <motion.g
            style={{
              rotate: orbit,
              transformOrigin: `${BYOK_CENTER}px ${BYOK_CENTER}px`,
            }}
          >
            {BYOK_ICONS.map((_, idx) => {
              const a = getOrbitAngle(idx);
              const cx = round3(BYOK_CENTER + 110 * Math.sin((a * Math.PI) / 180));
              const cy = round3(BYOK_CENTER - 110 * Math.cos((a * Math.PI) / 180));
              return <circle key={idx} cx={cx} cy={cy} fill="black" r={26} />;
            })}
          </motion.g>
        </mask>
      </defs>
      <circle
        cx={BYOK_CENTER}
        cy={BYOK_CENTER}
        fill="none"
        mask={`url(#${maskId})`}
        r={110}
        stroke="currentColor"
        strokeDasharray="1 11"
        strokeLinecap="round"
        strokeWidth={3}
      />
    </svg>
  );
}

export function BYOKIllustration() {
  const reducedMotion = useReducedMotion();
  const orbit = useMotionValue(0);

  useEffect(() => {
    if (reducedMotion) return;
    const start = performance.now();
    let rafId = 0;
    const tick = (now: number) => {
      orbit.set((((now - start) / 1000) * 360) / 45);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [orbit, reducedMotion]);

  return (
    <div className="relative size-full overflow-hidden">
      <div className="absolute top-1/2 left-1/2 z-1 -translate-1/2">
        <div className="relative" style={{ width: 272, height: 272 }}>
          <OrbitRingSvg orbit={orbit} />
          <OfficialBrandSymbolSolidIcon className="text-primary absolute top-1/2 left-1/2 size-24 -translate-x-1/2 -translate-y-1/2" />
          {BYOK_ICONS.map((Icon, idx) => (
            <OrbitingIcon
              key={idx}
              Icon={Icon}
              angle={getOrbitAngle(idx)}
              orbit={orbit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. MemoryIllustration
// ==========================================
const memoryInViewOpts = { once: true, amount: 0.35 };
const memoryBaseTransition = {
  duration: 0.52,
  ease: [0.22, 1, 0.36, 1] as const,
};
const getMemoryDelayTransition = (index: number) => ({
  ...memoryBaseTransition,
  delay: index === 2 ? 1 : 0.06 + 0.12 * index,
});
const memoryDimTransition = { ...memoryBaseTransition, delay: 0.5 };

function MemoryCard({
  children,
  className,
  dimsWithThirdReveal = false,
  revealIndex = 0,
  reduceMotion,
  reveal,
}: {
  children: React.ReactNode;
  className?: string;
  dimsWithThirdReveal?: boolean;
  revealIndex?: number;
  reduceMotion: boolean;
  reveal: boolean;
}) {
  const [dimmed, setDimmed] = useState(false);
  const hiddenState = { opacity: 0, y: 20 };

  useEffect(() => {
    if (!reveal || reduceMotion || !dimsWithThirdReveal) {
      setDimmed(false);
      return;
    }
    const timer = setTimeout(() => setDimmed(true), 1000);
    return () => {
      clearTimeout(timer);
      setDimmed(false);
    };
  }, [reveal, reduceMotion, dimsWithThirdReveal]);

  const animateState = reveal
    ? { opacity: dimsWithThirdReveal && (reduceMotion || dimmed) ? 0.6 : 1, y: 0 }
    : hiddenState;

  const transition = reveal
    ? dimsWithThirdReveal
      ? dimmed
        ? { opacity: memoryBaseTransition }
        : memoryDimTransition
      : getMemoryDelayTransition(revealIndex)
    : memoryBaseTransition;

  return (
    <motion.div
      className={cn(
        "pointer-events-none relative h-72 w-80 overflow-hidden rounded-t-xl border border-b-0 border-black/8 shadow-xl select-none md:h-80 md:w-96 lg:h-96 lg:w-108 [&_img]:object-cover [&_img]:object-top",
        className
      )}
      initial={!reduceMotion ? hiddenState : false}
      animate={animateState}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export function MemoryIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const inView = useInView(ref, memoryInViewOpts);
  const reveal = reduceMotion || inView;

  return (
    <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 overflow-hidden px-0! py-0! md:px-8! xl:px-16!">
      <div
        ref={ref}
        className="mx-auto grid h-96 max-w-4xl grid-cols-1 gap-4 overflow-hidden md:h-96 md:gap-6 lg:grid-cols-2"
      >
        <div className="relative min-h-24 md:size-full">
          <motion.div
            className={cn(
              "absolute top-4 left-4 md:left-0",
              "text-primary bg-muted max-w-80 rounded-xl px-4 py-2.5 text-sm font-medium md:text-base"
            )}
            initial={!reduceMotion ? { opacity: 0, y: 20 } : false}
            animate={reveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={reveal ? getMemoryDelayTransition(0) : memoryBaseTransition}
          >
            Find the candidate I opened yesterday and prep interview notes
          </motion.div>
        </div>
        <div className="relative min-h-72 md:size-full">
          <MemoryCard
            className="absolute -bottom-10 max-md:left-20 md:right-28"
            dimsWithThirdReveal={true}
            reduceMotion={reduceMotion}
            reveal={reveal}
          >
            <img
              src="/media/1.128t-vhmdbwp7.png"
              alt="Illustration 1"
              className="absolute inset-0 size-full object-cover object-top"
            />
          </MemoryCard>
          <MemoryCard
            className="absolute -right-16 bottom-0 md:right-0"
            revealIndex={2}
            reduceMotion={reduceMotion}
            reveal={reveal}
          >
            <img
              src="/media/2.0sjx52o1m2j5u.png"
              alt="Illustration 1"
              className="absolute inset-0 size-full object-cover object-top"
            />
          </MemoryCard>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. Icons3DGrid (3D Perspective App Icons Grid)
// ==========================================
const ICONS_FULL_W = 3856;
const ICONS_PROJ_H = 1432 * Math.cos((48 * Math.PI) / 180);
const ICONS_PERSP_OFFSET = 12;
const ICONS_CELLS = Array.from({ length: 24 }, (_, idx) => ({
  col: idx % 8,
  row: Math.floor(idx / 8),
}));
const iconsInViewOpts = { once: false, amount: 0.35 };
const getIconsRowTransition = (row: number) => ({
  duration: 0.52,
  delay: 0.06 + 0.06 * row,
  ease: [0.22, 1, 0.36, 1] as const,
});
const iconsHoverTransition = { duration: 0.2, ease: "easeOut" as const };
const iconsBlur = "blur(10px)";

const iconCellVariants = {
  hidden: { opacity: 0, y: 72, scale: 0.88 },
  visible: (row: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: getIconsRowTransition(row),
  }),
  hover: {},
};

const iconShadowVariants = {
  hidden: { opacity: 0, scaleX: 0.55, scaleY: 0.5, filter: iconsBlur },
  visible: (row: number) => ({
    opacity: 0.88,
    scaleX: 1,
    scaleY: 1,
    filter: iconsBlur,
    transition: getIconsRowTransition(row),
  }),
  hover: {
    opacity: 0.38,
    scaleX: 1.32,
    scaleY: 1.24,
    filter: "blur(24px)",
    transition: iconsHoverTransition,
  },
};

export function Icons3DGrid() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const inView = useInView(outerRef, iconsInViewOpts);
  const [scale, setScale] = useState(1);
  const [measured, setMeasured] = useState(false);
  const shouldAnimate = measured && inView && !reducedMotion;

  useLayoutEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const updateSize = (w: number, h: number) => {
      const baseRatio = Math.max(0, w) / ICONS_FULL_W;
      const heightRatio = (Math.max(0, h) / ICONS_PROJ_H) * 0.88;
      const responsiveMultiplier = w < 640 ? 1.8 : w < 1024 ? 1.35 : 1;
      const nextScale = Math.min(
        Math.max(baseRatio, Math.min(heightRatio, baseRatio * responsiveMultiplier)),
        1
      );
      setScale(nextScale);
      setMeasured(true);
    };
    updateSize(el.clientWidth, el.clientHeight);
    const ro = new ResizeObserver(([entry]) => {
      updateSize(entry.contentRect.width, entry.contentRect.height);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={outerRef}
      className="landing-icons-mask relative -mt-16 h-80 w-full overflow-hidden"
      role="img"
      aria-label="App and service icons that Aside can work with"
    >
      <div
        ref={innerRef}
        className="absolute inset-y-0 right-0 left-0 flex h-80 items-end justify-center overflow-hidden lg:right-10 lg:left-10 xl:right-12 xl:left-12"
        style={{
          perspective: "1200px",
          perspectiveOrigin: `calc(50% + ${ICONS_PERSP_OFFSET}px) 100%`,
        }}
      >
        {measured && (
          <div
            className="grid origin-bottom overflow-visible"
            style={{
              width: 3760,
              height: 1360,
              gridTemplateColumns: "repeat(8, 400px)",
              gap: 80,
              transformOrigin: `calc(50% + ${ICONS_PERSP_OFFSET}px) bottom`,
              transform: `rotateX(48deg) scale(${scale})`,
              transformStyle: "preserve-3d",
            }}
          >
            {ICONS_CELLS.map(({ col, row }) => {
              const rawX = 36 + 480 * col;
              const rawY = 36 + 480 * row;
              const bleed = {
                left: Math.min(36, rawX),
                top: Math.min(36, rawY),
                right: Math.min(col === 0 ? 44 : 60, 3832 - (rawX + 400)),
                bottom: Math.min(36, 1432 - (rawY + 400)),
              };
              const viewWidth = 400 + bleed.left + bleed.right;
              const viewHeight = 400 + bleed.top + bleed.bottom;
              const bgX = -rawX + bleed.left;
              const bgY = -rawY + bleed.top;
              const originX =
                col === 0 ? 0 : col === 7 ? viewWidth : bleed.left + 200;

              return (
                <motion.div
                  key={`${col}-${row}`}
                  className="relative shrink-0 cursor-default hover:z-10"
                  style={{
                    width: viewWidth,
                    height: viewHeight,
                    marginLeft: -bleed.left,
                    marginTop: -bleed.top,
                    marginRight: -bleed.right,
                    marginBottom: -bleed.bottom,
                    transformStyle: "flat",
                    transformOrigin: `${originX}px ${bleed.top + 200}px`,
                  }}
                  custom={row}
                  initial={!reducedMotion ? "hidden" : false}
                  animate={!reducedMotion ? (shouldAnimate ? "visible" : "hidden") : undefined}
                  variants={reducedMotion ? undefined : iconCellVariants}
                  whileHover={reducedMotion ? undefined : "hover"}
                >
                  <motion.div
                    className="pointer-events-none absolute z-0 rounded-full"
                    aria-hidden="true"
                    style={{
                      left: bleed.left + 200,
                      bottom: bleed.bottom + 6,
                      width: 312,
                      height: 88,
                      x: "-50%",
                      background:
                        "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.28) 28%, rgba(0,0,0,0.1) 54%, transparent 76%)",
                      transformOrigin: "center center",
                    }}
                    custom={row}
                    initial={!reducedMotion ? "hidden" : false}
                    animate={!reducedMotion ? (shouldAnimate ? "visible" : "hidden") : undefined}
                    variants={reducedMotion ? undefined : iconShadowVariants}
                  />
                  <motion.div
                    className="absolute inset-0 z-10 bg-no-repeat"
                    style={{
                      backgroundImage: `url(/media/icons.07sng_y96t659.webp)`,
                      backgroundPosition: `${bgX}px ${bgY}px`,
                      backgroundSize: "3832px 1432px",
                      transformOrigin: `${originX}px ${bleed.top + 200}px`,
                      backfaceVisibility: "hidden",
                    }}
                    whileHover={
                      reducedMotion
                        ? undefined
                        : {
                            y: -40,
                            scale: col === 0 ? 1 : col === 7 ? 1.04 : 1.1,
                            transition: iconsHoverTransition,
                          }
                    }
                  />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 6. RivePlayer (Animated Use Case Cards)
// ==========================================
const riveInViewOpts = { once: false, amount: 0.35 };

export function RiveCard({
  src = "/assets/usecases.riv",
  artboard,
  className,
}: {
  src?: string;
  artboard: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const inView = useInView(containerRef, riveInViewOpts);

  const layout = useMemo(
    () =>
      new Layout({
        fit: Fit.Cover,
        alignment: Alignment.TopCenter,
      }),
    []
  );

  const { setCanvasRef, setContainerRef, rive } = useRive(
    {
      src,
      artboard,
      layout,
      autoplay: false,
    },
    {
      shouldResizeCanvasToContainer: true,
      shouldUseIntersectionObserver: false,
    }
  );

  const handleContainerRef = useCallback(
    (node: HTMLDivElement | null) => {
      containerRef.current = node;
      setContainerRef(node);
    },
    [setContainerRef]
  );

  useEffect(() => {
    if (!rive) return;
    if (reducedMotion || !inView) {
      rive.pause();
      return;
    }
    rive.reset({ artboard });
    rive.startRendering();
    rive.resizeToCanvas();
    rive.play();
  }, [rive, inView, reducedMotion, artboard]);

  return (
    <div ref={handleContainerRef} className={cn("absolute inset-0", className)}>
      <canvas ref={setCanvasRef} className="block size-full align-top" />
    </div>
  );
}
