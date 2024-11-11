import { useState } from 'react';
import { LogIn, Mail, Lock, Github, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';

interface LoginPageProps {
  onBack: () => void;
}

export function LoginPage({ onBack }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const breadcrumbs = [
    { label: 'Inicio', href: '#', onClick: onBack },
    { label: 'Iniciar Sesión', current: true }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 pt-24">
      <div className="container mx-auto px-4">
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Login Card */}
        <div className="max-w-md mx-auto">
          <Card className="p-8 backdrop-blur-sm bg-white/50 dark:bg-zinc-800/50">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold mb-2">Bienvenido de nuevo</h1>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Inicia sesión en tu cuenta para continuar
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                  <Input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Button className="w-full gap-2 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-800 hover:to-zinc-950 dark:from-zinc-200 dark:to-zinc-400 dark:hover:from-zinc-300 dark:hover:to-zinc-500">
                <LogIn className="h-4 w-4" />
                Iniciar Sesión
              </Button>
            </form>

            <div className="relative my-8">
              <Separator />
              <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-800 px-2 text-xs text-zinc-500">
                O continúa con
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="gap-2">
                <Chrome className="h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" className="gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </div>

            <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-6">
              ¿No tienes una cuenta?{' '}
              <a href="#" className="text-primary font-semibold hover:underline">
                Regístrate
              </a>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}