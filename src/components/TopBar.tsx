import { Clock, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-white">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-teal-500 text-white text-center py-2 text-sm font-medium">
        <span>🎉 Super Grok AI Shared/Personal Available now!! →</span>
      </div>
      
      {/* Info Bar */}
      <div className="border-b border-gray-100">
        <div className="section-container py-3">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[13px]">
            <div className="flex items-center divide-x divide-gray-200">
              <div className="flex items-center gap-2 pr-6 text-gray-500">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>Working Hours:</span>
                <span className="text-teal-600 font-semibold">10.30 AM - 12.30 AM (BST)</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 pl-6 text-gray-500">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>info@iptvbd.com</span>
              </div>
            </div>
            
            <div className="flex items-center gap-5">
              <a href="#" className="text-gray-400 hover:text-violet-600 transition-colors duration-200">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-600 transition-colors duration-200">
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-600 transition-colors duration-200">
                <Facebook className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
