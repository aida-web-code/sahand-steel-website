import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.products', href: '/products' },
    { key: 'nav.applications', href: '/applications' },
    { key: 'nav.quality', href: '/quality' },
    { key: 'nav.certificates', href: '/certificates' },
    { key: 'nav.blog', href: '/blog' },
    { key: 'nav.contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-foreground text-lg leading-tight">
                {language === 'fa' ? 'سهند' : 'Sahand'}
              </div>
              <div className="text-xs text-muted-foreground leading-tight">
                {language === 'fa' ? 'فولاد' : 'Steel'}
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 hover:bg-secondary/10 rounded"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right Side: Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center border border-border rounded-lg p-1 bg-secondary/5">
              <button
                onClick={() => setLanguage('fa')}
                className={`px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
                  language === 'fa'
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                فا
              </button>
              <div className="w-px h-4 bg-border mx-1" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary/10 rounded transition-colors"
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
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/10 rounded transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
