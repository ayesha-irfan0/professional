"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const banners = [
  "/images/banners/banner1.jpg",
  "/images/banners/banner2.jpg",
  "/images/banners/banner3.jpg"
];

export default function HomeSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % banners.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <Image
        src={banners[idx]}
        alt={`Banner ${idx + 1}`}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          Luxury Fashion Collection
        </h1>
        <p className="mt-4 text-xl md:text-2xl drop-shadow-md">
          Style, Comfort & Elegance
        </p>
      </div>
    </div>
  );
}
