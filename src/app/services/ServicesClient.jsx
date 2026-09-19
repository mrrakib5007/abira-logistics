"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GiCargoCrate, GiCommercialAirplane } from "react-icons/gi";
import { RiShipLine } from "react-icons/ri";
import { FiTruck, FiFileText, FiAnchor } from "react-icons/fi";
import { FaTrainSubway, FaWarehouse } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import PageHeader from "@/components/Shared/PageHeader";

const servicesData = {
  "air-freight": {
    title: "Air Freight",
    subtitle:
      "Express and consolidated air cargo with next-flight-out options worldwide.",
    description:
      "ABIRA Logistics provides fast, reliable, and flexible air freight forwarding solutions for businesses that require time-sensitive international transportation.",
    features: [
      "Next-flight-out options",
      "Global airline partnerships",
      "Real-time cargo tracking",
      "Secure handling for high-value goods",
    ],
    icon: GiCommercialAirplane,
    href: "/services/air-freight",
  },

  "ocean-freight": {
    title: "Ocean Freight",
    subtitle:
      "FCL, LCL and reefer sailings backed by long-standing carrier contracts.",
    description:
      "ABIRA Logistics delivers comprehensive ocean freight solutions for businesses moving cargo across international markets.",
    features: [
      "FCL & LCL consolidations",
      "Reefer container solutions",
      "Port-to-port and door-to-door",
      "Customs documentation support",
    ],
    icon: RiShipLine,
    href: "/services/ocean-freight",
  },

  "road-freight": {
    title: "Road Freight",
    subtitle:
      "FTL and LTL trucking with cross-border documentation handled end to end.",
    description:
      "Our road freight services provide dependable domestic and cross-border transportation solutions for businesses of all sizes.",
    features: [
      "FTL & LTL transport services",
      "Cross-border documentation",
      "GPS tracked vehicle fleets",
      "Secure transit protocols",
    ],
    icon: FiTruck,
    href: "/services/road-freight",
  },

  "rail-freight": {
    title: "Rail Freight",
    subtitle:
      "Cost-efficient intermodal rail corridors linking Asia and Europe.",
    description:
      "ABIRA Logistics provides efficient rail freight solutions for companies seeking a reliable alternative to traditional air and ocean transportation.",
    features: [
      "Intermodal rail corridors",
      "Eco-friendly transport",
      "Cost-effective bulk shipping",
      "Scheduled terminal departures",
    ],
    icon: FaTrainSubway,
    href: "/services/rail-freight",
  },

  "customs-brokerage": {
    title: "Customs Brokerage",
    subtitle:
      "Licensed clearance, duty optimisation and full trade compliance support.",
    description:
      "ABIRA Logistics helps businesses navigate complex customs procedures and international trade requirements with professional customs brokerage services.",
    features: [
      "Licensed customs brokerage",
      "Duty optimization strategies",
      "Digital manifest filings",
      "Trade compliance advisory",
    ],
    icon: FiFileText,
    href: "/services/customs-brokerage",
  },

  "warehousing": {
    title: "Warehousing",
    subtitle:
      "Bonded, ambient and temperature-controlled storage with live inventory.",
    description:
      "ABIRA Logistics offers secure and flexible warehousing solutions designed to support modern supply chains from storage to final distribution.",
    features: [
      "Bonded & ambient storage",
      "Temperature-controlled zones",
      "Live inventory visibility",
      "Advanced warehouse security",
    ],
    icon: FaWarehouse,
    href: "/services/warehousing",
  },

  "project-cargo": {
    title: "Project & Heavy Cargo",
    subtitle:
      "Route surveys, lifting plans and multi-axle transport for oversized loads.",
    description:
      "ABIRA Logistics specializes in complex project logistics and the transportation of oversized, heavy, and high-value industrial cargo.",
    features: [
      "Comprehensive route surveys",
      "Custom heavy lifting plans",
      "Multi-axle transport fleet",
      "On-site engineering supervision",
    ],
    icon: GiCargoCrate,
    href: "/services/project-cargo",
  },

  "hybrid-freight": {
    title: "Air-Sea & Sea-Air",
    subtitle:
      "Hybrid routings that balance ocean economics with air-freight speed.",
    description:
      "ABIRA Logistics provides flexible Air-Sea and Sea-Air multimodal freight solutions for businesses that need to balance transportation cost with delivery speed.",
    features: [
      "Cost-to-speed optimization",
      "Seamless multimodal transfer",
      "Flexible corridor routing",
      "Priority transit management",
    ],
    icon: FiAnchor,
    href: "/services/hybrid-freight",
  },
};

export default function ServicesClient() {
  return (
    <div className="bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <PageHeader
        title="Complete Logistics"
        highlightTitle="Solutions."
        subtitle="One partner for every mode, every lane and every regulation between your cargo and its destination."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(servicesData).map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
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
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 pt-4 flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase border-t border-slate-100 dark:border-slate-800/80">
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
    </div>
  );
}