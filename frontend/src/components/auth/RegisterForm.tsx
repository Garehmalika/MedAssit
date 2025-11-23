'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, Phone, Stethoscope, Building2, MapPin, Eye, EyeOff } from 'lucide-react';


import Input from '.././ui/Input';
import Button from '.././ui/Button';
import Alert from '.././ui/Alert';
import { registerSchema } from '../../utils/validationSchemas';
import type { RegisterFormData } from '../.././types/auth';
import { SPECIALTIES, CITIES } from '../.././types/auth';
import authService from '../.././services/authService';

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialty: '',
      inpe: '',
      clinicName: '',
      clinicAddress: '',
      city: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setApiError(null);
      setIsSuccess(false);
      
      await authService.register(data);
      
      setIsSuccess(true);
      
      // Redirection après succès
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    } catch (error: any) {
      console.error('Erreur inscription:', error);
      setApiError(
        error.response?.data?.message || 
        error.message || 
        'Une erreur est survenue lors de l\'inscription'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Alertes */}
      {apiError && (
        <Alert 
          type="error" 
          message={apiError} 
          onClose={() => setApiError(null)} 
        />
      )}
     
      {isSuccess && (
        <Alert 
          type="success" 
          message="Inscription réussie ! Redirection..." 
        />
      )}

      {/* Informations Personnelles */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Informations Personnelles
        </h3>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Prénom"
            type="text"
            placeholder="Mohamed"
            icon={<User className="w-5 h-5" />}
            error={errors.firstName?.message}
            {...register('firstName')}
            required
          />

          <Input
            label="Nom"
            type="text"
            placeholder="Alami"
            icon={<User className="w-5 h-5" />}
            error={errors.lastName?.message}
            {...register('lastName')}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Input
            label="Email"
            type="email"
            placeholder="dr.alami@example.com"
            icon={<Mail className="w-5 h-5" />}
            error={errors.email?.message}
            {...register('email')}
            required
          />

          <Input
            label="Téléphone"
            type="tel"
            placeholder="0612345678"
            icon={<Phone className="w-5 h-5" />}
            error={errors.phone?.message}
            {...register('phone')}
            required
          />
        </div>
      </div>

      {/* Informations Professionnelles */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Informations Professionnelles
        </h3>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Spécialité <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <select
                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${
                  errors.specialty ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register('specialty')}
              >
                <option value="">Sélectionnez une spécialité</option>
                {SPECIALTIES.map((specialty: string) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
            {errors.specialty && (
              <p className="mt-1 text-sm text-red-600">{errors.specialty.message}</p>
            )}
          </div>

          <Input
            label="Numéro INPE"
            type="text"
            placeholder="12345678 (optionnel)"
            icon={<Stethoscope className="w-5 h-5" />}
            error={errors.inpe?.message}
            {...register('inpe')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Input
            label="Nom du Cabinet"
            type="text"
            placeholder="Cabinet Dr. Alami (optionnel)"
            icon={<Building2 className="w-5 h-5" />}
            error={errors.clinicName?.message}
            {...register('clinicName')}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ville <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <select
                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${
                  errors.city ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register('city')}
              >
                <option value="">Sélectionnez une ville</option>
                {CITIES.map((city: string) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Input
            label="Adresse du Cabinet"
            type="text"
            placeholder="123 Rue Mohammed V (optionnel)"
            icon={<MapPin className="w-5 h-5" />}
            error={errors.clinicAddress?.message}
            {...register('clinicAddress')}
          />
        </div>
      </div>

      {/* Mot de Passe */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sécurité</h3>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Input
              label="Mot de passe"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              icon={<Lock className="w-5 h-5" />}
              error={errors.password?.message}
              {...register('password')}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <div className="relative">
            <Input
              label="Confirmer le mot de passe"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="••••••••"
              icon={<Lock className="w-5 h-5" />}
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={showConfirmPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <p className="mt-2 text-xs text-gray-600">
          Minimum 8 caractères, une majuscule, une minuscule et un chiffre.
        </p>
      </div>

      {/* Conditions d'utilisation */}
      <div className="space-y-2">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="acceptTerms"
            className={`mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 ${
              errors.acceptTerms ? 'border-red-500' : ''
            }`}
            {...register('acceptTerms')}
          />
          <label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-700">
            J&apos;accepte les{' '}
            <a 
              href="/terms" 
              target="_blank"
              className="text-blue-600 hover:underline font-medium"
            >
              conditions d&apos;utilisation
            </a>
            {' '}et la{' '}
            <a 
              href="/privacy" 
              target="_blank"
              className="text-blue-600 hover:underline font-medium"
            >
              politique de confidentialité
            </a>
          </label>
        </div>
        {errors.acceptTerms && (
          <p className="text-sm text-red-600 ml-6">{errors.acceptTerms.message}</p>
        )}
      </div>

      {/* Bouton de soumission */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Inscription en cours...' : 'Créer mon compte'}
      </Button>

      {/* Lien connexion */}
      <p className="text-center text-sm text-gray-600">
        Déjà un compte ?{' '}
        <a href="/auth/login" className="text-blue-600 hover:underline font-medium">
          Se connecter
        </a>
      </p>
    </form>
  );
};
