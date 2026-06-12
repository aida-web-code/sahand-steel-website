import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {language === 'fa' ? 'بازرگانی فولادهای آلیاژی سهند' : 'Sahand Steel'}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {language === 'fa'
                ? 'تامین‌کننده پیشرو فولادهای صنعتی با 38 سال تجربه در تولید میله‌های روکش کروم، لوله‌های سیلندری، میله‌های پیستون و شفت‌های خطی.'
                : 'Leading industrial steel supplier with 38 years of experience in manufacturing chrome plated bars, cylinder tubes, piston rods, and linear shafts.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">
              {language === 'fa' ? 'پیوندهای سریع' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-white/80 hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href="/about" className="text-white/80 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="/products" className="text-white/80 hover:text-white transition-colors">{t('nav.products')}</a></li>

              <li><a href="/quality" className="text-white/80 hover:text-white transition-colors">{t('nav.quality')}</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">
              {language === 'fa' ? 'منابع' : 'Resources'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/certificates" className="text-white/80 hover:text-white transition-colors">{t('nav.certificates')}</a></li>
              <li><a href="/blog" className="text-white/80 hover:text-white transition-colors">{t('nav.blog')}</a></li>
              <li><a href="/contact" className="text-white/80 hover:text-white transition-colors">{t('nav.contact')}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{language === 'fa' ? 'دانلود کاتالوگ' : 'Download Catalog'}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">
              {language === 'fa' ? 'تماس' : 'Contact'}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white/80 ltr-number">+98 (21) 6663-2876</div>
                  <div className="text-white/80 ltr-number">+98 (21) 6663-2877</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@sahandsteel.com" className="text-white/80 hover:text-white transition-colors">
                  info@sahandsteel.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-xs">
                  {t('company.address')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>
              {language === 'fa'
                ? '© 2026 بازرگانی فولادهای آلیاژی سهند. تمام حقوق محفوظ است.'
                : '© 2026 Sahand Steel. All rights reserved.'}
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">{language === 'fa' ? 'حریم خصوصی' : 'Privacy'}</a>
              <a href="#" className="hover:text-white transition-colors">{language === 'fa' ? 'شرایط' : 'Terms'}</a>
              <a href="#" className="hover:text-white transition-colors">{language === 'fa' ? 'سیاست‌ها' : 'Policies'}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
