import MembershipClient from "./MembershipClient";

export const metadata = {
  title: "Global Memberships & Accreditations | ABIRA Logistics",
  description: "Explore the international trade bodies, global logistics associations, and organizational memberships accredited to ABIRA Logistics.",
  alternates: {
    canonical: "https://abira.com.bd/company/membership",
  },
};

export default function MembershipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "ABIRA Logistics Memberships",
    "url": "https://abira.com.bd/company/membership",
    "description": "Accredited global trade bodies and memberships of ABIRA Logistics.",
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
      <MembershipClient />
    </>
  );
}