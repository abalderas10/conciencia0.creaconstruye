import { Button } from '@/components/ui/button';
import { Settings, Sun, Moon, ThumbsUp, UserCircle, LogIn, LogOut } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface SidebarFooterContentProps {
  isDark: boolean;
  isLoggedIn: boolean;
  onThemeToggle: () => void;
  onLoginToggle: () => void;
}

export function SidebarFooterContent({
  isDark,
  isLoggedIn,
  onThemeToggle,
  onLoginToggle,
}: SidebarFooterContentProps) {
  const { collapsed } = useSidebar();

  return (
    <div className="space-y-2">
      <Button
        variant="ghost"
        className="w-full justify-start gap-2"
        onClick={onThemeToggle}
      >
        {isDark ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
        {!collapsed && 'Cambiar Tema'}
      </Button>

      <Button
        variant="ghost"
        className="w-full justify-start gap-2"
      >
        <ThumbsUp className="h-5 w-5" />
        {!collapsed && 'Dar Feedback'}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2"
          >
            <Settings className="h-5 w-5" />
            {!collapsed && 'Configuración'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-[200px]"
        >
          <DropdownMenuItem>
            <UserCircle className="mr-2 h-4 w-4" />
            Perfil
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Preferencias
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onLoginToggle}>
            {isLoggedIn ? (
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar Sesión
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Iniciar Sesión
              </>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}