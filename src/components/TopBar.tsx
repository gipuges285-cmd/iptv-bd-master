import { Clock, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-background border-b border-border">
      {/* Announcement Banner */}
      <div className="announcement-bar">
        <span>Super Grok AI Shared/Personal Available now!! →</span>
      </div>
      
      {/* Info Bar */}
      <div className="section-container py-2">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Working Hours: 10.30 AM - 12.30 AM (BST)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>info@iptvbd.com</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
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
  );
};

export default TopBar;
