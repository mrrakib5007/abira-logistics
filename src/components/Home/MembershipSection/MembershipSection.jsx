"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const members = [
  { name: "GLA", logo: "/assets/memberships/gla.png" },
  { name: "BAFFA", logo: "/assets/memberships/baffa.png" },
  { name: "LOGIZALL", logo: "/assets/memberships/logizall.png" },
  { name: "OLO", logo: "/assets/memberships/OLO.png" },
  { name: "United Nations", logo: "/assets/memberships/united-nations.png" },
  { name: "United Nations 2", logo: "/assets/memberships/united-nations2.png" },
];

export default function MembershipSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900/60 py-16 sm:py-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-8"
        >
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-primary uppercase">
            Our Membership
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
            Accredited By Global Trade Bodies
          </h2>
        </motion.div>

        <div className="relative w-full overflow-hidden py-3 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex w-max items-center gap-6 py-2"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
            whileHover={{ transition: { duration: 0 } }}
          >
            {[...members, ...members].map((member, idx) => (
              <div
                key={idx}
                className="group relative flex h-28 w-56 shrink-0 items-center justify-center rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white p-4 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5"
              >
                <div className="relative h-17 w-41 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={member.logo}
                    alt={member.name}
                    fill
                    sizes="164px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}