import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle, Star, Eye, Heart, Zap, Award, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { products } from '../productDetails'
import { SocialIcon } from "react-social-icons/component";

interface ProductGridProps {
  selectedCategory: string;
}

const ProductGrid = ({ selectedCategory }: ProductGridProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

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
    <section className="py-24 relative overflow-hidden">
      {/* LED Background Effects */}
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-primary/5 to-black/30"></div> */}

        {/* Dynamic Lightning Effects */}
        {/* <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-px h-32 bg-premium-gold animate-lightning opacity-40"></div>
          <div className="absolute top-3/4 right-1/3 w-px h-24 bg-premium-blue animate-lightning opacity-30" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/3 left-2/3 w-px h-40 bg-premium-gold animate-lightning opacity-35" style={{ animationDelay: '3s' }}></div>
        </div> */}

        {/* Floating Particles */}
        {/* <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-premium-gold/50 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            />
          ))}
        </div> */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-premium-gold/10 border border-premium-gold/20 rounded-full px-6 py-3 mb-6 ">
            <Award className="w-4 h-4 text-premium-gold" />
            <span className="text-premium-gold font-medium tracking-wide">Premium Collection</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins ">
            Featured
            <span className="block bg-gradient-to-r from-premium-gold to-yellow-500 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Discover our premium LED display solutions with cutting-edge technology,
            competitive pricing, and unmatched quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative rounded-3xl border border-white/20 overflow-hidden shadow-glow hover:shadow-neon transition-all duration-500 hover:-translate-y-3 hover:scale-105 lightning-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold z-20 ${getBadgeColor(product.badge)}`}>
                {product.badge}
              </div>

              {/* Stock Status */}
              {!product.inStock && (
                <div className="absolute top-4 right-4 bg-red-500/80 text-white px-3 py-1 rounded-full text-xs font-bold z-20  backdrop-blur-sm">
                  Out of Stock
                </div>
              )}

              {/* Product Image */}
              <div
                className="relative overflow-hidden group/image cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-premium-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 border-2 border-premium-gold/0 group-hover:border-premium-gold/40 transition-all duration-500"></div>

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <Button variant="glass" size="icon" className="rounded-full hover:shadow-glow">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="glass"
                    size="icon"
                    className="rounded-full hover:shadow-glow"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                {/* Click to view overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm">
                  <div className="bg-premium-gold/20 border border-premium-gold/40 rounded-lg px-4 py-2 text-white font-medium text-sm animate-pulse-glow">
                    Click to view details
                  </div>
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
                          ? 'text-premium-gold fill-current animate-pulse'
                          : 'text-white/20'
                          }`}
                      />
                    ))}
                    <span className="text-sm text-white/60 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <Zap className="w-4 h-4 text-premium-gold animate-lightning" />
                </div>

                {/* Product Name */}
                <h3
                  className="font-bold text-xl text-white font-poppins group-hover:text-premium-gold transition-colors duration-300 cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >{product.name}
                </h3>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-premium-gold/10 text-premium-gold text-xs rounded-lg text-center font-medium border border-premium-gold/20 hover:bg-premium-gold/20 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-premium-gold ">
                      {product.price}
                    </span>
                    <span className="text-sm text-white/50 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="text-sm text-whatsapp font-bold bg-whatsapp/30 border border-whatsapp/30 px-2 py-1 rounded-lg">
                    Save ₹{parseInt(product.originalPrice.replace(/[^\d]/g, '')) - parseInt(product.price.replace(/[^\d]/g, ''))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Button
                    variant="glass"
                    size="default"
                    className="rounded-xl group/btn hover:shadow-glow"
                    disabled={!product.inStock}
                    onClick={() => handleAddToCart(product)}
                  >
                    <Plus className="w-4 h-4 mr-2 group-hover/btn:scale-110 group-hover/btn:rotate-90 transition-transform" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="whatsapp"
                    size="default"
                    className="group/btn hover:scale-105 transition-all duration-300"
                    onClick={() => window.open(`https://wa.me/919274488477?text=Hi, I'm interested in ${product.name}`, '_blank')}
                  >
                    <SocialIcon className="animate-pulse" network="whatsapp" />
                    Order Now
                  </Button>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              {/* <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 0 1px rgba(var(--premium-gold), 0.2), 0 0 20px rgba(var(--premium-gold), 0.1)' }}>
              </div> */}
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 glass-morphism">
              <Zap className="w-12 h-12 text-premium-gold animate-lightning" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
            <p className="text-white/60 text-lg">
              Please select a different category to view our amazing products.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;