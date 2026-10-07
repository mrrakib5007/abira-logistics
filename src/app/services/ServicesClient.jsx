"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GiCargoCrate, GiCommercialAirplane } from "react-icons/gi";
import { RiShipLine } from "react-icons/ri";
import { FiTruck, FiFileText, FiAnchor, FiCheck } from "react-icons/fi";
import { FaTrainSubway, FaWarehouse } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import PageHeader from "@/components/Shared/PageHeader";

const servicesData = {
  "air-freight": {
    title: "Air Freight",
    subtitle:
      "Express and consolidated air cargo with next-flight-out options worldwide.",
    description:
      "ABIRA Logistics provides fast, reliable, and flexible air freight forwarding solutions designed specifically for businesses that require high-speed, time-sensitive international transportation.",
    features: [
      "Next-flight-out options",
      "Global airline partnerships",
      "Real-time cargo tracking",
      "Secure handling for high-value goods",
    ],
    icon: "air",
    href: "/services/air-freight",
  },

  "ocean-freight": {
    title: "Ocean Freight",
    subtitle:
      "FCL, LCL and reefer sailings backed by long-standing carrier contracts.",
    description:
      "ABIRA Logistics delivers comprehensive, cost-effective, and robust ocean freight solutions tailored for businesses moving large volumes of cargo across international trade lanes and continents.",
    features: [
      "FCL & LCL consolidations",
      "Reefer container solutions",
      "Port-to-port and door-to-door",
      "Customs documentation support",
    ],
    icon: "ocean",
    href: "/services/ocean-freight",
  },

  "road-freight": {
    title: "Road Freight",
    subtitle:
      "FTL and LTL trucking with cross-border documentation handled end to end.",
    description:
      "Our advanced road freight services provide highly dependable domestic and seamless cross-border transportation networks for growing businesses of all scales and industries.",
    features: [
      "FTL & LTL transport services",
      "Cross-border documentation",
      "GPS tracked vehicle fleets",
      "Secure transit protocols",
    ],
    icon: "road",
    href: "/services/road-freight",
  },

  "rail-freight": {
    title: "Rail Freight",
    subtitle:
      "Cost-efficient intermodal rail corridors linking Asia and Europe.",
    description:
      "ABIRA Logistics provides highly efficient and sustainable rail freight solutions for companies seeking a high-value, reliable alternative to traditional air and ocean transport models.",
    features: [
      "Intermodal rail corridors",
      "Eco-friendly transport",
      "Cost-effective bulk shipping",
      "Scheduled terminal departures",
    ],
    icon: "rail",
    href: "/services/rail-freight",
  },

  "customs-brokerage": {
    title: "Customs Brokerage",
    subtitle:
      "Licensed clearance, duty optimisation and full trade compliance support.",
    description:
      "ABIRA Logistics empowers businesses to effortlessly clear complex international regulatory barriers, statutory trade laws, and intricate border procedures through our licensed customs brokerage expertise.",
    features: [
      "Licensed customs brokerage",
      "Duty optimization strategies",
      "Digital manifest filings",
      "Trade compliance advisory",
    ],
    icon: "customs",
    href: "/services/customs-brokerage",
  },

  "warehousing": {
    title: "Warehousing",
    subtitle:
      "Bonded, ambient and temperature-controlled storage with live inventory.",
    description:
      "ABIRA Logistics delivers secure, highly adaptable, and technologically advanced warehousing and inventory management solutions engineered to back modern, fast-paced supply chains from initial storage to final customer distribution.",
    features: [
      "Bonded & ambient storage",
      "Temperature-controlled zones",
      "Live inventory visibility",
      "Advanced warehouse security",
    ],
    icon: "warehouse",
    href: "/services/warehousing",
  },

  "project-cargo": {
    title: "Project & Heavy Cargo",
    subtitle:
      "Route surveys, lifting plans and multi-axle transport for oversized loads.",
    description:
      "ABIRA Logistics stands as an industry leader in managing extraordinarily complex project logistics, out-of-gauge (OOG) dimensions, heavy industrial machinery, and high-stakes capital equipment.",
    features: [
      "Comprehensive route surveys",
      "Custom heavy lifting plans",
      "Multi-axle transport fleet",
      "On-site engineering supervision",
    ],
    icon: "project",
    href: "/services/project-cargo",
  },

  "hybrid-freight": {
    title: "Air-Sea & Sea-Air",
    subtitle:
      "Hybrid routings that balance ocean economics with air-freight speed.",
    description:
      "ABIRA Logistics offers highly versatile Air-Sea and Sea-Air multimodal transport frameworks built specifically for enterprises striving to optimize the strict balance between international shipping expenditure and delivery velocity.",
    features: [
      "Cost-to-speed optimization",
      "Seamless multimodal transfer",
      "Flexible corridor routing",
      "Priority transit management",
    ],
    icon: "hybrid",
    href: "/services/hybrid-freight",
  },
};

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
              const IconComponent = iconMap[item.icon] || FiCheck;
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
                        <IconComponent className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
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