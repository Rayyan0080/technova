export const products = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    category: "Laptops",
    brand: "Apple",
    price: 2499,
    rating: 4.9,
    stock: 15,
    wireless: true,
    gaming: false,
    studentFriendly: false,
    color: "Silver",
    description: "Supercharged for pros with M2 Max chip.",
    specifications: ["16-inch Liquid Retina XDR", "32GB RAM", "1TB SSD"],
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Dell XPS 13",
    category: "Laptops",
    brand: "Dell",
    price: 1299,
    rating: 4.6,
    stock: 20,
    wireless: true,
    gaming: false,
    studentFriendly: true,
    color: "Silver",
    description: "InfinityEdge display, ultimate portability.",
    specifications: ["13.4-inch FHD+", "16GB RAM", "512GB SSD"],
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    brand: "Sony",
    price: 398,
    rating: 4.8,
    stock: 35,
    wireless: true,
    gaming: false,
    studentFriendly: true,
    color: "Black",
    description: "Industry-leading noise canceling.",
    specifications: [
      "30 hr battery",
      "Multi-point connection",
      "Bluetooth 5.2",
    ],
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=60",
  },
  // (Add the rest of your 30 products here following this structure)
];

export const categories = ["All", "Laptops", "Headphones", "Phones"];
export const brands = ["All", "Apple", "Dell", "Sony"];
