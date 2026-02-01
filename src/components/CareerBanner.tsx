import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, FileText, Trophy } from "lucide-react";

const CareerBanner = () => {
  return (
    <section className="py-12">
      <div className="section-container">
        <div className="rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm mb-2 uppercase tracking-wide">
                Nail the Presentation. Ace the CV. Land the Job.
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Elevate Your Future. One Step Ahead, Always
              </h3>
              <Button variant="secondary" className="group rounded-full bg-white text-foreground hover:bg-white/90">
                Get it Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;
