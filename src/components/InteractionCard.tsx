import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InteractionCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function InteractionCard({ title, description, Icon }: InteractionCardProps) {
  return (
    <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-zinc-800/50 hover:bg-white/80 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer">
      <Icon className="h-12 w-12 mb-4 text-primary" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    </Card>
  );
}