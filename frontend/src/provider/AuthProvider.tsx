"use client";

import { Auth } from "@/types/auth";
import { ReactNode, useState, createContext } from "react";

interface AuthContextType {
  auth: Auth | null;
  setAuth: Function;
}

const defaultAuthContext: AuthContextType = {
  auth: null,
  setAuth: () => {},
};

export const AuthContext = createContext(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState<Auth | null>(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
