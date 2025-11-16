// frontend/src/app/auth/login/page.tsx
import React from "react";
//import LoginForm from "/components/auth/LoginForm";

import LoginForm from "../../../components/auth/LoginForm";

export const metadata = {
  title: "Connexion - MedScript AI",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl">
        <div className="mb-6 text-center">
          <img src="/logo.png" alt="MedScript AI" className="mx-auto w-28 h-28 object-contain" />
          <h1 className="text-2xl font-bold mt-4">MedScript AI</h1>
          <p className="text-sm text-gray-600">Rédigez vos documents médicaux 10x plus vite</p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
