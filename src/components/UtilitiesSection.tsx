const utilityProducts = [
  { id: 1, title: "vidIQ Pro Subscription", price: "899.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-07-05-vjirmnwik1hm-2.webp" },
  { id: 2, title: "Linkedin Sales Navigator - Advanced Plan", price: "2,500.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-04-17-uotrxvebn1ch-2.webp", outOfStock: true },
  { id: 3, title: "Capcut Pro Personal Account", price: "899.00 ৳ - 5,999.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-07-05-gzbj25f9ifqj-2.webp" },
  { id: 4, title: "Google meet Premium", price: "400.00 ৳ - 1,899.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-cloa6wryu8ec-2.webp" },
  { id: 5, title: "Streamyard Advanced Plan 1 Month", price: "799.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-blddoumyd6wa-2.webp" },
];

const UtilitiesSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-teal-50 via-white to-purple-50">
      <div className="section-container">
        <div className="flex items-start gap-4 mb-6">
          <div className="px-4 py-2 bg-secondary/20 rounded-lg">
            <span className="text-sm text-secondary font-medium">Utilities</span>
          </div>
        </div>

        <h2 className="section-title mb-2">Utilities</h2>
        <p className="text-muted-foreground mb-8">Access daily needs products collections</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {utilityProducts.map((product) => (
            <div key={product.id} className="product-card group cursor-pointer">
              <div className="relative aspect-video overflow-hidden bg-muted rounded-t-xl">
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
                <h3 className="font-medium text-foreground line-clamp-2 mb-2 text-sm group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="price-text">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UtilitiesSection;
