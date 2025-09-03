import { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, MessageCircle, Truck, RotateCcw, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  const product = products.find(p => p.id === parseInt(id || "1")) || products[0];
  
  const colorOptions = [
    { name: "Sage Green", value: "sage", color: "bg-green-300" },
    { name: "Cream", value: "cream", color: "bg-amber-50" },
    { name: "Terracotta", value: "terracotta", color: "bg-orange-400" }
  ];

  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in the ${product.name} for $${product.price}. ${selectedColor ? `Color: ${selectedColor}. ` : ''}${selectedSize ? `Size: ${selectedSize}.` : ''}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-sage rounded-xl overflow-hidden">
              <img 
                src={productImages[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-sage rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-transparent hover:border-primary/50"
                  }`}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category.replace('-', ' ')}</Badge>
                {product.isNew && <Badge className="bg-accent">New</Badge>}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating || 0) ? "fill-accent text-accent" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {/* Colors */}
              <div>
                <label className="block text-sm font-medium mb-2">Color: {selectedColor}</label>
                <div className="flex gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${color.color} ${
                        selectedColor === color.name ? "border-primary scale-110" : "border-border hover:border-primary/50"
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {(product.sizes || ["One Size"]).map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full bg-gradient-primary text-base sm:text-lg py-4 sm:py-6 min-h-[52px]"
                onClick={handleWhatsAppContact}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Contact via WhatsApp
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
                <p className="text-xs text-muted-foreground">Orders over $75</p>
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
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
                
                {product.features && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="care" className="mt-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Care Instructions</h3>
                <p className="text-muted-foreground leading-relaxed">{product.careInstructions || "Care instructions not available."}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Contact us via WhatsApp for shipping information, pricing details, and availability. 
                  We'll be happy to answer any questions about this product!
                </p>
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
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                    <p className="text-2xl font-bold text-primary">${relatedProduct.price}</p>
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