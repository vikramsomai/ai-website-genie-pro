import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Monitor, Building2, Smartphone, Store } from "lucide-react";

const categories = [
  {
    id: "outdoor",
    name: "Outdoor LED Screens",
    icon: Building2,
    description: "Weather-resistant displays for outdoor advertising"
  },
  {
    id: "indoor",
    name: "Indoor LED Screens",
    icon: Monitor,
    description: "High-resolution displays for indoor environments"
  },
  {
    id: "flexible",
    name: "Flexible LED Screens",
    icon: Smartphone,
    description: "Bendable and curved LED display solutions"
  },
  {
    id: "standee",
    name: "A-Type Standee",
    icon: Store,
    description: "Portable LED standees for events and retail"
  }
];

interface CategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySelector = ({ selectedCategory, onCategoryChange }: CategorySelectorProps) => {
  return (
    <section className="py-16 bg-secondary/30" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-poppins">
            Our Product Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our comprehensive range of LED display solutions designed for every application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`group p-6 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-float hover:-translate-y-1 ${
                  isSelected 
                    ? 'border-primary bg-primary/5 shadow-elegant' 
                    : 'border-border bg-background hover:border-primary/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                  isSelected 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className={`font-semibold mb-2 font-poppins transition-colors ${
                  isSelected ? 'text-primary' : 'text-foreground group-hover:text-primary'
                }`}>
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySelector;