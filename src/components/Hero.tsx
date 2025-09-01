import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Clock, Phone, Star, Heart } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Bonjour, je souhaiterais prendre un rendez-vous au Cabinet Médicos AR. Pouvez-vous m'aider ?");
    window.open(`https://wa.me/221766657278?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background avec effet de particules */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900"></div>
      
      {/* Effet de particules flottantes */}
      <div className="absolute inset-0 particles-container">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(6px)'
            }}
          ></div>
        ))}
      </div>

      {/* Éléments décoratifs flottants */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-yellow-400/10 animate-float-slow blur-md"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-blue-400/10 animate-pulse-slow blur-lg"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-orange-400/15 animate-float" style={{ animationDelay: '1.5s', filter: 'blur(8px)' }}></div>
      <div className="absolute top-2/4 left-1/4 w-24 h-24 rounded-full bg-green-400/10 animate-float-slow" style={{ animationDelay: '2s', filter: 'blur(12px)' }}></div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge de confiance */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 mt-14 animate-pulse">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">Cabinet de confiance à Yeumbeul</span>
          </div>

          {/* Main Heading avec effet de dégradé */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Cabinet Médical
            </span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-400">
              Médicos AR
            </span>
          </h1>
          
          {/* Subtitle avec animation */}
          <p className="text-xl lg:text-2xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed font-light">
            Votre santé, notre priorité. Prenez rendez-vous facilement via WhatsApp 
            pour un service médical de qualité à Yeumbeul.
          </p>

          {/* CTA Buttons avec effets hover améliorés */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-6">
            <Button 
              onClick={openWhatsApp}
              className="whatsapp-button text-lg px-8 py-4 h-auto rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-400/20"
              size="lg"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Prendre Rendez-vous
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-8 py-4 h-auto text-lg rounded-2xl transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Nous Appeler
            </Button>
          </div>

          {/* Quick Info Cards avec effet de verre amélioré */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                <MapPin className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Localisation</h3>
              <p className="text-white text-sm">Yeumbeul, Dakar</p>
              <p className="text-white text-xs mt-1">Près de la Police de Yeumbeul</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/20 rounded-lg mb-4">
                <Clock className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Horaires</h3>
              <p className="text-white text-sm">Lun-Sam: 8h-18h</p>
              <p className="text-white text-xs mt-1">Dimanche: Urgences seulement</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
                <MessageCircle className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-white text-sm">Réponse rapide</p>
              <p className="text-white text-xs mt-1">7j/7 de 8h à 20h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave amélioré */}
    {/* Bottom Wave */}
    <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-background">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Styles d'animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .particles-container {
          pointer-events: none;
        }
        .whatsapp-button {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          border: none;
        }
        .whatsapp-button:hover {
          background: linear-gradient(135deg, #22C35E 0%, #0D7E6E 100%);
          box-shadow: 0 10px 25px -5px rgba(37, 211, 102, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Hero;