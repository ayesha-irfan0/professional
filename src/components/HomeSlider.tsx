"use client";

import { useState, useEffect } from "react";

const banners = [
  "/images/banners/banner1.jpg",
  "/images/banners/banner2.jpg",
  "/images/banners/banner3.jpg",
  "/images/banners/banner4.jpg",
  "/images/banners/banner5.jpg",
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-b-xl">
      {/* Fixed container height */}
      <div className="flex justify-center items-center h-32 sm:h-36 md:h-40 bg-gray-100">
        <img
          key={current}
          src={banners[current]}
          alt={`Banner ${current + 1}`}
          className="h-full w-auto object-contain transition-all duration-700"
        />
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
