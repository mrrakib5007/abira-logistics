"use client";

import {
  FaHandshake,
  FaSliders,
  FaMicrochip,
  FaUserCheck,
} from "react-icons/fa6";
import { FiTarget, FiEye } from "react-icons/fi";
import PageHeader from "@/components/Shared/PageHeader";

const valuePropositions = [
  {
    title: "Competitive Route & Rate Optimization",
    desc: "Leveraging high-volume maritime contracts and carrier allocations to minimize landed freight expenditure without sacrificing handling quality.",
    icon: FaSliders,
  },
  {
    title: "Veteran Operational Command",
    desc: "Every import, export, air, and ocean transit is managed by logistics specialists with 15 to 20 years of hands-on border and carrier expertise.",
    icon: FaUserCheck,
  },
  {
    title: "Incoterms & Regulatory Governance",
    desc: "Strict adherence to International Commercial Terms (Incoterms) and domestic customs statutes to ensure audit-proof, risk-free dispatch.",
    icon: FaHandshake,
  },
  {
    title: "Data-Driven Cargo Transparency",
    desc: "Modern shipment telemetry and dedicated account dispatchers tracking milestone status updates in real time from origin to final consignee.",
    icon: FaMicrochip,
  },
];

export default function AboutClient() {
  return (
    <div className="bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <PageHeader
        title="Delivering Excellence in Global Freight &"
        highlightTitle="Custom Solutions."
        subtitle="ABIRA Logistics was founded to solve the intricate puzzle of international supply chains. We operate at the intersection of local border compliance and expansive global ocean-air transport corridors."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
                Tailor-Made Logistics
              </span>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Precision Transport Engineered for Commercial Advantage
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
                Every commercial enterprise operates under distinct cargo dynamics. Rather than offering standardized freight packages, our operational model is built around deep consultation, analyzing your supply schedules to deploy tailor-made shipping routes.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                Backed by an international partner alliance across major industrial hubs, we synchronize import and export pipelines with strict tariff governance, securing direct commercial rates to lower your total landed logistics costs.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 dark:border-slate-800 dark:bg-slate-900/50 sm:p-10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                The ABIRA Operational Standard
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Proactive shipment feedback loops managed by dedicated tracking officers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Rigorous alignment with up-to-date domestic and global maritime treaties.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Direct air and sea carrier capacity bookings for both FCL and consolidated LCL cargo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Secure handling, compliant documentation, and dependable transit financial settlements.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/50 py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
              Core Capabilities
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              What We Deliver to Enterprise Shippers
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Combining institutional maritime relationships with contemporary execution technology.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valuePropositions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-7"
                >
                  <div>
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
              Guiding Principles
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Our Strategic Focus
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FiTarget className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Our Mission
              </h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                To deliver integrated, seamless transportation solutions grounded in robust international commercial agreements, reducing supply chain friction, optimizing tariff expenses, and fulfilling our customer&apos;s delivery timelines without compromise.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FiEye className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Our Vision
              </h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                To stand as the most dependable and benchmark logistics brand in the region by innovating operational workflows through modern tracking technology, upholding full regulatory compliance, and operating with uncompromising financial integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}