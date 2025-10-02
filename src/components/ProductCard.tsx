"use client";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  onAddToCart?: () => void;
}

export default function ProductCard({
  id,
  title,
  image,
  price,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      {/* Image container with fixed height */}
      <div className="h-28 sm:h-32 md:h-36 flex justify-center items-center bg-gray-50">
        <img
          src={image}
          alt={title}
          className="max-h-full w-auto object-contain"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">${price}</p>
        <button
          onClick={onAddToCart}
          className="mt-auto bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
