"use client";
import Image from "next/image";

const collections = [
  { id: "women", title: "Women", image: "/images/product2.jpg" },
  { id: "men", title: "Men", image: "/images/product4.jpg" },
  { id: "kids", title: "Kids", image: "/images/product3.jpg" },
];

export default function Fashion() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Fashion Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {collections.map(col => (
          <div
            key={col.id}
            className="relative h-80 rounded-lg overflow-hidden shadow hover:shadow-xl transition"
          >
            <Image
              src={col.image}
              alt={col.title}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4 text-white text-lg font-semibold">
              {col.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
