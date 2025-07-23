import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle, Star, Eye, Heart, Zap, Award, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

const products = [
  {
    id: 1,
    name: "P10 Premium Outdoor Display",
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=400&fit=crop&crop=center",
    price: "₹45,000",
    originalPrice: "₹55,000",
    rating: 4.9,
    reviews: 127,
    features: ["10mm Pixel Pitch", "IP65 Weather Resistant", "5000 nits Brightness", "Energy Efficient"],
    badge: "Best Seller",
    inStock: true
  },
  {
    id: 2,
    name: "P6 Ultra HD Indoor Panel",
    category: "indoor",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop&crop=center",
    price: "₹32,000",
    originalPrice: "₹38,000",
    rating: 4.8,
    reviews: 89,
    features: ["6mm Pixel Pitch", "4K Resolution", "Seamless Design", "Low Power"],
    badge: "Premium",
    inStock: true
  },
  {
    id: 3,
    name: "FlexiCurve LED System",
    category: "flexible",
    image: "https://vcardking.com/uploads/product-image/6998/1000038411.jpg",
    price: "₹75,000",
    originalPrice: "₹85,000",
    rating: 4.7,
    reviews: 43,
    features: ["Bendable Design", "360° Curves", "Creative Installation", "Professional Grade"],
    badge: "Innovation",
    inStock: true
  },
  {
    id: 4,
    name: "Pro A-Frame Digital Standee",
    category: "standee",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=400&fit=crop&crop=center",
    price: "₹25,000",
    originalPrice: "₹30,000",
    rating: 4.6,
    reviews: 67,
    features: ["Portable Design", "Easy Setup", "Battery Powered", "Remote Control"],
    badge: "Portable",
    inStock: true
  },
  {
    id: 5,
    name: "P8 Giant Outdoor Billboard",
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1573495612937-568a38c9ddc6?w=500&h=400&fit=crop&crop=center",
    price: "₹68,000",
    originalPrice: "₹78,000",
    rating: 4.9,
    reviews: 156,
    features: ["8mm Pixel Pitch", "Large Format", "Remote Monitoring", "Weatherproof"],
    badge: "Enterprise",
    inStock: false
  },
  {
    id: 6,
    name: "P4 Cinema Video Wall",
    category: "indoor",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop&crop=center",
    price: "₹95,000",
    originalPrice: "₹110,000",
    rating: 4.8,
    reviews: 98,
    features: ["4mm Pixel Pitch", "Cinema Quality", "Ultra Thin", "Perfect Alignment"],
    badge: "Professional",
    inStock: true
  }
];

interface ProductGridProps {
  selectedCategory: string;
}

const ProductGrid = ({ selectedCategory }: ProductGridProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(product => product.category === selectedCategory);

  const getBadgeColor = (badge: string) => {
    const colors = {
      "Best Seller": "bg-premium-gold text-white",
      "Premium": "bg-premium-blue text-white",
      "Innovation": "bg-purple-500 text-white",
      "Portable": "bg-green-500 text-white",
      "Enterprise": "bg-primary text-white",
      "Professional": "bg-orange-500 text-white"
    };
    return colors[badge as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  return (
    <section className="py-24 bg-background relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium tracking-wide">Premium Collection</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-poppins">
            Featured
            <span className="block bg-gradient-to-r from-premium-gold to-yellow-500 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Discover our premium LED display solutions with cutting-edge technology,
            competitive pricing, and unmatched quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-3xl border border-border overflow-hidden shadow-lg hover:shadow-premium transition-all duration-500 hover:-translate-y-3 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold z-20 ${getBadgeColor(product.badge)}`}>
                {product.badge}
              </div>

              {/* Stock Status */}
              {!product.inStock && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-20">
                  Out of Stock
                </div>
              )}

              {/* Product Image */}
              <div className="relative overflow-hidden group/image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <Button variant="glass" size="icon" className="rounded-full">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="glass" size="icon" className="rounded-full">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                {/* Rating & Reviews */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating)
                            ? 'text-premium-gold fill-current'
                            : 'text-muted-foreground/30'
                          }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <Zap className="w-4 h-4 text-premium-gold" />
                </div>

                {/* Product Name */}
                <h3 className="font-bold text-xl text-foreground font-poppins group-hover:text-premium-gold transition-colors">
                  {product.name}
                </h3>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/50 text-accent-foreground text-xs rounded-lg text-center font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="text-sm text-whatsapp font-bold bg-whatsapp/10 px-2 py-1 rounded-lg">
                    Save ₹{parseInt(product.originalPrice.replace(/[^\d]/g, '')) - parseInt(product.price.replace(/[^\d]/g, ''))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="default"
                    className="rounded-xl group/btn"
                    disabled={!product.inStock}
                    onClick={() => handleAddToCart(product)}
                  >
                    <Plus className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="whatsapp"
                    size="default"
                    className="rounded-xl group/btn"
                    onClick={() => window.open(`https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in ${product.name}`, '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Order Now
                  </Button>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 0 1px rgba(var(--premium-gold), 0.2), 0 0 20px rgba(var(--premium-gold), 0.1)' }}>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">No products found</h3>
            <p className="text-muted-foreground text-lg">
              Please select a different category to view our amazing products.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;