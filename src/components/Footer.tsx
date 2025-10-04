import { Heart, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-2xl font-cursive text-primary">
            <span>Bia</span>
            <Heart className="w-6 h-6 fill-primary" />
            <span>Wilson</span>
          </div>

          <p className="text-muted-foreground">
            Obrigado por fazer parte deste momento especial! 💕
          </p>

          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contato@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 Chá de Panela - Bia & Wilson. Feito com muito amor 💕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
