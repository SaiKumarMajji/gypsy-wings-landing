import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <Card 
      className="group h-full bg-card border-border hover:shadow-float transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-sky rounded-full group-hover:animate-float">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-card-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;