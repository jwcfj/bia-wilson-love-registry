import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface PixPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  giftName: string;
  amount: string;
}

const PixPaymentModal = ({ isOpen, onClose, giftName, amount }: PixPaymentModalProps) => {
  const [copied, setCopied] = useState(false);
  
  // Código PIX de exemplo - em produção, isso viria de uma API
  const pixCode = "00020126580014BR.GOV.BCB.PIX0136chave-pix-exemplo@email.com520400005303986540" + amount + ".005802BR5913Nome do Casal6009SAO PAULO62070503***63041D3D";

  const handleCopyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    toast.success("Código PIX copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-cursive text-center">
            Pagamento via PIX
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            {giftName}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-6 py-4">
          <div className="text-3xl font-bold text-primary">
            R$ {amount}
          </div>

          {/* QR Code Placeholder */}
          <div className="w-64 h-64 bg-card border-2 border-border rounded-lg flex items-center justify-center p-4">
            <div className="w-full h-full bg-foreground/10 rounded flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-white border-4 border-foreground rounded-lg mb-2" />
                <p className="text-sm text-muted-foreground">QR Code PIX</p>
              </div>
            </div>
          </div>

          <div className="w-full space-y-3">
            <p className="text-sm text-muted-foreground text-center">
              Ou copie o código PIX:
            </p>
            
            <div className="flex gap-2">
              <div className="flex-1 p-3 bg-muted rounded-lg text-xs break-all font-mono">
                {pixCode.substring(0, 50)}...
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopyPixCode}
                className="shrink-0"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="w-full text-center text-sm text-muted-foreground">
            <p>Após realizar o pagamento,</p>
            <p>aguarde a confirmação automática</p>
          </div>

          <Button
            variant="secondary"
            onClick={onClose}
            className="w-full"
          >
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PixPaymentModal;
