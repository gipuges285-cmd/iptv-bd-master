import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, ArrowRight } from "lucide-react";

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
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 p-6 md:p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Google AI Pro/ Ultra</h2>
              <p className="text-secondary mb-4">Subscription</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Gemini app
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Play
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Latest AI in Google apps
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  100 GB Storage
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center">
                <span className="text-3xl">🐱</span>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
