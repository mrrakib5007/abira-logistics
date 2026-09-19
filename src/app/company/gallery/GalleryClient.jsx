"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaXmark,
  FaLocationDot,
  FaChevronLeft,
  FaChevronRight,
  FaImage,
  FaArrowRight,
} from "react-icons/fa6";
import PageHeader from "@/components/Shared/PageHeader";

const categories = [
  "All",
  "Annual Gala",
  "Cultural Days",
  "Team Building",
  "CSR & Charity",
];

const galleryItems = [
  {
    id: 1,
    location: "Bangkok, Thailand",
    category: "Annual Gala",
    image: "/assets/gallery/1.jpg",
  },
  {
    id: 2,
    location: "Bangkok, Thailand",
    category: "Annual Gala",
    image: "/assets/gallery/2.jpg",
  },
  {
    id: 3,
    location: "Bangkok, Thailand",
    category: "Annual Gala",
    image: "/assets/gallery/3.jpg",
  },
  {
    id: 4,
    location: "Bangkok, Thailand",
    category: "Annual Gala",
    image: "/assets/gallery/4.jpg",
  },
  {
    id: 5,
    location: "Bangkok, Thailand",
    category: "Annual Gala",
    image: "/assets/gallery/5.jpg",
  },
  {
    id: 6,
    location: "Bangkok, Thailand",
    category: "Annual Gala",
    image: "/assets/gallery/6.jpg",
  },
  {
    id: 7,
    location: "Bangkok, Thailand",
    category: "Annual Gala",
    image: "/assets/gallery/7.jpg",
  },
  {
    id: 8,
    location: "Bangkok, Thailand",
    category: "Annual Gala",
    image: "/assets/gallery/8.jpg",
  },
  {
    id: 9,
    location: "Bangkok, Thailand",
    category: "Annual Gala",
    image: "/assets/gallery/1.jpg",
  },
  {
    id: 10,
    location: "Bangkok, Thailand",
    category: "Annual Gala",
    image: "/assets/gallery/2.jpg",
  },
  {
    id: 11,
    location: "Bangkok, Thailand",
    category: "Cultural Days",
    image: "/assets/gallery/3.jpg",
  },
  {
    id: 12,
    location: "Bangkok, Thailand",
    category: "Annual Gala",
    image: "/assets/gallery/4.jpg",
  },
  {
    id: 13,
    location: "Bangkok, Thailand",
    category: "Cultural Days",
    image: "/assets/gallery/5.jpg",
  },
  {
    id: 14,
    location: "Bangkok, Thailand",
    category: "Team Building",
    image: "/assets/gallery/6.jpg",
  },
  {
    id: 15,
    location: "Bangkok, Thailand",
    category: "CSR & Charity",
    image: "/assets/gallery/7.jpg",
  },
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const showLoadMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const handlePrev = useCallback(
    (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      setSelectedIndex((prev) =>
        prev === 0 ? displayedItems.length - 1 : prev - 1,
      );
    },
    [displayedItems.length],
  );

  const handleNext = useCallback(
    (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      setSelectedIndex((prev) =>
        prev === displayedItems.length - 1 ? 0 : prev + 1,
      );
    },
    [displayedItems.length],
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <div className="bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <PageHeader
        title="Our Complete"
        highlightTitle="Photo Gallery."
        subtitle="Explore all our memorable moments, corporate events, cultural celebrations, and team milestones from around the world."
        breadcrumbs={[
          { label: "Company", href: "/company" },
          { label: "Gallery" },
        ]}
      />

      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(12);
                  setSelectedIndex(null);
                }}
                className={`rounded-none px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {displayedItems.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            >
              <AnimatePresence mode="popLayout">
                {displayedItems.map((item, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.5,
                      delay: (idx % 4) * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    key={item.id}
                    onClick={() => setSelectedIndex(idx)}
                    className="group relative aspect-3/2 w-full cursor-pointer overflow-hidden rounded-none border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-none">
                      <Image
                        src={item.image}
                        alt="Gallery photo"
                        fill
                        priority={idx < 4}
                        loading={idx < 4 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div className="absolute bottom-3 left-3 z-10 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <div className="inline-flex items-center gap-1.5 rounded-none bg-white/90 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-slate-800 border border-slate-200/80 shadow-md">
                          <FaLocationDot className="h-3 w-3 text-primary shrink-0" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center py-20 px-4 border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 shadow-inner">
                <FaImage className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                No Images Found
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                There are currently no photos uploaded in the &quot;
                {activeCategory}&quot; category.
              </p>
            </motion.div>
          )}

          {showLoadMore && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 text-center"
            >
              <button
                type="button"
                onClick={handleLoadMore}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 transition cursor-pointer group"
              >
                <span>Show More</span>
                <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && displayedItems[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 lg:p-8 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[min(90vw,1000px)] aspect-3/2 max-h-[85vh] overflow-hidden rounded-none shadow-2xl"
            >
              <div className="relative h-full w-full overflow-hidden rounded-none bg-transparent">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={displayedItems[selectedIndex].id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={displayedItems[selectedIndex].image}
                      alt="Enlarged view"
                      fill
                      priority
                      loading="eager"
                      sizes="(max-width: 1024px) 90vw, 1000px"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute top-3 left-3 z-20">
                  <span className="inline-block rounded-none bg-black/70 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-white border border-white/20 shadow-lg tracking-wider">
                    {selectedIndex + 1} / {displayedItems.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-none bg-black/70 text-white hover:bg-primary border border-white/20 shadow-lg transition-colors cursor-pointer"
                >
                  <FaXmark className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-none bg-black/70 text-white hover:bg-primary border border-white/20 shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <FaChevronLeft className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-none bg-black/70 text-white hover:bg-primary border border-white/20 shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <FaChevronRight className="h-4 w-4" />
                </button>

                <div className="absolute bottom-3 left-3 z-20">
                  <div className="inline-flex items-center gap-2 rounded-none bg-black/70 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white border border-white/20 shadow-lg">
                    <FaLocationDot className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{displayedItems[selectedIndex].location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
