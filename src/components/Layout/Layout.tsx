import React from 'react'
import { Outlet, useNavigate } from '@tanstack/react-router'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { useAuth } from '@/lib/auth'

export function Layout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!user) {
      navigate({ to: '/login' })
    }
  }, [user, navigate])

  if (!user) {
    return <Outlet />
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar user={user} onLogout={() => {
        logout()
        navigate({ to: '/login' })
      }} />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}