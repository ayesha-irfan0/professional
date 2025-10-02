export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Elegant Dress",
    image: "/images/products/product1.jpg",
    price: 120,
    description: "Stylish and comfortable dress for all occasions.",
  },
  {
    id: 2,
    title: "Casual Jacket",
    image: "/images/products/product2.jpg",
    price: 90,
    description: "Trendy jacket for everyday wear.",
  },
  {
    id: 3,
    title: "Summer Outfit",
    image: "/images/products/product3.jpg",
    price: 75,
    description: "Light and cool outfit for summer.",
  },
  {
    id: 4,
    title: "Evening Gown",
    image: "/images/products/product4.jpg",
    price: 150,
    description: "Elegant gown for special evenings.",
  },
  {
    id: 5,
    title: "Streetwear Hoodie",
    image: "/images/products/product5.jpg",
    price: 65,
    description: "Comfortable hoodie for casual style.",
  },
  {
    id: 6,
    title: "Denim Jeans",
    image: "/images/products/product6.jpg",
    price: 80,
    description: "Classic denim jeans with perfect fit.",
  },
];
