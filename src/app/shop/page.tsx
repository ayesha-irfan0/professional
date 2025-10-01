import ProductCard from "components/ProductCard";
import { products } from "data/products";

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Shop Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
