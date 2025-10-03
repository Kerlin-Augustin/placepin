import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthContextType {
  email: string | null
  accessToken: string | null
  username: string | null,
  login: (
    email: string,
    accessToken: string,
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


  const login = (email: string, accessToken: string, username: string) => {
    setEmail(email)
    setAccessToken(accessToken)
    setUsername(username)

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
  }

  const logout = () => {
    setEmail(null)
    setAccessToken(null)
    setUsername(null)

    localStorage.removeItem('email');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
  }

  return (
    <AuthContext.Provider value={{ email, accessToken, username, login, logout }}>
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
