import sageBeanie from "@/assets/products/sage-crochet-beanie.jpg";
import terracottaBoots from "@/assets/products/terracotta-ankle-boots.jpg";
import forestScarf from "@/assets/products/forest-green-scarf.jpg";
import creamCardigan from "@/assets/products/cream-oversized-cardigan.jpg";
import tanSneakers from "@/assets/products/tan-leather-sneakers.jpg";
import yellowTote from "@/assets/products/mustard-yellow-tote-bag.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  isNew: boolean;
  colors: string[];
  sizes?: string[];
  description?: string;
  features?: string[];
  careInstructions?: string;
  shippingInfo?: string;
  rating?: number;
  reviews?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Sage Crochet Beanie",
    price: 45,
    originalPrice: 60,
    category: "crochet-wear",
    image: sageBeanie,
    isNew: true,
    colors: ["sage", "cream", "terracotta"],
    sizes: ["One Size"],
    description: "This beautifully handcrafted crochet beanie combines comfort with style. Made from premium yarn, it's the perfect accessory to elevate any casual outfit while keeping you cozy.",
    features: [
      "100% handmade with premium yarn",
      "One size fits most",
      "Machine washable (cold water)",
      "Sustainable and eco-friendly materials"
    ],
    careInstructions: "Hand wash in cold water with mild detergent. Lay flat to dry. Do not bleach or tumble dry.",
    shippingInfo: "Free shipping on orders over $75. Standard delivery in 3-5 business days.",
    rating: 4.8,
    reviews: 24
  },
  {
    id: 2,
    name: "Terracotta Ankle Boots",
    price: 120,
    category: "footwear",
    image: terracottaBoots,
    isNew: false,
    colors: ["terracotta"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Stylish and comfortable ankle boots crafted from premium leather. Perfect for both casual and semi-formal occasions.",
    features: [
      "Genuine leather construction",
      "Comfortable padded insole",
      "Durable rubber outsole",
      "Classic ankle boot design"
    ],
    careInstructions: "Clean with leather cleaner. Store in a dry place with shoe trees.",
    rating: 4.6,
    reviews: 18
  },
  {
    id: 3,
    name: "Forest Green Scarf",
    price: 55,
    category: "crochet-accessories",
    image: forestScarf,
    isNew: true,
    colors: ["green"],
    sizes: ["One Size"],
    description: "A luxurious hand-knitted scarf that adds warmth and style to any outfit. Made with the finest materials for ultimate comfort.",
    features: [
      "Hand-knitted with care",
      "Soft and warm material",
      "Versatile styling options",
      "Premium quality yarn"
    ],
    careInstructions: "Hand wash gently in cold water. Lay flat to dry.",
    rating: 4.9,
    reviews: 31
  },
  {
    id: 4,
    name: "Cream Oversized Cardigan",
    price: 85,
    category: "crochet-wear",
    image: creamCardigan,
    isNew: false,
    colors: ["cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Cozy oversized cardigan perfect for layering. Features a relaxed fit and soft texture that's perfect for everyday wear.",
    features: [
      "Oversized comfortable fit",
      "Soft premium knit fabric",
      "Button-front closure",
      "Perfect for layering"
    ],
    careInstructions: "Machine wash cold, gentle cycle. Lay flat to dry.",
    rating: 4.7,
    reviews: 22
  },
  {
    id: 5,
    name: "Tan Leather Sneakers",
    price: 95,
    category: "footwear",
    image: tanSneakers,
    isNew: false,
    colors: ["tan"],
    sizes: ["6", "7", "8", "9", "10", "11"],
    description: "Premium leather sneakers that combine comfort with timeless style. Perfect for casual everyday wear.",
    features: [
      "Premium leather upper",
      "Cushioned comfort insole",
      "Durable rubber outsole",
      "Timeless classic design"
    ],
    careInstructions: "Clean with leather cleaner and conditioner. Allow to air dry.",
    rating: 4.5,
    reviews: 14
  },
  {
    id: 6,
    name: "Mustard Yellow Tote Bag",
    price: 35,
    category: "crochet-accessories",
    image: yellowTote,
    isNew: true,
    colors: ["yellow"],
    sizes: ["One Size"],
    description: "Spacious and stylish tote bag perfect for daily use. Features a vibrant mustard color that adds a pop of brightness to any outfit.",
    features: [
      "Spacious interior design",
      "Durable canvas construction",
      "Comfortable shoulder straps",
      "Vibrant color that stands out"
    ],
    careInstructions: "Spot clean with mild soap and water. Air dry completely.",
    rating: 4.4,
    reviews: 19
  }
];

export const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "crochet-wear", name: "Crochet Wear", count: products.filter(p => p.category === "crochet-wear").length },
  { id: "crochet-accessories", name: "Crochet Accessories", count: products.filter(p => p.category === "crochet-accessories").length },
  { id: "footwear", name: "Footwear", count: products.filter(p => p.category === "footwear").length },
];