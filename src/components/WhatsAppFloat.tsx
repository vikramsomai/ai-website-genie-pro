import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <Button
        variant="whatsapp"
        size="lg"
        className="rounded-full w-16 h-16 shadow-float hover:scale-110 transition-transform duration-300"
        onClick={() => window.open('https://wa.me/91XXXXXXXXXX?text=Hi, I need help with LED displays!', '_blank')}
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
      
      {/* Pulse Ring Animation */}
      <div className="absolute inset-0 rounded-full border-4 border-whatsapp animate-ping opacity-20"></div>
      <div className="absolute inset-2 rounded-full border-2 border-whatsapp animate-pulse opacity-30"></div>
    </div>
  );
};

export default WhatsAppFloat;