import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Award, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const { t, language, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hero-chrome-bars-46HBD8CLvQy8N5Z5Hogj8q.webp',
      alt: 'Chrome Plated Bars',
    },
    {
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hydraulic-system-EHVhKJhvQvfFMHyYxLkXQu.webp',
      alt: 'Hydraulic Systems',
    },
    {
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/steel-warehouse-8Tz4Dq6vvHfmNQKjXrH2Qm.webp',
      alt: 'Steel Warehouse',
    },
    {
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/manufacturing-facility-7mJQnHvKvqKjHqmQqKzfBc.webp',
      alt: 'Manufacturing Facility',
    },
    {
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/quality-inspection-LXDSSjAGNKKE7EsDnBQeXx.webp',
      alt: 'Quality Inspection',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hydraulic-system-EHVhKJhvQvfFMHyYxLkXQu.webp',
    },
    {
      id: 'piston-rod',
      name: language === 'fa' ? 'میله‌های پیستون' : 'Piston Rod',
      desc: language === 'fa' ? 'میله‌های پیستون هیدرولیکی' : 'Hydraulic piston rods',
      specs: ['Diameter: 16-100mm', 'Chrome: 0.8-1.5mm', 'ISO 9001'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/steel-warehouse-8Tz4Dq6vvHfmNQKjXrH2Qm.webp',
    },
    {
      id: 'linear-shaft',
      name: language === 'fa' ? 'شفت‌های خطی' : 'Linear Shaft',
      desc: language === 'fa' ? 'شفت‌های خطی دقیق' : 'Precision linear shafts',
      specs: ['Diameter: 6-50mm', 'Tolerance: ±0.005mm', 'ISO 9001'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/manufacturing-facility-7mJQnHvKvqKjHqmQqKzfBc.webp',
    },
    {
      id: 'honed-tube',
      name: language === 'fa' ? 'لوله‌های هون‌شده' : 'Honed Tube',
      desc: language === 'fa' ? 'لوله‌های هون‌شده دقیق' : 'Precision honed tubes',
      specs: ['ID: 10-200mm', 'Ra: 0.2-0.8μm', 'ISO 9001'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/quality-inspection-LXDSSjAGNKKE7EsDnBQeXx.webp',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section - Carousel Slider */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-900">
        {/* Carousel Images */}
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
              {language === 'fa' ? (
                <div className="space-y-2">
                  <div>تهیه و توزیع انواع</div>
                  <div>فولادهای الیاژی</div>
                  <div>لوله های سیلندری</div>
                  <div>شافت های هارد کروم</div>
                </div>
              ) : (
                'Supply & Distribution of\nAlloy Steels\nCylinder Tubes\nHard Chrome Shafts'
              )}
            </h1>
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

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all ${isRTL ? 'right-4 md:right-8' : 'left-4 md:left-8'}`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all ${isRTL ? 'left-4 md:left-8' : 'right-4 md:right-8'}`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
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
              { label: language === 'fa' ? 'تن تولید سالانه' : 'Annual Production (Tons)', value: '1200+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-sm md:text-base text-white/90">{stat.label}</p>
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
                ? 'محصولات با كيفيت بالا برای كاربردهای صنعتی'
                : 'High-quality products for industrial applications'}
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
                title: language === 'fa' ? 'کیفیت بالا' : 'High Quality',
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
                  ? 'تحویل سریع و قابل اعتماد در سراسر ایران'
                  : 'Fast and reliable delivery throughout Iran',
                icon: CheckCircle2,
              },
              {
                title: language === 'fa' ? 'مشاوره تخصصی' : 'Expert Consultation',
                desc: language === 'fa'
                  ? 'تیم متخصص آماده ارائه مشاوره تخصصی'
                  : 'Expert team ready to provide specialized consultation',
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
                title: language === 'fa' ? 'تولید و واردات سفارشی' : 'Custom Production & Import',
                desc: language === 'fa'
                  ? 'تولید و واردات سفارشی برای نیازهای صنعتی'
                  : 'Custom production and import for industrial needs',
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
                  language === 'fa' ? 'عرضه جامع فولادهای کربنی و آلیاژی' : 'Comprehensive supply of carbon and alloy steels',
                  language === 'fa' ? 'تامین تخصصی فولادهای ابزاری و قالب' : 'Specialized supply of tool and mold steels',
                  language === 'fa' ? 'مرجع قطعات هیدرولیک و پنوماتیک' : 'Reference for hydraulic and pneumatic components',
                  language === 'fa' ? 'توزیع ورقهای صنعتی ضدسایش' : 'Distribution of industrial wear-resistant plates',
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
