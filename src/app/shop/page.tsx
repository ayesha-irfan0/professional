import ProductCard from "components/ProductCard";
import { Product, products } from "data/products";

<section className="max-w-7xl mx-auto px-4 py-20 bg-gray-100 rounded-t-3xl -mt-24">
  <h2 className="text-4xl font-bold mb-12 text-center">Shop Our Collection</h2>
  <div className="flex space-x-6 overflow-x-auto pb-6">
    {products.map((product: Product) => (
      <div key={product.id} className="flex-shrink-0 w-72">
        <ProductCard product={product} />
      </div>
    ))}
  </div>
</section>
