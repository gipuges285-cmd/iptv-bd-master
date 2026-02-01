import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">IP</span>
              </div>
              <div>
                <span className="text-xl font-bold">
                  <span className="text-primary">IPTV</span>
                  <span className="text-secondary">BD</span>
                </span>
                <p className="text-[10px] text-gray-400 -mt-1">PAIDI IPTV BD</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Bangladesh's #1 Digital Subscription Platform. Get access to premium tools, 
              streaming services, and software at the best prices.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Shop", "About Us", "Reviews", "Blogs", "Contact Us", "FAQs"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <ArrowRight className="w-3 h-3" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-3">
              {["AI Tools", "Video Streaming", "Audio Streaming", "Educational Tools", "Microsoft Products", "Google Products", "VPN Services"].map((category) => (
                <li key={category}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <ArrowRight className="w-3 h-3" />
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <span>+880 1622-633671</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 shrink-0 text-primary" />
                <span>info@iptvbd.com</span>
              </li>
            </ul>

            <h4 className="font-semibold text-lg mb-3">Newsletter</h4>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-full"
              />
              <Button className="bg-primary hover:bg-primary/90 rounded-full px-4">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2024 IPTV BD - PAIDI IPTV BD. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
