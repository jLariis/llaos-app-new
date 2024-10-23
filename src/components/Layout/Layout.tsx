import React from 'react'
import { CustomSidebar } from '@/components/Sidebar/Sidebar'
import { MainContent } from '@/components/MainContent/MainContent'

export default function Layout() {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="flex h-screen">
      <CustomSidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <MainContent sidebarCollapsed={sidebarCollapsed} />
    </div>
  )
}