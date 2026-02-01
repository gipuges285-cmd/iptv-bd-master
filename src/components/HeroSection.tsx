import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-6 md:py-10 bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Main Hero Banner */}
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden min-h-[380px] md:min-h-[420px] flex flex-col justify-center border border-border/50">
            {/* Soft gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-teal-50/50 dark:from-violet-950/40 dark:via-background dark:to-teal-950/30" />
            
            {/* Subtle mesh overlay */}
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse at 0% 0%, rgba(139, 92, 246, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(20, 184, 166, 0.06) 0%, transparent 50%)'
            }} />
            
            {/* Content */}
            <div className="relative z-10 p-6 md:p-10">
              {/* Govt Badge - Top Right */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs md:text-sm">Registered by the Govt. of Bangladesh</span>
              </div>
              
              {/* Main Content */}
              <div className="mt-6 md:mt-0">
                <p className="text-muted-foreground mb-1 text-sm">You're in Biggest shop for</p>
                
                <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-foreground mb-5 leading-tight">
                  Digital products in Bangladesh
                </h1>
                
                <p className="text-base md:text-lg text-muted-foreground italic mb-5">Welcome to</p>
                
                {/* Logo */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">IP</span>
                  </div>
                  <span className="text-3xl md:text-4xl font-bold tracking-tight">
                    <span className="text-primary">IPTV</span>
                    <span className="text-secondary">BD</span>
                  </span>
                </div>

                {/* Verification badges */}
                <div className="flex flex-wrap items-center gap-5 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Govt <span className="font-semibold text-foreground">Verified</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-sm text-muted-foreground">Authentic <span className="font-semibold text-foreground">Product</span></span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-muted-foreground mb-6 uppercase tracking-widest leading-relaxed">
                  Get access to the largest collection<br />
                  of the educational OTT products in one place
                </p>

                <a href="https://wa.me/8801767046095" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-5 rounded-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 group">
                    Shop Now
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Side Product Cards */}
          <div className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4">
            {/* Autodesk Card */}
            <a 
              href="https://wa.me/8801767046095" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden min-h-[100px] lg:min-h-[120px] flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] to-[#0f172a]" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 p-4">
                <span className="text-base md:text-lg font-bold text-white mb-2 block tracking-wide">AUTODESK</span>
                <span className="inline-block text-xs bg-primary/20 text-primary px-3 py-1 rounded border border-primary/30">
                  Products Collections
                </span>
              </div>
            </a>

            {/* Google Card */}
            <a 
              href="https://wa.me/8801767046095" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden min-h-[100px] lg:min-h-[120px] flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-600" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 p-4">
                <span className="text-lg md:text-xl font-bold text-white mb-2 block">Google</span>
                <span className="inline-block text-xs bg-slate-900/40 text-white px-3 py-1 rounded border border-white/20">
                  Products Collections
                </span>
              </div>
            </a>

            {/* Microsoft Card */}
            <a 
              href="https://wa.me/8801767046095" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden min-h-[100px] lg:min-h-[120px] flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#334155] to-[#1e293b]" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 p-4">
                <span className="text-lg md:text-xl font-bold text-white mb-2 block">Microsoft</span>
                <span className="inline-block text-xs bg-primary/20 text-primary px-3 py-1 rounded border border-primary/30">
                  Products Collections
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Google AI Pro Banner */}
        <a 
          href="https://wa.me/8801767046095" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block mt-6 group"
        >
          <div className="relative rounded-2xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600" />
            
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 40%),
                               radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 40%)`
            }} />
            
            {/* Content */}
            <div className="relative z-10 p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left flex-1">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full mb-3 border border-white/20">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/90 text-xs font-medium">Available Now</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-4xl font-black text-white mb-1 tracking-tight">
                    Google AI Pro<span className="text-secondary">/ Ultra</span>
                  </h2>
                  <p className="text-white/70 text-sm md:text-base mb-5">Premium Subscription Package</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                    {[
                      { icon: "✨", text: "Gemini App" },
                      { icon: "🎮", text: "Play" },
                      { icon: "🤖", text: "Latest AI" },
                      { icon: "☁️", text: "100 GB Storage" }
                    ].map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/15 hover:bg-white/15 transition-colors"
                      >
                        <span className="text-sm">{feature.icon}</span>
                        <span className="text-white text-xs font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;