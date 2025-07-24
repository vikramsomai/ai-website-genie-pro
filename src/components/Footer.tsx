import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black/50 border-t border-premium-gold/20 backdrop-blur-md overflow-hidden">
      {/* LED Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-primary/5 to-transparent"></div>
        
        {/* Subtle LED Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 gap-1 h-full w-full">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="bg-premium-gold/20 rounded-sm animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-premium-gold/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-premium-gold rounded-lg flex items-center justify-center group-hover:animate-pulse">
                  <span className="text-black font-bold">T</span>
                </div>
                <h3 className="text-xl font-bold font-poppins text-white group-hover:text-premium-gold transition-colors duration-300">TECHSQUAD</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Leading provider of premium LED display solutions. Transform your advertising with our cutting-edge technology and professional service.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-premium-gold hover:bg-white/10 hover:scale-110 transition-all duration-300">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-premium-gold hover:bg-white/10 hover:scale-110 transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-premium-gold hover:bg-white/10 hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-poppins text-white animate-glow">Quick Links</h4>
              <div className="space-y-2">
                <a href="#products" className="block text-white/70 hover:text-premium-gold transition-all duration-300 hover:translate-x-1">
                  Our Products
                </a>
                <a href="#about" className="block text-white/70 hover:text-premium-gold transition-all duration-300 hover:translate-x-1">
                  About Us
                </a>
                <a href="#services" className="block text-white/70 hover:text-premium-gold transition-all duration-300 hover:translate-x-1">
                  Services
                </a>
                <a href="#contact" className="block text-white/70 hover:text-premium-gold transition-all duration-300 hover:translate-x-1">
                  Contact
                </a>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-poppins text-white animate-glow">Products</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/70 hover:text-premium-gold transition-all duration-300 hover:translate-x-1">
                  Outdoor LED Screens
                </a>
                <a href="#" className="block text-white/70 hover:text-premium-gold transition-all duration-300 hover:translate-x-1">
                  Indoor LED Screens
                </a>
                <a href="#" className="block text-white/70 hover:text-premium-gold transition-all duration-300 hover:translate-x-1">
                  Flexible LED Screens
                </a>
                <a href="#" className="block text-white/70 hover:text-premium-gold transition-all duration-300 hover:translate-x-1">
                  A-Type Standee
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-poppins text-white animate-glow">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-white/70 hover:text-premium-gold transition-colors duration-300 group">
                  <MapPin className="w-5 h-5 text-premium-gold mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div>
                    <p>
                      123 Business District<br />
                      Surat, Gujarat 395009<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white/70 hover:text-premium-gold transition-colors duration-300 group">
                  <Phone className="w-5 h-5 text-premium-gold group-hover:animate-pulse" />
                  <p>+91 XXXXX XXXXX</p>
                </div>
                <div className="flex items-center space-x-3 text-white/70 hover:text-premium-gold transition-colors duration-300 group">
                  <Mail className="w-5 h-5 text-premium-gold group-hover:animate-pulse" />
                  <p>info@techsquad.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-premium-gold/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm hover:text-premium-gold transition-colors duration-300">
                © 2024 TECHSQUAD. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-white/60 hover:text-premium-gold text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-premium-gold text-sm transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-white/60 hover:text-premium-gold text-sm transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;