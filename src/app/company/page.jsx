import CompanyClient from "./CompanyClient";

export const metadata = {
  title: "Company Overview & Resources | ABIRA Logistics",
  description: "Explore ABIRA Logistics corporate memberships, photo gallery, client testimonials, and frequently asked questions.",
  alternates: {
    canonical: "https://abira.com.bd/company",
  },
};

export default function CompanyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "ABIRA Logistics Company",
    "url": "https://abira.com.bd/company",
    "description": "Corporate overview and resource links of ABIRA Logistics.",
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
      <CompanyClient />
    </>
  );
}