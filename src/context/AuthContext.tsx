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

  // State managemnet for login/logout info
  const [email, setEmail] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(() => localStorage.getItem('accessToken'));
  const [username, setUsername] = useState<string | null>(null);

  // When logging in set the accessToken to localStorage to pass Private Routes
  const login = (accessToken: string, email: string, username: string) => {
    setAccessToken(accessToken)
    setEmail(email)
    setUsername(username)
    localStorage.setItem('accessToken', accessToken);
  }

  // When logging out removing the access token from local storage
  const logout = () => {
    setAccessToken(null)
    setEmail(null)
    setUsername(null)
    
    localStorage.removeItem('accessToken');
  }

  // Part of context hook to all quick access to data
  return (
    <AuthContext.Provider value={{ accessToken, email, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook that allows the use of the data from the provider
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
