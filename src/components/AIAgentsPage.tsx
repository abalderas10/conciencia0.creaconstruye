import { Brain, Bot, Database, ChartBar, Building } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

interface AIAgentsPageProps {
  onBack: () => void;
}

export function AIAgentsPage({ onBack }: AIAgentsPageProps) {
  const breadcrumbs = [
    { label: 'Inicio', href: '#', onClick: onBack },
    { label: 'Agentes AI', current: true }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 pt-24">
      <div className="container mx-auto px-4">
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-mono font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-zinc-900 dark:from-zinc-300 dark:to-zinc-100">
            Automatización e Inteligencia Artificial en el Desarrollo Inmobiliario con AgentesBD
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Transformamos el desarrollo inmobiliario mediante automatización y ciencia de datos aplicada
          </p>
        </section>

        {/* Rest of the sections remain the same */}
        {/* ... */}
      </div>
    </div>
  );
}