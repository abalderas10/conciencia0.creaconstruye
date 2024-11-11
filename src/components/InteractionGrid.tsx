import { MessageSquare, Mic, FileImage, Brain } from "lucide-react";
import { InteractionCard } from "./InteractionCard";

const interactionCards = [
  { 
    title: 'Chat de Texto', 
    Icon: MessageSquare, 
    description: 'Interactúa mediante texto con Conciencia0' 
  },
  { 
    title: 'Hume AI', 
    Icon: Mic, 
    description: 'Interfaz de voz empática para una comunicación natural y fluida' 
  },
  { 
    title: 'Documentos Revit', 
    Icon: FileImage, 
    description: 'Análisis y procesamiento avanzado de documentos técnicos' 
  },
  { 
    title: 'Ingresa Conciencia', 
    Icon: Brain, 
    description: 'Contribuye al aprendizaje y mejora continua del sistema' 
  }
];

export function InteractionGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {interactionCards.map((card) => (
        <InteractionCard
          key={card.title}
          title={card.title}
          description={card.description}
          Icon={card.Icon}
        />
      ))}
    </div>
  );
}