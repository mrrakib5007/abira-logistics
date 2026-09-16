"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPlaneDeparture,
  FaShip,
  FaTruckFast,
  FaTrainSubway,
  FaFileContract,
  FaWarehouse,
  FaBoxesStacked,
  FaArrowsRotate,
  FaArrowRight,
} from "react-icons/fa6";

const services = [
  {
    title: "Air Freight",
    desc: "Express and consolidated air cargo with next-flight-out options worldwide.",
    href: "/services/air-freight",
    icon: FaPlaneDeparture,
  },
  {
    title: "Ocean Freight",
    desc: "FCL, LCL and reefer sailings backed by long-standing carrier contracts.",
    href: "/services/ocean-freight",
    icon: FaShip,
  },
  {
    title: "Road Freight",
    desc: "FTL and LTL trucking with cross-border documentation handled end to end.",
    href: "/services/road-freight",
    icon: FaTruckFast,
  },
  {
    title: "Rail Freight",
    desc: "Cost-efficient intermodal rail corridors linking Asia and Europe.",
    href: "/services/rail-freight",
    icon: FaTrainSubway,
  },
  {
    title: "Customs Brokerage",
    desc: "Licensed clearance, duty optimisation and full trade compliance support.",
    href: "/services/customs-brokerage",
    icon: FaFileContract,
  },
  {
    title: "Warehousing",
    desc: "Bonded, ambient and temperature-controlled storage with live inventory.",
    href: "/services/warehousing",
    icon: FaWarehouse,
  },
  {
    title: "Project & Heavy Cargo",
    desc: "Route surveys, lifting plans and multi-axle transport for oversized loads.",
    href: "/services/project-cargo",
    icon: FaBoxesStacked,
  },
  {
    title: "Air-Sea & Sea-Air",
    desc: "Hybrid routings that balance ocean economics with air-freight speed.",
    href: "/services/hybrid-freight",
    icon: FaArrowsRotate,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-primary uppercase">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
            Complete Logistics Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            One partner for every mode, every lane and every regulation between your cargo and its destination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="h-full"
              >
                <Link
                  href={item.href}
                  className="group relative flex flex-col justify-between h-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 dark:hover:bg-slate-900"
                >
                  <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-[3] pointer-events-none" />

                  <div className="relative z-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white shadow-sm">
                      <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase">
                    <span>Read More</span>
                    <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}