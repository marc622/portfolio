import { useState } from "react";
import { Button } from "@/components/ui/button";

interface IntroCardProps {
  onExpand: () => void;
}

export default function IntroCard({ onExpand }: IntroCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  const handleCardClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      setTimeout(() => {
        setIsZooming(true);
        setTimeout(() => {
          onExpand();
        }, 800);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen notebook-bg flex items-center justify-center p-4">
      <div className={`relative max-w-2xl w-full aspect-[4/3] ghibli-card group cursor-pointer transition-all duration-1000 ${isZooming ? 'scale-[10] opacity-0' : ''}`}>
        {/* Flip hint indicator */}
        <div className="absolute -top-2 -right-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Cliquez pour découvrir
        </div>
        
        <div 
          className={`card-inner ${isFlipped ? 'flipped' : ''}`}
          onClick={handleCardClick}
        >
          {/* Front of card */}
          <div className="card-face card-front">
            <div className="id-card-horizontal h-full flex p-8 relative">
              {/* Left side - Form fields */}
              <div className="flex-1 space-y-6 pr-8">
                <div className="space-y-1">
                  <div className="flex items-baseline">
                    <span className="text-red-800 font-bold text-2xl" style={{fontFamily: 'cursive'}}>Marc</span>
                    <div className="flex-1 border-b-2 border-red-400 ml-4 mb-1"></div>
                  </div>
                  <p className="text-xs text-red-600 uppercase tracking-wider ml-0">PRÉNOM</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-baseline">
                    <span className="text-red-800 font-bold text-2xl" style={{fontFamily: 'cursive'}}>LORY</span>
                    <div className="flex-1 border-b-2 border-red-400 ml-4 mb-1"></div>
                  </div>
                  <p className="text-xs text-red-600 uppercase tracking-wider ml-0">NOM</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-baseline">
                    <span className="text-red-800 font-bold text-lg" style={{fontFamily: 'cursive'}}>Ecquevilly</span>
                    <div className="flex-1 border-b-2 border-red-400 ml-4 mb-1"></div>
                  </div>
                  <p className="text-xs text-red-600 uppercase tracking-wider ml-0">LIEU</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-baseline">
                    <span className="text-red-800 font-bold text-lg" style={{fontFamily: 'cursive'}}>Comédien</span>
                    <div className="flex-1 border-b-2 border-red-400 ml-4 mb-1"></div>
                  </div>
                  <p className="text-xs text-red-600 uppercase tracking-wider ml-0">PROFESSION</p>
                </div>
              </div>
              
              {/* Right side - Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-40 bg-red-50 border-4 border-yellow-400 shadow-lg relative overflow-hidden rounded-lg">
                  <img 
                    src="/attached_assets/image_1753952504208.png" 
                    alt="Marc Lory - Photo d'identité" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              
              {/* Corner stamp */}
              <div className="absolute bottom-6 right-6 w-12 h-12 border-2 border-red-400 rounded-full flex items-center justify-center bg-white shadow-md">
                <span className="text-red-400 text-lg">📋</span>
              </div>
            </div>
          </div>
          
          {/* Back of card */}
          <div className="card-face card-back">
            <div className="theatre-card-bg-back h-full flex flex-col justify-center items-center text-center space-y-6 p-8 relative">
              {/* Theatre curtain decoration */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-red-600 to-red-700 theatre-curtain"></div>
              
              <div className="space-y-6 mt-4">
                <div className="theatre-icon-stage mx-auto">
                  🎨
                </div>
                <h3 className="text-2xl font-bold text-red-900 theatre-title">Portfolio Interactif</h3>
                <div className="space-y-3 text-red-800">
                  <p className="text-sm">📽️ Expériences Cinéma & TV</p>
                  <p className="text-sm">📸 Galerie Photos Professionnelles</p>
                  <p className="text-sm">📋 CV Téléchargeable</p>
                  <p className="text-sm">📞 Contact Direct</p>
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 mx-auto"></div>
                <p className="text-xs text-red-600 italic">
                  Préparation à l'ouverture...
                </p>
              </div>
              
              {/* Theatre decorations */}
              <div className="absolute bottom-3 left-3 text-red-300 opacity-40">🎞️</div>
              <div className="absolute bottom-3 right-3 text-red-300 opacity-40">🎪</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
