"use client";

import { useCart, Product } from "../../context/CartContext";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import SectionTitle from "../../components/SectionTitle";

export default function ShopPage() {
  const { addToCart } = useCart();

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <SectionTitle title="Shop All Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <div key={product.id} className="relative">
            <ProductCard
              title={product.title}
              image={product.image}
              price={product.price} id={0}            />
            <button
              onClick={() => addToCart(product)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
