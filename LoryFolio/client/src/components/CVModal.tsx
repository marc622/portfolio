import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleDownload = () => {
    if (code === "CV29") {
      // Create a link to download the CV
      const link = document.createElement('a');
      link.href = '/attached_assets/CV-Marc-Lory-Cinema (1)_1753949634459.pdf';
      link.download = 'CV-Marc-Lory-Cinema.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Téléchargement en cours",
        description: "Votre CV est en cours de téléchargement.",
      });
      
      setCode("");
      setError("");
      onClose();
    } else {
      setError("Code incorrect. Veuillez réessayer.");
    }
  };

  const handleClose = () => {
    setCode("");
    setError("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md" aria-describedby="cv-dialog-description">
        <div id="cv-dialog-description" className="sr-only">
          Saisissez le code d'accès pour télécharger le CV professionnel de Marc Lory
        </div>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">Télécharger mon CV</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-slate-600">
            Entrez le code d'accès pour télécharger mon CV complet :
          </p>
          
          <Input
            type="text"
            placeholder="Code d'accès"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError("");
            }}
            className="w-full"
          />
          
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          
          <div className="flex space-x-3">
            <Button 
              onClick={handleDownload}
              className="flex-1 bg-[hsl(221,83%,53%)] hover:bg-[hsl(221,83%,48%)] text-white"
            >
              Télécharger
            </Button>
            <Button 
              onClick={handleClose}
              variant="outline"
              className="flex-1"
            >
              Annuler
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
