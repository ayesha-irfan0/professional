import SectionTitle from "../../components/SectionTitle";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function Fashion() {
  const fashionProducts = products.slice(0, 4); // first 4 as fashion category

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <SectionTitle title="Fashion Collection" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {fashionProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price} id={0}          />
        ))}
      </div>
    </div>
  );
}
