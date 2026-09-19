import ServiceDetailsClient from "./ServiceDetailsClient";

const servicesData = {
  "air-freight": {
    title: "Air Freight",
    subtitle:
      "Express and consolidated air cargo with next-flight-out options worldwide.",
    description:
      "ABIRA Logistics provides fast, reliable, and flexible air freight forwarding solutions for businesses that require time-sensitive international transportation.",
    features: [
      "Next-flight-out options",
      "Global airline partnerships",
      "Real-time cargo tracking",
      "Secure handling for high-value goods",
    ],
    iconKey: "air",
    href: "/services/air-freight",
  },

  "ocean-freight": {
    title: "Ocean Freight",
    subtitle:
      "FCL, LCL and reefer sailings backed by long-standing carrier contracts.",
    description:
      "ABIRA Logistics delivers comprehensive ocean freight solutions for businesses moving cargo across international markets.",
    features: [
      "FCL & LCL consolidations",
      "Reefer container solutions",
      "Port-to-port and door-to-door",
      "Customs documentation support",
    ],
    iconKey: "ocean",
    href: "/services/ocean-freight",
  },

  "road-freight": {
    title: "Road Freight",
    subtitle:
      "FTL and LTL trucking with cross-border documentation handled end to end.",
    description:
      "Our road freight services provide dependable domestic and cross-border transportation solutions for businesses of all sizes.",
    features: [
      "FTL & LTL transport services",
      "Cross-border documentation",
      "GPS tracked vehicle fleets",
      "Secure transit protocols",
    ],
    iconKey: "road",
    href: "/services/road-freight",
  },

  "rail-freight": {
    title: "Rail Freight",
    subtitle:
      "Cost-efficient intermodal rail corridors linking Asia and Europe.",
    description:
      "ABIRA Logistics provides efficient rail freight solutions for companies seeking a reliable alternative to traditional air and ocean transportation.",
    features: [
      "Intermodal rail corridors",
      "Eco-friendly transport",
      "Cost-effective bulk shipping",
      "Scheduled terminal departures",
    ],
    iconKey: "rail",
    href: "/services/rail-freight",
  },

  "customs-brokerage": {
    title: "Customs Brokerage",
    subtitle:
      "Licensed clearance, duty optimisation and full trade compliance support.",
    description:
      "ABIRA Logistics helps businesses navigate complex customs procedures and international trade requirements with professional customs brokerage services.",
    features: [
      "Licensed customs brokerage",
      "Duty optimization strategies",
      "Digital manifest filings",
      "Trade compliance advisory",
    ],
    iconKey: "customs",
    href: "/services/customs-brokerage",
  },

  "warehousing": {
    title: "Warehousing",
    subtitle:
      "Bonded, ambient and temperature-controlled storage with live inventory.",
    description:
      "ABIRA Logistics offers secure and flexible warehousing solutions designed to support modern supply chains from storage to final distribution.",
    features: [
      "Bonded & ambient storage",
      "Temperature-controlled zones",
      "Live inventory visibility",
      "Advanced warehouse security",
    ],
    iconKey: "warehouse",
    href: "/services/warehousing",
  },

  "project-cargo": {
    title: "Project & Heavy Cargo",
    subtitle:
      "Route surveys, lifting plans and multi-axle transport for oversized loads.",
    description:
      "ABIRA Logistics specializes in complex project logistics and the transportation of oversized, heavy, and high-value industrial cargo.",
    features: [
      "Comprehensive route surveys",
      "Custom heavy lifting plans",
      "Multi-axle transport fleet",
      "On-site engineering supervision",
    ],
    iconKey: "project",
    href: "/services/project-cargo",
  },

  "hybrid-freight": {
    title: "Air-Sea & Sea-Air",
    subtitle:
      "Hybrid routings that balance ocean economics with air-freight speed.",
    description:
      "ABIRA Logistics provides flexible Air-Sea and Sea-Air multimodal freight solutions for businesses that need to balance transportation cost with delivery speed.",
    features: [
      "Cost-to-speed optimization",
      "Seamless multimodal transfer",
      "Flexible corridor routing",
      "Priority transit management",
    ],
    iconKey: "hybrid",
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