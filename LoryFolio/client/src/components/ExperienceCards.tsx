import { useState } from "react";

interface Experience {
  icon: React.ReactElement;
  title: string;
  period: string;
  description: string;
  impact: string;
}

interface ExperienceCardsProps {
  experiences: Experience[];
}

export default function ExperienceCards({ experiences }: ExperienceCardsProps) {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="relative h-64 cursor-pointer ghibli-card group"
          onClick={() => toggleCard(index)}
        >
          {/* Flip hint indicator */}
          <div className="absolute -top-2 -right-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Cliquez pour retourner
          </div>
          
          {/* Card container with 3D flip */}
          <div className={`card-inner ${flippedCards.has(index) ? 'flipped' : ''}`}>
            {/* Front of card */}
            <div className="card-face card-front">
              <div className="theatre-card-bg">
                <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4 relative">
                  {/* Theatre curtain decoration */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-red-600 to-red-700 theatre-curtain"></div>
                  
                  <div className="theatre-icon-stage">
                    {exp.icon}
                  </div>
                  <h3 className="text-lg font-bold text-red-900 theatre-title">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-red-700 font-medium">
                    {exp.period}
                  </p>
                  <div className="theatre-decoration">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-red-500"></div>
                  </div>
                  
                  {/* Theatre masks decoration */}
                  <div className="absolute bottom-2 right-2 text-red-300 opacity-30">
                    🎭
                  </div>
                </div>
              </div>
            </div>

            {/* Back of card */}
            <div className="card-face card-back">
              <div className="theatre-card-bg-back">
                <div className="p-6 h-full flex flex-col justify-between relative">
                  {/* Theatre curtain decoration */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-red-600 to-red-700 theatre-curtain"></div>
                  
                  <div className="space-y-3 mt-2">
                    <h4 className="text-sm font-semibold text-red-900 border-b border-red-200 pb-2 theatre-subtitle">
                      📖 Mon Expérience
                    </h4>
                    <p className="text-xs text-red-800 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-red-900 border-b border-red-200 pb-2 theatre-subtitle">
                      ✨ Ce que ça m'a apporté
                    </h4>
                    <p className="text-xs text-red-800 leading-relaxed">
                      {exp.impact}
                    </p>
                  </div>
                  
                  {/* Theatre stage decoration */}
                  <div className="absolute bottom-2 left-2 text-red-300 opacity-30">
                    🎪
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}