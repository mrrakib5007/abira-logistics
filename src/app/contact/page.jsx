import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | ABIRA Logistics",
  description: "Get in touch with ABIRA Logistics for global freight forwarding, supply chain solutions, and corporate inquiries.",
  alternates: {
    canonical: "https://abira.com.bd/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact ABIRA Logistics",
    "url": "https://abira.com.bd/contact",
    "description": "Get in touch with ABIRA Logistics for inquiries and support.",
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
      <ContactClient />
    </>
  );
}