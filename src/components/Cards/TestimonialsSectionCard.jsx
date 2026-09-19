"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";

export default function TestimonialsSectionCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(item.rating)].map((_, i) => (
              <FaStar key={i} className="h-4 w-4" />
            ))}
          </div>
          <FaQuoteLeft className="h-8 w-8 text-primary/20 transition-transform duration-300 group-hover:scale-110" />
        </div>

        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 italic">
          &quot;{item.content}&quot;
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-slate-200 dark:border-slate-700">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {item.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {item.role}, <span className="text-primary font-medium">{item.company}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400" title="Verified Client">
          <FaCheckCircle className="h-4 w-4 text-blue-500" />
        </div>
      </div>
    </motion.div>
  );
}