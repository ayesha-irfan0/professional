"use client";
import Image from "next/image";

export default function TestImagePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Next.js Image Test</h1>
      
      <div className="relative w-96 h-96">
        <Image
          src="/images/products/product1.jpg"
          alt="Red Dress"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      
      <p className="mt-6 text-gray-700">If you see the image above, your Image setup works!</p>
    </div>
  );
}

