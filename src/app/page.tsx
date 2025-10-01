import Navbar from "components/Navbar";
import Footer from "components/Footer";
import HomeSlider from "components/HomeSlider";
import ProductCard from "components/ProductCard";
import { products } from "data/products";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Slider */}
        <HomeSlider />

        {/* Featured Collections */}
        <section className="max-w-7xl mx-auto px-4 py-20 relative">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105">
              <img
                src="/images/products/product2.jpg"
                alt="Women"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-6 text-white text-2xl font-bold">
                Women
              </div>
            </div>
            <div className="relative h-80 md:h-[450px] -mt-12 md:-mt-20 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105">
              <img
                src="/images/products/product4.jpg"
                alt="Men"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-6 text-white text-2xl font-bold">
                Men
              </div>
            </div>
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105">
              <img
                src="/images/products/product3.jpg"
                alt="Kids"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-6 text-white text-2xl font-bold">
                Kids
              </div>
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section className="max-w-7xl mx-auto px-4 py-20 bg-gray-100 rounded-t-3xl -mt-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Shop Our Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
