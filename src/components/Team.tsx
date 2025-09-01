import { GraduationCap, Award, Users } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Dr. Sarr",
      specialty: "Médecin Généraliste",
      experience: "15 ans d'expérience",
      description: "Spécialisé dans la médecine familiale et la prise en charge globale du patient.",
      image: "/placeholder-doctor-1.jpg"
    },
    {
      name: "Dr. Fatou Sall",
      specialty: "Pédiatre",
      experience: "12 ans d'expérience",
      description: "Experte en soins pédiatriques et suivi du développement de l'enfant.",
      image: "/placeholder-doctor-2.jpg"
    },
    {
      name: "Dr. Moussa Kane",
      specialty: "Cardiologue",
      experience: "18 ans d'expérience",
      description: "Spécialiste des pathologies cardiovasculaires et prévention cardiaque.",
      image: "/placeholder-doctor-3.jpg"
    }
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      number: "5000+",
      label: "Patients Satisfaits"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      number: "15+",
      label: "Années d'Expérience"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-accent-dark" />,
      number: "10+",
      label: "Professionnels Qualifiés"
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Notre Équipe Médicale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une équipe de professionnels de santé dévoués, expérimentés et 
            attachés à fournir des soins de qualité avec une approche humaine.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-secondary/50 rounded-xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-4 bg-background rounded-full mb-4 shadow-soft">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="team-card animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Doctor Image Placeholder */}
              <div className="h-80 bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
              </div>
              
              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold mb-2">
                  {member.specialty}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.experience}
                </p>
                <p className="text-foreground mobile-optimized">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-accent to-accent-light rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Votre Confiance, Notre Engagement
            </h3>
            <p className="text-xl mb-6 text-green-100 max-w-2xl mx-auto">
              Chaque membre de notre équipe s'engage à vous offrir des soins personnalisés 
              dans le respect de vos besoins et de votre dignité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const message = encodeURIComponent("Bonjour, j'aimerais en savoir plus sur votre équipe médicale.");
                  window.open(`https://wa.me/221766657278?text=${message}`, '_blank');
                }}
                className="whatsapp-button"
              >
                Rencontrer l'Équipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;