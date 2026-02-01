import { Search, Menu, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from "@/assets/logo.png";

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
    <header className="bg-white sticky top-0 z-50 shadow-sm" role="banner">
      {/* Main Header Row */}
      <div className="section-container py-5">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0" aria-label="IPTVBD - Home">
            <img 
              src={logoImage} 
              alt="PAID IPTV BD Logo" 
              className="w-14 h-14 rounded-xl shadow-lg object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-amber-500">PAID</span>
                <span className="text-gray-800"> IPTV</span>
                <span className="text-red-500">BD</span>
              </span>
              <p className="text-[11px] text-gray-400 uppercase tracking-widest">Premium Digital Shop</p>
            </div>
          </a>

          {/* Search Bar */}
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <form role="search" className="relative group">
              <label htmlFor="search-input" className="sr-only">Search products</label>
              {/* Outer glow layer */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-500 to-teal-400 rounded-full opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500 group-hover:duration-200 animate-pulse" />
              {/* Inner glow layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              <div className="relative bg-white rounded-full p-[2px] shadow-lg group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4),0_0_60px_rgba(45,212,191,0.2)] transition-all duration-300">
                <div className="relative bg-white rounded-full">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-violet-500 transition-colors duration-200" />
                  <input
                    id="search-input"
                    type="search"
                    placeholder="Search Tools"
                    className="pl-14 pr-6 h-12 w-full rounded-full border-0 bg-gray-50/50 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-violet-500/30 focus:shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all duration-300"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg ml-auto transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-t border-gray-100 bg-white">
        <div className="section-container">
          <nav className="hidden md:flex items-center" role="navigation" aria-label="Main navigation">
            {/* All Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white rounded-lg h-11 px-5 flex items-center gap-2 font-medium shadow-sm">
                  <Menu className="w-4 h-4" />
                  All Categories
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60 bg-white border border-gray-100 shadow-xl rounded-xl p-1 mt-2">
                {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category} 
                    className="cursor-pointer hover:bg-violet-50 hover:text-violet-600 rounded-lg px-4 py-2.5 text-gray-600 font-medium transition-colors"
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Nav Links */}
            <div className="flex items-center ml-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="h-11 px-5 flex items-center text-gray-600 hover:text-violet-600 font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="section-container py-4">
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Tools"
                className="pl-12 pr-4 h-11 w-full rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-400"
              />
            </div>
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg font-medium transition-colors"
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
