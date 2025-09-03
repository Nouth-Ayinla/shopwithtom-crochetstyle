import { useState, useEffect } from "react";
import { Heart, Award, Users, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const values = [
    {
      icon: Heart,
      title: "Handcrafted Love",
      description: "Every crochet piece is made with care and attention to detail, ensuring each item is truly special.",
      color: "from-rose-400 to-rose-500"
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on quality. Each item is carefully vetted to meet our high standards.",
      color: "from-amber-400 to-amber-500"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We support independent artisans and believe in building a community around handmade fashion.",
      color: "from-emerald-400 to-emerald-500"
    },
    {
      icon: Truck,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We're here to ensure you love every piece you receive.",
      color: "from-blue-400 to-blue-500"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === values.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? values.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-500 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Where passion for handmade artistry meets contemporary fashion, 
              creating pieces that tell your unique story.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story - Modified layout for mobile */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Circular Image Container - Moved to top on mobile */}
            <div className="order-1 lg:order-1 flex justify-center -mt-16 md:-mt-20 lg:mt-0 lg:justify-end">
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96">
                {/* Outer decorative ring */}
                <div className="absolute inset-0 border-4 border-teal-200 rounded-full animate-pulse-slow"></div>
                
                {/* Main image container */}
                <div className="absolute inset-4 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-full overflow-hidden shadow-xl">
                  {/* Profile image placeholder - replace with your actual image */}
                  <div className="w-full h-full flex items-center justify-center bg-emerald-500">
                    <div className="text-white text-center p-4">
                      <div className="text-3xl md:text-4xl font-bold mb-2">TOM</div>
                      <div className="text-xs md:text-sm uppercase tracking-wider">Founder & Artisan</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-amber-400 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-5 h-5 md:w-6 md:h-6 bg-rose-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="order-2 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Hi, I'm Tom
              </h2>
              <div className="space-y-4 text-gray-700 text-base sm:text-lg">
                <p>
                  Welcome to Shop With Tom, where every piece tells a story of craftsmanship, 
                  creativity, and the belief that fashion should be as unique as you are.
                </p>
                <p>
                  My journey began with a simple love for handmade items. Growing up, I was 
                  fascinated by the intricate details and personal touch that only handcrafted 
                  pieces could offer. This passion led me to discover the world of crochet artistry 
                  and quality footwear.
                </p>
                <p>
                  Shop With Tom isn't just about selling products—it's about curating pieces 
                  that add character to your everyday style. Each crochet item is carefully 
                  selected from talented artisans who share my commitment to quality and 
                  originality.
                </p>
                <p>
                  Whether it's a cozy beanie that becomes your signature piece or boots that 
                  carry you confidently through your day, every item in our collection is 
                  chosen with intention and love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Now with mobile slideshow */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our values guide every decision we make, from the pieces we select to the 
              way we serve our customers.
            </p>
          </div>

          {/* Desktop Grid View (hidden on mobile) */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel (visible on mobile) */}
          <div className="md:hidden relative overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {values.map((value, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <Card className="text-center border-none shadow-md h-full">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
            
            {/* Indicator Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {values.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-emerald-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed italic">
              "To bring you beautifully crafted pieces that don't just look good, 
              but feel good too. We believe that when you wear something made with 
              love and intention, it shows. Our mission is to help you express your 
              unique style through thoughtfully curated fashion that celebrates both 
              craftsmanship and individuality."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 text-white min-h-[52px] hover:from-amber-600 hover:to-amber-700 transition-all" asChild>
                <Link to="/shop">
                  Shop Our Collection
                </Link>
              </Button>
              <Button size="lg" variant="outline" 
              className="border-white text-black hover:bg-white hover:text-primary text-lg px-8 py-6 btn-hover-lift" asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Next Favorite Piece?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto">
            Browse our curated collection of handmade crochet wear and stylish footwear. 
            Each piece is waiting to become part of your unique story.
          </p>
          <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-emerald-700 transition-colors" asChild>
            <Link to="/lookbook">
              View Lookbook
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;