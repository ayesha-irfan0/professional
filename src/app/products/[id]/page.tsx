import { Product, products } from "data/products";

interface Params {
  params: {
    params: any; id: string 
};
}

export default function ProductPage({ params }: Params) {
  // Find product by id from your products.ts
  interface ProductParams {
    id: string;
  }

  interface Params {
    params: ProductParams;
  }

  const product: Product | undefined = products.find(
    (p: Product) => p.id === parseInt(params.params.id)
  );

  if (!product) {
    return <p className="text-center py-12">Product not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-pink-500 font-bold text-xl mb-4">${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
