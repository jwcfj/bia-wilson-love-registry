import { Heart, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-romantic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <Heart className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
          
          <h1 className="text-5xl md:text-7xl font-cursive font-bold text-foreground leading-tight">
            Bem-vindos ao Chá de Panela
          </h1>
          
          <div className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-cursive text-primary">
            <span>Bia</span>
            <Heart className="w-8 h-8 fill-primary" />
            <span>Wilson</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-muted-foreground bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 inline-flex mx-auto shadow-soft">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium">Em breve</span>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Estamos muito felizes em compartilhar esse momento especial com vocês! 
            Confira nossa lista de presentes e nos ajude a começar nossa jornada juntos 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
