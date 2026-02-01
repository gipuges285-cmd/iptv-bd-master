import { Clock, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-background">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-medium">
        <span>🎉 Super Grok AI Shared/Personal Available now!! →</span>
      </div>
      
      {/* Info Bar */}
      <div className="border-b border-border">
        <div className="section-container py-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Working Hours:</span>
                <span className="text-secondary font-medium">10.30 AM - 12.30 AM (BST)</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@iptvbd.com</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
