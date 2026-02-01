import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, ArrowRight, ShoppingBag } from "lucide-react";
import foxIcon from "@/assets/fox-icon.png";

const HeroSection = () => {
  return (
    <section className="py-8 bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Main Hero Banner */}
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background border border-border p-8 min-h-[350px] flex flex-col justify-center">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>Registered by the Govt. of Bangladesh</span>
            </div>
            
            <div className="relative z-10">
              <p className="text-muted-foreground mb-2">You're in Biggest shop for</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Digital products in Bangladesh
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg text-muted-foreground italic">Welcome to</span>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IP</span>
                </div>
                <span className="text-3xl font-bold">
                  <span className="text-primary">IPTV</span>
                  <span className="text-secondary">BD</span>
                </span>
              </div>

              <div className="flex items-center gap-6 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Govt <span className="font-semibold text-foreground">Verified</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-muted-foreground">Authentic <span className="font-semibold text-foreground">Product</span></span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wide">
                Get access to the largest collection<br />
                of the educational OTT products in one place
              </p>

              <Button className="btn-brand group">
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Decorative circles */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Side Product Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {/* Autodesk Card */}
            <div className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-4 flex flex-col items-center justify-center text-center min-h-[100px] hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-semibold text-white">AUTODESK</span>
              </div>
              <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">Products Collections</span>
            </div>

            {/* Google Card */}
            <div className="rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 p-4 flex flex-col items-center justify-center text-center min-h-[100px] hover:scale-[1.02] transition-transform cursor-pointer">
              <span className="text-xl font-bold text-white mb-1">Google</span>
              <span className="text-sm bg-white/20 text-white px-2 py-1 rounded">Products Collections</span>
            </div>

            {/* Microsoft Card */}
            <div className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-4 flex flex-col items-center justify-center text-center min-h-[100px] hover:scale-[1.02] transition-transform cursor-pointer">
              <span className="text-xl font-bold text-white mb-1">Microsoft</span>
              <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">Products Collections</span>
            </div>
          </div>
        </div>

        {/* Google AI Pro Banner */}
        <a 
          href="https://wa.me/8801767046095" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block mt-8 group"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600" />
            
            {/* Mesh pattern overlay */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`
            }} />
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left flex-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4 border border-white/30">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/90 text-sm font-medium">Available Now</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
                  Google AI Pro<span className="text-secondary">/ Ultra</span>
                </h2>
                <p className="text-white/80 text-lg mb-6">Premium Subscription Package</p>
                
                {/* Features grid */}
                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-4">
                  {[
                    { icon: "✨", text: "Gemini App" },
                    { icon: "🎮", text: "Play" },
                    { icon: "🤖", text: "Latest AI" },
                    { icon: "☁️", text: "100 GB Storage" }
                  ].map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      <span className="text-lg">{feature.icon}</span>
                      <span className="text-white text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-white/50 to-secondary" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
