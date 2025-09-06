import { Leaf, TreePine, Droplets, Zap } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const StatCard = ({ icon, value, label, color }: StatCardProps) => (
  <div className="eco-card p-4 text-center animate-slide-up">
    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${color} mb-3`}>
      {icon}
    </div>
    <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const EcoStats = () => {
  return (
    <div className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Your Environmental Impact</h2>
          <p className="text-muted-foreground">Every purchase makes a difference</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={<Leaf className="h-6 w-6 text-white" />}
            value="127kg"
            label="CO₂ Saved"
            color="bg-eco-success"
          />
          <StatCard
            icon={<TreePine className="h-6 w-6 text-white" />}
            value="23"
            label="Trees Saved"
            color="bg-primary"
          />
          <StatCard
            icon={<Droplets className="h-6 w-6 text-white" />}
            value="450L"
            label="Water Saved"
            color="bg-eco-info"
          />
          <StatCard
            icon={<Zap className="h-6 w-6 text-white" />}
            value="89kWh"
            label="Energy Saved"
            color="bg-eco-warning"
          />
        </div>
      </div>
    </div>
  );
};

export default EcoStats;