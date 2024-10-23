import React from 'react'
import { cn } from "@/lib/utils"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

interface MainContentProps {
  sidebarCollapsed: boolean;
}

export function MainContent({ sidebarCollapsed }: MainContentProps) {
  return (
    <div className={cn(
      "flex-1 p-6 transition-all duration-300 ease-in-out",
      sidebarCollapsed ? "ml-16" : "ml-64"
    )}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-6">
        <h1 className="text-2xl font-bold">Data Fetching</h1>
        <p className="mt-2">This is where your main content would go.</p>
      </div>
    </div>
  )
}