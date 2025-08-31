import { Heart, Award, Users, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto">
              Where passion for handmade artistry meets contemporary fashion, 
              creating pieces that tell your unique story.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-sage rounded-2xl aspect-square"></div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hi, I'm Tom
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
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

      {/* Our Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our values guide every decision we make, from the pieces we select to the 
              way we serve our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Handcrafted Love</h3>
                <p className="text-muted-foreground">
                  Every crochet piece is made with care and attention to detail, 
                  ensuring each item is truly special.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. Each item is carefully vetted 
                  to meet our high standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Community Focused</h3>
                <p className="text-muted-foreground">
                  We support independent artisans and believe in building a 
                  community around handmade fashion.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Customer Care</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We're here to ensure you 
                  love every piece you receive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              "To bring you beautifully crafted pieces that don't just look good, 
              but feel good too. We believe that when you wear something made with 
              love and intention, it shows. Our mission is to help you express your 
              unique style through thoughtfully curated fashion that celebrates both 
              craftsmanship and individuality."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-accent" asChild>
                <Link to="/shop">
                  Shop Our Collection
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Next Favorite Piece?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Browse our curated collection of handmade crochet wear and stylish footwear. 
            Each piece is waiting to become part of your unique story.
          </p>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
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