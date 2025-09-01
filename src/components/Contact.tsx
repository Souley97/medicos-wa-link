import { MapPin, Clock, Phone, MessageCircle, Mail, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Bonjour, je souhaiterais prendre un rendez-vous au Cabinet Médicos AR.");
    window.open(`https://wa.me/221775234567?text=${message}`, '_blank');
  };

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/maps?q=Yeumbeul,+Dakar,+Senegal', '_blank');
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "Adresse",
      details: ["Yeumbeul, Dakar", "République du Sénégal"],
      action: openGoogleMaps,
      actionText: "Voir sur la carte"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Horaires d'Ouverture",
      details: [
        "Lundi - Vendredi: 8h00 - 18h00",
        "Samedi: 8h00 - 16h00",
        "Dimanche: Fermé"
      ]
    },
    {
      icon: <Phone className="w-8 h-8 text-accent-dark" />,
      title: "Téléphone",
      details: ["+221 77 523 45 67", "Urgences 24h/24"],
      action: () => window.open('tel:+221775234567'),
      actionText: "Appeler"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#25D366]" />,
      title: "WhatsApp",
      details: ["Prise de rendez-vous rapide", "Réponse sous 2h en moyenne"],
      action: openWhatsApp,
      actionText: "Envoyer un message"
    }
  ];

  const quickMessages = [
    "Je souhaiterais prendre un rendez-vous",
    "J'ai besoin d'une consultation d'urgence",
    "Quels sont vos tarifs de consultation ?",
    "Acceptez-vous les assurances médicales ?"
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Contactez-Nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nous sommes là pour vous accompagner. Prenez rendez-vous facilement 
            via WhatsApp ou contactez-nous directement.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="service-card text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-secondary rounded-full">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <Button
                    onClick={info.action}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    {info.actionText}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Quick Messages */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Prise de Rendez-vous Rapide
            </h3>
            <p className="text-xl text-blue-100">
              Choisissez un message prédéfini ou écrivez le vôtre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {quickMessages.map((message, index) => (
              <button
                key={index}
                onClick={() => {
                  const encodedMessage = encodeURIComponent(message);
                  window.open(`https://wa.me/221775234567?text=${encodedMessage}`, '_blank');
                }}
                className="bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg p-4 text-left transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-accent-light" />
                  <span className="text-white">{message}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={openWhatsApp}
              className="whatsapp-button text-lg px-8 py-4 h-auto"
            >
              <MessageCircle className="w-6 h-6" />
              Commencer une Conversation
            </Button>
          </div>
        </div>

        {/* Map and Emergency Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Notre Localisation
            </h3>
            <div className="bg-secondary rounded-xl h-64 flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Carte interactive disponible
                </p>
              </div>
            </div>
            <Button 
              onClick={openGoogleMaps}
              className="w-full"
              variant="outline"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Ouvrir dans Google Maps
            </Button>
          </div>

          {/* Emergency Contact */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Contact d'Urgence
            </h3>
            <div className="space-y-6">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <h4 className="font-semibold text-destructive mb-2">
                  Urgences Médicales
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Pour les urgences vitales, contactez immédiatement les services d'urgence.
                </p>
                <Button 
                  onClick={() => window.open('tel:+221775234567')}
                  variant="destructive"
                  className="w-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler Urgences
                </Button>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <h4 className="font-semibold text-accent-dark mb-2">
                  Rendez-vous Non-Urgents
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Pour les consultations programmées et les questions générales.
                </p>
                <Button 
                  onClick={openWhatsApp}
                  className="whatsapp-button w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;