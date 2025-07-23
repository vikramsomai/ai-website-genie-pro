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
      <div id="categories">
        <CategorySelector 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <div id="products">
        <ProductGrid selectedCategory={selectedCategory} />
      </div>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-background to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold bg-gradient-premium bg-clip-text text-transparent mb-6">
              About TechSquad
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a premium LED solutions provider with over 10 years of experience in delivering 
              cutting-edge display technology. Our mission is to illuminate your ideas with the highest 
              quality LED products and exceptional service.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary">Premium Quality</h3>
                <p className="text-muted-foreground">Industry-leading LED technology with superior performance and durability.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary">Expert Support</h3>
                <p className="text-muted-foreground">Professional consultation and 24/7 technical support for all your needs.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary">Custom Solutions</h3>
                <p className="text-muted-foreground">Tailored LED solutions designed specifically for your unique requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold bg-gradient-premium bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Ready to transform your space with premium LED solutions? Contact us today for a consultation.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h3>
                <div className="space-y-4 text-left">
                  <p className="flex items-center text-muted-foreground">
                    <span className="font-medium mr-2">📧 Email:</span> info@techsquad.com
                  </p>
                  <p className="flex items-center text-muted-foreground">
                    <span className="font-medium mr-2">📱 Phone:</span> +91 XXXXXXXXXX
                  </p>
                  <p className="flex items-center text-muted-foreground">
                    <span className="font-medium mr-2">📍 Address:</span> Mumbai, India
                  </p>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Business Hours</h3>
                <div className="space-y-3 text-left">
                  <p className="flex justify-between text-muted-foreground">
                    <span>Monday - Friday</span> <span>9:00 AM - 7:00 PM</span>
                  </p>
                  <p className="flex justify-between text-muted-foreground">
                    <span>Saturday</span> <span>10:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between text-muted-foreground">
                    <span>Sunday</span> <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
