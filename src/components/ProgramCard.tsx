import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ProgramCard = ({ icon: Icon, title, description, features }: ProgramCardProps) => {
  return (
    <Card className="h-full bg-gradient-subtle border-border shadow-card hover:shadow-float transition-all duration-300">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-primary rounded-full">
            <Icon className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        <CardTitle className="text-xl text-card-foreground">
          {title}
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-sm text-card-foreground">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;