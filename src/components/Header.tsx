import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Globe, Menu, X, Zap, Sparkles } from "lucide-react";

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-primary/10' 
        : 'bg-gradient-to-b from-black/20 via-black/10 to-transparent'
    }`}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Premium Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-premium rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-glow transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                <Zap className="w-7 h-7 text-white drop-shadow-lg" />
                <Sparkles className="w-3 h-3 text-premium-gold absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-premium rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700"></div>
            </div>
            <div>
              <h1 className={`text-3xl font-bold bg-gradient-premium bg-clip-text text-transparent font-poppins transition-all duration-300 ${
                isScrolled ? 'text-2xl' : 'text-3xl'
              }`}>
                TECHSQUAD
              </h1>
              <p className={`text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
                isScrolled ? 'text-muted-foreground/80' : 'text-white/80'
              }`}>
                Premium LED Solutions
              </p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-10">
            {[
              { name: 'Products', id: 'products' },
              { name: 'Categories', id: 'categories' },
              { name: 'About', id: 'about' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`relative group py-3 px-5 font-semibold transition-all duration-500 rounded-xl ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary hover:bg-accent/30' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-gradient-premium scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></span>
                <div className="absolute inset-0 rounded-xl bg-gradient-premium opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language & Cart - Desktop */}
            <div className="hidden sm:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`rounded-2xl font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'hover:bg-accent/60' 
                    : 'hover:bg-white/20 text-white/90 hover:text-white'
                }`}
              >
                <Globe className="w-4 h-4 mr-2" />
                EN
              </Button>
              <Button 
                variant={isScrolled ? "outline" : "glass"} 
                size="icon" 
                className="relative rounded-2xl border-2 hover:border-primary/60 transition-all duration-300 hover:scale-105"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-gradient-premium text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-xl animate-pulse">
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
            <nav className="flex flex-col space-y-2 pt-6">
              {[
                { name: 'Products', id: 'products' },
                { name: 'Categories', id: 'categories' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button 
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center py-4 px-5 rounded-2xl text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-accent/30 hover:to-primary/10 transition-all duration-500 font-semibold text-left border border-transparent hover:border-primary/20"
                >
                  {item.name}
                </button>
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