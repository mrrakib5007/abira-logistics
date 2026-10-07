import ServiceDetailsClient from "./ServiceDetailsClient";

const servicesData = {
  "air-freight": {
    title: "Air Freight",
    subtitle:
      "Express and consolidated air cargo with next-flight-out options worldwide.",
    description:
      "ABIRA Logistics provides fast, reliable, and flexible air freight forwarding solutions designed specifically for businesses that require high-speed, time-sensitive international transportation. Through our extensive, long-standing network of global airline partnerships and carriers, we secure highly competitive cargo rates, optimized space allocation, and guaranteed priority uplift options-even during peak shipping seasons and high-demand periods. From small, urgent documents and spare parts to high-value commercial cargo, our seasoned logistics specialists manage the entire end-to-end transportation lifecycle with meticulous coordination, secure handling protocols, accurate compliance documentation, and complete real-time shipment visibility. Our primary goal with air freight is to significantly reduce transit times, eliminate supply chain bottlenecks, and ensure your cargo reaches any global destination safely, securely, and right on schedule.",
    features: [
      "Next-flight-out options",
      "Global airline partnerships",
      "Real-time cargo tracking",
      "Secure handling for high-value goods",
    ],
    icon: "air",
    href: "/services/air-freight",
  },

  "ocean-freight": {
    title: "Ocean Freight",
    subtitle:
      "FCL, LCL and reefer sailings backed by long-standing carrier contracts.",
    description:
      "ABIRA Logistics delivers comprehensive, cost-effective, and robust ocean freight solutions tailored for businesses moving large volumes of cargo across international trade lanes and continents. We expertly manage Full Container Load (FCL), Less than Container Load (LCL), and temperature-sensitive reefer shipments through our deeply established relationships with top-tier global ocean carriers. Our dedicated maritime operations team coordinates every critical stage of the ocean shipping process, encompassing booking, precise container planning, advanced documentation, port handling, seamless customs coordination, and reliable final-mile delivery. Whether you require economical port-to-port logistics or a fully integrated door-to-door supply chain solution, we offer flexible routing strategies engineered to perfectly balance transit speed, cargo capacity, and overall operational budgets while maintaining total visibility throughout the voyage.",
    features: [
      "FCL & LCL consolidations",
      "Reefer container solutions",
      "Port-to-port and door-to-door",
      "Customs documentation support",
    ],
    icon: "ocean",
    href: "/services/ocean-freight",
  },

  "road-freight": {
    title: "Road Freight",
    subtitle:
      "FTL and LTL trucking with cross-border documentation handled end to end.",
    description:
      "Our advanced road freight services provide highly dependable domestic and seamless cross-border transportation networks for growing businesses of all scales and industries. ABIRA Logistics specializes in both Full Truckload (FTL) and Less Than Truckload (LTL) operational models, empowering our clients to choose the most resource-efficient transit option based on cargo scale, urgent delivery timelines, and financial allocation. Our seasoned logistics coordinators oversee intricate route optimization, carrier dispatch scheduling, secure loading protocols, comprehensive cross-border documentation, and border clearance procedures from origin to final drop-off. Equipped with state-of-the-art GPS-tracked vehicle fleets, rigorous safety measures, and proactive 24/7 shipment monitoring, we guarantee your commodities move efficiently, securely, and punctually across regional and international highway networks.",
    features: [
      "FTL & LTL transport services",
      "Cross-border documentation",
      "GPS tracked vehicle fleets",
      "Secure transit protocols",
    ],
    icon: "road",
    href: "/services/road-freight",
  },

  "rail-freight": {
    title: "Rail Freight",
    subtitle:
      "Cost-efficient intermodal rail corridors linking Asia and Europe.",
    description:
      "ABIRA Logistics provides highly efficient and sustainable rail freight solutions designed for companies seeking a high-value, reliable alternative to traditional air and ocean transport models. Our strategic intermodal rail corridors bridge major economic, commercial, and logistics centers smoothly across Asia and Europe, offering an exceptional equilibrium between transit speed, freight expenditure, and environmental carbon reduction. We meticulously orchestrate the complete rail transportation journey-ranging from initial factory pickup and terminal handling to scheduled rail departures, complex customs clearances, and final-mile distribution. Rail shipping is exceptionally advantageous for organizations moving high-volume bulk commodities over massive continental expanses while maintaining predictable delivery windows and minimizing ecological impact.",
    features: [
      "Intermodal rail corridors",
      "Eco-friendly transport",
      "Cost-effective bulk shipping",
      "Scheduled terminal departures",
    ],
    icon: "rail",
    href: "/services/rail-freight",
  },

  "customs-brokerage": {
    title: "Customs Brokerage",
    subtitle:
      "Licensed clearance, duty optimisation and full trade compliance support.",
    description:
      "ABIRA Logistics empowers businesses to effortlessly clear complex international regulatory barriers, statutory trade laws, and intricate border procedures through our licensed customs brokerage expertise. Our professional trade compliance team assists corporate partners with seamless import and export documentation filing, precise tariff and commodity classifications, formal customs declarations, accurate duty and tax assessments, and digital manifest submissions. By proactively reviewing regulatory data and liaising directly with global trade authorities, we drastically mitigate risks regarding paperwork errors, costly port delays, legal penalties, and unexpected administrative charges. Our strategic advisory approach ensures your supply chain maintains fluid cross-border operations while adhering strictly to regional and international trade mandates.",
    features: [
      "Licensed customs brokerage",
      "Duty optimization strategies",
      "Digital manifest filings",
      "Trade compliance advisory",
    ],
    icon: "customs",
    href: "/services/customs-brokerage",
  },

  "warehousing": {
    title: "Warehousing",
    subtitle:
      "Bonded, ambient and temperature-controlled storage with live inventory.",
    description:
      "ABIRA Logistics delivers secure, highly adaptable, and technologically advanced warehousing and inventory management solutions engineered to back modern, fast-paced supply chains from initial storage to final customer distribution. Our strategic fulfillment facilities feature bonded, ambient, and precise temperature-controlled preservation environments optimized for a diverse array of delicate commercial sectors and industrial goods. Backed by real-time inventory visibility portals and streamlined warehouse execution systems, our clients retain total oversight over stock volumes, batch tracking, and fast-turnaround order fulfillment. Our comprehensive warehousing ecosystem spans systematic intake inspection, secure storage configurations, barcode scanning, picking, packing, kitting, and outbound dispatch services, all guarded by cutting-edge security infrastructure.",
    features: [
      "Bonded & ambient storage",
      "Temperature-controlled zones",
      "Live inventory visibility",
      "Advanced warehouse security",
    ],
    icon: "warehouse",
    href: "/services/warehousing",
  },

  "project-cargo": {
    title: "Project & Heavy Cargo",
    subtitle:
      "Route surveys, lifting plans and multi-axle transport for oversized loads.",
    description:
      "ABIRA Logistics stands as an industry leader in managing extraordinarily complex project logistics, out-of-gauge (OOG) dimensions, heavy industrial machinery, and high-stakes capital equipment. Our elite project cargo engineering division formulates tailor-made, highly calculated transportation blueprints driven by cargo dimensions, weight distribution, destination infrastructure limitations, and rigorous legal guidelines. From comprehensive pre-shipment route surveys and engineering feasibility studies to heavy-lift planning, specialized regulatory permits, multi-axle modular transport deployment, and direct on-site management, we direct every operational detail. Our rigorous engineering-first philosophy minimizes logistical liabilities, ensuring your massive industrial structures, energy plants, and infrastructure components arrive intact.",
    features: [
      "Comprehensive route surveys",
      "Custom heavy lifting plans",
      "Multi-axle transport fleet",
      "On-site engineering supervision",
    ],
    icon: "project",
    href: "/services/project-cargo",
  },

  "hybrid-freight": {
    title: "Air-Sea & Sea-Air",
    subtitle:
      "Hybrid routings that balance ocean economics with air-freight speed.",
    description:
      "ABIRA Logistics offers highly versatile Air-Sea and Sea-Air multimodal transport frameworks built specifically for enterprises striving to optimize the strict balance between international shipping expenditure and delivery velocity. By expertly fusing the financial viability of maritime ocean freight with the rapid execution capability of commercial air networks, our hybrid logistics routes deliver a powerful alternative to single-mode constraints. Our supply chain consultants analyze strict delivery deadlines, budget parameters, and global corridor options to forge an integrated multimodal transport strategy. We oversee safe inter-modal cargo transfers, manage specialized security compliance, and execute active end-to-end monitoring to ensure smooth transitions between transport mediums.",
    features: [
      "Cost-to-speed optimization",
      "Seamless multimodal transfer",
      "Flexible corridor routing",
      "Priority transit management",
    ],
    icon: "hybrid",
    href: "/services/hybrid-freight",
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug] || {
    title: "Service Details",
    subtitle: "Explore professional logistics services by ABIRA Logistics.",
  };

  return {
    title: `${service.title} | ABIRA Logistics`,
    description: service.subtitle,
    alternates: {
      canonical: `https://abira.com.bd/services/${slug}`,
    },
  };
}

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug] || {
    title: "Logistics Service",
    subtitle: "Professional supply chain and freight solution.",
    description: "Detailed information about this service is currently unavailable.",
    features: ["Global coverage", "Reliable execution", "24/7 support"],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "Organization",
      "name": "ABIRA Logistics",
      "url": "https://abira.com.bd"
    },
    "description": service.subtitle,
    "areaServed": "Worldwide"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailsClient service={service} />
    </>
  );
}