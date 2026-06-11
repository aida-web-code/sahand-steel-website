import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUp } from 'lucide-react';

export default function FloatingBackToTop() {
  const { language } = useLanguage();
  const isRTL = language === 'fa';
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed z-40 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bottom-6 md:bottom-8 ${
            isRTL ? 'right-6 md:right-8' : 'left-6 md:left-8'
          }`}
          title={language === 'fa' ? 'بالا' : 'Back to Top'}
          aria-label={language === 'fa' ? 'بالا' : 'Back to Top'}
        >
          <ArrowUp className="w-6 h-6 md:w-7 md:h-7" />
        </button>
      )}
    </>
  );
}
