import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us | ABIRA Logistics - Global Freight & Supply Chain Solutions",
  description: "Learn about ABIRA Logistics, a worldwide leader in freight forwarding, multimodal transport, warehousing, and customs brokerage across 200+ global destinations.",
  keywords: [
    "ABIRA Logistics",
    "Global freight forwarding",
    "Supply chain solutions",
    "Air and ocean cargo",
    "Customs brokerage",
    "Warehousing logistics",
    "Freight company Bangladesh"
  ],
  openGraph: {
    title: "About ABIRA Logistics | Connecting The World",
    description: "Delivering reliable, scalable, and technology-driven supply chain management across 200+ destinations worldwide.",
    url: "https://abira.com.bd/about",
    siteName: "ABIRA Logistics",
    images: [
      {
        url: "https://abira.com.bd/assets/about-us.jpg",
        width: 1200,
        height: 630,
        alt: "ABIRA Logistics Global Operations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ABIRA Logistics",
    description: "Reliable, transparent, and multi-modal logistics services connecting enterprise cargo globally.",
    images: ["https://abira.com.bd/assets/about-us.jpg"],
  },
  alternates: {
    canonical: "https://abira.com.bd/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    "name": "ABIRA Logistics",
    "image": "https://abira.com.bd/assets/about-us.jpg",
    "url": "https://abira.com.bd/about",
    "description": "Full-service global freight and supply chain solutions provider.",
    "department": [
      {
        "@type": "LocalBusiness",
        "name": "ABIRA Logistics - Corporate Headquarters",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Level 9, Tower 71, Gulshan Avenue",
          "addressLocality": "Dhaka",
          "postalCode": "1212",
          "addressCountry": "BD"
        },
        "telephone": "+880 1800 000000"
      },
      {
        "@type": "LocalBusiness",
        "name": "ABIRA Logistics - Regional Maritime Hub",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Agrabad Commercial Area, Port Access Road",
          "addressLocality": "Chattogram",
          "postalCode": "4100",
          "addressCountry": "BD"
        },
        "telephone": "+880 1700 000000"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}