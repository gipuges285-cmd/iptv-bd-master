import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, FileText, Award } from "lucide-react";

const CareerBanner = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="section-container">
        <div className="rounded-3xl bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 p-8 md:p-12 relative overflow-hidden">
          {/* Subtle glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="text-center md:text-left max-w-lg">
              <p className="text-white/60 text-xs md:text-sm mb-3 uppercase tracking-[0.2em] font-medium">
                Nail the Presentation. Ace the CV. Land the Job.
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Elevate Your Future. One Step Ahead, Always
              </h3>
              <a href="https://wa.me/8801767046095" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="group rounded-full bg-white text-slate-900 hover:bg-white/95 px-6 py-5 font-semibold shadow-lg transition-all duration-300"
                >
                  Get it Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            {/* Right Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105">
                <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-white/90" />
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105">
                <FileText className="w-6 h-6 md:w-7 md:h-7 text-white/90" />
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105">
                <Award className="w-6 h-6 md:w-7 md:h-7 text-white/90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;