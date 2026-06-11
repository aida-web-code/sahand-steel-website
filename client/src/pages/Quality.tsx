import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export default function Quality() {
  const { t, language } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-96 overflow-hidden bg-gray-900">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/quality-inspection-LXDSSjAGNKKE7EsDnBQeXx.webp"
          alt="Quality Control"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('nav.quality')}
            </h1>
          </div>
        </div>
      </section>

      {/* Quality Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'fa' ? 'اطمينان کيفيت و دقالی' : 'Quality Assurance & Precision'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === 'fa'
                ? 'تمام محصولات با استانداردهای دقالی ساختمانی بررسی می‌شوند. از کيفيت سطح تا دقالی ابعادی، تمام موارد تحت نظارت سریع.'
                : 'All products are manufactured to precision engineering standards. From surface quality to dimensional accuracy, every aspect is under strict supervision.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inspection Process */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {language === 'fa' ? 'فرآیند بازرسی' : 'Inspection Process'}
              </h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: language === 'fa' ? 'دریافت مواد اولیه' : 'Raw Material Receiving', desc: language === 'fa' ? 'بررسی و تایید مواد اولیه' : 'Material verification and approval' },
                  { step: '2', title: language === 'fa' ? 'تولید' : 'Production', desc: language === 'fa' ? 'کنترل در حین تولید' : 'In-process monitoring' },
                  { step: '3', title: language === 'fa' ? 'آزمایش نهایی' : 'Final Testing', desc: language === 'fa' ? 'آزمایش‌های جامع نهایی' : 'Comprehensive final testing' },
                  { step: '4', title: language === 'fa' ? 'بسته‌بندی و ارسال' : 'Packaging & Shipping', desc: language === 'fa' ? 'بسته‌بندی محفوظ و ارسال' : 'Safe packaging and delivery' },
                  { step: '5', title: language === 'fa' ? 'استانداردهای دقالی ساختمانی' : 'Precision Manufacturing Standards', desc: language === 'fa' ? 'رعايت استانداردهای بين‌المللی' : 'Adherence to international standards' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-white font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testing Equipment */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {language === 'fa' ? 'تجهیزات آزمایشی' : 'Testing Equipment'}
              </h3>
              <div className="space-y-4">
                {[
                  language === 'fa' ? 'دستگاه آنالیز شیمیایی' : 'Chemical Analysis Equipment',
                  language === 'fa' ? 'دستگاه آزمایش کشش' : 'Tensile Testing Machine',
                  language === 'fa' ? 'دستگاه سختی‌سنج' : 'Hardness Tester',
                  language === 'fa' ? 'دستگاه سطح‌سنج' : 'Surface Roughness Tester',
                  language === 'fa' ? 'میکروسکوپ الکترونی' : 'Electron Microscope',
                  language === 'fa' ? 'دستگاه اندازه‌گیری ابعادی' : 'Dimensional Measurement Device',
                ].map((equipment, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{equipment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Principles */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'اصول کیفیت' : 'Quality Principles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                title: language === 'fa' ? 'کیفیت تضمین شده در هر مرحله' : 'Quality assured at every stage',
                desc: language === 'fa' ? 'کنترل کیفیت در تمام مراحل تولید' : 'Quality control throughout production',
              },
              {
                title: language === 'fa' ? 'استفاده از مواد اولیه با کیفیت بالا' : 'Use of high-quality raw materials',
                desc: language === 'fa' ? 'انتخاب دقیق مواد اولیه برتر' : 'Careful selection of premium materials',
              },
              {
                title: language === 'fa' ? 'استانداردهای تولید سخت‌گیرانه' : 'Strict production standards',
                desc: language === 'fa' ? 'رعایت استانداردهای صنعتی بین‌المللی' : 'Adherence to international standards',
              },
              {
                title: language === 'fa' ? 'تعهد به تحویل دقیق و به موقع' : 'Commitment to precise, on-time delivery',
                desc: language === 'fa' ? 'تحویل محصولات با دقت و به موقع' : 'Timely and accurate product delivery',
              },
            ].map((method, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2 text-primary">{method.title}</h3>
                <p className="text-muted-foreground text-sm">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chrome Thickness Control */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'کنترل ضخامت کروم' : 'Chrome Thickness Control'}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <div className="space-y-6">
                {[
                  {
                    label: language === 'fa' ? 'ضخامت کروم استاندارد' : 'Standard Chrome Thickness',
                    value: '0.5 - 1.5 mm',
                  },
                  {
                    label: language === 'fa' ? 'روش اندازه‌گیری' : 'Measurement Method',
                    value: language === 'fa' ? 'دستگاه ضخامت‌سنج الکترونیکی' : 'Electronic thickness gauge',
                  },
                  {
                    label: language === 'fa' ? 'دقت اندازه‌گیری' : 'Measurement Accuracy',
                    value: '±0.05 mm',
                  },
                  {
                    label: language === 'fa' ? 'فرکانس کنترل' : 'Control Frequency',
                    value: language === 'fa' ? 'هر 50 قطعه' : 'Every 50 pieces',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0">
                    <span className="font-semibold text-foreground">{item.label}</span>
                    <span className="text-primary font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surface Roughness */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'کنترل زبری سطح' : 'Surface Roughness Control'}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="space-y-6">
                {[
                  {
                    label: language === 'fa' ? 'زبری سطح استاندارد' : 'Standard Surface Roughness',
                    value: 'Ra 0.2 - 0.8 μm',
                  },
                  {
                    label: language === 'fa' ? 'روش اندازه‌گیری' : 'Measurement Method',
                    value: language === 'fa' ? 'دستگاه سطح‌سنج دیجیتالی' : 'Digital surface roughness gauge',
                  },
                  {
                    label: language === 'fa' ? 'نقاط اندازه‌گیری' : 'Measurement Points',
                    value: language === 'fa' ? 'حداقل 3 نقطه' : 'Minimum 3 points',
                  },
                  {
                    label: language === 'fa' ? 'استاندارد' : 'Standard',
                    value: 'ISO 4287',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0">
                    <span className="font-semibold text-foreground">{item.label}</span>
                    <span className="text-primary font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'گواهی‌نامه‌ها و استانداردها' : 'Certifications & Standards'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['ISO 9001', 'ISO 14001', 'ASTM', 'DIN'].map((cert, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">✓</div>
                <p className="font-bold text-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
