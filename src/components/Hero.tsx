import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Clock, Phone } from "lucide-react";

const Hero = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Bonjour, je souhaiterais prendre un rendez-vous au Cabinet Médicos AR. Pouvez-vous m'aider ?");
    window.open(`https://wa.me/221775234567?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-accent/20 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-primary-light/10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-accent-light/15 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Cabinet Médical
            <span className="block text-accent-light">Médicos AR</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed mobile-optimized">
            Votre santé, notre priorité. Prenez rendez-vous facilement via WhatsApp 
            pour un service médical de qualité à Yeumbeul.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              onClick={openWhatsApp}
              className="whatsapp-button text-lg px-8 py-4 h-auto"
            >
              <MessageCircle className="w-6 h-6" />
              Prendre Rendez-vous
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 h-auto text-lg"
            >
              <Phone className="w-5 h-5" />
              Nous Contacter
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-accent-light mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Localisation</h3>
              <p className="text-blue-100 text-sm">Yeumbeul, Dakar</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-8 h-8 text-accent-light mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Horaires</h3>
              <p className="text-blue-100 text-sm">Lun-Sam: 8h-18h</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MessageCircle className="w-8 h-8 text-accent-light mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-blue-100 text-sm">Réponse rapide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-background">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;