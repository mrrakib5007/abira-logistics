"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaSearchMinus } from "react-icons/fa";
import PageHeader from "@/components/Shared/PageHeader";
import FAQSectionCard from "@/components/Cards/FAQSectionCard";

const faqs = [
  {
    category: "General",
    question: "What types of freight forwarding services does ABIRA Logistics offer?",
    answer: "We offer comprehensive global logistics solutions including Ocean Freight, Air Cargo, Intermodal Rail Logistics, Warehousing, Customs Clearance, and specialized Project Cargo transport."
  },
  {
    category: "Tracking",
    question: "How can I track the status of my shipment?",
    answer: "You can track your shipment in real-time by entering your tracking or Bill of Lading (BL) number into the tracking portal available on our website."
  },
  {
    category: "Customs",
    question: "Do you handle digital customs paperwork and tariff classification?",
    answer: "Yes, we utilize automated tariff classification and digital manifest filings to streamline cross-border clearances and eliminate port delays."
  },
  {
    category: "Shipping",
    question: "What are your peak season air cargo capacity management policies?",
    answer: "We actively secure optimized belly-hold space and dedicated freighter deployment across international corridors to stabilize rates and ensure flexibility during peak seasons."
  },
  {
    category: "Warehousing",
    question: "Are your warehouses equipped for pharmaceutical or temperature-sensitive cargo?",
    answer: "Yes, our certified cold storage hubs feature active IoT temperature telemetry to maintain strict temperature integrity for medical and pharmaceutical shipments."
  },
  {
    category: "General",
    question: "How do I request a corporate shipping quotation?",
    answer: "You can easily request a quote by visiting our Contact page, filling out our inquiry form, or reaching out directly to our support team via phone or email."
  }
];

export default function FAQClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <PageHeader
        title="Frequently Asked"
        highlightTitle="Questions."
        subtitle="Find clear answers regarding our global shipping, customs procedures, tracking, and supply chain solutions."
        breadcrumbs={[
          { label: "Company", href: "/company" },
          { label: "FAQ" }
        ]}
      />

      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="relative mb-12">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5 text-slate-400">
              <FaSearch className="h-4 w-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your question here..."
              className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-5 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
            />
          </div>

          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <FAQSectionCard
                  key={idx}
                  faq={faq}
                  idx={idx}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-16 px-4 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 shadow-inner">
                  <FaSearchMinus className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  No matching questions found
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                  We couldn&apos;t find anything matching &quot;{searchQuery}&quot;. Try searching with different keywords.
                </p>
              </motion.div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}