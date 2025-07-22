import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-cityscape.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden flex items-center pt-20 md:pt-0">
      {/* Background Image with Premium Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[10s] ease-out"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Multi-layer Gradient Overlay for Premium Look */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-premium-gold rounded-full animate-bounce-gentle opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-premium-gold rounded-full animate-float opacity-80"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-12 container mx-auto px-6 text-center max-w-6xl">
        <div className="animate-fade-in space-y-8 mt-10">
          {/* Premium Badge */}
          <div className="max-sm:mt-80 mt-10 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-premium-gold " />
            <span className="text-white/90 font-medium tracking-wide">Premium LED Display Technology</span>
            <TrendingUp className="w-4 h-4 text-premium-gold" />
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-poppins leading-tight">
              <span className="block">Transform Your</span>
              <span className="">
                Vision
              </span>
              <span className="block">Into Reality</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Experience the future of digital advertising with our cutting-edge LED display solutions.
              Premium quality, stunning visuals, and unmatched performance.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto my-12">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-premium-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="premium"
              size="xl"
              className="group relative overflow-hidden"
              onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="glass"
              size="xl"
              className="group"
            >
              <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Explore Our Work
            </Button>
          </div>


        </div>
      </div>


    </section>
  );
};

export default Hero;