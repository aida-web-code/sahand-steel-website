import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const isRTL = language === 'fa';

  const phoneNumber = '989121234567'; // WhatsApp number without + or spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-40 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bottom-6 md:bottom-8 ${
        isRTL ? 'left-6 md:left-8' : 'right-6 md:right-8'
      }`}
      title={language === 'fa' ? 'ارتباط در واتساپ' : 'WhatsApp Inquiry'}
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
}
