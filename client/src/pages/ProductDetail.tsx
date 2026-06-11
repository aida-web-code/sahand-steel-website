import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Download, Share2 } from 'lucide-react';

export default function ProductDetail() {
  const { t, language, isRTL } = useLanguage();

  const product = {
    name: language === 'fa' ? 'میله‌های روکش کروم' : 'Chrome Plated Bars',
    description: language === 'fa'
      ? 'میله‌های فولادی با روکش کروم سخت برای کاربردهای صنعتی'
      : 'Steel bars with hard chrome plating for industrial applications',
    specifications: [
      { label: language === 'fa' ? 'قطر' : 'Diameter', value: '10-100 mm' },
      { label: language === 'fa' ? 'طول' : 'Length', value: 'Custom' },
      { label: language === 'fa' ? 'ضخامت کروم' : 'Chrome Thickness', value: '0.5-1.5 mm' },
      { label: language === 'fa' ? 'سختی سطح' : 'Surface Hardness', value: '900-1200 HV' },
      { label: language === 'fa' ? 'زبری سطح' : 'Surface Roughness', value: 'Ra 0.2-0.8 μm' },
      { label: language === 'fa' ? 'استانداردها' : 'Standards', value: 'ISO, ASTM, DIN' },
    ],
    applications: [
      language === 'fa' ? 'سیستم‌های هیدرولیکی' : 'Hydraulic Systems',
      language === 'fa' ? 'ماشین‌آلات صنعتی' : 'Industrial Machinery',
      language === 'fa' ? 'تجهیزات ساختمانی' : 'Construction Equipment',
      language === 'fa' ? 'خودروسازی' : 'Automotive',
    ],
    advantages: [
      language === 'fa' ? 'مقاومت بالا به خوردگی' : 'High corrosion resistance',
      language === 'fa' ? 'سطح صاف و درخشان' : 'Smooth and glossy surface',
      language === 'fa' ? 'دقت ابعادی بالا' : 'High dimensional accuracy',
      language === 'fa' ? 'عمر طولانی' : 'Long service life',
      language === 'fa' ? 'کیفیت بین‌المللی' : 'International quality',
      language === 'fa' ? 'قیمت رقابتی' : 'Competitive pricing',
    ],
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {product.name}
          </h1>
          <p className="text-lg opacity-90 max-w-3xl">
            {product.description}
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="bg-secondary/10 rounded-lg overflow-hidden flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="text-6xl mb-4">🔧</div>
                <p className="text-muted-foreground">
                  {language === 'fa' ? 'تصویر محصول' : 'Product Image'}
                </p>
              </div>
            </div>

            {/* Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {language === 'fa' ? 'مشخصات محصول' : 'Product Specifications'}
              </h2>
              <div className="space-y-4 mb-8">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="font-semibold text-foreground">{spec.label}</span>
                    <span className="text-primary font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  {t('btn.requestQuote')}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <Download className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('btn.downloadCatalog')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'کاربردها' : 'Applications'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.applications.map((app, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'مزایا' : 'Advantages'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.advantages.map((advantage, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="font-semibold">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'محصولات مرتبط' : 'Related Products'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              language === 'fa' ? 'لوله‌های روکش کروم' : 'Chrome Plated Tubes',
              language === 'fa' ? 'میله‌های پیستون' : 'Piston Rods',
              language === 'fa' ? 'شفت‌های خطی' : 'Linear Shafts',
            ].map((product, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-32 bg-secondary/10 rounded mb-4 flex items-center justify-center">
                  <div className="text-4xl">📦</div>
                </div>
                <h3 className="font-bold mb-3">{product}</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  {t('btn.learnMore')}
                </Button>
              </div>
            ))}
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
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {language === 'fa'
              ? 'تیم متخصص ما آماده کمک به شما است'
              : 'Our expert team is ready to help you'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              {t('btn.requestQuote')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/contact'}
            >
              {t('btn.contact')}
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
