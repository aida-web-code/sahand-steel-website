import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { productCategories } from '@/lib/products';

export default function Header() {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.products', href: '/products' },
    { key: 'nav.about', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar with Contact Info */}
      <div className="bg-primary text-white text-sm hidden md:block">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+989121234567" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="ltr-number">+98 (912) 123-4567</span>
            </a>
            <a href="mailto:info@sahandsteel.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>info@sahandsteel.com</span>
            </a>
          </div>
          <div className="text-xs opacity-90">
            {language === 'fa' ? 'بازرگانی فولادهای آلیاژی سهند' : 'Sahand Alloy Steel Trading'}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 flex-shrink-0">
              <img src="/manus-storage/logo_sahand_steel_e29cb127.png" alt="Sahand Steel" className="h-16 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                if (item.key === 'nav.products') {
                  return (
                    <div key={item.key} className="relative group">
                      <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-gray-50 rounded transition-all duration-200 flex items-center gap-1">
                        {t(item.key)}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {productCategories.map((cat) => (
                          <a
                            key={cat.id}
                            href={`/products/${cat.id}`}
                            className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                          >
                            {language === 'fa' ? cat.name : cat.nameEn}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-gray-50 rounded transition-all duration-200"
                  >
                    {t(item.key)}
                  </a>
                );
              })}
            </nav>

            {/* Right Side: Language Switcher & CTA */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                <button
                  onClick={() => setLanguage('fa')}
                  className={`px-3 py-2 text-xs font-bold transition-all ${
                    language === 'fa'
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-gray-100'
                  }`}
                >
                  فارسی
                </button>
                <div className="w-px h-5 bg-gray-300"></div>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-2 text-xs font-bold transition-all ${
                    language === 'en'
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-gray-100'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* CTA Button - Hidden on Mobile */}
              <a
                href="/contact"
                className="hidden md:inline-block px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-md"
              >
                {language === 'fa' ? 'تماس با ما' : 'Contact Us'}
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden border-t border-gray-200 py-4 space-y-2 mb-4">
              {navItems.map((item) => {
                if (item.key === 'nav.products') {
                  return (
                    <div key={item.key}>
                      <button
                        onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                        className="w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-gray-50 rounded transition-colors flex items-center justify-between"
                      >
                        {t(item.key)}
                        <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {productsDropdownOpen && (
                        <div className="bg-gray-50 space-y-1 mt-2 rounded">
                          {productCategories.map((cat) => (
                            <a
                              key={cat.id}
                              href={`/products/${cat.id}`}
                              className="block px-6 py-2 text-sm text-foreground hover:text-primary hover:bg-gray-100 rounded transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setProductsDropdownOpen(false);
                              }}
                            >
                              {language === 'fa' ? cat.name : cat.nameEn}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-gray-50 rounded transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </a>
                );
              })}
              <a
                href="/contact"
                className="block px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === 'fa' ? 'تماس با ما' : 'Contact Us'}
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
