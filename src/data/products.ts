export interface Product {
  id: number;
  name: string;
  flavor: string;
  price: number;
  image: string;
  color: string;
  category: string;
}

export const categories = ['All', 'Classic', 'Fruity', 'Premium'] as const;

export const products: Product[] = [
  {
    id: 1,
    name: "Blue Lagoon",
    flavor: "Blue Raspberry",
    price: 2.49,
    image: "/placeholder.svg",
    color: "#05BFDB",
    category: "Premium",
  },
  {
    id: 2,
    name: "Classic Clear",
    flavor: "Original Soda",
    price: 1.99,
    image: "/placeholder.svg",
    color: "#E8F4F8",
    category: "Classic",
  },
  {
    id: 3,
    name: "Berry Burst",
    flavor: "Mixed Berry",
    price: 2.49,
    image: "/placeholder.svg",
    color: "#8B1874",
    category: "Fruity",
  },
  {
    id: 4,
    name: "Mango Twist",
    flavor: "Alphonso Mango",
    price: 2.49,
    image: "/placeholder.svg",
    color: "#FF9F29",
    category: "Fruity",
  },
  {
    id: 5,
    name: "Sunset Orange",
    flavor: "Blood Orange",
    price: 2.49,
    image: "/placeholder.svg",
    color: "#FF5C00",
    category: "Fruity",
  },
  {
    id: 6,
    name: "Golden Fizz",
    flavor: "Pineapple",
    price: 2.49,
    image: "/placeholder.svg",
    color: "#FFB800",
    category: "Fruity",
  },
  {
    id: 7,
    name: "Citrus Splash",
    flavor: "Lemon Lime",
    price: 2.29,
    image: "/placeholder.svg",
    color: "#C4E538",
    category: "Classic",
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return products;
  return products.filter(p => p.category === category);
};
