import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Recycle, Heart } from "lucide-react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import EcoStats from "@/components/EcoStats";
import heroImage from "@/assets/hero-image.jpg";

// Mock product data
const products = [
  {
    id: "1",
    title: "iPhone 12 - Excellent Condition",
    price: 35000,
    originalPrice: 65000,
    image: "/placeholder.svg",
    category: "Electronics",
    location: "Mumbai, Maharashtra",
    ecoScore: 9,
    co2Saved: 12,
  },
  {
    id: "2",
    title: "Vintage Leather Jacket",
    price: 2500,
    originalPrice: 8000,
    image: "/placeholder.svg",
    category: "Fashion",
    location: "Delhi, NCR",
    ecoScore: 8,
    co2Saved: 5,
  },
  {
    id: "3",
    title: "MacBook Air M1 - Like New",
    price: 75000,
    originalPrice: 99900,
    image: "/placeholder.svg",
    category: "Electronics",
    location: "Bangalore, Karnataka",
    ecoScore: 10,
    co2Saved: 25,
  },
  {
    id: "4",
    title: "Design Thinking Book Collection",
    price: 1200,
    originalPrice: 3000,
    image: "/placeholder.svg",
    category: "Books",
    location: "Pune, Maharashtra",
    ecoScore: 7,
    co2Saved: 3,
  },
  {
    id: "5",
    title: "Gaming Chair - Herman Miller",
    price: 45000,
    originalPrice: 85000,
    image: "/placeholder.svg",
    category: "Home",
    location: "Hyderabad, Telangana",
    ecoScore: 9,
    co2Saved: 18,
  },
  {
    id: "6",
    title: "Canon DSLR Camera Kit",
    price: 28000,
    originalPrice: 55000,
    image: "/placeholder.svg",
    category: "Electronics",
    location: "Chennai, Tamil Nadu",
    ecoScore: 8,
    co2Saved: 8,
  },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category.toLowerCase() === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Leaf className="h-5 w-5 text-green-400 animate-eco-pulse" />
                <span className="text-sm font-medium">Sustainable Shopping Made Easy</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Give Products a
              <span className="block text-green-400">Second Life</span>
            </h1>
            
            <p className="text-xl mb-8 text-white/90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Join India's largest community for sustainable shopping. Buy, sell, and save the planet one purchase at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" variant="hero" className="shadow-lg">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Sell Your Items
              </Button>
            </div>
            
            <div className="flex items-center justify-center mt-12 gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Recycle className="h-5 w-5" />
                <span className="text-sm">50K+ Items Saved</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <span className="text-sm">25K+ Happy Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                <span className="text-sm">500T+ CO₂ Saved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <CategoryFilter 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Product Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Trending Eco Products
            </h2>
            <p className="text-muted-foreground">
              Discover amazing pre-loved items from verified sellers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Eco Stats */}
      <EcoStats />

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">EcoFinds</span>
            </div>
            <p className="text-muted-foreground">
              Making sustainable shopping accessible to everyone
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;