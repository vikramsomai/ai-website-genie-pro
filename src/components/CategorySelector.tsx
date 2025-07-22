import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Monitor, Building2, Smartphone, Store, ArrowRight, CheckCircle } from "lucide-react";

const categories = [
  {
    id: "outdoor",
    name: "Outdoor LED Screens",
    icon: Building2,
    description: "Weather-resistant displays for outdoor advertising",
    features: ["IP65 Rated", "High Brightness", "Energy Efficient"],
    popular: true
  },
  {
    id: "indoor",
    name: "Indoor LED Screens",
    icon: Monitor,
    description: "High-resolution displays for indoor environments",
    features: ["4K Resolution", "Seamless Design", "Low Profile"],
    popular: false
  },
  {
    id: "flexible",
    name: "Flexible LED Screens",
    icon: Smartphone,
    description: "Bendable and curved LED display solutions",
    features: ["360° Curves", "Creative Shapes", "Premium Quality"],
    popular: false
  },
  {
    id: "standee",
    name: "A-Type Standee",
    icon: Store,
    description: "Portable LED standees for events and retail",
    features: ["Portable", "Quick Setup", "Battery Powered"],
    popular: false
  }
];

interface CategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySelector = ({ selectedCategory, onCategoryChange }: CategorySelectorProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden" id="products">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-premium-gold rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-premium-gold/10 border border-premium-gold/20 rounded-full px-6 py-3 mb-6">
            <CheckCircle className="w-4 h-4 text-premium-gold" />
            <span className="text-premium-gold font-medium tracking-wide">Premium Product Range</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-poppins">
            Our Product
            <span className="block bg-gradient-to-r from-premium-gold to-yellow-500 bg-clip-text text-transparent pb-2">
              Categories
            </span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of premium LED display solutions,
            each engineered for perfection and designed for every application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;

            return (
              <div
                key={category.id}
                className={`group relative cursor-pointer transition-all duration-500 hover:-translate-y-2 ${isSelected ? 'scale-105 z-10' : ''
                  }`}
                onClick={() => onCategoryChange(category.id)}
              >
                {/* Popular Badge */}
                {category.popular && (
                  <div className="absolute -top-3 -right-3 bg-premium-gold text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20">
                    Popular
                  </div>
                )}

                {/* Card */}
                <div className={`relative p-8 rounded-3xl border-2 transition-all duration-500 overflow-hidden ${isSelected
                    ? 'border-premium-gold bg-gradient-card shadow-premium'
                    : 'border-border bg-card shadow-lg hover:border-premium-gold/50 hover:shadow-2xl'
                  }`}>

                  {/* Glow Effect */}
                  {isSelected && (
                    <div className="absolute inset-0 bg-premium-gold/5 rounded-3xl"></div>
                  )}

                  {/* Icon Container */}
                  <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${isSelected
                      ? 'bg-premium-gold text-white shadow-glow scale-110'
                      : 'bg-accent text-accent-foreground group-hover:bg-premium-gold group-hover:text-white group-hover:scale-110'
                    }`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className={`font-bold text-xl mb-3 font-poppins transition-colors duration-300 ${isSelected ? 'text-premium-gold' : 'text-foreground group-hover:text-premium-gold'
                    }`}>
                    {category.name}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-premium-gold flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <Button
                    variant={isSelected ? "premium" : "outline"}
                    size="sm"
                    className="w-full group/btn transition-all duration-300"
                  >
                    {isSelected ? 'Selected' : 'View Products'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySelector;