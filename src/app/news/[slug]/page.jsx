import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaCalendarAlt, FaTag, FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import NewsSectionCard from "../../../components/Cards/NewsSectionCard"

const articles = [
  {
    category: "Air Freight",
    date: "12 Aug 2026",
    title: "Air Cargo Capacity Rebounds Ahead of Peak Season",
    desc: "Global airline networks restore capacity across transpacific corridors, creating new flexibility for time-critical electronics shipments.",
    image: "/assets/news/1.jpg",
    slug: "air-cargo-capacity-rebounds",
    content: "Global airline networks are actively restoring cargo capacity across major transpacific corridors. This strategic expansion is creating unprecedented flexibility for time-critical electronics and perishable shipments as businesses prepare for the upcoming peak retail season. Industry experts note that optimized belly-hold space and dedicated freighter deployment are helping stabilize rates across key international hubs."
  },
  {
    category: "Rail Logistics",
    date: "04 Aug 2026",
    title: "Why Intermodal Rail Is Winning Asia-Europe Volumes",
    desc: "Shippers embrace sustainable, reliable cross-continental rail freight corridors to cut transit times and carbon footprints.",
    image: "/assets/news/2.jpg",
    slug: "intermodal-rail-asia-europe",
    content: "Shippers across manufacturing sectors are increasingly embracing sustainable and reliable cross-continental rail freight corridors between Asia and Europe. By combining rail networks with strategic maritime feeder services, supply chain leaders are successfully cutting transit times by up to 40% compared to all-ocean routes while drastically reducing their overall carbon footprints."
  },
  {
    category: "Warehousing",
    date: "27 Jul 2026",
    title: "Five Ways Smart Warehousing Cuts Fulfilment Costs",
    desc: "Automated guided vehicles and real-time inventory management reduce fulfillment cycles and pallet processing overhead.",
    image: "/assets/news/3.jpg",
    slug: "smart-warehousing-cuts-costs",
    content: "Modern fulfillment centers are undergoing a technological revolution. The integration of automated guided vehicles (AGVs), internet-of-things sensors, and real-time inventory management software significantly reduces fulfillment cycles. Facilities adopting these advanced tools report substantial drops in pallet processing overhead and human error rates."
  },
  {
    category: "Ocean Freight",
    date: "18 Jul 2026",
    title: "Navigating Global Maritime Regulations & Green Corridors",
    desc: "How new maritime emissions standards are reshaping carrier schedules, fuel strategies, and global container rates.",
    image: "/assets/news/4.jpg",
    slug: "navigating-maritime-regulations",
    content: "New international maritime emissions standards are officially reshaping global carrier schedules, alternative fuel strategies, and container shipping rates. Logistics managers must closely monitor regulatory compliance requirements to avoid unexpected port delays and manage long-term freight procurement budgets effectively."
  },
  {
    category: "Customs",
    date: "09 Jul 2026",
    title: "Streamlining Cross-Border Clearance with Digital Paperwork",
    desc: "Automated tariff classification and digital manifest filings eliminate port bottlenecks and tariff penalty risks.",
    image: "/assets/news/5.jpg",
    slug: "streamlining-cross-border-clearance",
    content: "Transitioning from traditional paperwork to automated tariff classification and digital manifest filings is transforming international trade. These digital systems eliminate common port bottlenecks, reduce physical document handling delays, and minimize compliance and tariff penalty risks for importers and exporters."
  },
  {
    category: "Project Cargo",
    date: "29 Jun 2026",
    title: "Engineering Complex Routes for Heavy Machinery Transport",
    desc: "A breakdown of structural route surveys, bridge load analyses, and escort protocols for oversized industrial components.",
    image: "/assets/news/6.jpg",
    slug: "heavy-machinery-transport-routes",
    content: "Transporting oversized industrial components requires meticulous planning and engineering precision. Comprehensive structural route surveys, detailed bridge load analyses, and specialized municipal escort protocols are critical elements that ensure the safe, efficient transit of heavy machinery from manufacturing floors to final project sites."
  },
  {
    category: "Supply Chain",
    date: "15 Jun 2026",
    title: "Building Resilient Cold-Chain Logistics for Pharmaceuticals",
    desc: "Active IoT temperature telemetry and certified cold storage hubs safeguarding sensitive medical cargo worldwide.",
    image: "/assets/news/7.jpg",
    slug: "resilient-cold-chain-logistics",
    content: "Maintaining strict temperature integrity is paramount in pharmaceutical logistics. Active IoT temperature telemetry combined with certified cold storage hubs worldwide provide real-time visibility and absolute safety guarantees for sensitive medical cargo, vaccines, and biotechnology shipments traveling through volatile climate zones."
  }
];

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function NewsDetailsPage({ params }) {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = articles
    .filter((item) => item.slug !== slug)
    .slice(0, 3)

  return (
    <div className="bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <section className="py-16 pt-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:underline"
            >
              <FaArrowLeft size={14} /> Back to All News
            </Link>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
            <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-primary" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <FaTag className="text-primary" />
                {article.category}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Share:</span>
              <button aria-label="Share on Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-150 text-slate-600 transition-colors hover:bg-primary hover:text-white dark:bg-slate-800 dark:text-slate-300">
                <FaFacebookF size={12} />
              </button>
              <button aria-label="Share on Twitter" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-150 text-slate-600 transition-colors hover:bg-primary hover:text-white dark:bg-slate-800 dark:text-slate-300">
                <FaTwitter size={12} />
              </button>
              <button aria-label="Share on LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-150 text-slate-600 transition-colors hover:bg-primary hover:text-white dark:bg-slate-800 dark:text-slate-300">
                <FaLinkedinIn size={12} />
              </button>
            </div>
          </div>

          <div className="relative mb-10 h-80 w-full overflow-hidden rounded-3xl sm:h-112">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {article.title}
            </h1>
            <p className="lead mt-4 text-lg font-medium text-slate-600 dark:text-slate-300">
              {article.desc}
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {article.content}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              As global supply chains continue to evolve, staying ahead with proactive measures and robust operational strategies is essential for maintaining a competitive edge. ABIRA Logistics remains committed to providing comprehensive solutions tailored to meet these dynamic industry demands.
            </p>
          </div>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50/50 py-16 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
                Related Articles
              </span>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                You Might Also Like
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {relatedArticles.map((item, idx) => (
                <NewsSectionCard key={item.title} article={item} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}