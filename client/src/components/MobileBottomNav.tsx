import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Search, Phone, MapPin } from 'lucide-react';

export default function MobileBottomNav() {
  const { language } = useLanguage();
  const isRTL = language === 'fa';

  const navItems = [
    { icon: Home, label: language === 'fa' ? 'خانه' : 'Home', href: '/' },
    { icon: Search, label: language === 'fa' ? 'جستجو' : 'Search', href: '/products' },
    { icon: Phone, label: language === 'fa' ? 'تماس' : 'Contact', href: '/contact' },
    { icon: MapPin, label: language === 'fa' ? 'موقعیت' : 'Location', href: '#' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      <div className="flex items-center justify-around h-20">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full gap-1 text-xs font-medium text-muted-foreground hover:text-primary hover:bg-gray-50 transition-colors"
              title={item.label}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
