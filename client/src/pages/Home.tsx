import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Award, Globe, Zap } from 'lucide-react';

export default function Home() {
  const { t, language, isRTL } = useLanguage();

  const products = [
    {
      id: 'chrome-bar',
      name: language === 'fa' ? 'میله‌های روکش کروم' : 'Chrome Plated Bar',
      desc: language === 'fa' ? 'میله‌های فولادی با روکش کروم دقیق' : 'Precision chrome plated steel bars',
      specs: ['Diameter: 10-100mm', 'Chrome: 0.5-1.5mm', 'ISO 9001'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hero-chrome-bars-46HBD8CLvQy8N5Z5Hogj8q.webp',
    },
    {
      id: 'chrome-tube',
      name: language === 'fa' ? 'لوله‌های سیلندری' : 'Chrome Plated Tube',
      desc: language === 'fa' ? 'لوله‌های سیلندری با روکش کروم' : 'Chrome plated cylinder tubes',
      specs: ['ID: 10-200mm', 'Wall: 1-5mm', 'ISO 9001'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hero-chrome-bars-46HBD8CLvQy8N5Z5Hogj8q.webp',
    },
    {
      id: 'piston-rod',
      name: language === 'fa' ? 'میله‌های پیستون' : 'Piston Rod',
      desc: language === 'fa' ? 'میله‌های پیستون هیدرولیکی' : 'Hydraulic piston rods',
      specs: ['Diameter: 16-100mm', 'Chrome: 0.8-1.5mm', 'ISO 9001'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hydraulic-system-EHVhKJhvQvfFMHyYxLkXQu.webp',
    },
    {
      id: 'linear-shaft',
      name: language === 'fa' ? 'شفت‌های خطی' : 'Linear Shaft',
      desc: language === 'fa' ? 'شفت‌های خطی دقیق' : 'Precision linear shafts',
      specs: ['Diameter: 6-50mm', 'Tolerance: ±0.005mm', 'ISO 9001'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/steel-warehouse-8Tz4Dq6vvHfmNQKjXrH2Qm.webp',
    },
    {
      id: 'honed-tube',
      name: language === 'fa' ? 'لوله‌های هون‌شده' : 'Honed Tube',
      desc: language === 'fa' ? 'لوله‌های هون‌شده دقیق' : 'Precision honed tubes',
      specs: ['ID: 10-200mm', 'Ra: 0.2-0.8μm', 'ISO 9001'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/manufacturing-facility-7mJQnHvKvqKjHqmQqKzfBc.webp',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section - Full Width Image */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-900">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hero-chrome-bars-46HBD8CLvQy8N5Z5Hogj8q.webp"
          alt="Chrome Plated Bars"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 py-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {language === 'fa'
                ? 'تامین‌کننده جهانی فولاد صنعتی'
                : 'Global Industrial Steel Supplier'}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-3xl mx-auto">
              {language === 'fa'
                ? 'میله‌های روکش کروم، لوله‌های سیلندری، میله‌های پیستون و شفت‌های خطی با کیفیت بین‌المللی برای صنایع جهان'
                : 'Premium chrome plated bars, cylinder tubes, piston rods, and linear shafts for global industries'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 text-base md:text-lg px-8 py-6 font-semibold"
                onClick={() => window.location.href = '/products'}
              >
                {t('btn.learnMore')}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </Button>
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 text-base md:text-lg px-8 py-6 font-semibold"
                onClick={() => window.location.href = '/contact'}
              >
                {t('btn.requestQuote')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Business Metrics */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: language === 'fa' ? 'سال تجربه' : 'Years Experience', value: '38+' },
              { label: language === 'fa' ? 'مشتری صنعتی' : 'Industrial Customers', value: '740+' },
              { label: language === 'fa' ? 'پروژه تکمیل شده' : 'Projects Completed', value: '450+' },
              { label: language === 'fa' ? 'کشور صادرات' : 'Export Countries', value: '45+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-sm md:text-base text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Supply & Export Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                {language === 'fa' ? 'صادرات جهانی' : 'Global Supply & Export'}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === 'fa'
                ? 'سهند فولاد به عنوان یک تامین‌کننده معتبر جهانی، محصولات خود را به بیش از 45 کشور در سراسر جهان صادر می‌کند'
                : 'Sahand Steel, as a trusted global supplier, exports its products to over 45 countries worldwide'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: language === 'fa' ? 'بازارهای صادراتی' : 'Export Markets',
                items: [
                  language === 'fa' ? 'آسیای میانه' : 'Central Asia',
                  language === 'fa' ? 'خاورمیانه' : 'Middle East',
                  language === 'fa' ? 'آسیای شرقی' : 'East Asia',
                  language === 'fa' ? 'اروپا' : 'Europe',
                ],
              },
              {
                title: language === 'fa' ? 'صنایع هدف' : 'Target Industries',
                items: [
                  language === 'fa' ? 'هیدرولیک و پنوماتیک' : 'Hydraulic & Pneumatic',
                  language === 'fa' ? 'خودروسازی' : 'Automotive',
                  language === 'fa' ? 'ساختمان و معدن' : 'Construction & Mining',
                  language === 'fa' ? 'ماشین‌آلات صنعتی' : 'Industrial Machinery',
                ],
              },
              {
                title: language === 'fa' ? 'مزایای صادراتی' : 'Export Advantages',
                items: [
                  language === 'fa' ? 'کیفیت بین‌المللی' : 'International Quality',
                  language === 'fa' ? 'تحویل سریع' : 'Fast Delivery',
                  language === 'fa' ? 'قیمت رقابتی' : 'Competitive Pricing',
                  language === 'fa' ? 'پشتیبانی 24/7' : '24/7 Support',
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-primary mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Product Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'fa' ? 'محصولات صنعتی برتر' : 'Premium Industrial Products'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'fa'
                ? 'محصولات با کیفیت بین‌المللی برای صنایع مختلف'
                : 'International quality products for various industries'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Product Image */}
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>

                  {/* Technical Specs */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-xs font-semibold text-primary mb-2 uppercase">
                      {language === 'fa' ? 'مشخصات' : 'Specifications'}
                    </p>
                    <ul className="space-y-1">
                      {product.specs.map((spec, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground">{spec}</li>
                      ))}
                    </ul>
                  </div>

                  {/* View Product Button */}
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => window.location.href = '/products'}
                  >
                    {language === 'fa' ? 'مشاهده محصول' : 'View Product'}
                  </Button>
                </div>
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
                icon: Globe,
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
          <p className="text-lg mb-10 max-w-2xl mx-auto text-white/90">
            {language === 'fa'
              ? 'درخواست قیمت کنید یا با تیم متخصص ما تماس بگیرید'
              : 'Request a quote or contact our expert team'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-base md:text-lg px-8 py-6 font-semibold"
              onClick={() => window.location.href = '/contact'}
            >
              {t('btn.requestQuote')}
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
            </Button>
            <Button
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 text-base md:text-lg px-8 py-6 font-semibold"
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
