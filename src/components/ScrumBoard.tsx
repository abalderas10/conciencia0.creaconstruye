import { Card } from "@/components/ui/card";
import { 
  ClipboardList, 
  Clock, 
  CheckCircle2, 
  CircleDashed 
} from "lucide-react";

const scrumColumns = [
  {
    title: "Agentes AI",
    icon: ClipboardList,
    items: ["AI Training", "Voice Recognition", "Image Processing"]
  },
  {
    title: "Herramientas de Desarrollo Inmobiliario",
    icon: Clock,
    items: ["Natural Language Processing", "Neural Network Optimization"]
  },
  {
    title: "Testing",
    icon: CircleDashed,
    items: ["Chat Interface", "Multi-language Support"]
  },
  {
    title: "Completed",
    icon: CheckCircle2,
    items: ["Core Architecture", "Basic UI/UX"]
  }
];

export function ScrumBoard() {
  return (
    <div className="w-full mb-16 overflow-x-auto">
      <div className="grid grid-cols-4 gap-4 min-w-[1000px]">
        {scrumColumns.map((column) => {
          const Icon = column.icon;
          return (
            <Card key={column.title} className="p-4 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="font-mono font-bold text-sm">{column.title}</h3>
              </div>
              <div className="space-y-2">
                {column.items.map((item) => (
                  <div
                    key={item}
                    className="p-2 text-sm bg-zinc-50 dark:bg-zinc-900 rounded-md border border-zinc-200 dark:border-zinc-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}