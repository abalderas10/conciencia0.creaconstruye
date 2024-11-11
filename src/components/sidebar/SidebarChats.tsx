import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Plus, Search } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

interface Chat {
  id: string;
  title: string;
  date: string;
}

interface SidebarChatsProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  chats: Chat[];
}

export function SidebarChats({ searchQuery, onSearchChange, chats }: SidebarChatsProps) {
  const { collapsed } = useSidebar();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Button
          variant="default"
          className={cn(
            'w-full justify-start gap-2',
            collapsed ? 'px-2' : 'px-4'
          )}
        >
          <Plus className="h-5 w-5" />
          {!collapsed && 'Nuevo Chat'}
        </Button>

        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={collapsed ? '' : 'Buscar chats...'}
            className={cn(
              'pl-9',
              collapsed ? 'w-10 px-2' : 'w-full'
            )}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      {!collapsed && chats.length > 0 && (
        <div className="space-y-1">
          <h2 className="text-sm font-semibold text-muted-foreground px-2 mb-2">
            Chats Recientes
          </h2>
          {chats.map((chat) => (
            <Button
              key={chat.id}
              variant="ghost"
              className="w-full justify-start gap-2 px-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="truncate">{chat.title}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}