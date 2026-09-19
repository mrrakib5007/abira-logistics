"use client";

import { useState } from "react";
import PageHeader from "@/components/Shared/PageHeader";
import NewsSectionCard from "../../components/Cards/NewsSectionCard";

const articles = [
  {
    category: "Air Freight",
    date: "12 Aug 2026",
    title: "Air Cargo Capacity Rebounds Ahead of Peak Season",
    desc: "Global airline networks restore capacity across transpacific corridors, creating new flexibility for time-critical electronics shipments.",
    image: "/assets/news/1.jpg",
    slug: "/news/air-cargo-capacity-rebounds"
  },
  {
    category: "Rail Logistics",
    date: "04 Aug 2026",
    title: "Why Intermodal Rail Is Winning Asia-Europe Volumes",
    desc: "Shippers embrace sustainable, reliable cross-continental rail freight corridors to cut transit times and carbon footprints.",
    image: "/assets/news/2.jpg",
    slug: "/news/intermodal-rail-asia-europe"
  },
  {
    category: "Warehousing",
    date: "27 Jul 2026",
    title: "Five Ways Smart Warehousing Cuts Fulfilment Costs",
    desc: "Automated guided vehicles and real-time inventory management reduce fulfillment cycles and pallet processing overhead.",
    image: "/assets/news/3.jpg",
    slug: "/news/smart-warehousing-cuts-costs"
  },
  {
    category: "Ocean Freight",
    date: "18 Jul 2026",
    title: "Navigating Global Maritime Regulations & Green Corridors",
    desc: "How new maritime emissions standards are reshaping carrier schedules, fuel strategies, and global container rates.",
    image: "/assets/news/4.jpg",
    slug: "/news/navigating-maritime-regulations"
  },
  {
    category: "Customs",
    date: "09 Jul 2026",
    title: "Streamlining Cross-Border Clearance with Digital Paperwork",
    desc: "Automated tariff classification and digital manifest filings eliminate port bottlenecks and tariff penalty risks.",
    image: "/assets/news/5.jpg",
    slug: "/news/streamlining-cross-border-clearance"
  },
  {
    category: "Project Cargo",
    date: "29 Jun 2026",
    title: "Engineering Complex Routes for Heavy Machinery Transport",
    desc: "A breakdown of structural route surveys, bridge load analyses, and escort protocols for oversized industrial components.",
    image: "/assets/news/6.jpg",
    slug: "/news/heavy-machinery-transport-routes"
  },
  {
    category: "Supply Chain",
    date: "15 Jun 2026",
    title: "Building Resilient Cold-Chain Logistics for Pharmaceuticals",
    desc: "Active IoT temperature telemetry and certified cold storage hubs safeguarding sensitive medical cargo worldwide.",
    image: "/assets/news/7.jpg",
    slug: "/news/resilient-cold-chain-logistics"
  }
];

export default function NewsClient() {
  const [visibleCount, setVisibleCount] = useState(20);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <PageHeader
        title="Industry Insights & Corporate"
        highlightTitle="News Updates."
        subtitle="Stay informed with the latest developments in ocean freight, air cargo, regulatory compliance, and global supply chain strategies from ABIRA Logistics."
        breadcrumbs={[{ label: "News" }]}
      />

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-8 dark:border-slate-800 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
                Latest Articles
              </span>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Logistics News & Analysis
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, visibleCount).map((item, idx) => (
              <NewsSectionCard key={item.title} article={item} index={idx} />
            ))}
          </div>

          {visibleCount < articles.length && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                See More
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/50 py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
            Stay Updated
          </span>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Subscribe to Freight & Trade Insights
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
            Get key logistics updates, tariff governance alerts, and market trends delivered straight to your inbox.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your corporate email"
              className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
              required
            />
            <button
              type="submit"
              className="shrink-0 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition-opacity duration-200 hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}