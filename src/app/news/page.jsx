import NewsClient from "./NewsClient";

export const metadata = {
  title: "Latest News & Insights | ABIRA Logistics",
  description: "Stay updated with the latest news, supply chain insights, global freight trends, and logistics announcements from ABIRA Logistics.",
  keywords: [
    "ABIRA Logistics News",
    "Freight Forwarding News",
    "Supply Chain Trends",
    "Logistics Updates",
    "Maritime Trade News",
    "Air Cargo Updates"
  ],
  openGraph: {
    title: "Latest Logistics News & Insights | ABIRA Logistics",
    description: "Stay updated with global supply chain developments and key updates from ABIRA Logistics.",
    url: "https://abira.com.bd/news",
    siteName: "ABIRA Logistics",
    images: [
      {
        url: "https://abira.com.bd/assets/news-og.jpg",
        width: 1200,
        height: 630,
        alt: "ABIRA Logistics News Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest News & Insights | ABIRA Logistics",
    description: "Explore operational updates, market insights, and global shipping developments.",
    images: ["https://abira.com.bd/assets/news-og.jpg"],
  },
  alternates: {
    canonical: "https://abira.com.bd/news",
  },
};

export default function NewsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "ABIRA Logistics News & Insights",
    "url": "https://abira.com.bd/news",
    "description": "Latest news, articles, and press releases from ABIRA Logistics.",
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
      <NewsClient />
    </>
  );
}