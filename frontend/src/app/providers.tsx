
// frontend/src/app/providers.tsx
"use client";

import React from "react";
//import { AuthProvider } from "@/context/AuthContext";
// filepath: c:\Users\Lenovo\Documents\GitHub\MedAssit\frontend\src\app\providers.tsx
// ...existing code...
import { AuthProvider } from "../context/AuthContext";
// ...existing code...
export function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
