interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  outOfStock?: boolean;
}

const ProductCard = ({ image, title, price, outOfStock = false }: ProductCardProps) => {
  const whatsappLink = "https://wa.me/8801767046095";
  
  return (
    <article 
      itemScope 
      itemType="https://schema.org/Product"
      className="product-card group cursor-pointer block"
    >
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={`${title} - ${price} - Order on WhatsApp`}
        className="block"
      >
        <div className="relative aspect-square overflow-hidden bg-muted">
          {outOfStock && (
            <div className="badge-out-of-stock z-10" aria-label="Out of stock">OUT OF STOCK</div>
          )}
          <img
            src={image}
            alt={`${title} - Premium digital product available at IPTVBD Bangladesh`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </div>
        <div className="p-4">
          <h3 
            itemProp="name" 
            className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors"
          >
            {title}
          </h3>
          <p 
            itemProp="offers" 
            itemScope 
            itemType="https://schema.org/Offer" 
            className="price-text text-lg"
          >
            <span itemProp="price">{price}</span>
            <meta itemProp="priceCurrency" content="BDT" />
            <meta itemProp="availability" content={outOfStock ? "https://schema.org/OutOfStock" : "https://schema.org/InStock"} />
          </p>
        </div>
      </a>
    </article>
  );
};

export default ProductCard;
