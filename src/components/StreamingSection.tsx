import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const streamingProducts = [
  { id: 1, title: "Mubi Subscription for 6 Months", price: "699.00 ৳", image: "https://subscriptionsbd.net/uploads/products/2025-08-27-fitnftgrck3r-medium.webp" },
  { id: 2, title: "Prime Video 1 Screen", price: "250.00 ৳ - 450.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-07-05-793b1hp2iejk-2.webp", outOfStock: true },
  { id: 3, title: "Peacock TV subscription", price: "400.00 ৳ - 750.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-ctbuffkfrzkj-2.webp" },
  { id: 4, title: "Paramount Plus Subscription", price: "600.00 ৳ - 1,150.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-chm5wyahacot-2.webp" },
  { id: 5, title: "Prime Video Personal Packages", price: "800.00 ৳ - 1,600.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-r8gzvunhrjoa-2.webp" },
  { id: 6, title: "Youtube Premium Subscription", price: "1,150.00 ৳ - 1,899.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-yqz1p6n6jkqn-2.webp" },
  { id: 7, title: "Curiosity Stream Subscriptions", price: "299.00 ৳ - 499.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-t6mb4illmdxq-2.webp" },
  { id: 8, title: "HBO MAX Subscription", price: "150.00 ৳ - 1,300.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-67mx9uvuvz40-2.webp", outOfStock: true },
];

const StreamingSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex items-start gap-4 mb-8">
          <div className="px-4 py-2 bg-primary/20 rounded-lg">
            <span className="text-sm text-primary font-medium">OTT Collection</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Streaming Collection</h2>
            <p className="text-gray-400 max-w-xl">
              Unlock the ultimate Hollywood experience at the best prices guaranteed by IPTV BD! 
              Whether with or without a VPN, access the largest collection of popular Hollywood products with exclusive offers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {streamingProducts.map((product) => (
            <a 
              key={product.id} 
              href="https://wa.me/8801767046095" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-colors cursor-pointer group block"
            >
              <div className="relative aspect-video overflow-hidden">
                {product.outOfStock && (
                  <div className="absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded z-10">
                    OUT OF STOCK
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-white line-clamp-2 mb-2">{product.title}</h3>
                <p className="text-secondary font-bold">{product.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default StreamingSection;
