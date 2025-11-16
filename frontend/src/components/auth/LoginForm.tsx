"use client";
// ...existing code...
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await login(email.trim(), password, remember);
    } catch (err: any) {
      setError(err?.message || "Erreur lors de la connexion");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-md w-full mx-auto p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-gray-200">
      <h2 className="text-3xl font-extrabold mb-2 text-gray-800">Se connecter</h2>
      <p className="text-sm text-gray-500 mb-6">Entrez vos identifiants pour accéder à MedScript AI.</p>

      {error && (
        <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-100 p-3 rounded">
          {error}
        </div>
      )}

      <label className="block mb-4">
        <span className="text-sm text-gray-700">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm bg-white input-focus"
          placeholder="votre@mail.com"
        />
      </label>

      <label className="block mb-2">
        <span className="text-sm text-gray-700">Mot de passe</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm bg-white input-focus"
          placeholder="••••••••"
        />
      </label>

      <div className="flex items-center justify-between mb-6">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300"
          />
          Se souvenir de moi
        </label>
        <a href="#" className="text-sm text-primary-600 hover:underline">Mot de passe oublié ?</a>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition disabled:opacity-50"
      >
        {submitting ? "Connexion..." : "Se connecter"}
      </button>

      <p className="mt-4 text-center text-sm text-gray-500">
        Pas encore de compte ? <a href="#" className="text-primary-600 hover:underline">Inscrivez-vous</a>
      </p>
    </form>
  );
}
// ...existing code...
