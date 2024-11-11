import { useState } from 'react';
import { Brain, Home, Bot, Building2, Users, TrendingUp, BookOpen } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { SidebarNav } from './sidebar/SidebarNav';
import { SidebarChats } from './sidebar/SidebarChats';
import { SidebarFooterContent } from './sidebar/SidebarFooterContent';

const mainNavLinks = [
  { icon: Home, name: 'Inicio', href: '#' },
  { icon: Bot, name: 'Agentes AI', href: '#agentes-ai' },
  { icon: Building2, name: 'CreaConstruye', href: '#' },
  { icon: Users, name: 'Comunidad', href: '#' },
  { icon: TrendingUp, name: 'GrowthBDM', href: '#' },
  { icon: BookOpen, name: 'Blog', href: '#' }
];

const recentChats = [
  { id: '1', title: 'Proyecto Residencial', date: '2024-01-20' },
  { id: '2', title: 'Análisis de Mercado', date: '2024-01-19' },
  { id: '3', title: 'Diseño Arquitectónico', date: '2024-01-18' },
];

export function AppSidebar() {
  const [isDark, setIsDark] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = recentChats.filter(chat =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Sidebar className="pt-16 border-r border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-primary" />
          <h1 className="font-mono font-bold text-lg">
            Conciencia<span className="slashed-zero">0</span>
          </h1>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarChats
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            chats={filteredChats}
          />

          <div className="mt-6">
            <Separator className="my-4" />
            <SidebarNav items={mainNavLinks} />
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarFooterContent
          isDark={isDark}
          isLoggedIn={isLoggedIn}
          onThemeToggle={() => setIsDark(!isDark)}
          onLoginToggle={() => setIsLoggedIn(!isLoggedIn)}
        />
      </SidebarFooter>
    </Sidebar>
  );
}