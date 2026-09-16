"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const slides = [
  {
    tag: "Air Freight",
    title: "Fast Air Cargo Across 200+ Destinations",
    desc: "Time-critical shipments delivered with charter-grade speed and full customs coverage.",
    image: "/assets/banner/slide-air.jpg",
    link: "/services/air-freight",
  },
  {
    tag: "Ocean Freight",
    title: "Ocean Freight Built For Global Scale",
    desc: "FCL and LCL sailings on every major trade lane with live port-to-port visibility.",
    image: "/assets/banner/slide-sea.jpg",
    link: "/services/ocean-freight",
  },
  {
    tag: "Land Transport",
    title: "Reliable Road & Rail Distribution",
    desc: "Cross-border trucking and intermodal rail networks that keep your freight moving.",
    image: "/assets/banner/slide-road.jpg",
    link: "/services/road-freight",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[85vh] min-h-145 lg:h-[calc(100vw*9/16)] lg:max-h-[82vh] overflow-hidden bg-slate-950 flex items-center">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            loading="eager"
            sizes="100vw"
            quality={85}
            className={`object-cover object-center ${
              index === currentSlide ? "animate-kenburns" : ""
            }`}
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/65 via-slate-950/45 to-slate-950/10 sm:to-transparent" />
        </div>
      ))}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left max-w-2xl text-white mx-auto sm:mx-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/40 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>{slides[currentSlide].tag}</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white drop-shadow-md">
            {slides[currentSlide].title}
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-100 drop-shadow-sm">
            {slides[currentSlide].desc}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 w-full sm:w-auto">
            <Link
              href={slides[currentSlide].link}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-xl shadow-primary/25 hover:bg-primary-hover hover:-translate-y-0.5 transition cursor-pointer group w-full sm:w-auto"
            >
              <span>Discover Now</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-slate-950/20 px-8 py-4 text-sm font-bold text-white backdrop-blur-md hover:bg-white/10 transition cursor-pointer w-full sm:w-auto shadow-sm"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              index === currentSlide
                ? "w-12 bg-primary"
                : "w-6 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}