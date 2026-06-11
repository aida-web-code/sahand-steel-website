import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Award, Zap } from 'lucide-react';

export default function Home() {
  const { t, language, isRTL } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section - Full Width Image */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gray-900">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hero-chrome-bars-46HBD8CLvQy8N5Z5Hogj8q.webp"
          alt="Chrome Plated Bars"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'fa'
                ? 'تامین‌کننده فولادهای صنعتی برتر'
                : 'Premium Industrial Steel Supplier'}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              {language === 'fa'
                ? 'میله‌های روکش کروم، لوله‌های سیلندری، میله‌های پیستون و شفت‌های خطی با کیفیت بین‌المللی'
                : 'Chrome plated bars, cylinder tubes, piston rods, and linear shafts with international quality'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                {t('btn.learnMore')}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = '/contact'}
              >
                {t('btn.contact')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: language === 'fa' ? 'سال تجربه' : 'Years Experience', value: '38+' },
              { label: language === 'fa' ? 'مشتری فعال' : 'Active Customers', value: '740+' },
              { label: language === 'fa' ? 'پروژه انجام شده' : 'Projects Completed', value: '450+' },
              { label: language === 'fa' ? 'کشور صادرات' : 'Export Countries', value: '45+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'fa' ? 'محصولات اصلی' : 'Featured Products'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'fa'
                ? 'محصولات صنعتی با کیفیت بین‌المللی برای صنایع مختلف'
                : 'Industrial products with international quality standards for various industries'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: t('product.chromePlatedBar'),
                desc: language === 'fa' ? 'میله‌های فولادی روکش کروم' : 'Chrome plated steel bars',
                icon: '🔧',
              },
              {
                name: t('product.chromePlatedTube'),
                desc: language === 'fa' ? 'لوله‌های سیلندری کروم' : 'Chrome cylinder tubes',
                icon: '⚙️',
              },
              {
                name: t('product.pistonRod'),
                desc: language === 'fa' ? 'میله‌های پیستون هیدرولیکی' : 'Hydraulic piston rods',
                icon: '🏭',
              },
              {
                name: t('product.linearShaft'),
                desc: language === 'fa' ? 'شفت‌های خطی دقیق' : 'Precision linear shafts',
                icon: '📐',
              },
            ].map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
                <Button variant="outline" size="sm" className="w-full">
                  {t('btn.learnMore')}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'fa' ? 'چرا سهند فولاد؟' : 'Why Sahand Steel?'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'fa'
                ? 'ما بهترین انتخاب برای تامین فولادهای صنعتی باکیفیت'
                : 'We are the best choice for quality industrial steel supply'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: language === 'fa' ? 'کیفیت بین‌المللی' : 'International Quality',
                desc: language === 'fa'
                  ? 'تمام محصولات طبق استانداردهای ISO و بین‌المللی تولید می‌شوند'
                  : 'All products manufactured to ISO and international standards',
                icon: Award,
              },
              {
                title: language === 'fa' ? 'تجربه 38 ساله' : '38 Years Experience',
                desc: language === 'fa'
                  ? 'دهه‌ها تجربه در صنعت فولاد و تامین محصولات صنعتی'
                  : 'Decades of experience in steel industry and industrial supply',
                icon: Zap,
              },
              {
                title: language === 'fa' ? 'تحویل سریع' : 'Fast Delivery',
                desc: language === 'fa'
                  ? 'تحویل سریع و قابل اعتماد به سراسر جهان'
                  : 'Fast and reliable delivery worldwide',
                icon: CheckCircle2,
              },
              {
                title: language === 'fa' ? 'پشتیبانی 24/7' : '24/7 Support',
                desc: language === 'fa'
                  ? 'تیم متخصص آماده پاسخ‌گویی به تمام سوالات'
                  : 'Expert team ready to answer all questions',
                icon: Award,
              },
              {
                title: language === 'fa' ? 'قیمت رقابتی' : 'Competitive Pricing',
                desc: language === 'fa'
                  ? 'بهترین قیمت با کیفیت بالا'
                  : 'Best prices with high quality',
                icon: Zap,
              },
              {
                title: language === 'fa' ? 'صادرات جهانی' : 'Global Export',
                desc: language === 'fa'
                  ? 'صادرات به بیش از 45 کشور جهان'
                  : 'Export to more than 45 countries worldwide',
                icon: CheckCircle2,
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'fa' ? 'تضمین کیفیت' : 'Quality Assurance'}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {language === 'fa'
                  ? 'هر محصول تحت کنترل کیفیت دقیق قرار می‌گیرد تا بالاترین استانداردها برآورده شوند.'
                  : 'Every product undergoes rigorous quality control to meet the highest standards.'}
              </p>
              <ul className="space-y-4">
                {[
                  language === 'fa' ? 'آنالیز شیمیایی دقیق' : 'Precise chemical analysis',
                  language === 'fa' ? 'آزمایش مکانیکی جامع' : 'Comprehensive mechanical testing',
                  language === 'fa' ? 'کنترل ابعادی دقیق' : 'Precise dimensional control',
                  language === 'fa' ? 'بررسی سطح و روکش' : 'Surface and coating inspection',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/quality-inspection-LXDSSjAGNKKE7EsDnBQeXx.webp"
                alt="Quality Control"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'fa'
              ? 'آماده برای شروع؟'
              : 'Ready to Get Started?'}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            {language === 'fa'
              ? 'درخواست قیمت کنید یا با تیم متخصص ما تماس بگیرید'
              : 'Request a quote or contact our expert team'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              {t('btn.requestQuote')}
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/contact'}
            >
              {t('btn.contact')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
