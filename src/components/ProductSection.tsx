import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  outOfStock?: boolean;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  seeAllLink?: string;
  bgClass?: string;
}

const ProductSection = ({ title, products, seeAllLink = "#", bgClass = "" }: ProductSectionProps) => {
  return (
    <section className={`py-12 ${bgClass}`}>
      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">{title}</h2>
          <Button variant="outline" className="group rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            See All Products
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              outOfStock={product.outOfStock}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
