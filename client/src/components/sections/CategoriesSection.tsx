import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Home, Car, Laptop, Sofa, Wrench } from "lucide-react";
import apartmentImage from "@/assets/apartment-category.jpg";
import carImage from "@/assets/car-category.jpg";
import electronicsImage from "@/assets/electronics-category.jpg";
import furnitureImage from "@/assets/furniture-category.jpg";
import toolsImage from "@/assets/tools-category.jpg";

const categories = [
  {
    id: 1,
    name: "Apartments",
    description: "Find your perfect temporary home",
    icon: Home,
    image: apartmentImage,
    count: "2,500+ listings",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "Cars",
    description: "Drive your dream car today",
    icon: Car,
    image: carImage,
    count: "1,800+ vehicles",
    color: "from-green-500 to-green-600",
  },
  {
    id: 3,
    name: "Electronics",
    description: "Latest tech at your fingertips",
    icon: Laptop,
    image: electronicsImage,
    count: "3,200+ devices",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    name: "Furniture",
    description: "Stylish pieces for any space",
    icon: Sofa,
    image: furnitureImage,
    count: "1,500+ items",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 5,
    name: "Tools",
    description: "Professional equipment ready to use",
    icon: Wrench,
    image: toolsImage,
    count: "900+ tools",
    color: "from-red-500 to-red-600",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what you need from our diverse collection of rental categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="group hover:shadow-large transition-all duration-300 transform hover:scale-105 border-0 bg-card overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                      <IconComponent className="h-6 w-6 text-foreground" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="ghost" className="w-full group/btn">
                    Explore {category.name}
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Categories Button */}
        <div className="text-center animate-fade-in">
          <Button variant="outline" size="lg" className="group">
            View All Categories
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;