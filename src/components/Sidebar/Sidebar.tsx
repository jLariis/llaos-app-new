import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { ChevronDown, ChevronRight, LayoutDashboard, FileText, Settings, PlayCircle, History, Star, ChevronLeft, ChevronLeftSquare, ChevronRightSquare } from 'lucide-react'

const menuItems = [
  {
    title: 'Platform',
    icon: LayoutDashboard,
    submenu: [
      { title: 'Playground', icon: PlayCircle },
      { title: 'History', icon: History },
      { title: 'Starred', icon: Star },
      { title: 'Settings', icon: Settings },
    ],
  },
  { title: 'Models', icon: LayoutDashboard },
  { title: 'Documentation', icon: FileText },
  { title: 'Settings', icon: Settings },
]

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

export function CustomSidebar({ collapsed, toggleSidebar }: SidebarProps) {
  const [openGroups, setOpenGroups] = React.useState<string[]>(['Platform'])

  const toggleGroup = (title: string) => {
    setOpenGroups((prevGroups) =>
      prevGroups.includes(title)
        ? prevGroups.filter((group) => group !== title)
        : [...prevGroups, title]
    )
  }

  return (
    <SidebarProvider>
      <Sidebar className={cn(
        "border-r transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}>
        <SidebarHeader className="relative">
          <div className={cn(
            "flex items-center p-4",
            collapsed && "justify-center"
          )}>
            <div className="w-8 h-8 bg-primary rounded-md mr-2"></div>
            {!collapsed && (
              <div>
                <h2 className="text-lg font-semibold">Acme Inc</h2>
                <p className="text-xs text-muted-foreground">Enterprise</p>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            onClick={toggleSidebar}
          >
            {collapsed ? <ChevronRightSquare /> : <ChevronLeftSquare />}
          </Button>
        </SidebarHeader>
        <SidebarContent>
          {menuItems.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel
                onClick={() => item.submenu && toggleGroup(item.title)}
                className={cn(
                  "cursor-pointer",
                  item.submenu && "flex justify-between items-center",
                  collapsed && "justify-center"
                )}
              >
                <span className="flex items-center">
                  <item.icon className="w-4 h-4 mr-2" />
                  {!collapsed && item.title}
                </span>
                {!collapsed && item.submenu && (
                  openGroups.includes(item.title) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )
                )}
              </SidebarGroupLabel>
              {!collapsed && item.submenu && openGroups.includes(item.title) && (
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.submenu.map((subItem) => (
                      <SidebarMenuItem key={subItem.title}>
                        <SidebarMenuButton asChild>
                          <Button variant="ghost" className="justify-start">
                            <subItem.icon className="w-4 h-4 mr-2" />
                            {subItem.title}
                          </Button>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              )}
            </SidebarGroup>
          ))}
        </SidebarContent>
        <div className={cn(
          "mt-auto p-4 border-t",
          collapsed && "flex justify-center"
        )}>
          <div className={cn(
            "flex items-center",
            collapsed && "flex-col"
          )}>
            <div className="w-8 h-8 bg-muted rounded-full mr-2"></div>
            {!collapsed && (
              <div>
                <p className="text-sm font-medium">shadcn</p>
                <p className="text-xs text-muted-foreground">m@example.com</p>
              </div>
            )}
          </div>
        </div>
      </Sidebar>
    </SidebarProvider>
  )
}