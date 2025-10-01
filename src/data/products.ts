export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  { id: "product1", name: "Red Dress", price: 120, image: "/images/products/product1.jpg" },
  { id: "product2", name: "Blue Jacket", price: 150, image: "/images/products/product2.jpg" },
  { id: "product3", name: "Yellow Skirt", price: 80, image: "/images/products/product3.jpg" },
  { id: "product4", name: "Black Trousers", price: 100, image: "/images/products/product4.jpg" },
  { id: "product5", name: "White Blouse", price: 90, image: "/images/products/product5.jpg" },
  { id: "product6", name: "Green Coat", price: 200, image: "/images/products/product6.jpg" },
];
