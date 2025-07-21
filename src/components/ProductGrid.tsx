import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle, Star, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "P10 Outdoor LED Display",
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop&crop=center",
    price: "₹45,000",
    originalPrice: "₹55,000",
    rating: 4.8,
    features: ["10mm Pixel Pitch", "Weather Resistant", "High Brightness"]
  },
  {
    id: 2,
    name: "P6 Indoor LED Panel",
    category: "indoor",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    price: "₹32,000",
    originalPrice: "₹38,000",
    rating: 4.9,
    features: ["6mm Pixel Pitch", "Ultra HD Quality", "Energy Efficient"]
  },
  {
    id: 3,
    name: "Flexible Curved LED Screen",
    category: "flexible",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
    price: "₹75,000",
    originalPrice: "₹85,000",
    rating: 4.7,
    features: ["Bendable Design", "Seamless Curves", "Creative Shapes"]
  },
  {
    id: 4,
    name: "LED A-Frame Standee",
    category: "standee",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
    price: "₹25,000",
    originalPrice: "₹30,000",
    rating: 4.6,
    features: ["Portable Design", "Easy Setup", "Battery Powered"]
  },
  {
    id: 5,
    name: "P8 Outdoor Billboard",
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1573495612937-568a38c9ddc6?w=400&h=300&fit=crop&crop=center",
    price: "₹68,000",
    originalPrice: "₹78,000",
    rating: 4.8,
    features: ["8mm Pixel Pitch", "Large Format", "Remote Control"]
  },
  {
    id: 6,
    name: "P4 Indoor Video Wall",
    category: "indoor",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    price: "₹95,000",
    originalPrice: "₹110,000",
    rating: 4.9,
    features: ["4mm Pixel Pitch", "Seamless Tiles", "Ultra Thin"]
  }
];

interface ProductGridProps {
  selectedCategory: string;
}

const ProductGrid = ({ selectedCategory }: ProductGridProps) => {
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-poppins">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our premium LED display solutions with competitive pricing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-gold fill-current'
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.rating})
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-foreground mb-2 font-poppins">
                  {product.name}
                </h3>

                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="text-sm text-whatsapp font-medium">
                    Save {parseInt(product.originalPrice.replace(/[^\d]/g, '')) - parseInt(product.price.replace(/[^\d]/g, ''))}₹
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="whatsapp" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(`https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in ${product.name}`, '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found in this category. Please select a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;