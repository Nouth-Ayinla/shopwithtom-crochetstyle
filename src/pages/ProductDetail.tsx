import { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, ShoppingBag, Truck, RotateCcw, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useProducts } from "@/hooks/useProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();
  const { products, loading } = useProducts();

  const product = products.find(p => p.id === id);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading product...</p>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center"><h1>Product not found</h1></div>;
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);

  const handleAddToCart = () => {
    addItem({
      id: parseInt(product.id),
      name: product.name,
      price: product.price,
      image: product.image || '/placeholder.svg',
      color: selectedColor,
      size: selectedSize,
    });

    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-sage rounded-xl overflow-hidden">
              <img 
                src={product.image || '/placeholder.svg'} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">₦{product.price.toLocaleString()}</span>
              </div>
            </div>

            {/* Product info */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{product.description || "No description available."}</p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full bg-gradient-primary text-base sm:text-lg py-4 sm:py-6 min-h-[52px]"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full min-h-[52px]"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={`h-5 w-5 mr-2 ${isWishlisted ? "fill-current" : ""}`} />
                <span className="text-sm sm:text-base">{isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}</span>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 py-6 border-y">
              <div className="text-center py-2">
                <Truck className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-muted-foreground">Orders over ₦50,000</p>
              </div>
              <div className="text-center py-2">
                <RotateCcw className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-muted-foreground">30-day policy</p>
              </div>
              <div className="text-center py-2">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Quality Guarantee</p>
                <p className="text-xs text-muted-foreground">Handcrafted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
              <TabsTrigger value="description" className="min-h-[44px] text-sm">Description</TabsTrigger>
              <TabsTrigger value="care" className="min-h-[44px] text-sm">Care Instructions</TabsTrigger>
              <TabsTrigger value="shipping" className="min-h-[44px] text-sm">Shipping</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">About This Product</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description || "No description available."}</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="care" className="mt-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Care Instructions</h3>
                <p className="text-muted-foreground leading-relaxed">Hand wash with care and air dry for best results.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Shipping Information</h3>
                <p className="text-muted-foreground leading-relaxed">Free shipping on orders over ₦50,000. Standard delivery in 3-5 business days.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                    <div className="aspect-square bg-sage rounded-t-lg overflow-hidden">
                      <img 
                        src={relatedProduct.image || '/placeholder.svg'} 
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                      <p className="text-2xl font-bold text-primary">₦{relatedProduct.price.toLocaleString()}</p>
                      <Button className="w-full mt-4 bg-gradient-primary">
                        View Details
                      </Button>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;