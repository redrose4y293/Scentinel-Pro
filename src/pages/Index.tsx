import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ProductDetails } from "@/components/sections/ProductDetails";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { BuySection } from "@/components/sections/BuySection";
import { Testimonials } from "@/components/sections/Testimonials";
import { SupportFaq } from "@/components/sections/SupportFaq";
import { ContactForm } from "@/components/sections/ContactForm";
import { FirmwareSection } from "@/components/sections/FirmwareSection";
import { RegisterDevice } from "@/components/sections/RegisterDevice";
import { BlogSection } from "@/components/sections/BlogSection";
import { Newsletter } from "@/components/sections/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <ProductDetails />
        <ComparisonTable />
        <BuySection />
        <Testimonials />
        <SupportFaq />
        <FirmwareSection />
        <RegisterDevice />
        <BlogSection />
        <Newsletter />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
