"use client";
import { products } from "../../data/products";
import ProductCard from "components/ProductCard";

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Your Cart</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
