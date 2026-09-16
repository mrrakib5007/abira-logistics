"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaPaperPlane } from "react-icons/fa6";
import Swal from "sweetalert2";

const faqs = [
  {
    id: 1,
    question: "What logistics services does ABIRA provide?",
    answer:
      "We offer comprehensive supply chain solutions including Air Freight, Ocean Freight, Multimodal Rail Logistics, Temperature-Controlled Cold Chain, and Custom Project Cargo Handling.",
  },
  {
    id: 2,
    question: "How can I track my shipment in real-time?",
    answer:
      "You can enter your unique Tracking ID or Master Air Waybill (MAWB) number directly into our live tracking portal to view real-time GPS telemetry and milestone status updates.",
  },
  {
    id: 3,
    question: "Do you offer customs clearance support?",
    answer:
      "Yes, our specialized in-house brokerage team manages full regulatory filings, digital manifest declarations, and compliance checks across all major domestic and international ports.",
  },
  {
    id: 4,
    question: "What are your standard transit delivery times?",
    answer:
      "Express air freight typically delivers within 24 to 72 hours, while standard sea freight and transcontinental rail solutions depend on port congestion, origin, and destination lanes.",
  },
  {
    id: 5,
    question: "Are cold-chain sensitive products insured?",
    answer:
      "All pharmaceutical and temperature-sensitive shipments are monitored with calibrated active IoT sensors and protected under our comprehensive cargo transit coverage policies.",
  },
];

export default function QnASection() {
  const [openId, setOpenId] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Custom Query Submission:", formData);

    Swal.fire({
      title: "Query Submitted!",
      text: "Thank you for reaching out. Our support team will get back to you soon.",
      icon: "success",
      confirmButtonColor: "var(--color-primary, #2563eb)",
      customClass: {
        popup: "rounded-3xl dark:bg-slate-900 dark:text-white",
        confirmButton: "rounded-xl font-bold px-6 py-2.5",
      },
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-primary uppercase">
            Help & Queries
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-300 ${
                    isOpen
                      ? "border border-primary/30 bg-primary/4 dark:bg-primary/6 shadow-sm"
                      : "border border-gray-200 dark:border-gray-50 bg-transparent"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
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
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase">
                Custom Query
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Have Any Specific Question?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Fill out the form below and our operations support team will respond directly.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rakibul Islam"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Custom Clearance Inquiry"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Query Details
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Explain your specific requirement..."
                    className="w-full resize-none rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary-hover hover:-translate-y-0.5 transition cursor-pointer"
                >
                  <span>Submit Query</span>
                  <FaPaperPlane className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}