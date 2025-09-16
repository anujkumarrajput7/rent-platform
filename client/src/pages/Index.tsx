import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedRentals from "@/components/sections/FeaturedRentals";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedRentals />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
