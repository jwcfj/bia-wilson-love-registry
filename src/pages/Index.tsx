import Hero from "@/components/Hero";
import GiftCategory from "@/components/GiftCategory";
import MessagesSection from "@/components/MessagesSection";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import { ChefHat, Sofa, Bed, Bath } from "lucide-react";

const Index = () => {
  // Sample gift data - this would come from a database in a real app
  const kitchenGifts = [
    {
      id: 1,
      name: "Jogo de Panelas",
      image: "https://images.unsplash.com/photo-1584990347449-39b4aa1f248d?w=500&q=80",
      price: "350.00",
      isPurchased: false
    },
    {
      id: 2,
      name: "Liquidificador",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&q=80",
      price: "180.00",
      isPurchased: false
    },
    {
      id: 3,
      name: "Jogo de Facas",
      image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500&q=80",
      price: "120.00",
      isPurchased: true
    }
  ];

  const livingRoomGifts = [
    {
      id: 4,
      name: "Almofadas Decorativas",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
      price: "90.00",
      isPurchased: false
    },
    {
      id: 5,
      name: "Vaso Decorativo",
      image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&q=80",
      price: "75.00",
      isPurchased: false
    },
    {
      id: 6,
      name: "Porta Retratos",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=500&q=80",
      price: "45.00",
      isPurchased: false
    }
  ];

  const bedroomGifts = [
    {
      id: 7,
      name: "Jogo de Cama",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80",
      price: "250.00",
      isPurchased: false
    },
    {
      id: 8,
      name: "Edredom",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80",
      price: "300.00",
      isPurchased: false
    },
    {
      id: 9,
      name: "Travesseiros",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80",
      price: "150.00",
      isPurchased: false
    }
  ];

  const bathroomGifts = [
    {
      id: 10,
      name: "Jogo de Toalhas",
      image: "https://images.unsplash.com/photo-1620735692151-26a7e0748429?w=500&q=80",
      price: "120.00",
      isPurchased: false
    },
    {
      id: 11,
      name: "Organizador de Banheiro",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80",
      price: "85.00",
      isPurchased: false
    },
    {
      id: 12,
      name: "Espelho Decorativo",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&q=80",
      price: "200.00",
      isPurchased: false
    }
  ];

  return (
    <div className="min-h-screen relative">
      <FloatingHearts />
      
      <div className="relative z-10">
        <Hero />
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-cursive font-bold text-foreground mb-4">
                Nossa Lista de Presentes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada presente nos ajudará a construir nosso lar com muito amor ❤️
              </p>
            </div>

            <GiftCategory 
              title="Cozinha" 
              icon={<ChefHat className="w-10 h-10" />}
              gifts={kitchenGifts}
            />

            <GiftCategory 
              title="Sala" 
              icon={<Sofa className="w-10 h-10" />}
              gifts={livingRoomGifts}
            />

            <GiftCategory 
              title="Quarto" 
              icon={<Bed className="w-10 h-10" />}
              gifts={bedroomGifts}
            />

            <GiftCategory 
              title="Banheiro" 
              icon={<Bath className="w-10 h-10" />}
              gifts={bathroomGifts}
            />
          </div>
        </section>

        <MessagesSection />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
