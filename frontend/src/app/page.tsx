// ==========================================
// 📄 File: src/app/page.tsx - DESIGN AMÉLIORÉ
// ==========================================
'use client';
import React, { useState, useEffect } from 'react';
import "./globals.css";

import { useRouter } from 'next/navigation';
import { 
  Stethoscope, 
  FileText, 
  Mic, 
  Brain, 
  Clock, 
  Shield, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  Menu,
  X,
  Play,
  Globe,
  BarChart3,
  Lock,
  HeartPulse,
  Pill,
  ChevronRight,
  Crown,
  BadgeCheck,
  Rocket,
  Target,
  Lightbulb,
  Smartphone,
  Laptop
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function HomePage() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(testimonialInterval);
    };
  }, []);

  const features = [
    {
      icon: <Mic className="w-12 h-12" />,
      title: 'Dictée Vocale IA',
      description: 'Transcription en temps réel avec précision médicale. Compatible avec le dialecte marocain.',
      gradient: 'from-blue-500 to-cyan-500',
      highlights: ['99% de précision', 'Temps réel', 'Dialecte marocain']
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Ordonnances Intelligentes',
      description: 'GPT-4 génère des prescriptions conformes au Maroc avec vérification des interactions.',
      gradient: 'from-purple-500 to-pink-500',
      highlights: ['Conforme Maroc', 'Vérification interactions', 'GPT-4 avancé']
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Documents Automatiques',
      description: 'Certificats, comptes-rendus et attestations générés en un clic.',
      gradient: 'from-green-500 to-emerald-500',
      highlights: ['Templates personnalisés', 'Génération instantanée', 'Formats multiples']
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Analytiques Avancées',
      description: 'Tableaux de bord et statistiques pour optimiser votre pratique.',
      gradient: 'from-orange-500 to-red-500',
      highlights: ['Dashboard temps réel', 'Indicateurs clés', 'Rapports automatiques']
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: 'Sécurité Maximale',
      description: 'Chiffrement bout-en-bout, conformité RGPD et hébergement sécurisé.',
      gradient: 'from-red-500 to-rose-500',
      highlights: ['Chiffrement AES-256', 'RGPD compliant', 'Hébergement Maroc']
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Dossiers Patients',
      description: 'Historique complet, alertes allergies, suivi traitement.',
      gradient: 'from-indigo-500 to-blue-500',
      highlights: ['Historique complet', 'Alertes intelligentes', 'Suivi continu']
    },
  ];

  const stats = [
    { value: '2,500+', label: 'Médecins actifs', icon: <Users className="w-6 h-6" />, change: '+25% ce mois' },
    { value: '50K+', label: 'Consultations/mois', icon: <HeartPulse className="w-6 h-6" />, change: '+40% vs dernier mois' },
    { value: '75%', label: 'Temps économisé', icon: <Clock className="w-6 h-6" />, change: 'en moyenne par médecin' },
    { value: '4.9/5', label: 'Satisfaction', icon: <Star className="w-6 h-6" />, change: 'sur 500+ avis' },
  ];

  const process = [
    {
      step: '01',
      title: 'Dictez votre consultation',
      description: 'Parlez naturellement pendant l\'examen du patient',
      icon: <Mic className="w-10 h-10" />,
      duration: '30 secondes'
    },
    {
      step: '02',
      title: 'L\'IA transcrit et structure',
      description: 'Transcription instantanée avec détection des symptômes',
      icon: <Brain className="w-10 h-10" />,
      duration: 'Instantané'
    },
    {
      step: '03',
      title: 'Générez l\'ordonnance',
      description: 'Un clic pour créer une prescription professionnelle',
      icon: <Pill className="w-10 h-10" />,
      duration: '5 secondes'
    },
    {
      step: '04',
      title: 'Imprimez ou envoyez',
      description: 'PDF sécurisé ou envoi direct par email/SMS',
      icon: <FileText className="w-10 h-10" />,
      duration: '10 secondes'
    },
  ];

  const pricing = [
    {
      name: 'Essai Gratuit',
      price: '0',
      period: '30 jours gratuits',
      description: 'Parfait pour découvrir',
      features: [
        'Consultations illimitées',
        'Ordonnances illimitées',
        'Dictée vocale IA',
        'Support email',
        'Certificats médicaux',
        'Stockage 1GB',
      ],
      cta: 'Commencer l\'essai',
      popular: false,
      highlight: false,
      badge: null
    },
    {
      name: 'Professionnel',
      price: '299',
      period: 'par mois',
      description: 'Le choix des experts',
      features: [
        'Tout du plan Essai +',
        'GPT-4 avancé',
        'Analytiques détaillées',
        'Support prioritaire 24/7',
        'Templates personnalisés',
        'API et intégrations',
        'Formation personnalisée',
        'Stockage 10GB',
      ],
      cta: 'Essayer gratuitement',
      popular: true,
      highlight: true,
      badge: '⭐ Le plus populaire'
    },
    {
      name: 'Clinique',
      price: 'Sur mesure',
      period: 'à partir de 899 MAD/mois',
      description: 'Pour les établissements',
      features: [
        'Tout du plan Pro +',
        'Multi-praticiens (5+)',
        'Gestion multi-sites',
        'Gestionnaire dédié',
        'SLA personnalisé',
        'Développements sur mesure',
        'Formation équipe',
        'Stockage illimité',
      ],
      cta: 'Demander une démo',
      popular: false,
      highlight: false,
      badge: '🏥 Pour cliniques'
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Fatima El Alami',
      specialty: 'Cardiologue',
      city: 'Casablanca',
      image: '👩‍⚕️',
      rating: 5,
      comment: 'MedScript AI a littéralement transformé ma pratique. Je consacre maintenant 2h de plus par jour à mes patients plutôt qu\'à l\'administratif. L\'IA comprend parfaitement le contexte médical marocain.',
      verified: true,
      practice: '15 ans d\'expérience'
    },
    {
      name: 'Dr. Mehdi Benkirane',
      specialty: 'Médecin Généraliste',
      city: 'Rabat',
      image: '👨‍⚕️',
      rating: 5,
      comment: 'La dictée vocale est d\'une précision impressionnante, même avec mon accent. Plus besoin de taper pendant les consultations. Mes patients apprécient que je sois plus présent.',
      verified: true,
      practice: '20 patients/jour'
    },
    {
      name: 'Dr. Leila Tahiri',
      specialty: 'Pédiatre',
      city: 'Marrakech',
      image: '👩‍⚕️',
      rating: 5,
      comment: 'Les ordonnances générées sont d\'une qualité exceptionnelle. Le système vérifie même les interactions médicamenteuses. Je me sens plus en sécurité dans mes prescriptions.',
      verified: true,
      practice: 'Spécialiste enfants'
    },
  ];

  const platforms = [
    { icon: <Laptop className="w-8 h-8" />, name: 'Web', description: 'Accessible sur tous les navigateurs' },
    { icon: <Smartphone className="w-8 h-8" />, name: 'Mobile', description: 'Application iOS et Android' },
    { icon: <Globe className="w-8 h-8" />, name: 'Cloud', description: 'Synchronisation en temps réel' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Enhanced Header/Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-2' : 'bg-transparent py-4'
      }`}>
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => router.push('/')}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MedScript AI
                </span>
                <span className="text-xs text-gray-500 -mt-1">by Moroccan Tech</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              {['Fonctionnalités', 'Comment ça marche', 'Tarifs', 'Témoignages'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => router.push('/auth/login')}
                className="hidden md:flex border-2 border-transparent hover:border-blue-200 hover:bg-blue-50 transition-all"
              >
                Connexion
              </Button>
              <Button
                variant="primary"
                onClick={() => router.push('/auth/register')}
                rightIcon={<Rocket className="w-4 h-4" />}
                className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Essai gratuit
              </Button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-300 transition-all"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 py-6 space-y-4 border-t border-gray-200 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl">
              {['Fonctionnalités', 'Comment ça marche', 'Tarifs', 'Témoignages'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-2xl hover:bg-blue-50 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button
                  variant="ghost"
                  onClick={() => { router.push('/auth/login'); setMobileMenuOpen(false); }}
                  className="w-full justify-center"
                >
                  Connexion
                </Button>
                <Button
                  variant="primary"
                  onClick={() => { router.push('/auth/register'); setMobileMenuOpen(false); }}
                  className="w-full justify-center bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  Essai gratuit
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-float animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left">
                <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-blue-100 px-6 py-3 rounded-2xl mb-8 animate-fade-in shadow-lg">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Propulsé par GPT-4 • Made in Morocco 🇲🇦
                  </span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Votre assistant
                  <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    médical IA
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                  Dictez vos consultations, générez des ordonnances instantanément et retrouvez 
                  <span className="font-semibold text-blue-600"> 2 heures par jour</span> pour vos patients.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => router.push('/auth/register')}
                    rightIcon={<Rocket className="w-5 h-5" />}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                  >
                    Démarrer gratuitement
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    leftIcon={<Play className="w-5 h-5" />}
                    className="border-2 hover:bg-gray-50 hover:border-blue-300 group"
                  >
                    <span>Voir la démo</span>
                    <div className="w-2 h-2 bg-blue-600 rounded-full ml-2 group-hover:scale-150 transition-transform"></div>
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center gap-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Données sécurisées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Conforme RGPD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-yellow-500" />
                    <span>2,500+ médecins</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Stats Card */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center group hover:scale-105 transition-transform">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-transparent hover:border-blue-200 transition-all">
                          <div className="flex items-center justify-center mb-3">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl text-white">
                              {stat.icon}
                            </div>
                          </div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                          <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA inside card */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                    <p className="text-sm text-gray-700 mb-3 text-center">
                      <span className="font-semibold">Rejoignez la révolution médicale</span>
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => router.push('/auth/register')}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Commencer maintenant
                    </Button>
                  </div>
                </div>

                {/* Floating elements around card */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </section>

      {/* Enhanced Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Disponible sur toutes les plateformes
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    {platform.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h4>
                  <p className="text-gray-600">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How it works */}
      <section id="comment-ca-marche" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-4">
              <Target className="w-4 h-4" />
              <span className="text-sm font-semibold">Processus simplifié</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Révolutionnez votre pratique en
            </h2>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              4 étapes simples
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 h-full border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl">
                  {/* Step number with gradient */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {item.step}
                  </div>
                  
                  <div className="pt-8">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white mx-auto group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                    <p className="text-gray-600 text-center mb-4">{item.description}</p>
                    <div className="text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                        <Clock className="w-3 h-3 mr-1" />
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Connector lines */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full"></div>
                    <ChevronRight className="w-6 h-6 text-blue-400 absolute -right-3 -top-2.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="fonctionnalites" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full mb-4">
              <Lightbulb className="w-4 h-4" />
              <span className="text-sm font-semibold">Fonctionnalités avancées</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Une suite complète pour
            </h2>
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              la médecine moderne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 mx-auto shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center mb-6">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials with Carousel */}
      <section id="temoignages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              <span className="text-sm font-semibold">Ils nous font confiance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Des médecins conquis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rejoignez les 2,500+ professionnels de santé qui révolutionnent leur pratique
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-blue-200">
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-2xl text-gray-700 italic leading-relaxed">
                  "{testimonials[activeTestimonial].comment}"
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl mr-4">{testimonials[activeTestimonial].image}</span>
                  <div>
                    <div className="flex items-center justify-center">
                      <h4 className="font-bold text-gray-900 text-xl">{testimonials[activeTestimonial].name}</h4>
                      {testimonials[activeTestimonial].verified && (
                        <BadgeCheck className="w-5 h-5 text-blue-600 ml-2" />
                      )}
                    </div>
                    <p className="text-gray-600">{testimonials[activeTestimonial].specialty}</p>
                    <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].city}</p>
                    <p className="text-blue-600 text-sm font-medium">{testimonials[activeTestimonial].practice}</p>
                  </div>
                </div>

                {/* Testimonial indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeTestimonial 
                          ? 'bg-blue-600 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="tarifs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full mb-4">
              <Crown className="w-4 h-4" />
              <span className="text-sm font-semibold">Tarifs transparents</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choisissez votre formule
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essayez gratuitement pendant 30 jours, sans engagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-500 hover:scale-105 ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl transform scale-105'
                    : 'bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={`px-6 py-2 rounded-full text-sm font-bold shadow-lg ${
                      plan.highlight 
                        ? 'bg-white text-blue-600' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-3xl font-bold mb-3 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.highlight ? 'text-blue-100' : 'text-gray-600'} mb-6`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center mb-2">
                    {plan.price !== 'Sur mesure' ? (
                      <>
                        <span className={`text-6xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                          {plan.price}
                        </span>
                        <span className={`text-2xl ml-2 ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                          MAD
                        </span>
                      </>
                    ) : (
                      <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price}
                      </span>
                    )}
                  </div>
                  <p className={`text-lg ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className={`w-6 h-6 ${plan.highlight ? 'text-green-300' : 'text-green-600'} mr-3 flex-shrink-0 mt-0.5`} />
                      <span className={`${plan.highlight ? 'text-white' : 'text-gray-700'} text-left`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlight ? 'secondary' : 'primary'}
                  size="lg"
                  className={`w-full font-semibold ${
                    plan.highlight 
                      ? 'bg-white text-blue-600 hover:bg-gray-100 shadow-2xl' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-xl'
                  } transform hover:scale-105 transition-all`}
                  onClick={() => router.push('/auth/register')}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              🎉 <span className="font-semibold text-blue-600">Offre spéciale :</span> 2 mois offerts pour toute souscription annuelle
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Aucune carte bancaire requise • Annulation à tout moment • Support 7j/7
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Prêt à révolutionner
              <span className="block">votre pratique ?</span>
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Rejoignez plus de 2,500 médecins marocains qui ont déjà adopté l'IA médicale et gagnent 2 heures par jour.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => router.push('/auth/register')}
                rightIcon={<Rocket className="w-5 h-5" />}
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all font-semibold"
              >
                Commencer gratuitement
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold"
              >
                <Play className="w-5 h-5 mr-2" />
                Voir la démo
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-white/80 text-sm">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Sans carte bancaire</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Support en français</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-white rounded-full animate-float animation-delay-2000"></div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">MedScript AI</span>
                  <span className="text-xs text-gray-400">L'avenir de la médecine</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                La solution IA complète pour moderniser votre pratique médicale au Maroc. 
                Gagnez du temps, améliorez vos soins, révolutionnez votre métier.
              </p>
              <div className="flex space-x-4">
                {['Globe', 'Twitter', 'Linkedin', 'Instagram'].map((icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {['Produit', 'Entreprise', 'Légal', 'Support'].map((category, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white mb-4 text-lg">{category}</h4>
                <ul className="space-y-3 text-sm">
                  {Array.from({ length: 4 }).map((_, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="hover:text-white transition-colors duration-300 hover:pl-2 block">
                        Lien {linkIndex + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2024 MedScript AI. Tous droits réservés. Fait avec ❤️ au Maroc 🇲🇦
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-400" />
                  <span>Données sécurisées</span>
                </span>
                <span className="flex items-center">
                  <Lock className="w-4 h-4 mr-2 text-blue-400" />
                  <span>Conformité RGPD</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  );
}
