interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  outOfStock?: boolean;
}

const ProductCard = ({ image, title, price, outOfStock = false }: ProductCardProps) => {
  const whatsappLink = "https://wa.me/8801767046095";
  
  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="product-card group cursor-pointer block"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        {outOfStock && (
          <div className="badge-out-of-stock z-10">OUT OF STOCK</div>
        )}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="price-text text-lg">{price}</p>
      </div>
    </a>
  );
};

export default ProductCard;
