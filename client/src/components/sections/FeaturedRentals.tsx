import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const featuredRentals = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    category: "Apartments",
    price: "$120",
    period: "/night",
    location: "New York, NY",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop",
    isAvailable: true,
    tags: ["WiFi", "Kitchen", "Parking"],
  },
  {
    id: 2,
    title: "Tesla Model 3 Premium",
    category: "Cars", 
    price: "$85",
    period: "/day",
    location: "Los Angeles, CA",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=300&fit=crop",
    isAvailable: true,
    tags: ["Autopilot", "Premium Audio", "Supercharging"],
  },
  {
    id: 3,
    title: "MacBook Pro M3 Latest",
    category: "Electronics",
    price: "$45",
    period: "/day",
    location: "San Francisco, CA",
    rating: 4.7,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=300&fit=crop",
    isAvailable: false,
    tags: ["Latest Model", "Adobe Suite", "Final Cut Pro"],
  },
  {
    id: 4,
    title: "Designer Living Room Set",
    category: "Furniture",
    price: "$35",
    period: "/day",
    location: "Chicago, IL",
    rating: 4.6,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
    isAvailable: true,
    tags: ["Modern Design", "Comfortable", "Easy Setup"],
  },
  {
    id: 5,
    title: "Professional Tool Kit",
    category: "Tools",
    price: "$25",
    period: "/day", 
    location: "Houston, TX",
    rating: 4.8,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=300&fit=crop",
    isAvailable: true,
    tags: ["Complete Set", "Professional Grade", "Includes Manual"],
  },
  {
    id: 6,
    title: "Cozy Mountain Cabin",
    category: "Apartments",
    price: "$180",
    period: "/night",
    location: "Denver, CO",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
    isAvailable: true,
    tags: ["Mountain View", "Fireplace", "Hot Tub"],
  },
];

const FeaturedRentals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const itemsPerView = 3;
  const maxSlide = Math.max(0, featuredRentals.length - itemsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const toggleLike = (id: number) => {
    setLikedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const visibleRentals = featuredRentals.slice(currentSlide, currentSlide + itemsPerView);

  return (
    <section className="py-16 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Rentals
            </h2>
            <p className="text-lg text-muted-foreground">
              Handpicked premium items available for rent right now
            </p>
          </div>
          
          {/* Carousel Controls */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline" 
              size="icon"
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Rentals Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)` }}
          >
            {featuredRentals.map((rental, index) => (
              <Card
                key={rental.id}
                className="flex-shrink-0 w-full md:w-1/3 hover:shadow-large transition-all duration-300 transform hover:scale-105 border-0 bg-card overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={rental.image}
                    alt={rental.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Status Badge */}
                  <Badge
                    variant={rental.isAvailable ? "default" : "secondary"}
                    className="absolute top-3 left-3"
                  >
                    {rental.isAvailable ? "Available" : "Booked"}
                  </Badge>

                  {/* Like Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm hover:bg-white"
                    onClick={() => toggleLike(rental.id)}
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        likedItems.includes(rental.id)
                          ? "fill-red-500 text-red-500"
                          : "text-foreground"
                      }`}
                    />
                  </Button>

                  {/* Category Badge */}
                  <Badge variant="secondary" className="absolute bottom-3 left-3">
                    {rental.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-foreground line-clamp-1">
                      {rental.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{rental.rating}</span>
                      <span className="text-xs text-muted-foreground">({rental.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{rental.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {rental.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-primary">{rental.price}</span>
                      <span className="text-sm text-muted-foreground">{rental.period}</span>
                    </div>
                    <Button 
                      variant={rental.isAvailable ? "default" : "secondary"}
                      size="sm"
                      disabled={!rental.isAvailable}
                    >
                      {rental.isAvailable ? "Rent Now" : "Unavailable"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Carousel Controls */}
        <div className="flex md:hidden items-center justify-center space-x-2 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Explore All Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="hero" size="xl" className="group">
            Explore All Rentals
            <Calendar className="h-5 w-5 ml-2 transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRentals;