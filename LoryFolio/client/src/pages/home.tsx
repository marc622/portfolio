import { useState } from "react";
import IntroCard from "@/components/IntroCard";
import PortfolioView from "@/components/PortfolioView";

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleExpandPortfolio = () => {
    setShowPortfolio(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className={`transition-all duration-1000 ${showPortfolio ? 'opacity-0 scale-95 invisible' : 'opacity-100 scale-100 visible'}`}>
        {!showPortfolio && <IntroCard onExpand={handleExpandPortfolio} />}
      </div>
      
      <div className={`transition-all duration-1000 ${showPortfolio ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
        {showPortfolio && <PortfolioView />}
      </div>
    </div>
  );
}
