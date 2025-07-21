import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import heroImage from "@/assets/hero-cityscape.jpg";

const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
            Premium LED Display
            <span className="block text-gold">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Transform your advertising with cutting-edge LED displays. From outdoor billboards to indoor screens - we deliver stunning visual experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="whatsapp" 
              size="lg" 
              className="text-base px-8 py-3"
              onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
            >
              <Play className="w-5 h-5 mr-2" />
              Get Quote Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
            >
              View Products
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;