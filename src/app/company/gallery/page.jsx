import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Photo Gallery | ABIRA Logistics",
  description: "Explore photos of our annual galas, cultural days, team building events, and corporate milestones at ABIRA Logistics.",
  alternates: {
    canonical: "https://abira.com.bd/company/gallery",
  },
};

export default function GalleryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "ABIRA Logistics Photo Gallery",
    "url": "https://abira.com.bd/company/gallery",
    "description": "Explore memorable moments and event photos from ABIRA Logistics.",
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
      <GalleryClient />
    </>
  );
}