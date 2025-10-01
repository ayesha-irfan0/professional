"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "../../../data/products";

interface Params {
  params: { id: string };
}

export default function ProductDetail({ params }: Params) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 bg-white rounded-2xl shadow-xl p-8">
        <div className="relative w-full md:w-1/2 h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
            priority
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-pink-600 font-bold mb-6">${product.price}</p>
          <p className="text-gray-700 mb-6">
            High-quality fashion product. Perfect for your style. Available now in limited quantity.
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
