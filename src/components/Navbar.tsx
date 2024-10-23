import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Bell, BookOpen, CalendarDays, ClipboardList, GraduationCap, Menu, Moon, Search, Sheet, Sun, Users } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from './ui/sheet';
import { useTheme } from 'next-themes';
import Login from '@/components/Login';

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [user, setUser] = React.useState<{ name: string; email: string } | null>(null)

  const handleLogin = (email: string, password: string) => {
    // En una aplicación real, aquí validarías las credenciales
    setIsLoggedIn(true)
    setUser({ name: 'Admin', email: email })
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <h1 className="text-xl font-bold">Llaos Acuacultura</h1>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar..." className="pl-8 md:w-[300px] lg:w-[300px]" />
              </div>
            </div>
            <nav className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                title="Cambiar tema"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Cambiar tema</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notificaciones</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="Avatar" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user?.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Perfil</DropdownMenuItem>
                  <DropdownMenuItem>Configuración</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>Cerrar sesión</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Gestión Escolar</SheetTitle>
                <SheetDescription>Navegación rápida</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <Button variant="ghost" className="justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Estudiantes
                </Button>
                <Button variant="ghost" className="justify-start">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Profesores
                </Button>
                <Button variant="ghost" className="justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cursos
                </Button>
                <Button variant="ghost" className="justify-start">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Horarios
                </Button>
                <Button variant="ghost" className="justify-start">
                  <ClipboardList className="mr-2 h-4 w-4" />
                  Calificaciones
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
  );
}
