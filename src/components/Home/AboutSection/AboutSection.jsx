"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

import {
  FaEarthAmericas,
  FaShieldHalved,
  FaTruckFast,
  FaAward,
  FaArrowRight,
  FaCircleCheck,
} from "react-icons/fa6";

const stats = [
  {
    target: 200,
    suffix: "+",
    decimals: 0,
    label: "Global Destinations",
    icon: FaEarthAmericas,
  },
  {
    target: 99.9,
    suffix: "%",
    decimals: 1,
    label: "On-Time Reliability",
    icon: FaShieldHalved,
  },
  {
    target: 15,
    suffix: "M+",
    decimals: 0,
    label: "Tons Transported",
    icon: FaTruckFast,
  },
  {
    target: 10,
    suffix: "+",
    decimals: 0,
    label: "Years Experience",
    icon: FaAward,
  },
];

const highlights = [
  "Dedicated account managers on every shipment",
  "Real-time tracking and proactive exception alerts",
  "Licensed customs brokerage in 40+ countries",
  "ISO-certified warehousing and cold-chain handling",
];

function StatCounter({ target, decimals = 0, suffix = "" }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  const count = useMotionValue(0);

  const rounded = useTransform(
    count,
    (latest) => latest.toFixed(decimals) + suffix
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, target, {
      duration: 2.2,
      ease: [0.25, 1, 0.5, 1],
    });

    return controls.stop;
  }, [isInView, count, target]);

  return (
    <motion.span
      ref={ref}
      className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl"
    >
      {rounded}
    </motion.span>
  );
}

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 sm:py-32">

      {/* =================================
          BACKGROUND DECORATIONS
      ================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =================================
            MAIN ABOUT CONTENT
        ================================== */}

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* =================================
              LEFT CONTENT
          ================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="order-2 lg:order-1"
          >

            {/* Small Label */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-10 bg-primary" />

              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary sm:text-sm">
                About ABIRA
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Moving Your Business{" "}
              <span className="text-primary">Forward.</span>
            </h2>

            {/* Description */}

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              ABIRA is a full-service logistics and transportation partner
              connecting manufacturers, retailers, and enterprises to the
              world. From a single pallet to complex project cargo, we design
              supply chains that are faster, leaner, and fully transparent.
            </p>

            {/* Highlights */}

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                  }}
                  className="group flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                    <FaCircleCheck className="h-3.5 w-3.5 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <span className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-300 sm:text-[15px]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 text-sm font-bold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-2xl hover:shadow-primary/30"
              >
                <span>Learn More About ABIRA</span>

                <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>


{/* Trusted Worldwide */}
<div className="group flex items-center gap-3 px-1 sm:gap-4 sm:px-2">

  {/* Partner Logos */}
  <div className="flex items-center">

    {/* Logo 1 */}
    <div className="relative -ml-2 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-slate-100 bg-white shadow-md">
      <Image
        src="/assets/memberships/baffa.png"
        alt="Partner Logo 1"
        fill
        sizes="48px"
        className="object-contain p-1.5"
      />
    </div>

    {/* Logo 2 */}
    <div className="relative -ml-2 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-slate-200 bg-white shadow-md">
      <Image
        src="/assets/memberships/gla.png"
        alt="Partner Logo 2"
        fill
        sizes="48px"
        className="object-contain p-1.5"
      />
    </div>

    {/* Logo 3 */}
    <div className="relative -ml-2 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-slate-300 bg-white shadow-md">
      <Image
        src="/assets/memberships/logizall.png"
        alt="Partner Logo 3"
        fill
        sizes="48px"
        className="object-contain p-1.5"
      />
    </div>

  </div>

  {/* Trust Text */}
  <div className="leading-tight">

    <p className="text-xs font-extrabold text-slate-900 dark:text-white">
      Trusted Worldwide
    </p>

    <div className="mt-1 flex items-center gap-1.5">
      <p className="text-[9px] font-medium text-slate-500 dark:text-slate-400 sm:text-xs">
        Logistics you can rely on
      </p>
    </div>

  </div>

</div>
            </div>
          </motion.div>

          {/* =================================
              RIGHT IMAGE SECTION
          ================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto w-full max-w-xl px-3 pb-4 pt-4 sm:px-5 sm:pb-6 sm:pt-5">

              {/* =================================
                  DECORATIVE TOP RIGHT SHAPE
              ================================== */}

              <div className="absolute right-0 top-0 h-28 w-28 rounded-tr-[2.5rem] border-r-[3px] border-t-[3px] border-primary sm:-right-1 sm:h-36 sm:w-36" />

              {/* =================================
                  DECORATIVE BOTTOM LEFT SHAPE
              ================================== */}

              <div className="absolute bottom-0 left-0 h-28 w-28 rounded-bl-[2.5rem] border-b-[3px] border-l-[3px] border-slate-900 dark:border-white sm:h-36 sm:w-36" />

              {/* =================================
                  MAIN IMAGE
              ================================== */}

              <div className="group relative z-10 overflow-hidden rounded-4xl border border-slate-200 bg-slate-100 shadow-2xl dark:border-slate-800 dark:bg-slate-900">

                <div className="relative aspect-square">

                  <Image
                    src="/assets/about-us.jpg"
                    alt="ABIRA Logistics team working at a shipping port"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Gradient */}

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/25 via-transparent to-transparent" />

                  {/* Soft Light */}

                  <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent" />

                </div>
              </div>

              {/* =================================
                  TOP LEFT EXPERIENCE CARD
              ================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -15,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="absolute left-0 top-0 z-20 sm:left-1 sm:top-1"
              >
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl dark:border-slate-700 dark:bg-slate-900 sm:px-5 sm:py-4">

                  {/* Icon */}

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 sm:h-11 sm:w-11">
                    <FaAward className="h-5 w-5" />
                  </div>

                  {/* Text */}

                  <div>
                    <p className="text-lg font-black leading-none text-slate-900 dark:text-white sm:text-xl">
                      10+
                    </p>

                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-xs">
                      Years Experience
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* =================================
                  BOTTOM RIGHT ABIRA CARD
              ================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                }}
                className="absolute bottom-0 right-0 z-20 sm:right-1"
              >
                <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-slate-950 px-4 py-3 shadow-2xl sm:px-5 sm:py-4">

                  {/* Globe Icon */}

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white sm:h-11 sm:w-11">
                    <FaEarthAmericas className="h-5 w-5" />
                  </div>

                  {/* Text */}

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:text-xs">
                      ABIRA Logistics
                    </p>

                    <p className="mt-1 text-sm font-bold text-white sm:text-base">
                      Connecting the World
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* =================================
                  RIGHT SIDE RED ACCENT
              ================================== */}

              <div className="absolute -right-2 top-1/2 hidden h-16 w-1.5 -translate-y-1/2 rounded-full bg-primary lg:block" />

            </div>
          </motion.div>
        </div>

        {/* =================================
            STATS SECTION
        ================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-24"
        >

          {/* Stats Header */}

          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
                Our Numbers
              </span>

              <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                Built on Performance & Trust
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-right">
              Every shipment, destination, and partnership reflects our
              commitment to reliable logistics.
            </p>

          </div>

          {/* Stats Grid */}

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 sm:gap-5">

            {stats.map((stat, idx) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-6"
                >

                  {/* Card Accent */}

                  <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10" />

                  {/* Icon */}

                  <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Counter */}

                  <StatCounter
                    target={stat.target}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />

                  {/* Label */}

                  <span className="mt-1 block text-xs font-semibold leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
                    {stat.label}
                  </span>

                  {/* Bottom Line */}

                  <div className="mt-5 h-1 w-8 rounded-full bg-primary transition-all duration-300 group-hover:w-14" />

                </motion.div>
              );
            })}

          </div>
        </motion.div>
      </div>
    </section>
  );
}