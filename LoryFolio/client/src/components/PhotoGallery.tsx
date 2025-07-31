import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import portraitPhoto from "@assets/Photo portrait - LORY Marc_1753948731388.jpg";
import flowerPhoto from "@assets/Photo en pied extérieur Fleurs - LORY Marc_1753948731387.jpg";
import beachPhoto from "@assets/Photo en pied extérieur - LORY Marc_1753948731387.jpg";
import coastalPhoto from "@assets/Photo en pied extérieur plage - LORY Marc_1753948731387.jpg";
import horsePhoto from "@assets/Photo en pied extérieur cheval - LORY Marc_1753948731387.jpg";
import statuePhoto from "@assets/Statue romaine - Prestation - LORY Marc_1753948731388.jpg";
import sittingPhoto from "@assets/Photo en pied - Assis - LORY Marc_1753948731383.jpg";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const photos = [
    { src: portraitPhoto, alt: "Portrait professionnel Marc Lory", position: "object-center" },
    { src: statuePhoto, alt: "Marc Lory en statue romaine", position: "object-center" },
    { src: flowerPhoto, alt: "Marc Lory dans un jardin fleuri", position: "object-top" },
    { src: beachPhoto, alt: "Marc Lory sur la côte", position: "object-top" },
    { src: coastalPhoto, alt: "Marc Lory à la plage", position: "object-top" },
    { src: horsePhoto, alt: "Marc Lory avec chevaux sur la plage", position: "object-top" },
    { src: sittingPhoto, alt: "Marc Lory assis dans un décor automnal", position: "object-top" }
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div 
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(photo)}
          >
            <img 
              src={photo.src} 
              alt={photo.alt}
              className={`w-full h-48 object-cover ${photo.position || 'object-center'} rounded-lg transition-transform group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-black/90 border-none" aria-describedby="photo-dialog-description">
          <div className="sr-only" id="photo-dialog-description">
            Visualisation agrandie de la photo sélectionnée
          </div>
          <div className="relative flex items-center justify-center h-full">
            {selectedImage && (
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            )}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
              aria-label="Fermer la photo"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
