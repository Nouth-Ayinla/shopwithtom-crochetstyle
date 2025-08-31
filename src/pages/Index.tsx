import { ArrowRight, Star, Heart, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Sage Crochet Beanie",
      price: 45,
      image: "/placeholder.svg",
      category: "crochet-wear"
    },
    {
      id: 2,
      name: "Terracotta Ankle Boots",
      price: 120,
      image: "/placeholder.svg",
      category: "footwear"
    },
    {
      id: 3,
      name: "Forest Green Scarf",
      price: 55,
      image: "/placeholder.svg",
      category: "crochet-accessories"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <img 
          src={heroImage} 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Handcrafted Style
            <span className="block text-accent">Made with Love</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream/90 max-w-2xl mx-auto">
            Discover unique crochet pieces and stylish footwear that transform your everyday look into something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-accent shadow-glow text-lg px-8 py-6">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              View Lookbook
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each piece is carefully crafted to bring unique character to your wardrobe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-square bg-sage rounded-t-lg mb-4 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-primary">${product.price}</p>
                    <Button className="w-full mt-4 bg-gradient-primary" asChild>
                      <Link to={`/product/${product.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/shop">
                Shop All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Where Craft Meets Fashion
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Every piece at Shop With Tom is born from a passion for handmade artistry and contemporary style. 
                We believe that fashion should tell a story - your story.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                From cozy crochet beanies that add character to casual looks, to carefully curated footwear 
                that completes your ensemble, each item is selected with intention and love.
              </p>
              <Button size="lg" className="bg-gradient-accent" asChild>
                <Link to="/about">
                  Learn Our Story
                  <Heart className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-sage rounded-2xl aspect-square"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Shop With Tom?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Handcrafted with Love</h3>
              <p className="text-muted-foreground">
                Every crochet piece is carefully made by hand, ensuring unique character and exceptional quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Curated Selection</h3>
              <p className="text-muted-foreground">
                Each item is personally selected to ensure it meets our high standards for style and quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Fast & Free Shipping</h3>
              <p className="text-muted-foreground">
                Free shipping on all orders over $75. Your new favorite pieces delivered quickly and safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in Style</h2>
            <p className="text-xl mb-8 text-cream/90">
              Get the latest updates on new arrivals, styling tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button size="lg" className="bg-accent hover:bg-accent-soft">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;