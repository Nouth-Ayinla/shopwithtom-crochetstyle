import { useState, useEffect, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Grid, List, SlidersHorizontal, Heart, MessageCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [viewMode, setViewMode] = useState<"grid" | "list" | "carousel">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const { addItem } = useCart();
  const { toast } = useToast();
  const { products, loading, error } = useProducts();

  // Calculate min and max prices from products
  useEffect(() => {
    if (products && products.length > 0) {
      const prices = products.map(p => p.price);
      const min = 0;
      const max = Math.max(...prices);
      setMinPrice(min);
      setMaxPrice(max);
      setPriceRange([min, max]);
    }
  }, [products]);

  const categories = [
    { id: "all", name: "All Products", count: products.length },
    { id: "baby-crochet", name: "Baby Crochet", count: products.filter(p => p.category === "baby-crochet").length },
    { id: "male-slides", name: "Male Slides", count: products.filter(p => p.category === "male-slides").length },
    { id: "female-slides", name: "Female Slides", count: products.filter(p => p.category === "female-slides").length },
    { id: "unisex-slides", name: "Unisex Slides", count: products.filter(p => p.category === "unisex-slides").length },
    { id: "crochet-accessories", name: "Crochet Accessories", count: products.filter(p => p.category === "crochet-accessories").length },
  ];

  const handleAddToCart = (product: any) => {
    addItem({
      id: parseInt(product.id),
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
    if (loading || !products) return [];
    
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
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

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
  }, [category, searchQuery, priceRange, sortBy, products, loading]);

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
        <h3 className="font-semibold mb-4">Price Range (₦)</h3>
        <div className="space-y-4">
          <Slider
            min={minPrice}
            max={maxPrice}
            step={100}
            value={priceRange}
            onValueChange={setPriceRange}
            className="my-4"
          />
          <div className="flex justify-between text-sm">
            <span>₦{priceRange[0].toLocaleString()}</span>
            <span>₦{priceRange[1].toLocaleString()}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="min-price" className="text-xs">Min Price</Label>
              <Input
                id="min-price"
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-price" className="text-xs">Max Price</Label>
              <Input
                id="max-price"
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="h-8 text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      {(priceRange[0] !== minPrice || priceRange[1] !== maxPrice) && (
        <div className="pt-4 border-t">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setPriceRange([minPrice, maxPrice]);
            }}
          >
            Clear Price Filter
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">Error loading products: {error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

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
                    setPriceRange([minPrice, maxPrice]);
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
                                  <p className="text-lg font-bold text-primary mb-2">₦{product.price.toLocaleString()}</p>
                                  
                                  <div className="flex gap-1">
                                    <Button 
                                      className="flex-1 bg-gradient-primary text-xs min-h-[36px]" 
                                      onClick={() => handleAddToCart(product)}
                                    >
                                      <ShoppingBag className="h-3 w-3 mr-1" />
                                      Add to Cart
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
                  <div className={`grid gap-3 md:gap-4 ${
                    viewMode === "grid" 
                      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4" 
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
                              <Badge className={`absolute top-2 md:top-3 left-2 md:left-3 ${viewMode === "grid" ? "text-xs md:text-sm" : ""}`}>
                                New
                              </Badge>
                            )}
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className={`absolute top-2 md:top-3 right-2 md:right-3 bg-background/80 hover:bg-background hover:scale-110 transition-all duration-200 ${
                                viewMode === "grid" ? "h-6 w-6 md:h-9 md:w-9" : ""
                              }`}
                            >
                              <Heart className={`${viewMode === "grid" ? "h-3 w-3 md:h-4 md:w-4" : "h-4 w-4"}`} />
                            </Button>
                          </div>
                          
                          <div className={`${viewMode === "grid" ? "p-2 md:p-6" : "p-4 flex items-center justify-between"}`}>
                            <div className={viewMode === "list" ? "flex-1" : ""}>
                              <h3 className={`font-semibold group-hover:text-primary transition-colors duration-300 ${
                                viewMode === "grid" ? "text-sm md:text-lg mb-1 md:mb-2 line-clamp-1 md:line-clamp-none" : "text-base mb-1"
                              }`}>
                                {product.name}
                              </h3>
                              <p className={`font-bold text-primary ${
                                viewMode === "grid" ? "text-base md:text-2xl mb-2 md:mb-4" : "text-xl"
                              }`}>
                                ₦{product.price.toLocaleString()}
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
                                  viewMode === "grid" ? "w-full text-xs md:text-sm min-h-[32px] md:min-h-[40px]" : "min-w-[120px]"
                                }`}
                                onClick={() => handleAddToCart(product)}
                              >
                                <ShoppingBag className={`mr-1 md:mr-2 ${viewMode === "grid" ? "h-3 w-3 md:h-4 md:w-4" : "h-4 w-4"}`} />
                                <span className={viewMode === "grid" ? "hidden sm:inline" : ""}>Add to Cart</span>
                                <span className={viewMode === "grid" ? "sm:hidden" : "hidden"}>Add</span>
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