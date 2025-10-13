import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
import CaseStudiesPreview from "@/components/Home/CaseStudiesPreview";
import BenefitsSection from "@/components/Home/BenefitsSection";
import BlogPreview from "@/components/Home/BlogPreview";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CaseStudiesPreview />
        <BenefitsSection />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Home;