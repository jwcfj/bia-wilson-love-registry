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
      name: "Kit 10 Pano de Prato Atoalhado",
      image: "https://m.media-amazon.com/images/I/61b52rcguwL._AC_SL1200_.jpg",
      price: "78.00",
      isPurchased: false
    },
    {
      id: 2,
      name: "Tabua de carne de vidro",
      image: "https://m.media-amazon.com/images/I/41O78Zdt9OL._AC_SL1024_.jpg",
      price: "87.00",
      isPurchased: false
    },
    {
      id: 3,
      name: "Jogo de Jogo De Copos 6 Peças De Vidro 400ml",
      image: "https://m.media-amazon.com/images/I/619Tcje1n0L._AC_SL1200_.jpg",
      price: "50.00",
      isPurchased: false
    },
    {
      id: 4,
      name: " Estojo com 6 Xícaras Café com Pires",
      image: "https://m.media-amazon.com/images/I/51MeR1-gp2L._AC_SL1500_.jpg",
      price: "80.00",
      isPurchased: false
    },
    {
      id: 5,
      name: "Kit de Utensílios de Cozinha com 5 Peças em Bambú e Suporte",
      image: "https://m.media-amazon.com/images/I/61Ck2CYAxBL._AC_SL1200_.jpg",
      price: "40.00",
      isPurchased: false
    },
    {
      id: 6,
      name: " Abridor de Latas, Abridor de Latas 3 em 1",
      image: "https://m.media-amazon.com/images/I/51dA5F6qYNL._AC_SL1000_.jpg",
      price: "80.00",
      isPurchased: false
    },
    {
      id: 7,
      name: "Churrasqueira Fogão Grill Antiaderente Preta",
      image: "https://m.media-amazon.com/images/I/312p+J-XndL._AC_.jpg",
      price: "100.00",
      isPurchased: false
    },
    {
      id: 8,
      name: "Garrafa Térmica de Plástico com Cabo de Madeira Nórdica 1L Branca",
      image: "https://m.media-amazon.com/images/I/61pKKvoWtSL._AC_SL1500_.jpg",
      price: "90.00",
      isPurchased: false
    },
    {
      id: 9,
      name: "Jarra de Vidro 1,2L com Tampa de Bambu",
      image: "https://down-br.img.susercontent.com/file/a53189ca39f3de23dc5a7564fd4f9711",
      price: "60.00",
      isPurchased: false
    },
    {
      id: 10,
      name: "Kit 4 peças descanço de panela de bambu redondo",
      image: "https://m.media-amazon.com/images/I/71x25bc9XuL._AC_SL1500_.jpg",
      price: "70",
      isPurchased: false
    },
    {
      id: 11,
      name: "Fervedor/Leiteira cereja",
      image: "https://m.media-amazon.com/images/I/51a2C0ZeUVL._AC_SL1000_.jpg",
      price: "70",
      isPurchased: false
    },
    {
      id: 12,
      name: "Oven Gloves with Non-Slip",
      image: "https://m.media-amazon.com/images/I/81Oq4aOMksL._AC_SL1500_.jpg",
      price: "62",
      isPurchased: false
    },
    {
      id: 13,
      name: "Açucareiro Tramontina em Aço Inox com Colher",
      image: "https://m.media-amazon.com/images/I/51ZrEK-mT7L._AC_.jpg",
      price: "86.50",
      isPurchased: false
    },
    {
      id: 14,
      name: "Kit Potes Herméticos de vidro 4 Unidades com Tampas de Bambu 450ml Organização de Cozinha",
      image: "https://m.media-amazon.com/images/I/714kaZc7RWL._AC_SL1200_.jpg",
      price: "70",
      isPurchased: false
    },
    {
      id: 15,
      name: "Jogo De Frigideiras 2 Peças Alumínio Tramontina",
      image: "https://m.media-amazon.com/images/I/51-qapztIfL._AC_SL1200_.jpg",
      price: "50",
      isPurchased: false
    },
    {
      id: 16,
      name: "Frigideira Funda Tramontina Loreto em Alumínio com Revestimento Interno Antiaderente Starflon Max Vermelho",
      image: "https://m.media-amazon.com/images/I/51MmOQszDWL._AC_SL1000_.jpg",
      price: "72",
      isPurchased: false
    },
    {
      id: 17,
      name: "Kit Utensílios de Cozinha 6 Peças",
      image: "https://images.openai.com/thumbnails/url/99PP7nicDcldDoIgAADgE6Ux1xxurWmZ1UOaLrInhkDgL5Rk6W06Vrep7_X7fqQxuvdsm3f0MWrD2cwU3dwSvSGmpBZVrd1LpXXZidV9-T_PPzIY0VRLF55IDoqkvCROdhbrZsLohnmL3AUEF4KgX-1r7mx28Zs95YhfflTBOlVRgUh1bcUwDRkJYuO4YIvTA4mnPFVcBFlYMqdBDIOQsvAHGyM56w",
      price: "90.00",
      isPurchased: false
    }
  ];

  // const livingRoomGifts = [
  //   {
  //     id: 11,
  //     name: "Almofadas Decorativas",
  //     image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  //     price: "90.00",
  //     isPurchased: false
  //   },
  //   {
  //     id: 12,
  //     name: "Vaso Decorativo",
  //     image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&q=80",
  //     price: "75.00",
  //     isPurchased: false
  //   },
  //   {
  //     id: 13,
  //     name: "Porta Retratos",
  //     image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=500&q=80",
  //     price: "45.00",
  //     isPurchased: false
  //   }
  // ];

  const bedroomGifts = [
    {
      id: 18,
      name: "Jogo de Lençol 100% Algodão Premium Extra Macio - Roupa De Cama Antiácaro, Inclui Lençol Com Elástico (Forro) E Fronhas (Azul-marinho, Queen Simples (3 peças)",
      image: "https://m.media-amazon.com/images/I/51JTtdy-e0L._AC_SL1200_.jpg",
      price: "100.00",
      isPurchased: false
    },
    {
      id: 19,
      name: "Jogo de Lençol 100% Algodão Premium Extra Macio - Roupa De Cama Antiácaro, Inclui Lençol Com Elástico (Forro) E Fronhas (Bege, Queen Simples (3 peças)",
      image: "https://m.media-amazon.com/images/I/51xyo9h8NoL._AC_SL1200_.jpg",
      price: "100.00",
      isPurchased: false
    },
    // {
    //   id: 12,
    //   name: "Travesseiros",
    //   image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80",
    //   price: "150.00",
    //   isPurchased: false
    // }
  ];

  const bathroomGifts = [
    {
      id: 20,
      name: "Bacia Plástica 14 Litros Para Limpeza Casa Lavanderia Roupas Com Pegadores Laterais",
      image: "https://m.media-amazon.com/images/I/51rVyOAAbwL._AC_SL1299_.jpg",
      price: "65.00",
      isPurchased: false
    },
    {
      id: 21,
      name: "Lixeira com Pedal em Aço Inox Tramontina",
      image: "https://m.media-amazon.com/images/I/41uJmkp13GS._AC_SL1500_.jpg",
      price: "67.00",
      isPurchased: false
    },
    {
      id: 22,
      name: "Suporte para Vassouras e Rodo de Parede com 9 Acessórios",
      image: "https://m.media-amazon.com/images/I/71P34NCHcfL._AC_SL1500_.jpg",
      price: "59.00",
      isPurchased: false
    },
    {
      id: 23,
      name: "Kit Limpeza 1 Vassoura Varre Muito Interna 1 Varre Fácil 1 Rodo 30cm 1 Pá Caçamba Condor",
      image: "https://m.media-amazon.com/images/I/61AmbRV7g3L._AC_SL1200_.jpg",
      price: "90.00",
      isPurchased: false
    },
    {
      id: 24,
      name: "Kit Banheiro/Lavabo. 3 Peças de Porcelana e Bambu, Dispenser/Porta Sabonete Líquido e Porta Escova com Base de Bambu",
      image: "https://m.media-amazon.com/images/I/51OnIuehLKL._AC_SL1080_.jpg",
      price: "73.00",
      isPurchased: false
    },
    {
      id: 25,
      name: "Balde Plástico Redondo GRANDE 15 Litros",
      image: "https://m.media-amazon.com/images/I/410AjbSdJFL._AC_SL1500_.jpg",
      price: "55.00",
      isPurchased: false
    },
    // {
    //   id: 12,
    //   name: "Espelho Decorativo",
    //   image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&q=80",
    //   price: "200.00",
    //   isPurchased: false
    // }
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

            {/* <GiftCategory 
              title="Sala" 
              icon={<Sofa className="w-10 h-10" />}
              gifts={livingRoomGifts}
            /> */}

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
