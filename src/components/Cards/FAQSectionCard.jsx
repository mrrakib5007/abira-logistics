"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function FAQSectionCard({ faq, idx, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className={`rounded-2xl transition-all duration-300 ${
        isOpen
          ? "border border-primary/30 bg-primary/4 dark:bg-primary/6 shadow-sm"
          : "border border-gray-200 dark:border-gray-800 bg-transparent"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
      >
        <span
          className={`text-sm sm:text-base font-bold transition-colors duration-300 ${
            isOpen ? "text-primary" : "text-slate-900 dark:text-white"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
            isOpen
              ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
              : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-slate-800"
          }`}
        >
          {isOpen ? <FaMinus className="h-3.5 w-3.5" /> : <FaPlus className="h-3.5 w-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 sm:px-6 pt-0 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 border-t border-primary/10 mt-1">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}