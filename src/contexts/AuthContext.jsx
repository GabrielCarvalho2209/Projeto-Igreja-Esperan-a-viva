import { createContext, useContext, useMemo, useState } from "react";
import { loginRequest } from "../services/authService";

const AuthContext = createContext(null);
const AUTH_KEY = "church_auth";

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem(AUTH_KEY);
    return storedAuth ? JSON.parse(storedAuth) : null;
  });

  async function login(credentials) {
    const data = await loginRequest(credentials);
    localStorage.setItem(AUTH_KEY, JSON.stringify(data));
    setAuth(data);
  }

  function logout() {
    localStorage.removeItem(AUTH_KEY);
    setAuth(null);
  }

  const value = useMemo(
    () => ({
      user: auth?.user || null,
      token: auth?.token || null,
      isAuthenticated: Boolean(auth?.user),
      login,
      logout,
    }),
    [auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
