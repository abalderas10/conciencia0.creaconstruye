import { Button } from "@/components/ui/button";

interface NavigationProps {
  links: Array<{ name: string; href: string }>;
  onNavigate?: (href: string) => void;
}

export function Navigation({ links, onNavigate }: NavigationProps) {
  return (
    <nav className="flex justify-center gap-4 mb-16 flex-wrap">
      {links.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          className="min-w-[140px] bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-zinc-800/80 text-white"
          onClick={() => onNavigate?.(link.href)}
        >
          {link.name}
        </Button>
      ))}
    </nav>
  );
}