import { LayoutDashboard, History, PlayCircle, Star, Settings, DollarSignIcon, WarehouseIcon } from "lucide-react";

export const menuItems = [
    {
      title: 'Administración',
      icon: LayoutDashboard,
      submenu: [
        { title: 'Playground', icon: PlayCircle },
        { title: 'History', icon: History },
        { title: 'Starred', icon: Star },
        { title: 'Settings', icon: Settings },
      ],
    },
    { title: 'Compras', icon: DollarSignIcon },
    { title: 'Inventarios', icon: WarehouseIcon },
  ]