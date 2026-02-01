import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, FileText, Trophy } from "lucide-react";

const CareerBanner = () => {
  return (
    <section className="py-16">
      <div className="section-container">
        <div className="rounded-3xl bg-gradient-to-r from-primary via-violet-600 to-indigo-500 p-10 md:p-14 relative overflow-hidden shadow-2xl">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left max-w-xl">
              <p className="text-white/70 text-sm mb-3 uppercase tracking-widest font-medium">
                Nail the Presentation. Ace the CV. Land the Job.
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Elevate Your Future. One Step Ahead, Always
              </h3>
              <a href="https://wa.me/8801767046095" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="secondary" 
                  className="group rounded-full bg-white text-foreground hover:bg-white/90 px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get it Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            {/* Icons */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/25 transition-colors cursor-pointer">
                <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/25 transition-colors cursor-pointer">
                <FileText className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/25 transition-colors cursor-pointer">
                <Trophy className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;
