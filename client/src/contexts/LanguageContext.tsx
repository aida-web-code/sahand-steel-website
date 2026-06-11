import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fa' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  fa: {
    // Navigation
    'nav.home': 'صفحه اصلی',
    'nav.about': 'درباره ما',
    'nav.products': 'محصولات',
    'nav.applications': 'کاربردها',
    'nav.quality': 'کنترل کیفیت',
    'nav.certificates': 'گواهی‌نامه‌ها',
    'nav.blog': 'وبلاگ',
    'nav.contact': 'تماس با ما',
    
    // Company Info
    'company.name': 'بازرگانی فولادهای آلیاژی سهند',
    'company.tagline': 'تامین‌کننده فولاد صنعتی برتر',
    'company.experience': 'سال تجربه',
    'company.phone': '۰۲۱ ۶۶۶۳ ۲۸۷۶',
    'company.email': 'info@sahandsteel.com',
    'company.address': 'تهران: ابتدای بزرگراه فتح، روبروی کارخانه بستنی پاک، پلاک ۱۹۷-۱۹۹',
    
    // Hero Section
    'hero.title': 'تهیه و توزیع انواع فولادهای الیاژی',
    'hero.subtitle': 'لوله‌های سیلندری و شافت‌های هارد کروم',
    'hero.cta': 'مشاوره با کارشناسان',
    
    // Products
    'product.chromePlatedBar': 'میله‌های روکش کروم',
    'product.chromePlatedTube': 'لوله‌های روکش کروم',
    'product.pistonRod': 'میله‌های پیستون',
    'product.linearShaft': 'شفت‌های خطی',
    'product.honedTube': 'لوله سیلندری داخل سنگخورده',
    'product.specifications': 'مشخصات فنی',
    'product.applications': 'کاربردها',
    'product.advantages': 'مزایا',
    'product.requestQuote': 'درخواست قیمت',
    
    // Buttons
    'btn.viewAll': 'مشاهده محصولات',
    'btn.learnMore': 'مشاهده محصولات',
    'btn.contact': 'تماس با ما',
    'btn.download': 'دانلود',
    'btn.send': 'ارسال',
    'btn.requestQuote': 'دریافت استعلام قیمت',
    
    // Footer
    'footer.rights': 'تمامی حقوق برای شرکت فولاد سهند محفوظ است',
    'footer.followUs': 'ما را دنبال کنید',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.applications': 'Applications',
    'nav.quality': 'Quality Control',
    'nav.certificates': 'Certificates',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact Us',
    
    // Company Info
    'company.name': 'Sahand Alloy Steels Trading',
    'company.tagline': 'Premium Industrial Steel Supplier',
    'company.experience': 'Years of Experience',
    'company.phone': '+98 21 6663 2876',
    'company.email': 'info@sahandsteel.com',
    'company.address': 'Tehran: Beginning of Fateh Highway, Opposite Pak Ice Cream Factory, Plaque 197-199',
    
    // Hero Section
    'hero.title': 'Premium Alloy Steel Supply & Distribution',
    'hero.subtitle': 'Hydraulic Cylinder Tubes and Hard Chrome Shafts',
    'hero.cta': 'Consult with Experts',
    
    // Products
    'product.chromePlatedBar': 'Chrome Plated Bar',
    'product.chromePlatedTube': 'Chrome Plated Tube',
    'product.pistonRod': 'Piston Rod',
    'product.linearShaft': 'Linear Shaft',
    'product.honedTube': 'Cylinder Tube (Honed)',
    'product.specifications': 'Technical Specifications',
    'product.applications': 'Applications',
    'product.advantages': 'Advantages',
    'product.requestQuote': 'Request Quote',
    
    // Buttons
    'btn.viewAll': 'View Products',
    'btn.learnMore': 'View Products',
    'btn.contact': 'Contact Us',
    'btn.download': 'Download',
    'btn.send': 'Send',
    'btn.requestQuote': 'Request Quote',
    
    // Footer
    'footer.rights': 'All rights reserved for Sahand Steel Company',
    'footer.followUs': 'Follow Us',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fa');
  const [isRTL, setIsRTL] = useState(true);

  // Initialize from localStorage and set document direction
  useEffect(() => {
    const savedLang = (localStorage.getItem('language') as Language) || 'fa';
    setLanguage(savedLang);
    setIsRTL(savedLang === 'fa');
    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedLang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.classList.toggle('rtl', savedLang === 'fa');
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsRTL(lang === 'fa');
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.classList.toggle('rtl', lang === 'fa');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        isRTL,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
