import { useState } from "react";
import { useParams } from "react-router-dom";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Shop = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<"grid" | "list" | "carousel">("grid");
  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    { id: "all", name: "All Products", count: 24 },
    { id: "crochet-wear", name: "Crochet Wear", count: 12 },
    { id: "crochet-accessories", name: "Crochet Accessories", count: 8 },
    { id: "footwear", name: "Footwear", count: 4 },
  ];

  const products = [
    {
      id: 1,
      name: "Sage Crochet Beanie",
      price: 45,
      category: "crochet-wear",
      image: "/placeholder.svg",
      isNew: true,
    },
    {
      id: 2,
      name: "Terracotta Ankle Boots",
      price: 120,
      category: "footwear",
      image: "/placeholder.svg",
      isNew: false,
    },
    {
      id: 3,
      name: "Forest Green Scarf",
      price: 55,
      category: "crochet-accessories",
      image: "/placeholder.svg",
      isNew: true,
    },
    {
      id: 4,
      name: "Cream Oversized Cardigan",
      price: 85,
      category: "crochet-wear",
      image: "/placeholder.svg",
      isNew: false,
    },
    {
      id: 5,
      name: "Tan Leather Sneakers",
      price: 95,
      category: "footwear",
      image: "/placeholder.svg",
      isNew: false,
    },
    {
      id: 6,
      name: "Mustard Yellow Tote Bag",
      price: 35,
      category: "crochet-accessories",
      image: "/placeholder.svg",
      isNew: true,
    },
  ];

  const filteredProducts = category && category !== "all" 
    ? products.filter(product => product.category === category)
    : products;

  const currentCategory = categories.find(cat => cat.id === category) || categories[0];

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.id === "all" ? "/shop" : `/shop/${cat.id}`}
              className={`flex items-center justify-between p-2 rounded-md transition-colors ${
                (category === cat.id || (!category && cat.id === "all"))
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-sm text-muted-foreground">({cat.count})</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">Under $50</Button>
          <Button variant="ghost" className="w-full justify-start">$50 - $100</Button>
          <Button variant="ghost" className="w-full justify-start">Over $100</Button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Color</h3>
        <div className="grid grid-cols-4 gap-2">
          {["bg-primary", "bg-accent", "bg-sage", "bg-cream", "bg-destructive", "bg-secondary"].map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full ${color} border-2 border-border hover:scale-110 transition-transform`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero/Header */}
      <section className="bg-gradient-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {currentCategory.name}
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80">
              {currentCategory.count} beautiful pieces waiting for you
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                {/* Mobile Filter */}
                <Sheet>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button variant="outline" size="sm" className="min-h-[44px]">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 sm:w-[400px]">
                    <FilterSidebar />
                  </SheetContent>
                </Sheet>

                {/* Results count */}
                <span className="text-sm sm:text-base text-muted-foreground">
                  {filteredProducts.length} products
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-36 sm:w-40 min-h-[44px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Toggle */}
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="min-h-[44px] min-w-[44px]"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="min-h-[44px] min-w-[44px]"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "carousel" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("carousel")}
                    className="min-h-[44px] min-w-[44px] md:hidden"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid/Carousel */}
            {viewMode === "carousel" ? (
              <div className="block md:hidden">
                <Carousel
                  opts={{
                    align: "start",
                    loop: false,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2">
                    {filteredProducts.map((product) => (
                      <CarouselItem key={product.id} className="pl-2 basis-4/5 sm:basis-3/5">
                        <Card className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
                          <CardContent className="p-0">
                            <div className="relative">
                              <div className="aspect-square bg-sage rounded-t-lg overflow-hidden">
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              {product.isNew && (
                                <Badge className="absolute top-3 left-3 bg-accent">
                                  New
                                </Badge>
                              )}
                            </div>
                            
                            <div className="p-4">
                              <h3 className="font-semibold text-base mb-2">{product.name}</h3>
                              <p className="text-xl font-bold text-primary mb-3">${product.price}</p>
                              
                              <div className="flex gap-2">
                                <Button className="flex-1 bg-gradient-primary text-sm min-h-[44px]" asChild>
                                  <Link to={`/product/${product.id}`}>
                                    View Details
                                  </Link>
                                </Button>
                                <Button variant="outline" size="icon" className="min-h-[44px] min-w-[44px]">
                                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                  </svg>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex -left-4" />
                  <CarouselNext className="hidden sm:flex -right-4" />
                </Carousel>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === "grid" 
                  ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" 
                  : "grid-cols-1"
              }`}>
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className={`${viewMode === "grid" ? "aspect-square" : "aspect-video"} bg-sage rounded-t-lg overflow-hidden`}>
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        {product.isNew && (
                          <Badge className="absolute top-3 left-3 bg-accent">
                            New
                          </Badge>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                        <p className="text-2xl font-bold text-primary mb-4">${product.price}</p>
                        
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-gradient-primary" asChild>
                            <Link to={`/product/${product.id}`}>
                              View Details
                            </Link>
                          </Button>
                          <Button variant="outline" size="icon">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;