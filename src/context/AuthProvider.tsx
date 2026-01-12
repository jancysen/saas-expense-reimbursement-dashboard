import type { ReactNode } from "react";
import { AuthContext, type Role } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const role: Role = "ADMIN"; // change to FINANCE / EMPLOYEE to test

  return (
    <AuthContext.Provider value={{ role }}>
      {children}
    </AuthContext.Provider>
  );
}
