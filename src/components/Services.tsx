import { Heart, Shield, Activity, Stethoscope, Eye, Baby } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-12 h-12 text-primary" />,
      title: "Consultation Générale",
      description: "Examens médicaux complets, diagnostics et suivi de votre état de santé général par nos médecins qualifiés."
    },
    {
      icon: <Heart className="w-12 h-12 text-accent" />,
      title: "Cardiologie",
      description: "Surveillance cardiovasculaire, électrocardiogrammes et prise en charge des pathologies cardiaques."
    },
    {
      icon: <Baby className="w-12 h-12 text-primary-light" />,
      title: "Pédiatrie",
      description: "Soins spécialisés pour enfants, vaccinations et suivi de la croissance jusqu'à l'adolescence."
    },
    {
      icon: <Eye className="w-12 h-12 text-accent-dark" />,
      title: "Ophtalmologie",
      description: "Examens de la vue, dépistage et traitement des troubles visuels pour tous les âges."
    },
    {
      icon: <Activity className="w-12 h-12 text-primary" />,
      title: "Urgences",
      description: "Prise en charge rapide des urgences médicales avec équipe disponible et équipements modernes."
    },
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: "Prévention",
      description: "Programmes de prévention, dépistages systématiques et conseils pour maintenir votre santé."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nos Services Médicaux
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de soins médicaux de qualité, adaptés aux besoins 
            de toute la famille dans un environnement moderne et bienveillant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-secondary rounded-full group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mobile-optimized">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Besoin d'un Rendez-vous ?
            </h3>
            <p className="text-xl mb-6 text-blue-100">
              Contactez-nous via WhatsApp pour une prise de rendez-vous rapide et simple.
            </p>
            <button 
              onClick={() => {
                const message = encodeURIComponent("Bonjour, je souhaiterais prendre un rendez-vous. Quels sont vos créneaux disponibles ?");
                window.open(`https://wa.me/221775234567?text=${message}`, '_blank');
              }}
              className="whatsapp-button text-lg"
            >
              Prendre Rendez-vous Maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;