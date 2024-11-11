import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Welcome } from '@/components/Welcome';
import { Navigation } from '@/components/Navigation';
import { ChatInterface } from '@/components/ChatInterface';
import { AIAgentsPage } from '@/components/AIAgentsPage';
import { LoginPage } from '@/components/LoginPage';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('ES');
  const [currentPage, setCurrentPage] = useState('home');

  const getBreadcrumbs = () => {
    const baseItem = { label: 'Inicio', href: '#' };
    
    switch (currentPage) {
      case 'home':
        return [{ ...baseItem, current: true }];
      case 'ai-agents':
        return [
          baseItem,
          { label: 'Agentes AI', current: true }
        ];
      case 'login':
        return [
          baseItem,
          { label: 'Iniciar Sesión', current: true }
        ];
      default:
        return [baseItem];
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <main className="container mx-auto px-4 pt-24 pb-12">
            <PageBreadcrumbs items={getBreadcrumbs()} />
            <Welcome
              title={
                <>
                  Conciencia<span className="slashed-zero">0</span>
                </>
              }
              description={
                <>
                  Tu asistente inteligente para transformar ideas en realidad. Conciencia0 es un modelo avanzado de IA especializado en business development, arquitectura y construcción, que impulsa las plataformas de creaconstruye.com y growthbdm.com. Desde la concepción del proyecto hasta su entrega, te acompaña con herramientas automatizadas para optimizar cada fase del proceso, asegurando precisión y eficiencia en cada etapa.
                  <br /><br />
                  Explora nuevas posibilidades y lleva tus proyectos al siguiente nivel con la experiencia y creatividad de Conciencia0.
                </>
              }
            />
            
            <ChatInterface />
          </main>
        );
      case 'ai-agents':
        return <AIAgentsPage onBack={() => setCurrentPage('home')} />;
      case 'login':
        return <LoginPage onBack={() => setCurrentPage('home')} />;
      default:
        return null;
    }
  };

  return (
    <SidebarProvider>
      <div className={cn(
        "min-h-screen transition-colors duration-300",
        isDark ? "dark bg-zinc-900" : "bg-zinc-50"
      )}>
        <Header
          isDark={isDark}
          setIsDark={setIsDark}
          language={language}
          setLanguage={setLanguage}
          onLoginClick={() => setCurrentPage('login')}
        />
        
        <AppSidebar />
        <SidebarTrigger />

        <div className="pl-[60px] lg:pl-[240px] transition-all duration-300">
          {renderPage()}
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;