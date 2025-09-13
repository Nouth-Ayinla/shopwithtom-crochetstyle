import { ArrowRight, Star, Heart, Truck, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Sage Crochet Beanie",
      price: 45,
      image: "/placeholder.svg",
      category: "crochet-wear",
      isNew: true,
      rating: 4.8,
      reviews: 24
    },
    {
      id: 2,
      name: "Terracotta Ankle Boots",
      price: 120,
      image: "/placeholder.svg",
      category: "footwear",
      isNew: false,
      rating: 4.9,
      reviews: 18
    },
    {
      id: 3,
      name: "Forest Green Scarf",
      price: 55,
      image: "/placeholder.svg",
      category: "crochet-accessories",
      isNew: true,
      rating: 4.7,
      reviews: 32
    },
    {
      id: 4,
      name: "Cream Oversized Cardigan",
      price: 85,
      image: "/placeholder.svg",
      category: "crochet-wear",
      isNew: false,
      rating: 4.8,
      reviews: 15
    },
    {
      id: 5,
      name: "Tan Leather Sneakers",
      price: 95,
      image: "/placeholder.svg",
      category: "footwear",
      isNew: true,
      rating: 4.6,
      reviews: 21
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
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="inline-block animate-fade-in-left">Handcrafted Style</span>
            <span className="block text-accent animate-fade-in-right animation-delay-300">Made with Love</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream/90 max-w-2xl mx-auto animate-fade-in animation-delay-500">
            Discover unique crochet pieces and stylish footwear that transform your everyday look into something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-700">
            <Button size="lg" className="bg-gradient-accent shadow-glow text-lg px-8 py-6 btn-hover-lift btn-gradient-hover" asChild>
              <Link to="/shop">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary text-lg px-8 py-6 btn-hover-lift" asChild>
              <Link to="/lookbook">
                View Lookbook
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each piece is carefully crafted to bring unique character to your wardrobe
            </p>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group cursor-pointer card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-sage rounded-t-lg mb-4 image-hover-zoom">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {product.isNew && (
                      <Badge className="absolute top-3 left-3 bg-accent animate-pulse-glow">
                        New
                      </Badge>
                    )}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-3 right-3 bg-background/80 hover:bg-background hover:scale-110 transition-all duration-200"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">${product.price}</p>
                    <Button className= "border-white text-black hover:bg-white hover:text-primary text-lg px-8 py-6 btn-hover-lift" asChild >
                      <Link to={`/product/${product.id}`}>
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Shop Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="block md:hidden mb-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2">
                {featuredProducts.map((product, index) => (
                  <CarouselItem key={product.id} className="pl-2 basis-4/5 sm:basis-3/5">
                    <Card className="group cursor-pointer card-hover">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <div className="aspect-square bg-sage rounded-t-lg image-hover-zoom">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {product.isNew && (
                            <Badge className="absolute top-3 left-3 bg-accent animate-pulse-glow">
                              New
                            </Badge>
                          )}
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute top-3 right-3 bg-background/80 hover:bg-background hover:scale-110 transition-all duration-200"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="p-4">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                            <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                          </div>
                          
                          <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors duration-300">
                            {product.name}
                          </h3>
                          <p className="text-xl font-bold text-primary mb-3">${product.price}</p>
                          
                          <Button className="w-full bg-gradient-primary btn-hover-lift text-sm min-h-[44px]" asChild>
                            <Link to={`/product/${product.id}`}>
                              <ShoppingBag className="h-4 w-4 mr-2" />
                              Shop Now
                            </Link>
                          </Button>
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

          <div className="text-center">
            <Button size="lg" variant="outline" className="min-h-[52px]" asChild>
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
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Where Craft Meets Fashion
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Every piece at Shop With Tom is born from a passion for handmade artistry and contemporary style. 
                We believe that fashion should tell a story - your story.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                From cozy crochet beanies that add character to casual looks, to carefully curated footwear 
                that completes your ensemble, each item is selected with intention and love.
              </p>
              <Button size="lg" className="bg-gradient-accent btn-hover-lift btn-gradient-hover group" asChild>
                <Link to="/about">
                  Learn Our Story
                  <Heart className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </Link>
              </Button>
            </div>
            <div className="bg-sage rounded-2xl aspect-square animate-fade-in-right"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Shop With Tom?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 animate-float">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Handcrafted with Love</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every crochet piece is carefully made by hand, ensuring unique character and exceptional quality.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '1s' }}>
                <Star className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Curated Selection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each item is personally selected to ensure it meets our high standards for style and quality.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '2s' }}>
                <Truck className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Fast & Free Shipping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Free shipping on all orders over $75. Your new favorite pieces delivered quickly and safely.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;