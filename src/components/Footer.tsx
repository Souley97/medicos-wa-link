import { Stethoscope, MessageCircle, Phone, MapPin, Mail, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Bonjour, je souhaiterais avoir des informations sur vos services.");
    window.open(`https://wa.me/221766657278?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent rounded-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Médicos AR</h3>
                <p className="text-blue-200 text-sm">Cabinet Médical</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Votre santé est notre priorité. Nous offrons des soins médicaux de qualité 
              avec une approche humaine et personnalisée à Yeumbeul, Dakar.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={openWhatsApp}
                className="p-2 bg-[#25D366] rounded-lg hover:bg-[#20b358] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-accent-light">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">
                  Consultation Générale
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">
                  Cardiologie
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">
                  Pédiatrie
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">
                  Ophtalmologie
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">
                  Urgences Médicales
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-accent-light">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-blue-100">Yeumbeul, Dakar, Sénégal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-blue-100">+221 77 523 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-blue-100">contact@medicosadr.sn</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-blue-100">Lun-Sam: 8h-18h</span>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-accent-light">Rendez-vous</h4>
            <p className="text-blue-100">
              Prenez rendez-vous facilement via WhatsApp. Réponse rapide garantie.
            </p>
            <button 
              onClick={openWhatsApp}
              className="whatsapp-button w-full"
            >
              <MessageCircle className="w-5 h-5" />
              Prendre Rendez-vous
            </button>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Heures de Réponse WhatsApp</h5>
              <p className="text-sm text-blue-100">
                Lundi-Vendredi: 8h-18h<br />
                Samedi: 8h-16h<br />
                Dimanche: Urgences uniquement
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © 2025 Cabinet Médical Médicos AR. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                CGU
              </a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-blue-300 text-xs">
              Développé avec ❤️ par{" "}
              <span className="font-semibold text-accent-light">Wolof Digital</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;