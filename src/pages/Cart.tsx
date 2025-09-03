import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, total, itemCount, updateQuantity, removeItem, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      toast({
        title: "Item removed",
        description: "Item has been removed from your cart",
      });
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: number) => {
    removeItem(id);
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart",
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Checkout functionality coming soon!",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
              <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button onClick={() => navigate('/shop')} size="lg" className="bg-gradient-primary">
                Start Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate(-1)}
                className="hover:scale-110 transition-transform"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold">Shopping Cart</h1>
                <p className="text-muted-foreground">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
                </p>
              </div>
            </div>
            {items.length > 0 && (
              <Button variant="outline" onClick={handleClearCart}>
                Clear Cart
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={`${item.id}-${item.color}-${item.size}`} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-full sm:w-24 h-48 sm:h-24 bg-sage rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                              {item.color && <span>Color: {item.color}</span>}
                              {item.size && <span>Size: {item.size}</span>}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-muted-foreground hover:text-destructive self-start"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="min-w-[2rem] text-center font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                            {item.quantity > 1 && (
                              <p className="text-sm text-muted-foreground">${item.price} each</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-semibold">Order Summary</h2>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal ({itemCount} items)</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-accent">Free</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-primary"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => navigate('/shop')}
                  >
                    Continue Shopping
                  </Button>

                  <div className="text-center text-sm text-muted-foreground mt-4">
                    <p>Free shipping on orders over $75</p>
                    <p>Easy returns within 30 days</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;