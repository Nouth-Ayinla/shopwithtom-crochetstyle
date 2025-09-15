import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Have questions about our products or need styling advice? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
              <p className="text-muted-foreground mb-8">
                Whether you're looking for styling advice, have questions about our products, 
                or just want to say hello, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Our Studio</h3>
                  <p className="text-muted-foreground">
                    123 Fashion District<br />
                    Style City, SC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">
                    (555) 123-4567<br />
                    Mon-Fri, 9am-6pm EST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">
                    hello@shopwithtom.com<br />
                    We reply within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9am - 6pm<br />
                    Saturday: 10am - 4pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..." 
                    rows={6}
                  />
                </div>

                <Button size="lg" className="w-full bg-gradient-accent">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does shipping take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer free shipping on orders over ₦50,000. Standard shipping takes 3-5 business days, 
                  while express shipping arrives in 1-2 business days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's your return policy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept returns within 30 days of purchase. Items must be in original condition 
                  with tags attached. Custom pieces are final sale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer custom pieces?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We work with talented artisans who can create custom crochet pieces. 
                  Contact us to discuss your vision and timeline.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I care for crochet items?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hand wash in cold water with mild detergent, then lay flat to dry. 
                  Each item comes with specific care instructions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;