import { Home, Grid, ShoppingCart, ClipboardList, User } from "lucide-react";

const MobileBottomNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 safe-area-bottom">
      <div className="flex items-center justify-around py-2">
        <a href="/" className="flex flex-col items-center gap-1 p-2 text-primary">
          <Home className="w-5 h-5" />
          <span className="text-xs font-medium">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
          <Grid className="w-5 h-5" />
          <span className="text-xs">Categories</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 p-2 relative text-muted-foreground hover:text-primary transition-colors">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
            0
          </span>
          <span className="text-xs">Cart</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
          <ClipboardList className="w-5 h-5" />
          <span className="text-xs">Orders</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
          <User className="w-5 h-5" />
          <span className="text-xs">Log In</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
