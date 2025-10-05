import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthContextType {
  email: string | null,
  accessToken: string | null,
  username: string | null,
  login: (
    accessToken: string,
    email: string,
    username: string,
  ) => void
  logout: () => void,
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({
  children
}: {
  children: ReactNode
}) => {

  const [email, setEmail] = useState<string | null>(() => localStorage.getItem('email'));
  const [accessToken, setAccessToken] = useState<string | null>(() => localStorage.getItem('accessToken'));
  const [username, setUsername] = useState<string | null>(() => localStorage.getItem('username'));

  const login = (accessToken: string, email: string, username: string) => {
    setAccessToken(accessToken)
    setEmail(email)
    setUsername(username)
    localStorage.setItem('accessToken', accessToken);
  }

  const logout = () => {
    setAccessToken(null)
    setEmail(null)
    setUsername(null)
    
    localStorage.removeItem('accessToken');
  }

  return (
    <AuthContext.Provider value={{ accessToken, email, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
