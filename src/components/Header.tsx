import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Globe, Menu, X, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Premium Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-premium rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-premium rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-premium bg-clip-text text-transparent font-poppins">
                TECHSQUAD
              </h1>
              <p className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                Premium LED Solutions
              </p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Products', 'Solutions', 'Technology', 'Support'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative group py-2 px-4 font-medium text-foreground hover:text-primary transition-all duration-300"
              >
                {item}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-premium scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language & Cart - Desktop */}
            <div className="hidden sm:flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="rounded-xl hover:bg-accent/50">
                <Globe className="w-4 h-4 mr-2" />
                EN
              </Button>
              <Button variant="outline" size="icon" className="relative rounded-xl border-2 hover:border-primary/50">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-premium-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                  0
                </span>
              </Button>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button 
                variant="premium" 
                size="default"
                className="rounded-xl font-semibold"
                onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-border/50">
            <nav className="flex flex-col space-y-4 pt-6">
              {['Products', 'Solutions', 'Technology', 'Support'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="flex items-center py-3 px-4 rounded-xl text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <Button variant="outline" size="sm" className="flex-1 mr-3 rounded-xl">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart (0)
                </Button>
                <Button 
                  variant="premium" 
                  size="sm" 
                  className="flex-1 rounded-xl"
                  onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;