import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useState } from "react";

interface CartDrawerProps {
  variant?: "outline" | "glass";
}

const CartDrawer = ({ variant = "outline" }: CartDrawerProps) => {
  const { items, updateQuantity, removeFromCart, getTotalItems, sendToWhatsApp } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant={variant}
          size="icon"
          className="relative rounded-2xl border-2 transition-all duration-300 "
        >
          <ShoppingCart className="w-5 h-5" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-gradient-premium text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-xl ">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg glass-morphism border-l border-premium-gold/20">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-white ">
            Shopping Cart ({getTotalItems()})
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-4 h-[calc(100vh-200px)] overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingCart className="w-16 h-16 text-white/40" />
              <p className="text-white/60">Your cart is empty</p>
              <Button
                variant="glass"
                onClick={() => setIsOpen(false)}
                className="rounded-xl hover:shadow-glow"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              {items.map((item, index) => (
                <div key={item.id} className="p-4 rounded-2xl glass-morphism border border-premium-gold/20 hover:border-premium-gold/40 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover border border-premium-gold/30"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <p className="text-sm text-white/60">{item.category}</p>
                      <p className="text-premium-gold font-bold">{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="glass"
                        size="icon"
                        className="w-8 h-8 rounded-lg hover:scale-110 transition-transform duration-200"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-medium text-white">{item.quantity}</span>
                      <Button
                        variant="glass"
                        size="icon"
                        className="w-8 h-8 rounded-lg hover:scale-110 transition-transform duration-200"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 hover:scale-110 transition-all duration-200"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="sticky bottom-0 pt-6 border-t border-premium-gold/20 bg-black/50 backdrop-blur-sm">
                <Button
                  variant="premium"
                  size="lg"
                  className="w-full rounded-xl font-semibold hover:scale-105"
                  onClick={() => {
                    sendToWhatsApp();
                    setIsOpen(false);
                  }}
                >
                  <MessageCircle className="w-5 h-5 mr-2 " />
                  Send Quote Request via WhatsApp
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;