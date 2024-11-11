import { Button } from "@/components/ui/button";
import { Brain, Languages, LogIn, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  language: string;
  setLanguage: (value: string) => void;
  onLoginClick: () => void;
}

export function Header({ isDark, setIsDark, language, setLanguage, onLoginClick }: HeaderProps) {
  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left section */}
        <div className="w-[120px]">
          {/* Empty div to help with centering */}
        </div>

        {/* Center section with logo */}
        <div className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-primary" />
          <h1 className="logo-text text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 to-zinc-800 dark:from-zinc-300 dark:to-zinc-500">
            Conciencia<span className="slashed-zero">0</span>
          </h1>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4 w-[120px] justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <Languages className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLanguage('ES')}>Español</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('EN')}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('CN')}>中文</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsDark(!isDark)}
            className="hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button 
            variant="default" 
            className="gap-2 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-800 hover:to-zinc-950 dark:from-zinc-200 dark:to-zinc-400 dark:hover:from-zinc-300 dark:hover:to-zinc-500"
            onClick={onLoginClick}
          >
            <LogIn className="h-4 w-4" />
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}