import Link from "next/link";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    "name": "ABIRA Logistics & Transport Service Bangladesh",
    "image": "https://abira.com/assets/news/4.jpg",
    "telephone": "+8801718727658",
    "url": "https://abira.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.8103",
      "longitude": "90.4125"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Bangladesh"
    },
    "description": "Leading logistics and freight transport service provider in Bangladesh offering air, ocean, and inland supply chain solutions.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BDT",
      "name": "Free Logistics Cost & Routing Quote"
    }
  };

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-slate-950 bg-[url('/assets/news/4.jpg')] bg-fixed bg-cover bg-center py-12 sm:py-16"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="absolute inset-0 bg-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <header className="max-w-2xl text-center lg:text-left">
            <h2
              id="cta-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight"
            >
              Looking for the Best Logistics & Transport Service in Bangladesh?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              From inland freight to global shipping-tell us your cargo route across Bangladesh and worldwide. Get a tailored routing plan and quotation within 24 hours.
            </p>
          </header>

          <div className="flex flex-col gap-3 w-full sm:w-64 shrink-0">
            <Link
              href="/contact"
              title="Request a Free Logistics Quote in Bangladesh"
              aria-label="Request a Free Logistics Quote in Bangladesh"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>

            <a
              href="tel:+8801718727658"
              title="Call ABIRA Logistics Support Desk"
              aria-label="Call ABIRA Logistics support desk at +880 1718-727658"
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 py-3 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <FaPhoneAlt className="h-3 w-3 text-primary" aria-hidden="true" />
              <span>+880 1718-727658</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}