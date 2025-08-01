
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
    <div className="min-h-screen bg-background font-inter relative overflow-x-hidden">
      <Header />
      <Hero />
      <div id="categories" className="animate-fade-in">
        <CategorySelector
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <div id="products" className="animate-slide-up">
        <ProductGrid selectedCategory={selectedCategory} />
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-background/50 to-accent/10 relative animate-fade-in">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-4 h-4 bg-premium-gold rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-premium-blue rounded-full animate-bounce-gentle"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-whatsapp rounded-full animate-float"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold bg-gradient-premium bg-clip-text text-transparent mb-6 animate-pulse-glow">
              About TechSquad
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in">
              We are a premium LED solutions provider with over 10 years of experience in delivering
              cutting-edge display technology. Our mission is to illuminate your ideas with the highest
              quality LED products and exceptional service.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { title: "Premium Quality", desc: "Industry-leading LED technology with superior performance and durability." },
                { title: "Expert Support", desc: "Professional consultation and 24/7 technical support for all your needs." },
                { title: "Custom Solutions", desc: "Tailored LED solutions designed specifically for your unique requirements." }
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 glass-morphism hover:shadow-glow hover:-translate-y-2 hover:scale-105 lightning-border animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <h3 className="text-xl font-semibold mb-3 text-primary hover:text-premium-gold transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-background relative animate-fade-in">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 right-40 w-6 h-6 bg-premium-gold rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-40 left-40 w-4 h-4 bg-premium-blue rounded-full animate-lightning"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold bg-gradient-premium bg-clip-text text-transparent mb-6 ">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
              Ready to transform your space with premium LED solutions? Contact us today for a consultation.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 glass-morphism hover:shadow-glow hover:-translate-y-2 hover:scale-105 lightning-border animate-slide-up">
                <h3 className="text-2xl font-semibold mb-4 text-primary hover:text-premium-gold transition-colors">Contact Information</h3>
                <div className="space-y-4 text-left">
                  {/* <p className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                    <span className="font-medium mr-2">📧 Email:</span> info@techsquad.com
                  </p> */}
                  <p className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                    <span className="font-medium mr-2">📱 Phone:</span> +91 9274488477
                  </p>
                  <p className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                    <span className="font-medium mr-2">Address:</span>Parvat patiya near,chabutra circle
                    Surat
                  </p>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 glass-morphism hover:shadow-glow hover:-translate-y-2 hover:scale-105 lightning-border animate-slide-up" style={{ animationDelay: '200ms' }}>
                <h3 className="text-2xl font-semibold mb-4 text-primary hover:text-premium-gold transition-colors">Business Hours</h3>
                <div className="space-y-3 text-left">
                  <p className="flex justify-between text-muted-foreground hover:text-foreground transition-colors">
                    <span>Monday - Friday</span> <span>9:00 AM - 7:00 PM</span>
                  </p>
                  <p className="flex justify-between text-muted-foreground hover:text-foreground transition-colors">
                    <span>Saturday</span> <span>10:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between text-muted-foreground hover:text-foreground transition-colors">
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
