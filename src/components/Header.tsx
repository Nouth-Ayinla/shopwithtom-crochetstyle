import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Search, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to shop page with search query
      const encodedQuery = encodeURIComponent(searchQuery.trim());
      navigate(`/shop?search=${encodedQuery}`);
      
      // Close search on mobile and reset states
      setIsOpen(false);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleSearchIconClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchBlur = () => {
    // Small delay to allow form submission
    setTimeout(() => {
      if (!searchQuery.trim()) {
        setIsSearchOpen(false);
      }
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Lookbook", href: "/lookbook" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
              SHOP WITH TOM
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 relative hover:text-primary hover:-translate-y-0.5 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={handleSearchBlur}
                    onKeyDown={handleKeyDown}
                    className="w-64 h-9 text-sm transition-all duration-300 focus:w-72"
                    autoFocus
                  />
                  <Button 
                    type="submit"
                    variant="ghost" 
                    size="icon"
                    className="ml-1 h-9 w-9 hover:scale-110 transition-transform duration-200"
                    aria-label="Submit search"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-110 transition-transform duration-200"
                  onClick={handleSearchIconClick}
                  aria-label="Open search"
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>
            
            {/* WhatsApp Contact */}
            <Button 
              variant="outline"
              size="sm"
              className="hover:scale-110 transition-transform duration-200"
              onClick={() => window.open('https://wa.me/1234567890?text=Hi! I\'m interested in your products.', '_blank')}
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      SHOP WITH TOM
                    </h2>
                  </div>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-primary py-2 ${
                        isActive(item.href)
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex items-center space-x-4 pt-6 mt-6 border-t">
                    <div className="flex-1">
                      <form onSubmit={handleSearch} className="flex items-center space-x-2">
                        <Input
                          type="text"
                          placeholder="Search products..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="flex-1 h-9 text-sm"
                        />
                        <Button 
                          type="submit"
                          variant="ghost" 
                          size="icon"
                          className="h-9 w-9"
                          aria-label="Submit search"
                        >
                          <Search className="h-4 w-4" />
                        </Button>
                      </form>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="hover:scale-110 transition-transform duration-200" 
                      onClick={() => {
                        window.open('https://wa.me/1234567890?text=Hi! I\'m interested in your products.', '_blank');
                        setIsOpen(false);
                      }}
                      aria-label="Contact via WhatsApp"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                  
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;