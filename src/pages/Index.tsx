import { HeroSection } from "@/components/home/HeroSection";
import { MediaSection } from "@/components/home/MediaSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MediaSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;

