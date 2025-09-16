import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Send
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">R</span>
                </div>
              </div>
              <span className="text-xl font-bold">RentEase</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted platform for renting anything from apartments and cars to electronics and tools. Making rentals simple, safe, and affordable.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Browse Rentals
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                List Your Item
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Safety Guidelines
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Insurance
              </a>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Categories</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Apartments
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Cars & Vehicles
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Electronics
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Furniture
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Tools & Equipment
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Sports & Recreation
              </a>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">support@rentease.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">
                Subscribe to get updates on new listings and special offers
              </p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="secondary" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 RentEase. All rights reserved. Made with ❤️ for easy rentals.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;