"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import PageHeader from "@/components/Shared/PageHeader";

const members = [
  {
    name: "GLA",
    logo: "/assets/memberships/gla.png",
    description:
      "Global Logistics Associates network connects premier independent freight forwarders worldwide, ensuring seamless global connectivity.",
  },
  {
    name: "BAFFA",
    logo: "/assets/memberships/baffa.png",
    description:
      "Bangladesh Freight Forwarders Association represents the core logistics and forwarding industry standards and regulatory compliance locally.",
  },
  {
    name: "LOGIZALL",
    logo: "/assets/memberships/logizall.png",
    description:
      "Advanced logistics ecosystem partnership enabling digital freight tracking, optimized routing, and innovative supply chain networks.",
  },
  {
    name: "OLO",
    logo: "/assets/memberships/OLO.png",
    description:
      "Overseas Logistics Organization network uniting elite freight forwarders to guarantee trusted international agent collaborations.",
  },
  {
    name: "United Nations",
    logo: "/assets/memberships/united-nations.png",
    description:
      "Registered supplier and participant adhering to international humanitarian standards, ethical trade, and global sustainability frameworks.",
  },
  {
    name: "United Nations 2",
    logo: "/assets/memberships/united-nations2.png",
    description:
      "Global compact association supporting sustainable development goals and responsible corporate logistics practices worldwide.",
  },
];

export default function MembershipClient() {
  return (
    <div className="bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <PageHeader
        title="Our Global"
        highlightTitle="Memberships."
        subtitle="Accredited by leading international trade bodies and global logistics networks to deliver trusted, certified services."
        breadcrumbs={[
          { label: "Company", href: "/company" },
          { label: "Membership" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex h-28 w-full items-center justify-center rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-100 dark:border-slate-800 shadow-inner mb-6">
                    <div className="relative h-16 w-40 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={member.logo}
                        alt={member.name}
                        fill
                        sizes="160px"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                    {member.name} Accreditation
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {member.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <span>Verified Member</span>
                  <FaCheckCircle className="h-4 w-4 text-blue-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
