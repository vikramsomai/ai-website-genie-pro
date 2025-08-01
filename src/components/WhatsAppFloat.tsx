
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative group">
        <Button
          variant="whatsapp"
          size="xl"
          className="rounded-full w-16 h-16 shadow-2xl hover:shadow-neon transition-all duration-500 hover:scale-110 animate-float lightning-border"
          onClick={() => window.open('https://wa.me/919274488477?text=Hi, I need help with LED displays!', '_blank')}
        >
          <MessageCircle className="w-8 h-8 animate-pulse" />
        </Button>

        {/* Premium Pulse Rings */}
        <div className="absolute inset-0 rounded-full border-4 border-whatsapp animate-ping opacity-20"></div>
        <div className="absolute inset-2 rounded-full border-2 border-whatsapp animate-pulse opacity-30"></div>
        <div className="absolute -inset-4 rounded-full border border-whatsapp/20 animate-ping opacity-10" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -inset-8 rounded-full border border-whatsapp/10 animate-ping opacity-5" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
