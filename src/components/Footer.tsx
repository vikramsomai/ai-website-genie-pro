import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-current rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-current rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-current rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                  <span className="text-gold-foreground font-bold">T</span>
                </div>
                <h3 className="text-xl font-bold font-poppins">TECHSQUAD</h3>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Leading provider of premium LED display solutions. Transform your advertising with our cutting-edge technology and professional service.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-poppins">Quick Links</h4>
              <div className="space-y-2">
                <a href="#products" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                  Our Products
                </a>
                <a href="#about" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                  About Us
                </a>
                <a href="#services" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                  Services
                </a>
                <a href="#contact" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-poppins">Products</h4>
              <div className="space-y-2">
                <a href="#" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                  Outdoor LED Screens
                </a>
                <a href="#" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                  Indoor LED Screens
                </a>
                <a href="#" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                  Flexible LED Screens
                </a>
                <a href="#" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                  A-Type Standee
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-poppins">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/80">
                      123 Business District<br />
                      Surat, Gujarat 395009<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <p className="text-primary-foreground/80">+91 XXXXX XXXXX</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <p className="text-primary-foreground/80">info@techsquad.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-primary-foreground/60 text-sm">
                © 2024 TECHSQUAD. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-primary-foreground/60 hover:text-gold text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-gold text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-gold text-sm transition-colors">
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