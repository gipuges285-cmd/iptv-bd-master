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
    <header className="bg-background sticky top-0 z-50" role="banner">
      {/* Main Header Row */}
      <div className="section-container py-4">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0" aria-label="IPTVBD - Home">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-lg">IP</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold">
                <span className="text-primary">IPTV</span>
                <span className="text-secondary">BD</span>
              </span>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">PAIDI IPTV BD</p>
            </div>
          </a>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <form role="search" className="relative">
              <label htmlFor="search-input" className="sr-only">Search products</label>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="search-input"
                type="search"
                placeholder="Search Tools"
                className="pl-12 pr-4 h-11 w-full rounded-full border border-border bg-background focus:border-primary"
              />
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-muted rounded-lg ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-y border-border">
        <div className="section-container">
          <nav className="hidden md:flex items-center gap-0" role="navigation" aria-label="Main navigation">
            {/* All Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-5 flex items-center gap-2 font-medium">
                  <Menu className="w-4 h-4" />
                  All Categories
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border border-border shadow-lg rounded-lg mt-0">
                {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category} 
                    className="cursor-pointer hover:bg-muted px-4 py-2.5"
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
                className="h-12 px-5 flex items-center text-foreground hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background">
          <div className="section-container py-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search Tools"
                className="pl-10 pr-4 h-10 w-full rounded-full border border-border"
              />
            </div>
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted font-medium transition-colors"
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
