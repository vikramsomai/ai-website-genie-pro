import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySelector from "@/components/CategorySelector";
import ProductGrid from "@/components/ProductGrid";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("outdoor");

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <Hero />
      <CategorySelector 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProductGrid selectedCategory={selectedCategory} />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
