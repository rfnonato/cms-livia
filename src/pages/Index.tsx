import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { BlogPostsSection } from "@/components/home/BlogPostsSection";
import { MediaContentSection } from "@/components/home/MediaContentSection";
import { ExtrasSection } from "@/components/home/ExtrasSection";
import { Footer } from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <SocialProofSection />
      <BlogPostsSection />
      <MediaContentSection />
      <ExtrasSection />
      <Footer />
    </div>
  );
};

export default Index;

