import TestimonialsClient from "./TestimonialsClient";

export const metadata = {
  title: "Client Testimonials & Reviews | ABIRA Logistics",
  description: "Read what our valued global clients and partners say about ABIRA Logistics' freight forwarding, customs clearance, and supply chain solutions.",
  alternates: {
    canonical: "https://abira.com.bd/company/testimonials",
  },
};

export default function TestimonialsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "ABIRA Logistics Testimonials",
    "url": "https://abira.com.bd/company/testimonials",
    "description": "Customer reviews and feedback for ABIRA Logistics.",
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
      <TestimonialsClient />
    </>
  );
}