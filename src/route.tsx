import React from 'react'
import { createRootRoute, createRoute, createRouter, redirect } from '@tanstack/react-router'
import { Layout } from '@/components/Layout/Layout'
import { Login } from '@/pages/login'
import { Dashboard } from './pages/dashboard'
import { useAuth } from './lib/auth'

const rootRoute = createRootRoute({
  component: Layout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Dashboard,
  beforeLoad: () => {
    const { user } = useAuth.getState()
    if (!user) {
      throw redirect({
        to: '/login',
      })
    }
  },
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
})

const routeTree = rootRoute.addChildren([indexRoute, loginRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}