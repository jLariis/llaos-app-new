import { create } from 'zustand'

interface User {
  id: number
  username: string
  email: string
  password: string
  name: string
}

const users: User[] = [
  { id: 1, username: 'admin', password: 'admin123', email: 'javier.rappaz@gmail.com', name: 'Administrator' },
  { id: 2, username: 'user', password: 'user123', email: 'guest@example.com', name: 'Regular User' },
]

interface AuthState {
  user: User | null
  login: (username: string, password: string) => boolean
  logout: () => void
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  login: (username, password) => {
    const user = users.find(u => u.username === username && u.password === password)
    if (user) {
      set({ user })
      return true
    }
    return false
  },
  logout: () => set({ user: null }),
}))