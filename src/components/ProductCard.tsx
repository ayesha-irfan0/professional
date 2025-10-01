"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col items-center p-4">
      <div className="relative w-full h-80 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-2xl"
          priority
        />
      </div>
      <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
      <p className="text-pink-600 font-bold text-lg">${product.price}</p>
      <Link
        href={`/products/${product.id}`}
        className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-semibold transition shadow-lg hover:shadow-xl"
      >
        View Product
      </Link>
    </div>
  );
}
