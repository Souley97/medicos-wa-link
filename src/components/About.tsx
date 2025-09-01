import { Heart, Users, Award, MapPin } from "lucide-react";
import cabinetImage from "@/assets/cabinet-medicos-ar.jpg";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Soins de Qualité",
      description: "Des soins médicaux excellents avec une approche humaine et personnalisée"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Équipe Expérimentée", 
      description: "Professionnels qualifiés avec plus de 15 ans d'expérience combinée"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Médicale",
      description: "Engagement continu vers l'excellence dans tous nos services"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Proximité",
      description: "Au cœur de Yeumbeul, accessible et proche de notre communauté"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            À Propos du Cabinet Médicos AR
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depuis notre implantation à Yeumbeul, nous nous consacrons à offrir des soins 
            de santé de qualité avec une approche humaine et professionnelle.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image du Cabinet */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative overflow-hidden rounded-2xl shadow-strong group">
              <img 
                src={cabinetImage} 
                alt="Cabinet Médicos AR - Façade extérieure"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Cabinet Médicos AR</h3>
                <p className="text-primary-light">Yeumbeul, Dakar - Sénégal</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Notre Mission
              </h3>
              <p className="text-foreground text-lg leading-relaxed">
                Le Cabinet Médicos AR s'engage à fournir des soins médicaux de haute qualité 
                à la communauté de Yeumbeul et ses environs. Notre approche centrée sur le 
                patient garantit une prise en charge personnalisée et humaine.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                Nous combinons l'expertise médicale moderne avec une attention particulière 
                aux besoins individuels de chaque patient, créant un environnement de confiance 
                et de guérison.
              </p>
              
              {/* Stats rapides */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-background rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-accent mb-2">5000+</div>
                  <div className="text-muted-foreground">Patients Traités</div>
                </div>
                <div className="text-center p-4 bg-background rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Années d'Expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Nos Valeurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-background rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up hover:-translate-y-2"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="inline-flex p-4 bg-primary/10 text-primary rounded-full mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Rejoignez Notre Communauté de Patients
            </h3>
            <p className="text-xl mb-6 text-primary-light max-w-2xl mx-auto">
              Découvrez pourquoi des milliers de patients nous font confiance 
              pour leurs soins de santé à Yeumbeul.
            </p>
            <button 
              onClick={() => {
                const message = encodeURIComponent("Bonjour, j'aimerais en savoir plus sur vos services médicaux.");
                window.open(`https://wa.me/221766657278?text=${message}`, '_blank');
              }}
              className="whatsapp-button bg-white text-primary hover:bg-primary-light hover:text-white"
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;