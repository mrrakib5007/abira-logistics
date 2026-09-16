import ManagementTeamClient from "./ManagementTeamClient";

export const metadata = {
  title: "Our Management Team | ABIRA Logistics",
  description: "Meet the executive leadership and management team of ABIRA Logistics, steered by Managing Director Mr. Shafait Khan, combining legal, trade, and automated supply chain expertise.",
  keywords: [
    "ABIRA Logistics management",
    "Mr. Shafait Khan",
    "Managing Director ABIRA Logistics",
    "Freight forwarding executives Bangladesh",
    "Supply chain leadership team"
  ],
  openGraph: {
    title: "Our Management Team | ABIRA Logistics",
    description: "Executive leadership guiding global freight forwarding, carrier negotiations, and trade automation at ABIRA Logistics.",
    url: "https://abira.com.bd/about/management-team",
    siteName: "ABIRA Logistics",
    images: [
      {
        url: "https://abira.com.bd/assets/team/shafait-khan.jpg",
        width: 800,
        height: 800,
        alt: "Mr. Shafait Khan - Managing Director of ABIRA Logistics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Management Team | ABIRA Logistics",
    description: "Executive leadership guiding global freight forwarding and trade automation.",
    images: ["https://abira.com.bd/assets/team/shafait-khan.jpg"],
  },
  alternates: {
    canonical: "https://abira.com.bd/about/management-team",
  },
};

export default function ManagementTeamPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ABIRA Logistics Ltd.",
    "url": "https://abira.com.bd",
    "founder": {
      "@type": "Person",
      "name": "Mr. Shafait Khan",
      "jobTitle": "Managing Director",
      "email": "khan@abira.com.bd",
      "telephone": "+8801718727658",
      "image": "https://abira.com.bd/assets/team/shafait-khan.jpg",
      "worksFor": {
        "@type": "Organization",
        "name": "ABIRA Logistics Ltd."
      }
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Mr. Shafait Khan",
        "jobTitle": "Managing Director",
        "email": "khan@abira.com.bd",
        "telephone": "+8801718727658",
        "image": "https://abira.com.bd/assets/team/shafait-khan.jpg",
        "worksFor": {
          "@type": "Organization",
          "name": "ABIRA Logistics Ltd."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ManagementTeamClient />
    </>
  );
}