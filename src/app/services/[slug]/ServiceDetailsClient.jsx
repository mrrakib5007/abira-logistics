"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowLeft, FaPhone, FaEnvelope } from "react-icons/fa";
import { GiCommercialAirplane, GiCargoCrate } from "react-icons/gi";
import { RiShipLine } from "react-icons/ri";
import { FiTruck, FiFileText, FiAnchor } from "react-icons/fi";
import { FaTrainSubway, FaWarehouse } from "react-icons/fa6";
import PageHeader from "@/components/Shared/PageHeader";

const iconMap = {
  air: GiCommercialAirplane,
  ocean: RiShipLine,
  road: FiTruck,
  rail: FaTrainSubway,
  customs: FiFileText,
  warehouse: FaWarehouse,
  project: GiCargoCrate,
  hybrid: FiAnchor,
};

export default function ServiceDetailsClient({ service }) {
  const IconComponent = iconMap[service.icon] || FaCheckCircle;

  return (
    <div className="bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <PageHeader
        title={service.title}
        highlightTitle="Details."
        subtitle={service.subtitle}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title }
        ]}
      />

      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8 flex flex-col gap-8"
            >
              <div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-sm">
                  <IconComponent className="h-7 w-7" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                  Overview of {service.title}
                </h2>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
              </div>

              {service.features && service.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    Key Features & Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 shadow-sm"
                      >
                        <FaCheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  <FaArrowLeft className="h-4 w-4" />
                  <span>Back to All Services</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
                  Need Assistance?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                  Get in touch with our global logistics experts for tailored routing and competitive quotes.
                </p>

                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+8801718727658"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 text-sm font-bold text-slate-800 dark:text-slate-200 hover:border-primary transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FaPhone className="h-4 w-4" />
                    </div>
                    <span>+880 1718-727658</span>
                  </a>

                  <a
                    href="mailto:support@abiralogistics.com"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 text-sm font-bold text-slate-800 dark:text-slate-200 hover:border-primary transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FaEnvelope className="h-4 w-4" />
                    </div>
                    <span>support@abiralogistics.com</span>
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}