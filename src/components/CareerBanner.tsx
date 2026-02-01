import { Button } from "@/components/ui/button";
import { ArrowRight, Presentation, FileCheck, Trophy } from "lucide-react";

const CareerBanner = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="section-container">
        <div className="relative rounded-[2rem] overflow-hidden">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600" />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-transparent to-indigo-600/50 opacity-60" />
          
          {/* Floating orbs */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-white/5 rounded-full blur-3xl" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-14 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left Content */}
              <div className="text-center lg:text-left max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-5">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span className="text-white/80 text-xs font-medium uppercase tracking-wider">Career Tools</span>
                </div>
                
                <p className="text-white/50 text-xs md:text-sm mb-3 uppercase tracking-[0.25em] font-medium">
                  Nail the Presentation. Ace the CV. Land the Job.
                </p>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                  Elevate Your Future.
                  <span className="block mt-1 bg-gradient-to-r from-white via-secondary to-teal-300 bg-clip-text text-transparent">
                    One Step Ahead, Always
                  </span>
                </h3>
                
                <a href="https://wa.me/8801767046095" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="group rounded-full bg-white text-slate-900 hover:bg-white px-8 py-6 text-base font-semibold shadow-2xl shadow-black/20 transition-all duration-300 hover:shadow-black/30 hover:scale-105"
                  >
                    Get it Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
                  </Button>
                </a>
              </div>
              
              {/* Right Icons - Premium Glass Cards */}
              <div className="flex items-center gap-4 md:gap-5">
                {[
                  { icon: Presentation, label: "Present" },
                  { icon: FileCheck, label: "CV" },
                  { icon: Trophy, label: "Success" }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="group relative"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Card */}
                    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110 hover:border-white/40">
                      <item.icon className="w-7 h-7 md:w-8 md:h-8 text-white/90" strokeWidth={1.5} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom shine line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          
          {/* Top shine line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;