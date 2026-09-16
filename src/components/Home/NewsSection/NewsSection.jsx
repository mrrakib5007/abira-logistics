"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import NewsSectionCard from "../../Cards/NewsSectionCard";

const articles = [
  {
    "category": "Air Freight",
    "date": "12 Aug 2026",
    "title": "Air Cargo Capacity Rebounds Ahead of Peak Season",
    "desc": "Global airline networks restore capacity across transpacific corridors, creating new flexibility for time-critical electronics shipments.",
    "image": "/assets/news/1.jpg",
    "slug": "/blog/air-cargo-capacity-rebounds"
  },
  {
    "category": "Rail Logistics",
    "date": "04 Aug 2026",
    "title": "Why Intermodal Rail Is Winning Asia-Europe Volumes",
    "desc": "Shippers embrace sustainable, reliable cross-continental rail freight corridors to cut transit times and carbon footprints.",
    "image": "/assets/news/2.jpg",
    "slug": "/blog/intermodal-rail-asia-europe"
  },
  {
    "category": "Warehousing",
    "date": "27 Jul 2026",
    "title": "Five Ways Smart Warehousing Cuts Fulfilment Costs",
    "desc": "Automated guided vehicles and real-time inventory management reduce fulfillment cycles and pallet processing overhead.",
    "image": "/assets/news/3.jpg",
    "slug": "/blog/smart-warehousing-cuts-costs"
  },
  {
    "category": "Ocean Freight",
    "date": "18 Jul 2026",
    "title": "Navigating Global Maritime Regulations & Green Corridors",
    "desc": "How new maritime emissions standards are reshaping carrier schedules, fuel strategies, and global container rates.",
    "image": "/assets/news/4.jpg",
    "slug": "/blog/navigating-maritime-regulations"
  },
  {
    "category": "Customs",
    "date": "09 Jul 2026",
    "title": "Streamlining Cross-Border Clearance with Digital Paperwork",
    "desc": "Automated tariff classification and digital manifest filings eliminate port bottlenecks and tariff penalty risks.",
    "image": "/assets/news/5.jpg",
    "slug": "/blog/streamlining-cross-border-clearance"
  },
  {
    "category": "Project Cargo",
    "date": "29 Jun 2026",
    "title": "Engineering Complex Routes for Heavy Machinery Transport",
    "desc": "A breakdown of structural route surveys, bridge load analyses, and escort protocols for oversized industrial components.",
    "image": "/assets/news/6.jpg",
    "slug": "/blog/heavy-machinery-transport-routes"
  },
  {
    "category": "Supply Chain",
    "date": "15 Jun 2026",
    "title": "Building Resilient Cold-Chain Logistics for Pharmaceuticals",
    "desc": "Active IoT temperature telemetry and certified cold storage hubs safeguarding sensitive medical cargo worldwide.",
    "image": "/assets/news/7.jpg",
    "slug": "/blog/resilient-cold-chain-logistics"
  }
]

export default function NewsSection() {
  const displayedArticles = articles.slice(0, 6);
  const showMoreButton = articles.length > 6;

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-primary uppercase">
            Latest News
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
            Our Recent Articles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedArticles.map((item, idx) => (
            <NewsSectionCard key={item.title} article={item} index={idx} />
          ))}
        </div>

        {showMoreButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-xl shadow-primary/25 hover:bg-primary-hover hover:-translate-y-0.5 transition cursor-pointer group"
            >
              <span>View All Articles</span>
              <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  );
}