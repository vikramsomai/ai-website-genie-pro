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
          className="relative rounded-2xl border-2 hover:border-primary/60 transition-all duration-300 hover:scale-105"
        >
          <ShoppingCart className="w-5 h-5" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-gradient-premium text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-xl animate-pulse">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg bg-background/95 backdrop-blur-xl border-l border-border/20">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold bg-gradient-premium bg-clip-text text-transparent">
            Shopping Cart ({getTotalItems()})
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4 h-[calc(100vh-200px)] overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingCart className="w-16 h-16 text-muted-foreground/30" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <Button 
                variant="outline" 
                onClick={() => setIsOpen(false)}
                className="rounded-xl"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover bg-gradient-to-br from-primary/10 to-accent/10"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <p className="text-primary font-bold">{item.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 rounded-lg"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 rounded-lg"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 rounded-lg hover:bg-destructive/10 hover:text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="sticky bottom-0 pt-6 border-t border-border/50 bg-background/80 backdrop-blur-sm">
                <Button
                  variant="premium"
                  size="lg"
                  className="w-full rounded-xl font-semibold"
                  onClick={() => {
                    sendToWhatsApp();
                    setIsOpen(false);
                  }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
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