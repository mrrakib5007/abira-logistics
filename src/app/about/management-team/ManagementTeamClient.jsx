"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { FiAward, FiShield, FiCpu, FiUsers } from "react-icons/fi";
import PageHeader from "@/components/Shared/PageHeader";
import { FaArrowRight } from "react-icons/fa";

const leaders = [
  {
    name: "Mr. Shafait Khan",
    designation: "Managing Director",
    company: "ABIRA Logistics Ltd.",
    image: "/assets/team/shafait-khan.jpg",
    phone: "+88 01718-727 658",
    email: "khan@abira.com.bd",
    careerDetails: `Leading the strategic vision and operational architecture at ABIRA Logistics, Mr. Shafait Khan blends maritime trade acumen with scalable enterprise automation. His command over international commercial treaties, legal frameworks, and digital forwarding ensures reliable, frictionless execution for global supply chains.\n\nHe holds a B.B.A. and M.B.A. in Management from the National University of Bangladesh, alongside an LL.B. degree from Ideal Law College.\n\nBeginning his maritime journey in bulk shipping in 2016, he previously led critical export supply chain pipelines at leading textile conglomerates including ACS Textiles (Bangladesh) Ltd., giving him profound insight into cross-border manufacturing logistics.`,
  },
  {
    name: "Ms. Fahmida Chowdhury",
    designation: "Director, Global Freight & Air Operations",
    company: "ABIRA Logistics Ltd.",
    image: "/assets/team/fahmida-chowdhury.jpg",
    phone: "+88 01712-334 455",
    email: "fahmida@abira.com.bd",
    careerDetails: `Overseeing global air chartering and ocean consolidation corridors, Ms. Fahmida Chowdhury brings over 14 years of commercial carrier negotiation and routing strategy to the firm.\n\nShe holds a Master's degree in Supply Chain Management from the Institute of Business Administration (IBA), University of Dhaka, and is certified in IATA Dangerous Goods Regulations.\n\nPrior to joining ABIRA, she served as General Manager of Freight Forwarding at an international logistics group, specializing in high-value garment air freight, peak-season slot chartering, and fast-track transshipment hubs across Southeast Asia.`,
  },
  {
    name: "Mr. Tanvir Ahmed",
    designation: "Head of Customs Brokerage & Port Operations",
    company: "ABIRA Logistics Ltd.",
    image: "/assets/team/tanvir-ahmed.jpg",
    phone: "+88 01819-556 677",
    email: "tanvir@abira.com.bd",
    careerDetails: `Directing on-ground port clearances, bond management, and cross-border trucking, Mr. Tanvir Ahmed commands over 18 years of direct terminal experience across Chattogram Sea Port and Dhaka Airport Customs House.\n\nHe completed his Bachelor's degree in International Trade from the University of Chittagong and holds an authorized Customs Brokerage License from the National Board of Revenue (NBR).\n\nHis technical mastery of HS-code classifications, port gate tariffs, and EDI declarations ensures that import consignments navigate terminal inspections with zero regulatory lag.`,
  },
  {
    name: "Mr. Kazi Arifur Rahman",
    designation: "Head of Technology & Enterprise Systems",
    company: "ABIRA Logistics Ltd.",
    image: "/assets/team/arifur-rahman.jpg",
    phone: "+88 01911-778 899",
    email: "arif@abira.com.bd",
    careerDetails: `Spearheading digital modernization, Mr. Kazi Arifur Rahman leads the engineering of ABIRA's internal enterprise telemetry, API-driven container tracking systems, and paperless logistics portals.\n\nHe graduated with a B.Sc. in Computer Science & Engineering from BRAC University and completed executive training in Supply Chain Big Data Analytics.\n\nWith more than a decade of experience designing freight software architectures, he has implemented automated milestone tracking and API integrations with leading global sea and air carriers.`,
  },
];

const pillars = [
  {
    title: "25+ Years Institutional Know-How",
    desc: "Leadership grounded in sea-carrier operations, customs brokerage protocols, and international shipping alliances.",
    icon: FiAward,
  },
  {
    title: "Legal & Regulatory Compliance",
    desc: "Direct in-house legal insight ensuring strict Incoterms alignment, cargo safety, and customs risk mitigation.",
    icon: FiShield,
  },
  {
    title: "Automated Logistics Workflows",
    desc: "Deploying paperless documentation, accurate freight tracking metrics, and responsive digital dispatch systems.",
    icon: FiCpu,
  },
  {
    title: "Customer-Centric Execution",
    desc: "Personalized operational oversight dedicated to monitoring every shipment milestone with round-the-clock responsiveness.",
    icon: FiUsers,
  },
];

export default function ManagementTeamClient() {
  return (
    <div className="bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 overflow-x-hidden">
      <PageHeader
        title="Our Management"
        highlightTitle="Team"
        subtitle="The driving force behind ABIRA Logistics operations, strategy, and excellence."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Management Team" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {leaders.map((leader, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: isEven ? 100 : -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-6 will-change-transform"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
                    <div
                      className={`md:col-span-4 flex flex-col items-center ${
                        isEven
                          ? "md:order-2 md:items-end text-center md:text-right"
                          : "md:order-1 sm:items-start text-center sm:text-left"
                      }`}
                    >
                      <div className="relative p-1 rounded-2xl border-2 border-primary/20 bg-linear-to-tr from-primary/10 via-transparent to-primary/5 transition-colors duration-300 group-hover:border-primary">
                        <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-inner dark:border-slate-800 dark:bg-slate-800">
                          <Image
                            src={leader.image}
                            alt={leader.name}
                            fill
                            sizes="176px"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                        </div>
                      </div>

                      <div
                        className={`mt-3.5 space-y-1 w-full flex flex-col ${
                          isEven
                            ? "items-center md:items-end"
                            : "items-center sm:items-start"
                        }`}
                      >
                        <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                          {leader.name}
                        </h2>
                        <p className="text-xs font-bold text-primary">
                          {leader.designation}
                        </p>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {leader.company}
                        </p>

                        <div
                          className={`pt-2 space-y-1 flex flex-col ${
                            isEven
                              ? "items-center md:items-end"
                              : "items-center sm:items-start"
                          }`}
                        >
                          <a
                            href={`tel:${leader.phone.replace(/\s+/g, "")}`}
                            className={`flex items-center gap-1.5 text-xs text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors ${
                              isEven ? "md:flex-row-reverse" : "flex-row"
                            }`}
                          >
                            <FaPhone className="h-3 w-3 text-primary shrink-0" />
                            <span>Cell : {leader.phone}</span>
                          </a>
                          <a
                            href={`mailto:${leader.email}`}
                            className={`flex items-center gap-1.5 text-xs text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors ${
                              isEven ? "md:flex-row-reverse" : "flex-row"
                            }`}
                          >
                            <FaEnvelope className="h-3 w-3 text-primary shrink-0" />
                            <span>Email : {leader.email}</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`md:col-span-8 flex flex-col justify-between h-full border-t border-slate-100 pt-4 md:border-t-0 md:pt-0 ${
                        isEven ? "md:order-1 md:pr-6" : "md:order-2 md:pl-6"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="h-0.5 w-6 bg-primary" />
                          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                            Career Profile & Objective
                          </h3>
                        </div>

                        <p className="mt-3 whitespace-pre-line text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm text-left">
                          {leader.careerDetails}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/50 py-12 dark:border-slate-800 dark:bg-slate-900/40 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
              Management Culture
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Built on Accountability & Forward Thinking
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
              Our leaders remain personally engaged across operations to eliminate administrative delays and optimize supply routes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                >
                  <div>
                    <div className="mb-3.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <PillarIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30 sm:text-sm"
            >
              <span>Connect with Our Executive Desk</span>
              <FaArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}