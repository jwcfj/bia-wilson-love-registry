import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MessageCircleHeart, Send } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

interface Message {
  id: number;
  author: string;
  message: string;
}

const MessagesSection = () => {
  const [guestName, setGuestName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`https://meusite.sbs/wedding-messages?size=10000&page=0`);
        // Supondo que o Spring Boot retorne um Page<Message> com content
        setMessages(response.data.content);
      } catch (error) {
        console.error("Erro ao buscar mensagens:", error);
      }
    };

    fetchMessages();
  }, [1, 1000]);

  const handleSubmit = async () =>  {
    if (guestName.trim() && message.trim()) {
      const newMessage = {
      author: guestName,
      message: message,
    };
      try {
      // Envia para o backend
      const response = await axios.post(
        "https://meusite.sbs/wedding-messages",
        newMessage
      );

      // Atualiza o estado local com o que o backend retornou (normalmente já vem o id)
      setMessages([response.data, ...messages]);

      setGuestName("");
      setMessage("");
      toast.success("Mensagem enviada com sucesso! 💌");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente!");
    }
    } else {
      toast.error("Por favor, preencha todos os campos");
    }
  };

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <MessageCircleHeart className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-cursive font-bold text-foreground mb-4">
            Mensagens para o Casal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deixe seus votos de felicidade e carinho para Bia e Wilson
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Form to send new message */}
          <Card className="shadow-card">
            <CardContent className="p-6 space-y-4">
              <Input
                placeholder="Seu nome"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full"
              />
              <Textarea
                placeholder="Deixe uma mensagem especial para o casal..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full min-h-[120px] resize-none"
              />
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleSubmit}
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Display messages */}
          <div className="space-y-4">
            {messages.map((msg) => (
              <Card key={msg.id} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-lg text-foreground font-cursive">
                      {msg.author}
                    </h4>
                    {/* <span className="text-sm text-muted-foreground">
                      {msg.date}
                    </span> */}
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {msg.message}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesSection;
