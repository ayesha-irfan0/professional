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

        {/* Shop Section */}
        <section className="max-w-7xl mx-auto px-4 py-20 bg-gray-100 rounded-t-3xl">
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
