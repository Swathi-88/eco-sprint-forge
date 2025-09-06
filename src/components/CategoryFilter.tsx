import { Button } from "@/components/ui/button";
import { Smartphone, Shirt, Book, Home, Gamepad2, Bike } from "lucide-react";

const categories = [
  { id: "all", name: "All Items", icon: null },
  { id: "electronics", name: "Electronics", icon: Smartphone },
  { id: "fashion", name: "Fashion", icon: Shirt },
  { id: "books", name: "Books", icon: Book },
  { id: "home", name: "Home & Garden", icon: Home },
  { id: "gaming", name: "Gaming", icon: Gamepad2 },
  { id: "sports", name: "Sports", icon: Bike },
];

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="py-6 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category.id)}
                className={`${
                  isActive 
                    ? "bg-primary hover:bg-primary/90" 
                    : "hover:bg-primary/10 hover:text-primary hover:border-primary"
                }`}
              >
                {Icon && <Icon className="h-4 w-4 mr-2" />}
                {category.name}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;