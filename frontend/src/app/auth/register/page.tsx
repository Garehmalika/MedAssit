import React from 'react';
import { RegisterForm } from '../../.././components/auth/RegisterForm';
import { Stethoscope } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* En-tête */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Stethoscope className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            MedScript AI
          </h1>
          <p className="text-gray-600 text-lg">
            L'assistant IA qui révolutionne votre pratique médicale
          </p>
        </div>

        {/* Carte de formulaire */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Créez votre compte
            </h2>
            <p className="text-gray-600">
              Rejoignez des centaines de médecins qui gagnent du temps chaque jour
            </p>
          </div>

          {/* Formulaire */}
          <RegisterForm />
        </div>

        {/* Avantages */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white/50 backdrop-blur p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-1">10x</div>
            <div className="text-sm text-gray-700">Plus rapide</div>
          </div>
          <div className="bg-white/50 backdrop-blur p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
            <div className="text-sm text-gray-700">Précision IA</div>
          </div>
          <div className="bg-white/50 backdrop-blur p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
            <div className="text-sm text-gray-700">Disponible</div>
          </div>
        </div>
      </div>
    </div>
  );
}
