import { useState, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Grid, List, SlidersHorizontal, Heart, MessageCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [viewMode, setViewMode] = useState<"grid" | "list" | "carousel">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const { addItem } = useCart();
  const { toast } = useToast();

  const categories = [
    { id: "all", name: "All Products", count: products.length },
    { id: "baby-crochet", name: "Baby Crochet", count: products.filter(p => p.category === "baby-crochet").length },
    { id: "slides", name: "Slides", count: products.filter(p => p.category === "slides").length },
    { id: "crochet-accessories", name: "Crochet Accessories", count: products.filter(p => p.category === "crochet-accessories").length },
  ];

  const handleWhatsAppContact = (product: any) => {
    const message = encodeURIComponent(product.whatsappMessage || `Hi! I'm interested in ${product.name} for $${product.price}. Is it available?`);
    window.open(`https://wa.me/+2348012345678?text=${message}`, '_blank');
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart`,
    });
  };

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (category && category !== "all") {
      filtered = filtered.filter(product => product.category === category);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    if (selectedPriceRange) {
      filtered = filtered.filter(product => {
        switch (selectedPriceRange) {
          case "under-30":
            return product.price < 30;
          case "30-35":
            return product.price >= 30 && product.price <= 35;
          case "over-35":
            return product.price > 35;
          default:
            return true;
        }
      });
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "newest":
          return b.isNew ? 1 : -1;
        case "featured":
        default:
          return 0;
      }
    });

    return sorted;
  }, [category, searchQuery, selectedPriceRange, sortBy]);

  const currentCategory = categories.find(cat => cat.id === category) || categories[0];

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Search Results Indicator */}
      {searchQuery && (
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Search Results</h3>
          <p className="text-sm text-muted-foreground">
            Showing results for "{searchQuery}"
          </p>
        </div>
      )}

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
              <span className="text-sm opacity-70">({cat.count})</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="space-y-2">
          {[
            { label: "Under $30", value: "under-30" },
            { label: "$30 - $35", value: "30-35" },
            { label: "Over $35", value: "over-35" },
          ].map((range) => (
            <Button
              key={range.value}
              variant={selectedPriceRange === range.value ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setSelectedPriceRange(
                selectedPriceRange === range.value ? null : range.value
              )}
            >
              {range.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {selectedPriceRange && (
        <div className="pt-4 border-t">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setSelectedPriceRange(null);
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );

  const getPageTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}"`;
    }
    return currentCategory.name;
  };

  const getPageDescription = () => {
    if (searchQuery) {
      return `${filteredAndSortedProducts.length} products found`;
    }
    return `${filteredAndSortedProducts.length} beautiful pieces waiting for you`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero/Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {getPageTitle()}
            </h1>
            <p className="text-lg sm:text-xl opacity-90">
              {getPageDescription()}
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
                    <div className="mt-6">
                      <FilterSidebar />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Results count */}
                <span className="text-sm sm:text-base text-muted-foreground">
                  {filteredAndSortedProducts.length} products
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
                    className="min-h-[44px] min-w-[44px]"
                    title="Carousel View"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* No Results */}
            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchQuery 
                    ? `No products match your search for "${searchQuery}"`
                    : "No products match your current filters"
                  }
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedPriceRange(null);
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Products Grid/Carousel */}
            {filteredAndSortedProducts.length > 0 && (
              <>
                {viewMode === "carousel" ? (
                  <div className="w-full">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: false,
                      }}
                      className="w-full"
                    >
                      <CarouselContent className="-ml-3">
                        {filteredAndSortedProducts.map((product) => (
                          <CarouselItem key={product.id} className="pl-3 basis-1/2">
                            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                              <CardContent className="p-0">
                                <div className="relative">
                                  <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                                    <img 
                                      src={product.image} 
                                      alt={product.name}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  {product.isNew && (
                                    <Badge className="absolute top-2 left-2 bg-accent text-xs">
                                      New
                                    </Badge>
                                  )}
                                </div>
                                
                                <div className="p-3">
                                  <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                                  <p className="text-lg font-bold text-primary mb-2">${product.price}</p>
                                  
                                  <div className="flex gap-1">
                                    <Button 
                                      className="flex-1 bg-gradient-primary text-xs min-h-[36px]" 
                                      onClick={() => handleAddToCart(product)}
                                    >
                                      <ShoppingBag className="h-3 w-3 mr-1" />
                                      Add to Cart
                                    </Button>
                                    <Button 
                                      className="flex-1 bg-gradient-to-r from-primary to-accent text-xs min-h-[36px]" 
                                      onClick={() => handleWhatsAppContact(product)}
                                    >
                                      <MessageCircle className="h-3 w-3 mr-1" />
                                      WhatsApp
                                    </Button>
                                    <Button variant="outline" size="icon" className="min-h-[36px] min-w-[36px]">
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
                ) : (
                  <div className={`grid gap-4 ${
                    viewMode === "grid" 
                      ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" 
                      : "grid-cols-1"
                  }`}>
                    {filteredAndSortedProducts.map((product) => (
                      <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative">
                            <div className={`${viewMode === "grid" ? "aspect-square" : "aspect-video"} bg-muted rounded-t-lg overflow-hidden`}>
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
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="absolute top-3 right-3 bg-background/80 hover:bg-background hover:scale-110 transition-all duration-200"
                            >
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className={`${viewMode === "grid" ? "p-6" : "p-4 flex items-center justify-between"}`}>
                            <div className={viewMode === "list" ? "flex-1" : ""}>
                              <h3 className={`font-semibold group-hover:text-primary transition-colors duration-300 ${
                                viewMode === "grid" ? "text-lg mb-2" : "text-base mb-1"
                              }`}>
                                {product.name}
                              </h3>
                              <p className={`font-bold text-primary ${
                                viewMode === "grid" ? "text-2xl mb-4" : "text-xl"
                              }`}>
                                ${product.price}
                              </p>
                              {viewMode === "list" && product.description && (
                                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                                  {product.description}
                                </p>
                              )}
                            </div>
                            
                            <div className={`${viewMode === "list" ? "ml-4 flex gap-2" : "space-y-2"}`}>
                              <Button 
                                className={`bg-gradient-primary btn-hover-lift btn-gradient-hover group ${
                                  viewMode === "grid" ? "w-full" : "min-w-[120px]"
                                }`}
                                onClick={() => handleAddToCart(product)}
                              >
                                <ShoppingBag className="h-4 w-4 mr-2" />
                                Add to Cart
                              </Button>
                              <Button 
                                variant="outline"
                                className={`${
                                  viewMode === "grid" ? "w-full" : "min-w-[120px]"
                                }`}
                                onClick={() => handleWhatsAppContact(product)}
                              >
                                <MessageCircle className="h-4 w-4 mr-2" />
                                WhatsApp
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;