import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SHOP WITH TOM
              </h2>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Handcrafted crochet wear and stylish footwear that transforms your everyday look into something extraordinary.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Stay in the loop</h3>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button variant="default" className="bg-gradient-accent">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-muted-foreground hover:text-accent transition-colors">Shop All</Link></li>
              <li><Link to="/shop/crochet-wear" className="text-muted-foreground hover:text-accent transition-colors">Crochet Wear</Link></li>
              <li><Link to="/shop/footwear" className="text-muted-foreground hover:text-accent transition-colors">Footwear</Link></li>
              <li><Link to="/lookbook" className="text-muted-foreground hover:text-accent transition-colors">Lookbook</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Shop With Tom. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Button variant="ghost" size="icon">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;