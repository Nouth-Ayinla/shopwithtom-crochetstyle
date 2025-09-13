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
    price: 21000,
    image: "/lovable-uploads/6fc85f4c-c2a9-4c2f-8478-0708a47bc3ae.png",
    category: "baby-crochet",
    isNew: true,
    rating: 4.9,
    reviews: 28,
    description: "Complete baby crochet set including romper, bonnet, and booties in beautiful purple. Perfect for special occasions or photo shoots.",
    whatsappMessage: "Hi! I'm interested in the Purple Baby Crochet Set for #21000. Can you tell me more about sizing and availability?"
  },
  {
    id: 2,
    name: "Black Bow  Female Slides",
    price: 9000,
    image: "/lovable-uploads/0d32d7be-e67d-4d5b-8bb4-2140e495e3b3.png",
    category: "slides",
    isNew: false,
    rating: 4.7,
    reviews: 35,
    description: "Comfortable black slides with elegant bow detail. Perfect for casual outings or relaxing at home.",
    whatsappMessage: "Hi! I'd like to order the Black Bow Female Slides for #9000. What sizes do you have available?"
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
  },
  {
    id: 8,
    name: "Black Slide Sandals",
    price: 30,
    image: "/lovable-uploads/2f65c6b1-a071-404e-bfd8-ff53f2a13006.png",
    category: "slides",
    isNew: true,
    rating: 4.6,
    reviews: 19,
    description: "Classic black slide sandals with comfortable straps. Perfect for everyday wear.",
    whatsappMessage: "Hi! I'm interested in the Black Slide Sandals for $30. What sizes are available?"
  },
  {
    id: 9,
    name: "Purple Crochet Baby Set",
    price: 40,
    image: "/lovable-uploads/ffee9759-9312-4ec4-8e33-ad68e2568829.png",
    category: "baby-crochet",
    isNew: true,
    rating: 4.9,
    reviews: 15,
    description: "Beautiful purple crochet baby set including cap, top, and booties. Handmade with love.",
    whatsappMessage: "Hello! I'd like to order the Purple Crochet Baby Set for $40. What sizes do you offer?"
  },
  {
    id: 10,
    name: "Textured Black Slides",
    price: 33,
    image: "/lovable-uploads/38e28bb8-84cb-46ae-8bd9-c589d3454955.png",
    category: "slides",
    isNew: false,
    rating: 4.7,
    reviews: 27,
    description: "Stylish black slides with textured pattern design. Comfortable and durable.",
    whatsappMessage: "Hi! I'm interested in the Textured Black Slides for $33. Are these in stock?"
  },
  {
    id: 11,
    name: "Tan Crossover Slides",
    price: 29,
    image: "/lovable-uploads/7211ca9c-9ac7-4503-ad52-07e431661739.png",
    category: "slides",
    isNew: true,
    rating: 4.8,
    reviews: 21,
    description: "Elegant tan slides with crossover design. Perfect for both casual and semi-formal occasions.",
    whatsappMessage: "Hello! I'd like to purchase the Tan Crossover Slides for $29. What sizes are available?"
  },
  {
    id: 12,
    name: "Designer H Slides",
    price: 38,
    image: "/lovable-uploads/7a23e725-8823-476f-bc6d-72f01cd6469a.png",
    category: "slides",
    isNew: true,
    rating: 4.9,
    reviews: 33,
    description: "Premium designer-inspired H slides in black and white. Luxury comfort for everyday wear.",
    whatsappMessage: "Hi! I'm interested in the Designer H Slides for $38. Can you tell me about sizing?"
  },
  {
    id: 13,
    name: "Buckle Detail Slides",
    price: 34,
    image: "/lovable-uploads/9c56814b-e6f6-48b1-9097-04ef9c64c2a7.png",
    category: "slides",
    isNew: false,
    rating: 4.6,
    reviews: 25,
    description: "Stylish slides with decorative buckle detail in black and brown. Comfortable and fashionable.",
    whatsappMessage: "Hello! I'd like to order the Buckle Detail Slides for $34. What colors do you have?"
  },
  {
    id: 14,
    name: "Lace-Up Black Slides",
    price: 36,
    image: "/lovable-uploads/e473127f-d51f-4732-afd5-eb5b2cfdbdb0.png",
    category: "slides",
    isNew: true,
    rating: 4.7,
    reviews: 18,
    description: "Unique black slides with lace-up detail. Modern design with comfortable fit.",
    whatsappMessage: "Hi! I'm interested in the Lace-Up Black Slides for $36. Are these available in my size?"
  },
  {
    id: 15,
    name: "Denim Bow Flat Slides",
    price: 27,
    image: "/lovable-uploads/3a7d4036-f040-4fd1-9246-fc10471dfbc6.png",
    category: "slides",
    isNew: true,
    rating: 4.8,
    reviews: 29,
    description: "Comfortable denim slides with bow detail. Perfect for casual summer styling.",
    whatsappMessage: "Hello! I'd like to purchase the Denim Bow Flat Slides for $27. What sizes do you have?"
  },
  {
    id: 16,
    name: "Orange Crochet Beret",
    price: 22,
    image: "/lovable-uploads/07425fdd-19c0-4eeb-b2e7-a468c2791bc1.png",
    category: "crochet-accessories",
    isNew: true,
    rating: 4.9,
    reviews: 14,
    description: "Bright orange crochet beret. Handmade and perfect for adding a pop of color to any outfit.",
    whatsappMessage: "Hi! I'm interested in the Orange Crochet Beret for $22. Is this currently available?"
  },
  {
    id: 17,
    name: "Dark Velcro Slides",
    price: 31,
    image: "/lovable-uploads/96204b8e-f043-4ade-a06c-2d7819069878.png",
    category: "slides",
    isNew: false,
    rating: 4.5,
    reviews: 22,
    description: "Comfortable dark slides with adjustable velcro straps. Great for active wear.",
    whatsappMessage: "Hello! I'd like to order the Dark Velcro Slides for $31. What sizes are available?"
  },
  {
    id: 18,
    name: "Blue & White Crochet Beret",
    price: 24,
    image: "/lovable-uploads/96204b8e-f043-4ade-a06c-2d7819069878.png",
    category: "crochet-accessories",
    isNew: true,
    rating: 4.7,
    reviews: 16,
    description: "Stylish blue and white striped crochet beret. Perfect accessory for any season.",
    whatsappMessage: "Hi! I'm interested in the Blue & White Crochet Beret for $24. Is this in stock?"
  },
  {
    id: 19,
    name: "Tan Crossover Leather Slides",
    price: 35,
    image: "/lovable-uploads/652c6c37-bd95-4c84-8241-12b4a509b49f.png",
    category: "slides",
    isNew: true,
    rating: 4.8,
    reviews: 31,
    description: "Premium tan leather slides with crossover design. Comfortable and elegant.",
    whatsappMessage: "Hello! I'd like to purchase the Tan Crossover Leather Slides for $35. What sizes do you have?"
  },
  {
    id: 20,
    name: "Black Buckle Slides on Feet",
    price: 32,
    image: "/lovable-uploads/5e82484c-a93d-459c-8b8e-1d9b87b7b8ae.png",
    category: "slides",
    isNew: false,
    rating: 4.6,
    reviews: 28,
    description: "Stylish black slides with buckle detail. Shown being worn for reference.",
    whatsappMessage: "Hi! I'm interested in the Black Buckle Slides for $32. Can you tell me about the fit?"
  },
  {
    id: 21,
    name: "Grey Crossover Slides",
    price: 30,
    image: "/lovable-uploads/453a3464-8e2a-4b19-8f04-1943b89716dc.png",
    category: "slides",
    isNew: true,
    rating: 4.7,
    reviews: 23,
    description: "Modern grey slides with crossover fabric straps. Comfortable for all-day wear.",
    whatsappMessage: "Hello! I'd like to order the Grey Crossover Slides for $30. What sizes are available?"
  },
  {
    id: 22,
    name: "Brown D-Ring Slides",
    price: 34,
    image: "/lovable-uploads/695c42f1-8c33-4bde-b2f5-a000444a88ac.png",
    category: "slides",
    isNew: false,
    rating: 4.8,
    reviews: 26,
    description: "Elegant brown slides with D-ring hardware detail. Premium quality and comfort.",
    whatsappMessage: "Hi! I'm interested in the Brown D-Ring Slides for $34. Are these currently in stock?"
  },
  {
    id: 23,
    name: "Red Patent Slides",
    price: 33,
    image: "/lovable-uploads/bcd6f85a-5110-412c-87c1-027cc175f65a.png",
    category: "slides",
    isNew: true,
    rating: 4.9,
    reviews: 19,
    description: "Bold red patent slides with crossover design. Perfect for making a statement.",
    whatsappMessage: "Hello! I'd like to purchase the Red Patent Slides for $33. What sizes do you offer?"
  },
  {
    id: 24,
    name: "Dark Leather Slides",
    price: 37,
    image: "/lovable-uploads/d892830c-62e3-42ed-922c-344625421016.png",
    category: "slides",
    isNew: false,
    rating: 4.6,
    reviews: 24,
    description: "Premium dark leather slides with adjustable straps. Classic design with modern comfort.",
    whatsappMessage: "Hi! I'm interested in the Dark Leather Slides for $37. Can you tell me about sizing?"
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