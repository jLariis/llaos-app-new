import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Users, CalendarDays, GraduationCap, Truck, BookOpen, ClipboardList, Menu, Bell, Search, Sun, Moon, CircleDollarSign } from 'lucide-react'
import { useTheme } from "next-themes"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Login from '@/components/Login'

const data = [
  { name: "Ene", total: 1200 },
  { name: "Feb", total: 1100 },
  { name: "Mar", total: 1300 },
  { name: "Abr", total: 1400 },
  { name: "May", total: 1350 },
  { name: "Jun", total: 1500 },
]

const classSchedule = [
  { id: 1, name: "Matemáticas", teacher: "Prof. García", time: "09:00 - 10:30", room: "A101" },
  { id: 2, name: "Literatura", teacher: "Prof. Martínez", time: "10:45 - 12:15", room: "B203" },
  { id: 3, name: "Física", teacher: "Prof. Rodríguez", time: "13:00 - 14:30", room: "C105" },
  { id: 4, name: "Historia", teacher: "Prof. López", time: "14:45 - 16:15", room: "A205" },
  { id: 5, name: "Inglés", teacher: "Prof. Smith", time: "16:30 - 18:00", room: "B101" },
]

export default function Dashboard() {
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
    <div className="min-h-screen bg-background text-foreground">
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

      <main className="container py-6 md:py-10">
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="estudiantes">Administración</TabsTrigger>
            <TabsTrigger value="profesores">Compras</TabsTrigger>
            <TabsTrigger value="cursos">Inventarios</TabsTrigger>
            <TabsTrigger value="horarios">Laboratorio</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Requisiciones</CardTitle>
                  <ClipboardList className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground">+20% desde el último mes</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Órdenes</CardTitle>
                  <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-xs text-muted-foreground">+5% desde el último mes</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Órdenes Ruta</CardTitle>
                  <Truck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8.5</div>
                  <p className="text-xs text-muted-foreground">+0.3 desde el último semestre</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tasa de Graduación</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">95%</div>
                  <p className="text-xs text-muted-foreground">+2% desde el año pasado</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Rendimiento Estudiantil</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={data}>
                      <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}`}
                      />
                      <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Horario de Hoy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {classSchedule.map((class_) => (
                      <div key={class_.id} className="flex items-center">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>{class_.name[0]}</AvatarFallback>
                        </Avatar>
                        <div  className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">{class_.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {class_.teacher} • {class_.room}
                          </p>
                        </div>
                        <div className="ml-auto font-medium">{class_.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="estudiantes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Listado de Estudiantes</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Grado</TableHead>
                      <TableHead>Promedio</TableHead>
                      <TableHead>Asistencia</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Ana García</TableCell>
                      <TableCell>10°</TableCell>
                      <TableCell>9.2</TableCell>
                      <TableCell>98%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Carlos Rodríguez</TableCell>
                      <TableCell>11°</TableCell>
                      <TableCell>8.7</TableCell>
                      <TableCell>95%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>María López</TableCell>
                      <TableCell>9°</TableCell>
                      <TableCell>9.5</TableCell>
                      <TableCell>100%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="profesores" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Listado de Profesores</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Asignatura</TableHead>
                      <TableHead>Experiencia</TableHead>
                      <TableHead>Evaluación</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Prof. García</TableCell>
                      <TableCell>Matemáticas</TableCell>
                      <TableCell>15 años</TableCell>
                      <TableCell>4.8/5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Prof. Martínez</TableCell>
                      <TableCell>Literatura</TableCell>
                      <TableCell>10 años</TableCell>
                      <TableCell>4.6/5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Prof. Rodríguez</TableCell>
                      <TableCell>Física</TableCell>
                      <TableCell>8 años</TableCell>
                      <TableCell>4.7/5</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cursos" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Listado de Cursos</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre del Curso</TableHead>
                      <TableHead>Profesor</TableHead>
                      <TableHead>Duración</TableHead>
                      <TableHead>Estudiantes Inscritos</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Matemáticas Avanzadas</TableCell>
                      <TableCell>Prof. García</TableCell>
                      <TableCell>1 semestre</TableCell>
                      <TableCell>30</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Literatura Contemporánea</TableCell>
                      <TableCell>Prof. Martínez</TableCell>
                      <TableCell>1 semestre</TableCell>
                      <TableCell>25</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Física Cuántica</TableCell>
                      <TableCell>Prof. Rodríguez</TableCell>
                      <TableCell>1 año</TableCell>
                      <TableCell>20</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="horarios" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Horario General</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Hora</TableHead>
                      <TableHead>Lunes</TableHead>
                      <TableHead>Martes</TableHead>
                      <TableHead>Miércoles</TableHead>
                      <TableHead>Jueves</TableHead>
                      <TableHead>Viernes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>09:00 - 10:30</TableCell>
                      <TableCell>Matemáticas</TableCell>
                      <TableCell>Literatura</TableCell>
                      <TableCell>Física</TableCell>
                      <TableCell>Historia</TableCell>
                      <TableCell>Inglés</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>10:45 - 12:15</TableCell>
                      <TableCell>Literatura</TableCell>
                      <TableCell>Física</TableCell>
                      <TableCell>Historia</TableCell>
                      <TableCell>Inglés</TableCell>
                      <TableCell>Matemáticas</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>13:00 - 14:30</TableCell>
                      <TableCell>Física</TableCell>
                      <TableCell>Historia</TableCell>
                      <TableCell>Inglés</TableCell>
                      <TableCell>Matemáticas</TableCell>
                      <TableCell>Literatura</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}