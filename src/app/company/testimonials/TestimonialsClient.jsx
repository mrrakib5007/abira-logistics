"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import PageHeader from "@/components/Shared/PageHeader";
import TestimonialsSectionCard from "@/components/Cards/TestimonialsSectionCard";

const testimonials = [
  {
    name: "Alexander Wright",
    role: "Supply Chain Director",
    company: "Global Tech Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    content: "ABIRA Logistics has completely transformed our transpacific electronic shipments. Their real-time telemetry and air cargo capacity management have cut our delivery delays by nearly 40%. Truly a reliable partner!",
    rating: 5,
  },
  {
    name: "Fatima Al-Hassan",
    role: "Operations Head",
    company: "MedPharm Global",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    content: "Maintaining strict cold-chain integrity for our medical supplies is critical. ABIRA's active IoT telemetry and certified cold storage hubs give us absolute peace of mind worldwide.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Import Manager",
    company: "Apex Industrial Corp",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    content: "Transporting oversized heavy machinery requires precise structural surveys and escort protocols. ABIRA handled our complex project cargo flawlessly from factory floor to site.",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    role: "Logistics Coordinator",
    company: "EuroTrade Retail",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    content: "Their intermodal rail freight solutions between Asia and Europe have significantly optimized our transport costs and carbon footprint. Highly professional team!",
    rating: 5,
  },
  {
    name: "Tanvir Ahmed",
    role: "Managing Director",
    company: "Bengal Exports Ltd",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
    content: "Digital manifest filings and seamless customs clearance have eliminated all our port bottlenecks. ABIRA Logistics is undoubtedly the top freight forwarder in the region.",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    role: "Procurement Manager",
    company: "Nordic Freight Group",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    content: "Exceptional customer support available around the clock. Whenever we face tight shipping schedules, ABIRA always steps up with innovative and flexible solutions.",
    rating: 5,
  },
  {
    name: "David Miller",
    role: "Operations Director",
    company: "Pacific Transports",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
    content: "Seamless communication and absolute dedication to deadlines. Their warehouse automation strategies have saved us countless operational hours.",
    rating: 5,
  },
  {
    name: "Aisha Khan",
    role: "Supply Chain Lead",
    company: "Orion Retail Hub",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    content: "The best freight forwarder we have partnered with. Their custom clearance tracking keeps our seasonal inventory moving without any friction.",
    rating: 5,
  },
  {
    name: "Liam O'Connor",
    role: "Logistics Manager",
    company: "Atlantic Shipping Co",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300&auto=format&fit=crop",
    content: "Reliable, transparent, and prompt. Their multi-modal transport options give us the flexibility we need across different continents.",
    rating: 5,
  },
  {
    name: "Nari Park",
    role: "Global Sourcing Lead",
    company: "Seoul Electronics",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    content: "Unmatched air cargo flexibility during peak seasons. ABIRA's network has consistently ensured our components arrive right on schedule.",
    rating: 5,
  },
  {
    name: "Carlos Mendez",
    role: "Director of Imports",
    company: "Latam Goods",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop",
    content: "Great support team and hassle-free documentation handling. They make complex cross-border trade look effortless.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Supply Chain Analyst",
    company: "Vertex Industries",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    content: "Very impressed with their green corridor maritime initiatives and sustainable logistics execution. Highly recommended!",
    rating: 5,
  },
  {
    name: "Kaito Tanaka",
    role: "Operations Manager",
    company: "Nippon Freight",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    content: "Top-tier project cargo handling for our heavy industrial equipment. Professionalism at its finest.",
    rating: 5,
  },
  {
    name: "Zoe Dubois",
    role: "Head of Logistics",
    company: "Parisian Elegance",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    content: "Their responsiveness and attention to detail during customs clearances are second to none.",
    rating: 5,
  },
  {
    name: "Hassan Al-Mansoor",
    role: "Managing Partner",
    company: "Gulf Logistics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    content: "A truly global partner that understands regional challenges and solves them with ease.",
    rating: 5,
  }
];

export default function TestimonialsClient() {
  const [visibleCount, setVisibleCount] = useState(9);

  const displayedTestimonials = testimonials.slice(0, visibleCount);
  const showLoadMore = visibleCount < testimonials.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <PageHeader
        title="What Our Clients"
        highlightTitle="Say."
        subtitle="Discover how our commitment to reliability, speed, and seamless supply chain management has earned the trust of global businesses."
        breadcrumbs={[
          { label: "Company", href: "/company" },
          { label: "Testimonials" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedTestimonials.map((item, idx) => (
              <TestimonialsSectionCard key={item.name + idx} item={item} index={idx} />
            ))}
          </div>

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
                <span>Load More</span>
                <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}