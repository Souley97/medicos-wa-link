import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const AnimationSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationType, setAnimationType] = useState("slide"); // slide, fade, or scale

  const slides = [
    {
      title: "Consultation Rapide",
      description: "Prenez rendez-vous en moins de 2 minutes via WhatsApp",
      image: "/api/placeholder/600/400",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Médecins Qualifiés",
      description: "Une équipe de professionnels expérimentés à votre service",
      image: "/api/placeholder/600/400",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Urgences 7j/7",
      description: "Service d'urgence disponible même le dimanche",
      image: "/api/placeholder/600/400",
      color: "from-orange-500 to-amber-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getAnimationClass = (index) => {
    if (animationType === "slide") {
      return `transform ${index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'} transition-transform duration-700`;
    } else if (animationType === "fade") {
      return `opacity ${index === currentSlide ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`;
    } else if (animationType === "scale") {
      return `transform ${index === currentSlide ? 'scale-100' : 'scale-90'} opacity ${index === currentSlide ? 'opacity-100' : 'opacity-0'} transition-all duration-700`;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 bg-gray-900/50 backdrop-blur-md rounded-3xl p-6 border border-white/10">
      {/* Contrôles d'animation */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setAnimationType("slide")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            animationType === "slide"
              ? "bg-blue-500 text-white"
              : "bg-white/10 text-white/70 hover:bg-white/20"
          }`}
        >
          Translation Slide
        </button>
        <button
          onClick={() => setAnimationType("fade")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            animationType === "fade"
              ? "bg-green-500 text-white"
              : "bg-white/10 text-white/70 hover:bg-white/20"
          }`}
        >
          Fade In/Out
        </button>
        <button
          onClick={() => setAnimationType("scale")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            animationType === "scale"
              ? "bg-orange-500 text-white"
              : "bg-white/10 text-white/70 hover:bg-white/20"
          }`}
        >
          Scale Effect
        </button>
      </div>

      {/* Slider Container */}
      <div className="relative h-80 overflow-hidden rounded-2xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center p-8 ${getAnimationClass(index)}`}
          >
            <div className={`w-full h-full absolute inset-0 bg-gradient-to-br ${slide.color} opacity-80 rounded-2xl`}></div>
            
            <div className="relative z-10 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
              <p className="text-lg opacity-90 max-w-md">{slide.description}</p>
              
              <button className="mt-6 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all">
                En savoir plus
              </button>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Description de l'animation */}
      <div className="mt-6 text-center text-white/80 text-sm">
        {animationType === "slide" && "Animation par translation horizontale - Effet de glissement"}
        {animationType === "fade" && "Animation par fondu - Apparition et disparition en douceur"}
        {animationType === "scale" && "Animation par zoom - Mise à l'échelle avec opacité"}
      </div>

      <style jsx>{`
        .transform {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .opacity {
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .transition-all {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default AnimationSlider;