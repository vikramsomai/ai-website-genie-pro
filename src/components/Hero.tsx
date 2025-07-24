import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, TrendingUp, Zap, Monitor } from "lucide-react";
import heroImage from "@/assets/hero-cityscape.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentDisplay, setCurrentDisplay] = useState(0);

  const ledDisplays = [
    "PREMIUM LED DISPLAYS",
    "4K ULTRA HD QUALITY",
    "OUTDOOR WEATHERPROOF",
    "INDOOR RETAIL SCREENS",
    "DIGITAL BILLBOARDS"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDisplay((prev) => (prev + 1) % ledDisplays.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[1200px] overflow-hidden flex items-center pt-20 md:pt-0">
      {/* Animated LED Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-primary/20 to-black"></div>

        {/* LED Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="grid grid-cols-12 gap-2 h-full w-full p-4">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="bg-premium-gold/20 rounded-sm animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Lightning Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-px h-32 bg-premium-gold animate-lightning opacity-60"></div>
          <div className="absolute top-3/4 right-1/3 w-px h-24 bg-premium-blue animate-lightning opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-px h-40 bg-premium-gold animate-lightning opacity-50" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Scanning Lines */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-premium-gold to-transparent animate-slide-down opacity-60"></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-premium-blue to-transparent animate-slide-down opacity-40" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Floating Circuit Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-3 h-3 border border-premium-gold rounded animate-rotate-slow opacity-70"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-premium-blue rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-32 left-1/3 w-4 h-4 border-2 border-premium-gold rotate-45 animate-float opacity-80"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-premium-gold rounded animate-neon-pulse"></div>

          {/* Moving particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-premium-gold rounded-full animate-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl ">
        <div className="animate-fade-in space-y-8">
          {/* Premium Badge */}
          <div className="max-sm:mt-60  inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-premium-gold " />
            <span className="text-white/90 font-medium tracking-wide">Premium LED Display Technology</span>
            <TrendingUp className="w-4 h-4 text-premium-gold" />
          </div>

          {/* LED Display Simulator */}
          <div className="mb-8">
            <div className="relative mx-auto max-w-4xl">
              <div className="bg-black/80 border-4 border-premium-gold/50 rounded-2xl p-8 shadow-neon backdrop-blur-lg">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Monitor className="w-8 h-8 text-premium-gold animate-pulse" />
                  <div className="text-premium-gold text-sm font-mono">LED DISPLAY ACTIVE</div>
                  <Zap className="w-6 h-6 text-premium-blue animate-lightning" />
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-premium-gold font-mono tracking-wider mb-2 animate-neon-pulse">
                    {ledDisplays[currentDisplay]}
                  </div>
                  <div className="h-1 bg-premium-gold/30 rounded-full overflow-hidden">
                    <div className="h-full bg-premium-gold animate-shimmer rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-white font-poppins leading-tight">
              <span className="block">Transform Your</span>
              <span className=" ">
                Vision
              </span>
              <span className="block animate-slide-up" style={{ animationDelay: '0.2s' }}>Into Reality</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Experience the future of digital advertising with our cutting-edge LED display solutions.
              Premium quality, stunning visuals, and unmatched performance.
            </p>
          </div >

          {/* Stats */}
          < div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto my-12" >
            {
              [
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
              ))
            }
          </div >

          {/* CTA Buttons */}
          < div className="flex flex-col sm:flex-row gap-6 justify-center items-center" >
            <Button
              variant="premium"
              size="xl"
              className="group relative overflow-hidden"
              onClick={() => window.open('https://wa.me/919274488477', '_blank')}
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
          </div >


        </div >
      </div >

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce-gentle mt-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse"></div>
        </div>
        <p className="text-white/50 text-xs mt-2 font-medium tracking-wider">SCROLL</p>
      </div> */}
    </section >
  );
};

export default Hero;