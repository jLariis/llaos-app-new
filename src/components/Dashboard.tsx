import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { GraduationCap, Truck, ClipboardList, CircleDollarSign } from 'lucide-react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Ene", total: 1200 },
  { name: "Feb", total: 1100 },
  { name: "Mar", total: 1300 },
  { name: "Abr", total: 1400 },
  { name: "May", total: 1350 },
  { name: "Jun", total: 1500 },
]

const classSchedule = [
  { id: 1, name: "Banamichi", teacher: "Chofer 1", time: "09:00 - 10:30", room: "Tacoma Gris" },
  { id: 2, name: "Llaos - Lobos", teacher: "Chofer 2", time: "10:45 - 12:15", room: "Tonelada 1" },
  { id: 3, name: "Granja 2", teacher: "Chofer 3", time: "13:00 - 14:30", room: "Trailer 1" },
  /*{ id: 4, name: "Historia", teacher: "Prof. López", time: "14:45 - 16:15", room: "A205" },
  { id: 5, name: "Inglés", teacher: "Prof. Smith", time: "16:30 - 18:00", room: "B101" },*/
]

export default function Dashboard() {
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="">
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
                  <CardTitle>Rendimiento</CardTitle>
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
                  <CardTitle>Rutas Programadas Hoy</CardTitle>
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
      </main>
    </div>
  )
}