import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Clock, Phone, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Bonjour, je souhaiterais prendre un rendez-vous au Cabinet Médicos AR. Pouvez-vous m'aider ?");
    window.open(`https://wa.me/221766657278?text=${message}`, '_blank');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const slides = [
    {
      title: "Soins Médicaux de Qualité",
      description: "Des professionnels de santé dévoués à votre bien-être",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Urgences 7j/7",
      description: "Service d'urgence disponible même le weekend",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      title: "Médecine Moderne",
      description: "Équipements modernes et techniques avancées",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay sombre pour améliorer la lisibilité */}
      
      <div className="absolute inset-0 bg-slate-900/70"></div>
      
      {/* Slider Principal avec images médicales */}
      <div className="absolute inset-0 overflow-hidden">
        
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide
                ? 'translate-x-0'
                : index < currentSlide
                ? '-translate-x-full'
                : 'translate-x-full'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
            </div>
          </div>
        ))}
      </div>
      
      

      {/* Effet de particules flottantes */}
      <div className="absolute inset-0 particles-container">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 8 + 6}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge de confiance */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 mb-8">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold">Cabinet Médical de Référence</span>
          </div>

          {/* Contenu Principal avec Slider */}
          <div className="relative h-80 mb-10">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  {slide.title}
                </h1>
                
                <p className="text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
              </div>
            ))}
            
            {/* Navigation Slider */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125 w-4'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              size="lg"
            >
              <MessageCircle className="w-5 h-5" />
              Prendre Rendez-vous
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              size="lg"
            >
              <Phone className="w-5 h-5" />
              Nous Appeler
            </Button>
          </div>

          {/* Quick Info Cards - Version simplifiée */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-500/30 rounded-lg mb-3 mx-auto">
                <MapPin className="w-5 h-5 text-blue-300" />
              </div>
              <h3 className="font-semibold text-sm mb-1">Localisation</h3>
              <p className="text-white text-xs font-medium">Yeumbeul, Dakar</p>
              <p className="text-white/80 text-xs">Près de la Police de Yeumbeul</p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-center w-10 h-10 bg-amber-500/30 rounded-lg mb-3 mx-auto">
                <Clock className="w-5 h-5 text-amber-300" />
              </div>
              <h3 className="font-semibold text-sm mb-1">Horaires</h3>
              <p className="text-white text-xs font-medium">Lun-Sam: 8h-18h</p>
              <p className="text-white/80 text-xs">Dimanche: Urgences seulement</p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-center w-10 h-10 bg-green-500/30 rounded-lg mb-3 mx-auto">
                <MessageCircle className="w-5 h-5 text-green-300" />
              </div>
              <h3 className="font-semibold text-sm mb-1">WhatsApp</h3>
              <p className="text-white text-xs font-medium">Réponse rapide</p>
              <p className="text-white/80 text-xs">7j/7 de 8h à 20h</p>
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
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-15px) rotate(5deg); opacity: 1; }
        }
        .particles-container div {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;