import { Leaf, TrendingUp, Award, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Eco Dashboard</h1>
          <p className="text-muted-foreground">
            Track your environmental impact and sustainable shopping journey
          </p>
        </div>

        {/* Impact Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="eco-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CO₂ Saved</CardTitle>
              <Leaf className="h-4 w-4 text-eco-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-eco-success">127kg</div>
              <p className="text-xs text-muted-foreground">
                +12kg from last month
              </p>
            </CardContent>
          </Card>

          <Card className="eco-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Money Saved</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">₹45,230</div>
              <p className="text-xs text-muted-foreground">
                vs buying new items
              </p>
            </CardContent>
          </Card>

          <Card className="eco-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Eco Score</CardTitle>
              <Award className="h-4 w-4 text-eco-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-eco-warning">8.7/10</div>
              <p className="text-xs text-muted-foreground">
                Eco Champion level
              </p>
            </CardContent>
          </Card>

          <Card className="eco-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Items Purchased</CardTitle>
              <Target className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">23</div>
              <p className="text-xs text-muted-foreground">
                This year
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Goals Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle>Monthly Goals</CardTitle>
              <CardDescription>Your sustainability targets for this month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>CO₂ Reduction</span>
                  <span>75/100 kg</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Money Saved</span>
                  <span>₹8,500/₹10,000</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Items Purchased</span>
                  <span>3/5 items</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="eco-card">
            <CardHeader>
              <CardTitle>Eco Achievements</CardTitle>
              <CardDescription>Your sustainable shopping milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-eco-success/20 flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-eco-success" />
                  </div>
                  <div>
                    <p className="font-medium">First Purchase</p>
                    <p className="text-sm text-muted-foreground">Bought your first eco-friendly item</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Eco Warrior</p>
                    <p className="text-sm text-muted-foreground">Saved 100kg of CO₂</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Target className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">Super Saver</p>
                    <p className="text-sm text-muted-foreground">Save ₹50,000 (In Progress)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="eco-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest eco-friendly purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-muted rounded-lg"></div>
                  <div>
                    <p className="font-medium">iPhone 12 - Excellent Condition</p>
                    <p className="text-sm text-muted-foreground">Electronics • 2 days ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-primary">₹35,000</p>
                  <p className="text-sm text-eco-success">Saved 12kg CO₂</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-muted rounded-lg"></div>
                  <div>
                    <p className="font-medium">Vintage Leather Jacket</p>
                    <p className="text-sm text-muted-foreground">Fashion • 1 week ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-primary">₹2,500</p>
                  <p className="text-sm text-eco-success">Saved 5kg CO₂</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-muted rounded-lg"></div>
                  <div>
                    <p className="font-medium">Design Book Collection</p>
                    <p className="text-sm text-muted-foreground">Books • 2 weeks ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-primary">₹1,200</p>
                  <p className="text-sm text-eco-success">Saved 3kg CO₂</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;