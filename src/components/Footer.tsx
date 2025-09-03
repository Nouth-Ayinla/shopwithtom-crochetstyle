import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "hover:text-brand-yellow",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      color: "hover:text-brand-orange",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
      color: "hover:text-brand-yellow",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:contact@shopwithtom.com",
      color: "hover:text-brand-green",
    },
  ];

  return (
    <footer className="bg-brand-orange">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center space-y-8">
          {/* Copyright */}
          <div>
            <p className="text-white text-lg font-medium">
              © 2025 Shop With Tom. All rights reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-8 w-8" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;