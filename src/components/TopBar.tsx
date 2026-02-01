import { Clock, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-background border-b border-border/50">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-primary via-primary/90 to-secondary text-primary-foreground text-center py-2.5 text-sm font-medium tracking-wide">
        <span>🎉 Super Grok AI Shared/Personal Available now!! →</span>
      </div>
      
      {/* Info Bar */}
      <div className="section-container py-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-medium">Working Hours:</span>
              <span className="text-primary font-semibold">10.30 AM - 12.30 AM (BST)</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:info@iptvbd.com" className="hover:text-primary transition-colors">
                info@iptvbd.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <a 
              href="#" 
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
