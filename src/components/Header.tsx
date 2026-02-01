import { Search, Menu, ChevronDown } from "lucide-react";
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
    <header className="bg-background sticky top-0 z-50 shadow-sm" role="banner">
      {/* Main Header */}
      <div className="section-container py-5">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0 group" aria-label="IPTVBD - Home">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              <span className="text-white font-bold text-xl" aria-hidden="true">IP</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-primary">IPTV</span>
                <span className="text-secondary">BD</span>
              </span>
              <p className="text-xs text-muted-foreground tracking-wide">PAIDI IPTV BD</p>
            </div>
          </a>

          {/* Search Bar - Centered */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <form role="search" className="relative">
              <label htmlFor="search-input" className="sr-only">Search products</label>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <Input
                id="search-input"
                type="search"
                placeholder="Search Tools"
                className="pl-12 pr-6 py-3 h-12 w-full rounded-full border-2 border-border/60 bg-muted/30 focus:bg-background focus:border-primary/50 text-base shadow-sm hover:border-primary/30 transition-all duration-200"
              />
            </form>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button 
              className="md:hidden p-2.5 hover:bg-muted rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-t border-border/50 bg-background">
        <div className="section-container">
          <nav className="hidden md:flex items-center gap-1 py-1" role="navigation" aria-label="Main navigation">
            {/* All Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-xl flex items-center gap-2 px-6 py-5 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200">
                  <Menu className="w-5 h-5" />
                  All Categories
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-card border border-border/50 shadow-2xl rounded-2xl p-2 mt-2">
                {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category} 
                    className="cursor-pointer hover:bg-primary/10 hover:text-primary rounded-xl px-4 py-3 text-sm font-medium transition-colors"
                  >
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
                className="px-5 py-3 text-foreground hover:text-primary font-medium transition-all duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-6 transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background">
          <div className="section-container py-4">
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search Tools"
                className="pl-12 pr-4 py-3 w-full rounded-xl border-2 border-border/60"
              />
            </div>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
