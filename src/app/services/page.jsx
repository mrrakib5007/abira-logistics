import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Comprehensive Logistics & Freight Services | ABIRA Logistics",
  description: "Explore ABIRA Logistics' global services including air freight, ocean freight, road transport, rail logistics, customs brokerage, warehousing, and heavy project cargo.",
  alternates: {
    canonical: "https://abira.com.bd/services",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "ABIRA Logistics Services",
    "url": "https://abira.com.bd/services",
    "description": "Professional freight forwarding and supply chain services offered by ABIRA Logistics.",
    "publisher": {
      "@type": "Organization",
      "name": "ABIRA Logistics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://abira.com.bd/assets/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesClient />
    </>
  );
}