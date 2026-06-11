import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <h3 className="font-bold text-lg">
                {language === 'fa' ? 'سهند' : 'Sahand'}
              </h3>
            </div>
            <p className="text-sm opacity-80 mb-4">
              {language === 'fa'
                ? 'تامین‌کننده فولاد صنعتی برتر با بیش از 38 سال تجربه'
                : 'Premium industrial steel supplier with 38+ years of experience'}
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">
              {language === 'fa' ? 'پیوندهای سریع' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="/about" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="/products" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href="/quality" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  {t('nav.quality')}
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">
              {language === 'fa' ? 'محصولات' : 'Products'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/products/chrome-plated-bar" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  {t('product.chromePlatedBar')}
                </a>
              </li>
              <li>
                <a href="/products/chrome-plated-tube" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  {t('product.chromePlatedTube')}
                </a>
              </li>
              <li>
                <a href="/products/piston-rod" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  {t('product.pistonRod')}
                </a>
              </li>
              <li>
                <a href="/products/linear-shaft" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  {t('product.linearShaft')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">
              {language === 'fa' ? 'تماس با ما' : 'Contact'}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+982166632876" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  {t('company.phone')}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@sahandsteel.com" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors break-all">
                  info@sahandsteel.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-80">{t('company.address')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>{t('footer.rights')}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition-opacity">
                {language === 'fa' ? 'سیاست حریم خصوصی' : 'Privacy Policy'}
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                {language === 'fa' ? 'شرایط استفاده' : 'Terms of Use'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
