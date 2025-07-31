import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PhotoGallery from "./PhotoGallery";
import CVModal from "./CVModal";
import ContactForm from "./ContactForm";
import ExperienceCards from "./ExperienceCards";
import { Film, Drama, Bus, Video, Ear, RotateCcw, Handshake, Mail, Phone, MapPin, Clock } from "lucide-react";
import portraitPhoto from "@assets/Photo portrait - LORY Marc_1753948731388.jpg";
import flowerPhoto from "@assets/Photo en pied extérieur Fleurs - LORY Marc_1753948731387.jpg";

export default function PortfolioView() {
  const [showCVModal, setShowCVModal] = useState(false);

  const experiences = [
    {
      icon: <Film className="text-red-600 text-2xl" />,
      title: "TF1 : Les 12 Coups de Midi",
      period: "Avril 2025",
      description: "Sélectionné parmi 100 candidats. Prestation face caméra en direct, gestion du stress.",
      impact: "Développement de ma confiance face caméra et capacité à rester naturel sous pression."
    },
    {
      icon: <Video className="text-red-600 text-2xl" />,
      title: "Vidéo immersive YouTube",
      period: "Avril 2025",
      description: "Rôle maquillé (grand-père) dans un cache-cache géant. Improvisation, mime, jeu comique. Tournage multi-caméra synchronisé.",
      impact: "J'ai appris l'art de l'improvisation comique et la synchronisation avec plusieurs caméras."
    },
    {
      icon: <Drama className="text-red-600 text-2xl" />,
      title: "Streamer sur Twitch",
      period: "Janvier 2022 - Mai 2025",
      description: "Créateur de contenu live. Plus de 1 000 abonnés, 1 620 € récoltés. Maîtrise caméra, improvisation, gestion de communauté.",
      impact: "Cette expérience m'a donné une aisance naturelle face caméra et une capacité d'adaptation en temps réel."
    },
    {
      icon: <Bus className="text-red-600 text-2xl" />,
      title: "Préparation statue vivante",
      period: "Mars 2025",
      description: "Travail de personnage et maquillage pro. Créativité et implication saluées malgré l'annulation.",
      impact: "J'ai développé mes compétences en création de personnage et en maquillage artistique."
    },
    {
      icon: <Drama className="text-red-600 text-2xl" />,
      title: "Pièce de théâtre en primaire",
      period: "Mai 2008",
      description: "Premiers pas sur scène. Découverte de la scène, du jeu et du lien avec le public.",
      impact: "Cette première expérience a révélé ma passion pour la scène et le contact avec le public."
    }
  ];

  const skills = [
    {
      icon: <Handshake className="text-[hsl(221,83%,53%)] text-2xl" />,
      title: "Relationnel",
      description: "Excellente capacité à créer des liens et communiquer avec les équipes.",
      level: 5
    },
    {
      icon: <Clock className="text-[hsl(221,83%,53%)] text-2xl" />,
      title: "Patience",
      description: "Capacité à attendre et rester concentré même dans les moments d'attente prolongés.",
      level: 3
    },
    {
      icon: <RotateCcw className="text-[hsl(221,83%,53%)] text-2xl" />,
      title: "Polyvalence",
      description: "Adaptabilité à différents rôles et situations de tournage.",
      level: 4
    },
    {
      icon: <Video className="text-[hsl(221,83%,53%)] text-2xl" />,
      title: "Ponctualité",
      description: "Respect strict des horaires et des engagements pris.",
      level: 5
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Marc LORY</h1>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-[hsl(221,83%,53%)] transition-colors">À propos</button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-600 hover:text-[hsl(221,83%,53%)] transition-colors">Expériences</button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-600 hover:text-[hsl(221,83%,53%)] transition-colors">Compétences</button>
            <button onClick={() => scrollToSection('photos')} className="text-slate-600 hover:text-[hsl(221,83%,53%)] transition-colors">Photos</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-[hsl(221,83%,53%)] transition-colors">Contact</button>
          </div>
          <Button 
            onClick={() => setShowCVModal(true)}
            className="bg-[hsl(221,83%,53%)] hover:bg-[hsl(221,83%,48%)] text-white px-4 py-2 rounded-lg text-sm"
          >
            Télécharger CV
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                Portfolio de<br />
                <span className="text-[hsl(221,83%,53%)]">Marc LORY</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Figurant et comédien passionné depuis 2008. Mon rêve ? Apporter de la joie autour de moi. Sérieux, motivé et toujours curieux d'apprendre, j'aimerais m'investir dans le milieu audiovisuel. Avec de la créativité et du bonheur aux gens qui m'entourent.
              </p>
              <div className="flex space-x-4">
                <Button 
                  onClick={() => scrollToSection('photos')}
                  className="bg-[hsl(221,83%,53%)] hover:bg-[hsl(221,83%,48%)] text-white px-6 py-3 rounded-lg font-medium"
                >
                  Voir mes photos
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-[hsl(221,83%,53%)] text-[hsl(221,83%,53%)] hover:bg-[hsl(221,83%,53%)] hover:text-white px-6 py-3 rounded-lg font-medium"
                >
                  Me contacter
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <img 
                  src={portraitPhoto} 
                  alt="Marc Lory Portrait Professionnel" 
                  className="w-80 h-96 object-cover object-top rounded-2xl shadow-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">À propos de moi</h2>
            <div className="w-16 h-0.5 bg-[hsl(221,83%,53%)] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Passionné par l'art dramatique depuis mon plus jeune âge, j'ai développé une solide expérience dans le domaine du cinéma et de l'audiovisuel. Mon parcours m'a permis d'acquérir une grande aisance devant la caméra et une capacité d'adaptation remarquable.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Mes expériences variées, de la figuration aux petits rôles, m'ont enseigné l'importance de l'écoute, de la ponctualité et du professionnalisme sur un plateau. Je m'efforce toujours de contribuer positivement à l'ambiance de travail.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-600">Disponible</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[hsl(221,83%,53%)]" />
                  <span className="text-slate-600">Ecquevilly</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={flowerPhoto} 
                alt="Marc Lory dans un jardin fleuri" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Mes Expériences</h2>
            <div className="w-16 h-0.5 bg-[hsl(221,83%,53%)] mx-auto"></div>
          </div>
          
          <ExperienceCards experiences={experiences} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Mes Compétences</h2>
            <div className="w-16 h-0.5 bg-[hsl(221,83%,53%)] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-[hsl(221,83%,53%)]/10 rounded-full flex items-center justify-center mx-auto">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{skill.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{skill.description}</p>
                {/* Star rating */}
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className={`w-4 h-4 ${
                        star <= skill.level
                          ? 'text-amber-400 fill-current'
                          : 'text-gray-300 fill-current'
                      }`}
                    >
                      ★
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Photos & Présentation</h2>
            <div className="w-16 h-0.5 bg-[hsl(221,83%,53%)] mx-auto"></div>
            <p className="text-slate-600 mt-4">Découvrez mes photos de casting et portraits professionnels</p>
          </div>
          
          <PhotoGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact</h2>
            <div className="w-16 h-0.5 bg-[hsl(221,83%,53%)] mx-auto"></div>
            <p className="text-slate-600 mt-4">N'hésitez pas à me contacter pour vos projets</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Formulaire de contact</h3>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[hsl(221,83%,53%)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[hsl(221,83%,53%)]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Email</h4>
                    <p className="text-slate-600">lorymarc.pro@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[hsl(221,83%,53%)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[hsl(221,83%,53%)]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Téléphone</h4>
                    <p className="text-slate-600">06.37.94.39.38</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[hsl(221,83%,53%)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[hsl(221,83%,53%)]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Localisation</h4>
                    <p className="text-slate-600">Ecquevilly</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[hsl(221,83%,53%)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[hsl(221,83%,53%)]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Disponibilité</h4>
                    <p className="text-slate-600">Flexible selon vos besoins</p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-slate-50">
                <CardContent className="p-6">
                  <h4 className="font-medium text-slate-900 mb-2">Note</h4>
                  <p className="text-sm text-slate-600">
                    Je réponds généralement dans les 24h. Pour les demandes urgentes, n'hésitez pas à préciser dans votre message.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-4">Marc LORY</h3>
          <p className="text-slate-400 mb-4">Portfolio Acteur</p>
          <div className="flex justify-center space-x-6 text-slate-400">
            <span>© 2024 Marc Lory. Tous droits réservés.</span>
          </div>
        </div>
      </footer>

      <CVModal isOpen={showCVModal} onClose={() => setShowCVModal(false)} />
    </div>
  );
}
