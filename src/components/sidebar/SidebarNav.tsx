import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/components/ui/sidebar';
import { LucideIcon } from 'lucide-react';

interface NavItem {
  icon: LucideIcon;
  name: string;
  href: string;
}

interface SidebarNavProps {
  items: NavItem[];
  onNavigate?: (href: string) => void;
}

export function SidebarNav({ items, onNavigate }: SidebarNavProps) {
  const { collapsed } = useSidebar();

  return (
    <nav className="space-y-1">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.name}
            variant="ghost"
            className={cn(
              'w-full justify-start gap-2',
              collapsed ? 'px-2' : 'px-4'
            )}
            onClick={() => onNavigate?.(item.href)}
          >
            <Icon className="h-5 w-5" />
            {!collapsed && <span>{item.name}</span>}
          </Button>
        );
      })}
    </nav>
  );
}