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
    popular: false
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
    <section className="py-24 relative overflow-hidden " id="products">
      {/* LED Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-primary/10 to-black/50 "></div>

        {/* LED Grid Pattern */}
        <div className="absolute inset-0 opacity-20 ">
          <div className="grid grid-cols-16 gap-1 h-full w-full p-2">
            {Array.from({ length: 256 }).map((_, i) => (
              <div
                key={i}
                className="bg-premium-gold/30 rounded-sm animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${0.5 + Math.random() * 1.5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Scanning Lines */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-premium-blue to-transparent animate-slide-down opacity-40"></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-premium-gold to-transparent animate-slide-down opacity-30" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Circuit Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-premium-gold/60 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-premium-gold/10 border border-premium-gold/20 rounded-full px-6 py-3 mb-6 animate-glow">
            <CheckCircle className="w-4 h-4 text-premium-gold animate-pulse" />
            <span className="text-premium-gold font-medium tracking-wide">Premium Product Range</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins animate-glow">
            Our Product
            <span className="block bg-gradient-to-r from-premium-gold to-yellow-500 bg-clip-text text-transparent pb-2 animate-neon-pulse">
              Categories
            </span>
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of premium LED display solutions,
            each engineered for perfection and designed for every application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;

            return (
              <div
                key={category.id}
                className={`rounded-xl group relative cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:scale-105 glass-morphism lightning-border animate-fade-in ${isSelected ? 'scale-105 z-10 shadow-neon' : ''
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => onCategoryChange(category.id)}
              >
                {/* Popular Badge */}
                {category.popular && (
                  <div className="absolute -top-3 -right-3 bg-premium-gold text-black px-3 py-1 rounded-full text-xs font-bold shadow-neon z-20 animate-neon-pulse">
                    Popular
                  </div>
                )}

                {/* Card */}
                <div className={`relative p-8 rounded-3xl border-2 transition-all duration-500 overflow-hidden bg-white/5 backdrop-blur-lg ${isSelected
                  ? 'border-premium-gold shadow-neon'
                  : 'border-white/20 hover:border-premium-gold/50 hover:shadow-glow'
                  }`}>

                  {/* Glow Effect */}
                  {isSelected && (
                    <div className="absolute inset-0 bg-premium-gold/5 rounded-3xl"></div>
                  )}

                  {/* Icon Container */}
                  <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${isSelected
                    ? 'bg-premium-gold text-black shadow-neon scale-110 animate-pulse-glow'
                    : 'bg-white/10 text-premium-gold group-hover:bg-premium-gold group-hover:text-black group-hover:scale-110'
                    }`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className={`font-bold text-xl mb-3 font-poppins transition-colors duration-300 ${isSelected ? 'text-premium-gold animate-neon-pulse' : 'text-white group-hover:text-premium-gold'
                    }`}>
                    {category.name}
                  </h3>

                  <p className="text-white/70 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-premium-gold flex-shrink-0 animate-pulse" />
                        <span className="text-sm text-white/60">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <Button
                    variant={isSelected ? "premium" : "glass"}
                    size="sm"
                    className="w-full group/btn transition-all duration-300 hover:shadow-glow"
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