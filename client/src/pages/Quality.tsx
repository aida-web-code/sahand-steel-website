import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, Zap, Award } from 'lucide-react';

export default function Quality() {
  const { t, language } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('nav.quality')}
          </h1>
          <p className="text-lg opacity-90 max-w-3xl">
            {language === 'fa'
              ? 'کنترل کیفیت دقیق و جامع برای تمام محصولات'
              : 'Comprehensive quality control for all products'}
          </p>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'فرآیند کنترل کیفیت' : 'Quality Control Process'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: language === 'fa' ? 'دریافت مواد اولیه' : 'Raw Material Reception',
                description: language === 'fa'
                  ? 'بررسی اولیه و تایید مواد اولیه'
                  : 'Initial inspection and verification of raw materials',
              },
              {
                step: '2',
                title: language === 'fa' ? 'آنالیز شیمیایی' : 'Chemical Analysis',
                description: language === 'fa'
                  ? 'آنالیز دقیق ترکیب شیمیایی'
                  : 'Precise analysis of chemical composition',
              },
              {
                step: '3',
                title: language === 'fa' ? 'آزمایش مکانیکی' : 'Mechanical Testing',
                description: language === 'fa'
                  ? 'آزمایش خواص مکانیکی و استحکام'
                  : 'Testing mechanical properties and strength',
              },
              {
                step: '4',
                title: language === 'fa' ? 'بررسی نهایی' : 'Final Inspection',
                description: language === 'fa'
                  ? 'بررسی نهایی و تایید محصول'
                  : 'Final inspection and product approval',
              },
            ].map((process, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Methods */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'روش‌های آزمایش' : 'Testing Methods'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: language === 'fa' ? 'کنترل ضخامت کروم' : 'Chrome Thickness Control',
                tests: [
                  language === 'fa' ? 'اندازه‌گیری ضخامت کروم' : 'Chrome thickness measurement',
                  language === 'fa' ? 'بررسی یکنواختی' : 'Uniformity verification',
                  language === 'fa' ? 'آزمایش چسبندگی' : 'Adhesion testing',
                  language === 'fa' ? 'بررسی سختی' : 'Hardness verification',
                ],
              },
              {
                title: language === 'fa' ? 'آزمایش زبری سطح' : 'Surface Roughness Testing',
                tests: [
                  language === 'fa' ? 'اندازه‌گیری زبری سطح' : 'Surface roughness measurement',
                  language === 'fa' ? 'بررسی صاف‌بودن' : 'Smoothness verification',
                  language === 'fa' ? 'آزمایش مقاومت سایش' : 'Wear resistance testing',
                  language === 'fa' ? 'بررسی کیفیت سطح' : 'Surface quality check',
                ],
              },
              {
                title: language === 'fa' ? 'آزمایش‌های مکانیکی' : 'Mechanical Tests',
                tests: [
                  language === 'fa' ? 'آزمایش کشش' : 'Tensile testing',
                  language === 'fa' ? 'آزمایش فشار' : 'Compression testing',
                  language === 'fa' ? 'آزمایش خمش' : 'Bending testing',
                  language === 'fa' ? 'آزمایش سختی' : 'Hardness testing',
                ],
              },
              {
                title: language === 'fa' ? 'آزمایش‌های شیمیایی' : 'Chemical Tests',
                tests: [
                  language === 'fa' ? 'آنالیز طیفی' : 'Spectral analysis',
                  language === 'fa' ? 'آزمایش خوردگی' : 'Corrosion testing',
                  language === 'fa' ? 'آنالیز ترکیب' : 'Composition analysis',
                  language === 'fa' ? 'بررسی ناخالصی‌ها' : 'Impurity checking',
                ],
              },
            ].map((method, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  {method.title}
                </h3>
                <ul className="space-y-3">
                  {method.tests.map((test, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'تجهیزات آزمایشی' : 'Testing Equipment'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: language === 'fa' ? 'دستگاه اندازه‌گیری ضخامت' : 'Thickness Gauge',
                description: language === 'fa'
                  ? 'اندازه‌گیری دقیق ضخامت کروم'
                  : 'Precise chrome thickness measurement',
              },
              {
                name: language === 'fa' ? 'دستگاه زبری‌سنج' : 'Surface Roughness Tester',
                description: language === 'fa'
                  ? 'اندازه‌گیری زبری سطح'
                  : 'Surface roughness measurement',
              },
              {
                name: language === 'fa' ? 'دستگاه سختی‌سنج' : 'Hardness Tester',
                description: language === 'fa'
                  ? 'آزمایش سختی و مقاومت'
                  : 'Hardness and resistance testing',
              },
              {
                name: language === 'fa' ? 'دستگاه کشش' : 'Tensile Tester',
                description: language === 'fa'
                  ? 'آزمایش استحکام کشش'
                  : 'Tensile strength testing',
              },
              {
                name: language === 'fa' ? 'دستگاه طیف‌سنجی' : 'Spectrometer',
                description: language === 'fa'
                  ? 'آنالیز شیمیایی دقیق'
                  : 'Precise chemical analysis',
              },
              {
                name: language === 'fa' ? 'میکروسکوپ الکترونی' : 'Electron Microscope',
                description: language === 'fa'
                  ? 'بررسی ساختار ریز'
                  : 'Microstructure examination',
              },
            ].map((equipment, index) => (
              <div key={index} className="bg-secondary/10 border border-border rounded-lg p-6">
                <Zap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">{equipment.name}</h3>
                <p className="text-muted-foreground text-sm">{equipment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'استانداردها و گواهی‌نامه‌ها' : 'Standards & Certifications'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { cert: 'ISO 9001', desc: language === 'fa' ? 'مدیریت کیفیت' : 'Quality Management' },
              { cert: 'ISO 14001', desc: language === 'fa' ? 'مدیریت محیط‌زیست' : 'Environmental Management' },
              { cert: 'ASTM', desc: language === 'fa' ? 'استانداردهای آمریکایی' : 'American Standards' },
              { cert: 'DIN', desc: language === 'fa' ? 'استانداردهای آلمانی' : 'German Standards' },
              { cert: 'EN', desc: language === 'fa' ? 'استانداردهای اروپایی' : 'European Standards' },
              { cert: 'JIS', desc: language === 'fa' ? 'استانداردهای ژاپنی' : 'Japanese Standards' },
            ].map((cert, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{cert.cert}</h3>
                <p className="text-muted-foreground text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
