import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-8 bg-background overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Main Hero Banner */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden min-h-[400px] flex flex-col justify-center">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-purple-50 to-teal-50 dark:from-violet-950/30 dark:via-purple-950/20 dark:to-teal-950/20" />
            
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 backdrop-blur-[1px]" />
            
            {/* Animated orbs */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-200/20 to-teal-200/20 dark:from-violet-500/10 dark:to-teal-500/10 rounded-full blur-3xl" />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              {/* Govt Badge */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-full border border-white/50 dark:border-white/20 shadow-lg">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs md:text-sm text-foreground/80 font-medium">Registered by the Govt. of Bangladesh</span>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="mt-8 md:mt-0">
                <p className="text-muted-foreground mb-2 text-sm md:text-base">You're in Biggest shop for</p>
                
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Digital products<br />
                  <span className="bg-gradient-to-r from-primary via-violet-600 to-secondary bg-clip-text text-transparent">in Bangladesh</span>
                </h1>
                
                <p className="text-lg text-muted-foreground italic mb-6">Welcome to</p>
                
                {/* Logo */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-md opacity-50 animate-pulse" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
                      <span className="text-white font-bold text-2xl">IP</span>
                    </div>
                  </div>
                  <span className="text-4xl font-bold">
                    <span className="text-primary drop-shadow-sm">IPTV</span>
                    <span className="text-secondary drop-shadow-sm">BD</span>
                  </span>
                </div>

                {/* Verification badges */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Govt <span className="font-semibold text-foreground">Verified</span></span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-full border border-secondary/20 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-sm">Authentic <span className="font-semibold text-foreground">Product</span></span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider leading-relaxed">
                  Get access to the largest collection<br />
                  of the educational OTT products in one place
                </p>

                <a href="https://wa.me/8801767046095" target="_blank" rel="noopener noreferrer">
                  <Button className="btn-brand group px-8 py-6 text-base rounded-xl shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                    <Sparkles className="w-5 h-5" />
                    Shop Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Side Product Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {/* Autodesk Card */}
            <a 
              href="https://wa.me/8801767046095" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden min-h-[120px] flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              
              <div className="relative z-10 p-6">
                <span className="text-xl font-bold text-white mb-3 block tracking-wide group-hover:scale-105 transition-transform">AUTODESK</span>
                <span className="inline-block text-sm bg-gradient-to-r from-primary/30 to-secondary/30 text-primary border border-primary/30 px-4 py-1.5 rounded-full backdrop-blur-sm group-hover:from-primary/40 group-hover:to-secondary/40 transition-all">
                  Products Collections
                </span>
              </div>
            </a>

            {/* Google Card */}
            <a 
              href="https://wa.me/8801767046095" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden min-h-[120px] flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-emerald-500 to-teal-600" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)'
              }} />
              
              <div className="relative z-10 p-6">
                <span className="text-2xl font-bold text-white mb-3 block group-hover:scale-105 transition-transform">Google</span>
                <span className="inline-block text-sm bg-white/20 text-white border border-white/30 px-4 py-1.5 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  Products Collections
                </span>
              </div>
            </a>

            {/* Microsoft Card */}
            <a 
              href="https://wa.me/8801767046095" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden min-h-[120px] flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
              
              <div className="relative z-10 p-6">
                <span className="text-2xl font-bold text-white mb-3 block group-hover:scale-105 transition-transform">Microsoft</span>
                <span className="inline-block text-sm bg-gradient-to-r from-primary/30 to-secondary/30 text-primary border border-primary/30 px-4 py-1.5 rounded-full backdrop-blur-sm group-hover:from-primary/40 group-hover:to-secondary/40 transition-all">
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
          className="block mt-8 group"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600" />
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" style={{
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s ease-in-out infinite'
            }} />
            
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
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors group-hover:scale-[1.02]"
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
      
      {/* Custom animation keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;