export interface Product {
  id: number;
  name: string;
  flavor: string;
  price: number;
  color: string;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Blue Berry Blast",
    flavor: "Blueberry Soda",
    price: 20, // Updated to ₹20
    color: "#05BFDB",
    category: "All",
    image: "/images/blueberry.png",
  },
  {
    id: 2,
    name: "Clear Lemon Masala",
    flavor: "Spicy Lemon",
    price: 20, // Updated to ₹20
    color: "#FFF700",
    category: "All",
    image: "/images/clearelemon.png",
  },
  {
    id: 3,
    name: "Cola Classic",
    flavor: "Traditional Cola",
    price: 20, // Updated to ₹20
    color: "#8B0000",
    category: "All",
    image: "/images/cola.png",
  },
  {
    id: 4,
    name: "Orange Burst",
    flavor: "Zesty Orange",
    price: 20, // Updated to ₹20
    color: "#FFA500",
    category: "All",
    image: "/images/orange.png",
  },
  {
    id: 5,
    name: "Strawberry",
    flavor: "Sweet & Sour",
    price: 20, // Updated to ₹20
    color: "#FF4081",
    category: "All",
    image: "/images/lemonstrawberry.png",
  },
  {
    id: 6,
    name: "Summer Refreshment",
    flavor: "Mixed Fruit",
    price: 30, // Updated to ₹30
    color: "#00E676",
    category: "All",
    image: "/images/refreshment.png",
  },
];

export const categories = ["All"];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter((product) => product.category === category);
};