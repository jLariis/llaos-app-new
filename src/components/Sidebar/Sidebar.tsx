import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  ChevronRight,
  LogOut,
} from 'lucide-react'
import { menuItems } from '@/config/menuItems'
import { company }  from '@/config/company'

interface SidebarProps {
  user: { name: string, email: string }
  onLogout: () => void
}

export function Sidebar({ user, onLogout }: SidebarProps) {
  return (
    <div className="w-64 h-full bg-gray-100 flex flex-col">
      <div className="p-4 flex items-center">
        <div className="w-8 h-8 bg-black rounded-full mr-2"></div>
        <div>
          <h2 className="text-sm font-semibold">{company.name}</h2>
          <p className="text-xs text-gray-600">{company.type}</p>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-start py-2 px-4">
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
                {item.submenu && <ChevronRight className="ml-auto h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            {item.submenu && (
              <CollapsibleContent>
                {item.submenu.map((subItem, subIndex) => (
                  <Button
                    key={subIndex}
                    variant="ghost"
                    className="w-full justify-start py-2 px-8"
                  >
                    <subItem.icon className="mr-2 h-4 w-4" />
                    {subItem.title}
                  </Button>
                ))}
              </CollapsibleContent>
            )}
          </Collapsible>
        ))}
      </nav>
      <div className="p-4 border-t flex items-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
        <div>
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-xs text-gray-600">{user.email}</p>
        </div>
        <Button variant="outline" className="w-full" onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}