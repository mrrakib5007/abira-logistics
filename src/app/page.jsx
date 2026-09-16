import AboutSection from "@/components/Home/AboutSection/AboutSection";
import Banner from "@/components/Home/Banner/Banner";
import CTASection from "@/components/Home/CTASection/CTASection";
import GallerySection from "@/components/Home/GallerySection/GallerySection";
import MembershipSection from "@/components/Home/MembershipSection/MembershipSection";
import NewsSection from "@/components/Home/NewsSection/NewsSection";
import QnASection from "@/components/Home/QnASection/QnASection";
import ServicesSection from "@/components/Home/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <ServicesSection />
      <MembershipSection />
      <NewsSection />
      <GallerySection />
      <CTASection />
      <QnASection />
    </div>
  );
}
