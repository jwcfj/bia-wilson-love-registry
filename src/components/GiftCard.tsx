import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Gift, MessageCircle, Check } from "lucide-react";
import { toast } from "sonner";
import PixPaymentModal from "./PixPaymentModal";

interface GiftCardProps {
  name: string;
  image: string;
  price: string;
  isPurchased: boolean;
}

const GiftCard = ({ name, image, price, isPurchased }: GiftCardProps) => {
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [showPixModal, setShowPixModal] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [message, setMessage] = useState("");
  const [purchased, setPurchased] = useState(isPurchased);

  const handleMarkAsPurchased = () => {
    setPurchased(true);
    toast.success("Obrigado por presentear o casal! 💕");
  };

  const handleSendMessage = () => {
    if (guestName.trim() && message.trim()) {
      toast.success("Mensagem enviada com sucesso! 💌");
      setShowMessageForm(false);
      setGuestName("");
      setMessage("");
    } else {
      toast.error("Por favor, preencha seu nome e mensagem");
    }
  };

  return (
    <Card className="overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {purchased && (
          <div className="absolute inset-0 bg-muted/90 flex items-center justify-center">
            <Badge className="text-lg px-4 py-2 bg-primary/90">
              <Check className="w-5 h-5 mr-2" />
              Já foi comprado
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-foreground font-cursive">
          {name}
        </h3>

        <div className="space-y-3">
          {!purchased ? (
            <Button 
              className="w-full" 
              variant="default"
              onClick={() => setShowPixModal(true)}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Pagar com PIX - R$ {price}
            </Button>
          ) : (
            <Button 
              className="w-full" 
              variant="outline"
              disabled
            >
              <Check className="w-4 h-4 mr-2" />
              Presente comprado
            </Button>
          )}

          <Button 
            className="w-full" 
            variant="outline"
            onClick={() => setShowMessageForm(!showMessageForm)}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Deixar recadinho
          </Button>
        </div>
      </CardContent>

      {showMessageForm && (
        <CardFooter className="flex-col gap-3 pt-0 pb-6 px-6">
          <Input
            placeholder="Seu nome"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="w-full"
          />
          <Textarea
            placeholder="Deixe uma mensagem carinhosa para o casal..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full min-h-[100px] resize-none"
          />
          <Button 
            className="w-full" 
            onClick={handleSendMessage}
          >
            Enviar mensagem 💕
          </Button>
        </CardFooter>
      )}

      <PixPaymentModal
        isOpen={showPixModal}
        onClose={() => setShowPixModal(false)}
        giftName={name}
        amount={price}
      />
    </Card>
  );
};

export default GiftCard;
