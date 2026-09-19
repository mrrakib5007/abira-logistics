"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import PageHeader from "@/components/Shared/PageHeader";
import { FiAward, FiHelpCircle, FiImage, FiMessageSquare } from "react-icons/fi";

const companyLinks = [
  {
    title: "Our Membership",
    description: "Explore our accreditations with international trade bodies and global logistics networks like GLA, BAFFA, and UN.",
    href: "/company/membership",
    icon: FiAward,
  },
  {
    title: "Photo Gallery",
    description: "Take a visual journey through our annual galas, cultural days, team building milestones, and CSR activities.",
    href: "/company/gallery",
    icon: FiImage,
  },
  {
    title: "Testimonials",
    description: "Read genuine feedback and success stories from our valued global partners across supply chain and freight sectors.",
    href: "/company/testimonials",
    icon: FiMessageSquare,
  },
  {
    title: "Frequently Asked Questions",
    description: "Find clear answers regarding our global shipping procedures, real-time tracking, and custom clearance policies.",
    href: "/company/faq",
    icon: FiHelpCircle,
  },
];

export default function CompanyClient() {
  return (
    <div className="bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <PageHeader
        title="Company"
        highlightTitle="Overview."
        subtitle="Discover more about ABIRA Logistics, our corporate standards, global memberships, and client experiences."
        breadcrumbs={[{ label: "Company" }]}
      />

      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {companyLinks.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className="group flex flex-col justify-between h-full rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5"
                  >
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                        <IconComponent className="h-6 w-6" />
                      </div>

                      <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary">
                      <span>Explore Section</span>
                      <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}