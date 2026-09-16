"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";

export default function NewsSectionCard({ article, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 dark:hover:bg-slate-900"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <span className="absolute top-4 left-4 rounded-lg bg-primary px-3 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md shadow-primary/30">
          {article.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
            <FiCalendar className="h-3.5 w-3.5 text-primary" />
            <span>{article.date}</span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-primary leading-snug">
            <Link href={article.slug}>
              {article.title}
            </Link>
          </h3>
          
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <Link
            href={article.slug}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <span>Read Article</span>
            <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}