import { Heart, Shield, Activity, Stethoscope, Eye, Baby, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Consultation Générale",
      description: "Examens médicaux complets et diagnostics par nos médecins qualifiés.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiologie",
      description: "Surveillance cardiovasculaire et prise en charge des pathologies cardiaques.",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Pédiatrie",
      description: "Soins spécialisés pour enfants et suivi de la croissance.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Ophtalmologie",
      description: "Examens de la vue et traitement des troubles visuels.",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Urgences",
      description: "Prise en charge rapide des urgences médicales 24h/24.",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Prévention",
      description: "Programmes de prévention et dépistages systématiques.",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent("Bonjour, je souhaiterais prendre un rendez-vous. Quels sont vos créneaux disponibles ?");
    window.open(`https://wa.me/221766657278?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 relative overflow-hidden">
      {/* Éléments d'arrière-plan décoratifs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Services d'Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Soins{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Premium
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de services médicaux de haute qualité, 
            conçus pour répondre aux besoins de toute votre famille.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Fond avec dégradé */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative flex flex-col items-center text-center space-y-6">
                {/* Icône */}
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                {/* Titre */}
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Lien CTA */}
                <button 
                  onClick={openWhatsApp}
                  className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
                >
                  Prendre RDV
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action moderne */}
        <div className={`mt-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
                <Calendar className="w-6 h-6" />
                <span className="font-semibold">Disponible 7j/7</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à Commencer Votre Parcours Santé ?
              </h3>
              
              <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Réservez votre consultation en quelques clics et bénéficiez de soins 
                médicaux d'excellence dans un environnement moderne et accueillant.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={openWhatsApp}
                  className="group relative bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                    </svg>
                  </div>
                  Via WhatsApp
                  <div className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
                
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Nous Appeler
                </button>
              </div>
              
              <p className="text-blue-300/80 text-sm mt-8">
                Réponse garantie sous 1 heure • Service client disponible 7j/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;