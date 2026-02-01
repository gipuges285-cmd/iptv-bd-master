import { Search, ShoppingCart, Menu, ChevronDown, LogIn } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  "Audio Streaming",
  "Apple Products",
  "VPN",
  "Key",
  "Video Streaming",
  "Utilities",
  "Educational Tools",
  "AI, Grammar and Writing Products",
];

const navLinks = [
  { name: "Shop", href: "#shop" },
  { name: "About Us", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="section-container py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-lg">IP</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold">
                <span className="text-primary">IPTV</span>
                <span className="text-secondary">BD</span>
              </span>
              <p className="text-[10px] text-muted-foreground -mt-1">PAIDI IPTV BD</p>
            </div>
          </a>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search Tools"
                className="pl-10 pr-4 py-2 w-full rounded-full border-border bg-muted/50 focus:bg-background"
              />
            </div>
          </div>

          {/* Cart & Sign In */}
          <div className="flex items-center gap-3">
            <button className="relative p-2 hover:bg-muted rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6 text-foreground" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <span className="text-sm font-medium hidden sm:block">0.00 ৳</span>
            
            <Button variant="default" className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 rounded-full">
              <LogIn className="w-4 h-4" />
              Sign In
            </Button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-muted rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1 mt-4">
          {/* All Categories Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg flex items-center gap-2 px-5">
                <Menu className="w-5 h-5" />
                All Categories
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-card border border-border shadow-xl rounded-xl">
              {categories.map((category) => (
                <DropdownMenuItem key={category} className="cursor-pointer hover:bg-muted">
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Nav Links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-foreground hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search Tools"
                className="pl-10 pr-4 py-2 w-full rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="default" className="mt-2 flex items-center gap-2 bg-primary rounded-lg">
                <LogIn className="w-4 h-4" />
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
