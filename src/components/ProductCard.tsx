import { Heart, Leaf, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  location: string;
  ecoScore: number;
  co2Saved: number;
  isLiked?: boolean;
}

const ProductCard = ({
  title,
  price,
  originalPrice,
  image,
  category,
  location,
  ecoScore,
  co2Saved,
  isLiked = false,
}: ProductCardProps) => {
  const savings = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="eco-card hover-lift p-4 group cursor-pointer">
      {/* Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <div className="eco-badge">
            <Leaf className="h-3 w-3" />
            Eco Score: {ecoScore}/10
          </div>
          {savings > 0 && (
            <Badge variant="secondary" className="bg-eco-warning/90 text-white">
              {savings}% OFF
            </Badge>
          )}
        </div>

        {/* Like Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-2 right-2 h-8 w-8 p-0 rounded-full bg-white/80 hover:bg-white ${
            isLiked ? "text-red-500" : "text-muted-foreground"
          }`}
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
        </Button>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <Badge variant="outline" className="text-xs mb-2">
            {category}
          </Badge>
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>

        {/* Location */}
        <div className="flex items-center text-xs text-muted-foreground">
          <MapPin className="h-3 w-3 mr-1" />
          {location}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">₹{price.toLocaleString()}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="eco-badge-success">
          <Leaf className="h-3 w-3" />
          Saves {co2Saved}kg CO₂
        </div>

        {/* Add to Cart */}
        <Button className="w-full" size="sm">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;