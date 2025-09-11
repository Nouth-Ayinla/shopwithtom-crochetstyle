export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew: boolean;
  rating: number;
  reviews: number;
  description?: string;
  whatsappMessage?: string;
  colors?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Purple Baby Crochet Set",
    price: 45,
    image: "/lovable-uploads/6fc85f4c-c2a9-4c2f-8478-0708a47bc3ae.png",
    category: "baby-crochet",
    isNew: true,
    rating: 4.9,
    reviews: 28,
    description: "Complete baby crochet set including romper, bonnet, and booties in beautiful purple. Perfect for special occasions or photo shoots.",
    whatsappMessage: "Hi! I'm interested in the Purple Baby Crochet Set for $45. Can you tell me more about sizing and availability?"
  },
  {
    id: 2,
    name: "Black Bow Slides",
    price: 25,
    image: "/lovable-uploads/0d32d7be-e67d-4d5b-8bb4-2140e495e3b3.png",
    category: "slides",
    isNew: false,
    rating: 4.7,
    reviews: 35,
    description: "Comfortable black slides with elegant bow detail. Perfect for casual outings or relaxing at home.",
    whatsappMessage: "Hi! I'd like to order the Black Bow Slides for $25. What sizes do you have available?"
  },
  {
    id: 3,
    name: "Denim Bow Slides",
    price: 28,
    image: "/lovable-uploads/5eb5076f-695f-41cc-b528-225de757ef43.png",
    category: "slides",
    isNew: true,
    rating: 4.8,
    reviews: 22,
    description: "Stylish denim slides with bow accent. Perfect for casual summer days and beach outings.",
    whatsappMessage: "Hello! I'm interested in the Denim Bow Slides for $28. Are these available in my size?"
  },
  {
    id: 4,
    name: "Designer Buckle Slides",
    price: 35,
    image: "/lovable-uploads/98d83ab2-0708-42c7-b67f-b363eb485f3d.png",
    category: "slides",
    isNew: false,
    rating: 4.6,
    reviews: 18,
    description: "Premium black slides with designer-inspired buckle detail. Comfortable and stylish for everyday wear.",
    whatsappMessage: "Hi! I'd like to purchase the Designer Buckle Slides for $35. Please let me know about size availability."
  },
  {
    id: 5,
    name: "Colorful Slides Collection",
    price: 30,
    image: "/lovable-uploads/cb8bd3e0-3604-4f3e-b92c-36a792eaa06c.png",
    category: "slides",
    isNew: true,
    rating: 4.8,
    reviews: 42,
    description: "Choose from black, green, or orange slides with unique cutout designs. Comfortable and trendy.",
    whatsappMessage: "Hello! I'm interested in the Colorful Slides Collection for $30. What colors and sizes are available?"
  },
  {
    id: 6,
    name: "Blue Bow Slides",
    price: 26,
    image: "/lovable-uploads/e9a5ee58-46c6-4999-907b-8aaf2c440ab0.png",
    category: "slides",
    isNew: false,
    rating: 4.7,
    reviews: 31,
    description: "Comfortable blue slides with fabric bow detail. Perfect for adding a pop of color to your outfit.",
    whatsappMessage: "Hi! I'd like to order the Blue Bow Slides for $26. Are these currently in stock?"
  },
  {
    id: 7,
    name: "Black Crossover Slides",
    price: 32,
    image: "/lovable-uploads/8dce3cb8-6365-4cc0-85b5-4c555c46d4e8.png",
    category: "slides",
    isNew: false,
    rating: 4.5,
    reviews: 24,
    description: "Sleek black slides with crossover leather straps. Modern design for contemporary style.",
    whatsappMessage: "Hello! I'm interested in the Black Crossover Slides for $32. What sizes do you have?"
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = () => {
  return products.slice(0, 5);
};