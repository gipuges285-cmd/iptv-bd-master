import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PromoBannerProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  gradient: string;
}

const PromoBanner = ({ title, subtitle, description, buttonText, gradient }: PromoBannerProps) => {
  return (
    <div className={`rounded-2xl ${gradient} p-8 relative overflow-hidden`}>
      <div className="relative z-10">
        <p className="text-white/80 text-sm mb-2">{subtitle}</p>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 mb-6 max-w-md">{description}</p>
        <Button variant="secondary" className="group rounded-full bg-white text-foreground hover:bg-white/90">
          {buttonText}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
    </div>
  );
};

export default PromoBanner;
