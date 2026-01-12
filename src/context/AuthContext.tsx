import { createContext } from "react";

export type Role = "ADMIN" | "FINANCE" | "EMPLOYEE";

export type AuthContextType = {
  role: Role;
};

export const AuthContext = createContext<AuthContextType | null>(null);
