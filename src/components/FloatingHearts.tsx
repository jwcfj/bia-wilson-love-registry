import { Heart } from "lucide-react";

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <Heart className="absolute top-[10%] left-[10%] text-primary/20 w-8 h-8 animate-float" />
      <Heart className="absolute top-[60%] left-[5%] text-primary/15 w-6 h-6 animate-float-delayed" />
      <Heart className="absolute top-[30%] right-[15%] text-primary/20 w-10 h-10 animate-float" />
      <Heart className="absolute top-[70%] right-[8%] text-primary/15 w-7 h-7 animate-float-delayed" />
      <Heart className="absolute top-[45%] left-[50%] text-primary/10 w-12 h-12 animate-float" />
      <Heart className="absolute top-[85%] left-[30%] text-primary/15 w-8 h-8 animate-float-delayed" />
      <Heart className="absolute top-[20%] right-[40%] text-primary/10 w-9 h-9 animate-float" />
    </div>
  );
};

export default FloatingHearts;
