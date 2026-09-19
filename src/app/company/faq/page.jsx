import FAQClient from "./FAQClient";

export const metadata = {
  title: "Frequently Asked Questions | ABIRA Logistics",
  description: "Find answers to common questions about ABIRA Logistics' global freight forwarding, customs clearance, warehousing, and shipping services.",
  alternates: {
    canonical: "https://abira.com.bd/company/faq",
  },
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "ABIRA Logistics FAQ",
    "url": "https://abira.com.bd/company/faq",
    "description": "Frequently asked questions and answers regarding ABIRA Logistics services.",
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
      <FAQClient />
    </>
  );
}