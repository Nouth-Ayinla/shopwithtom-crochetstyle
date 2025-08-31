import { useState } from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Lookbook = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Looks" },
    { id: "casual", name: "Casual" },
    { id: "chic", name: "Chic" },
    { id: "cozy", name: "Cozy" },
    { id: "street", name: "Street Style" }
  ];

  const looks = [
    {
      id: 1,
      title: "Cozy Cafe Vibes",
      category: "casual",
      image: "/placeholder.svg",
      description: "Perfect for weekend coffee dates or casual strolls around the city.",
      products: [
        { id: 1, name: "Sage Crochet Beanie", price: 45, type: "crochet-wear" },
        { id: 2, name: "Cream Oversized Cardigan", price: 85, type: "crochet-wear" },
        { id: 3, name: "Tan Leather Sneakers", price: 95, type: "footwear" }
      ],
      tags: ["comfortable", "stylish", "weekend"]
    },
    {
      id: 2,
      title: "Urban Explorer",
      category: "street",
      image: "/placeholder.svg",
      description: "Street-ready style that combines comfort with contemporary fashion.",
      products: [
        { id: 4, name: "Forest Green Scarf", price: 55, type: "crochet-accessories" },
        { id: 5, name: "Terracotta Ankle Boots", price: 120, type: "footwear" },
        { id: 6, name: "Mustard Yellow Tote Bag", price: 35, type: "crochet-accessories" }
      ],
      tags: ["urban", "trendy", "practical"]
    },
    {
      id: 3,
      title: "Chic Minimalist",
      category: "chic",
      image: "/placeholder.svg",
      description: "Effortlessly elegant pieces that speak volumes with their simplicity.",
      products: [
        { id: 7, name: "Cream Wool Sweater", price: 75, type: "crochet-wear" },
        { id: 8, name: "Black Leather Loafers", price: 110, type: "footwear" }
      ],
      tags: ["minimal", "elegant", "timeless"]
    },
    {
      id: 4,
      title: "Autumn Layers",
      category: "cozy",
      image: "/placeholder.svg",
      description: "Layer up in style with warm textures and rich autumn colors.",
      products: [
        { id: 9, name: "Rust Orange Cardigan", price: 90, type: "crochet-wear" },
        { id: 10, name: "Chunky Knit Scarf", price: 48, type: "crochet-accessories" },
        { id: 11, name: "Brown Suede Boots", price: 135, type: "footwear" }
      ],
      tags: ["autumn", "layers", "warm"]
    },
    {
      id: 5,
      title: "Fresh Spring Look",
      category: "casual",
      image: "/placeholder.svg",
      description: "Light and airy pieces perfect for spring days and new beginnings.",
      products: [
        { id: 12, name: "Pastel Pink Top", price: 42, type: "crochet-wear" },
        { id: 13, name: "White Canvas Sneakers", price: 78, type: "footwear" }
      ],
      tags: ["spring", "fresh", "light"]
    },
    {
      id: 6,
      title: "Weekend Wanderer",
      category: "casual",
      image: "/placeholder.svg",
      description: "Comfortable yet stylish pieces for exploring new places.",
      products: [
        { id: 14, name: "Denim Blue Beanie", price: 38, type: "crochet-wear" },
        { id: 15, name: "Adventure Boots", price: 145, type: "footwear" },
        { id: 16, name: "Canvas Backpack", price: 65, type: "crochet-accessories" }
      ],
      tags: ["adventure", "comfortable", "versatile"]
    }
  ];

  const filteredLooks = selectedCategory === "all" 
    ? looks 
    : looks.filter(look => look.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Style Inspiration
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 mb-8">
              Discover how to style our handcrafted pieces for every occasion
            </p>
            <p className="text-lg text-cream/80 max-w-2xl mx-auto">
              From casual coffee dates to chic city strolls, see how our carefully curated pieces 
              come together to create looks that are uniquely you.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "bg-gradient-primary" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Lookbook Grid */}
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLooks.map((look) => (
            <Card key={look.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-[4/5] bg-sage overflow-hidden">
                    <img 
                      src={look.image} 
                      alt={look.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Overlay with View Details */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                          <Eye className="h-4 w-4 mr-2" />
                          View Look
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                          <div className="aspect-[4/5] bg-sage rounded-lg overflow-hidden">
                            <img src={look.image} alt={look.title} className="w-full h-full object-cover" />
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl font-bold mb-2">{look.title}</h2>
                              <p className="text-muted-foreground">{look.description}</p>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold mb-3">Shop This Look</h3>
                              <div className="space-y-3">
                                {look.products.map((product) => (
                                  <div key={product.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                                    <div>
                                      <p className="font-medium">{product.name}</p>
                                      <p className="text-sm text-muted-foreground">${product.price}</p>
                                    </div>
                                    <Button size="sm" asChild>
                                      <Link to={`/product/${product.id}`}>
                                        <ShoppingBag className="h-4 w-4" />
                                      </Link>
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold mb-2">Style Tags</h3>
                              <div className="flex flex-wrap gap-2">
                                {look.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{look.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{look.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {look.products.length} pieces
                    </span>
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {filteredLooks.map((look) => (
                <CarouselItem key={look.id} className="pl-2 basis-4/5 sm:basis-3/5">
                  <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="aspect-[4/5] bg-sage overflow-hidden">
                          <img 
                            src={look.image} 
                            alt={look.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        {/* Overlay with View Details */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                                <Eye className="h-4 w-4 mr-2" />
                                View Look
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                <div className="aspect-[4/5] bg-sage rounded-lg overflow-hidden">
                                  <img src={look.image} alt={look.title} className="w-full h-full object-cover" />
                                </div>
                                
                                <div className="space-y-6">
                                  <div>
                                    <h2 className="text-2xl font-bold mb-2">{look.title}</h2>
                                    <p className="text-muted-foreground">{look.description}</p>
                                  </div>
                                  
                                  <div>
                                    <h3 className="font-semibold mb-3">Shop This Look</h3>
                                    <div className="space-y-3">
                                      {look.products.map((product) => (
                                        <div key={product.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                                          <div>
                                            <p className="font-medium">{product.name}</p>
                                            <p className="text-sm text-muted-foreground">${product.price}</p>
                                          </div>
                                          <Button size="sm" asChild>
                                            <Link to={`/product/${product.id}`}>
                                              <ShoppingBag className="h-4 w-4" />
                                            </Link>
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <h3 className="font-semibold mb-2">Style Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                      {look.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                          {tag}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-semibold text-base mb-2">{look.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{look.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {look.products.length} pieces
                          </span>
                          <Button variant="ghost" size="sm">
                            <Heart className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-background/80 hover:bg-background border-2" />
            <CarouselNext className="right-2 bg-background/80 hover:bg-background border-2" />
          </Carousel>
        </div>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own Look?</h2>
            <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
              Browse our full collection and mix and match pieces to create a style that's uniquely yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary min-h-[52px]" asChild>
                <Link to="/shop">
                  Shop All Products
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary min-h-[52px]" asChild>
                <Link to="/about">
                  Learn Our Story
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Lookbook;