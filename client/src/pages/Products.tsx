import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

export default function Products() {
  const { t, language, isRTL } = useLanguage();

  const products = [
    {
      id: 'chrome-plated-bar',
      name: t('product.chromePlatedBar'),
      description: language === 'fa'
        ? 'میله‌های فولادی با روکش کروم سخت برای کاربردهای صنعتی'
        : 'Steel bars with hard chrome plating for industrial applications',
    },
    {
      id: 'chrome-plated-tube',
      name: t('product.chromePlatedTube'),
      description: language === 'fa'
        ? 'لوله‌های فولادی با روکش کروم سخت برای سیستم‌های هیدرولیکی'
        : 'Steel tubes with hard chrome plating for hydraulic systems',
    },
    {
      id: 'piston-rod',
      name: t('product.pistonRod'),
      description: language === 'fa'
        ? 'میله‌های پیستون با کیفیت بالا برای سیلندرهای هیدرولیکی'
        : 'High-quality piston rods for hydraulic cylinders',
    },
    {
      id: 'linear-shaft',
      name: t('product.linearShaft'),
      description: language === 'fa'
        ? 'شفت‌های خطی با دقت بالا برای کاربردهای صنعتی'
        : 'High-precision linear shafts for industrial applications',
    },
    {
      id: 'honed-tube',
      name: t('product.honedTube'),
      description: language === 'fa'
        ? 'لوله‌های هون‌شده برای سیستم‌های هیدرولیکی و پنوماتیکی'
        : 'Honed tubes for hydraulic and pneumatic systems',
    },
    {
      id: 'nimax-chrome',
      name: language === 'fa' ? 'میله‌های نیمکس' : 'Nimax Chrome Bars',
      description: language === 'fa'
        ? 'میله‌ها و لوله‌های روکش کروم سری نیمکس'
        : 'Nimax series chrome plated bars and tubes',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('nav.products')}
          </h1>
          <p className="text-lg opacity-90 max-w-3xl">
            {language === 'fa'
              ? 'مجموعه‌ای جامع از محصولات فولادی صنعتی با کیفیت بین‌المللی'
              : 'A comprehensive range of industrial steel products with international quality standards'}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50 group"
              >
                {/* Product Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/5 transition-colors">
                  <Zap className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs Preview */}
                  <div className="mb-6 space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        {language === 'fa' ? 'کیفیت' : 'Quality'}:
                      </span>
                      <span className="font-semibold text-primary">
                        {language === 'fa' ? 'بین‌المللی' : 'International'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        {language === 'fa' ? 'موجودی' : 'Availability'}:
                      </span>
                      <span className="font-semibold text-green-600">
                        {language === 'fa' ? 'موجود' : 'In Stock'}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => window.location.href = `/products/${product.id}`}
                  >
                    {t('btn.learnMore')}
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'دسته‌بندی محصولات' : 'Product Categories'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: language === 'fa' ? 'فولادهای کربنی' : 'Carbon Steel',
                desc: language === 'fa'
                  ? 'فولادهای کربنی در مقاطع گرد و چهارگوش'
                  : 'Carbon steel in round and square sections',
              },
              {
                title: language === 'fa' ? 'فولادهای آلیاژی' : 'Alloy Steel',
                desc: language === 'fa'
                  ? 'فولادهای آلیاژی در مقاطع مختلف'
                  : 'Alloy steel in various sections',
              },
              {
                title: language === 'fa' ? 'لوله‌های سیلندری' : 'Cylinder Tubes',
                desc: language === 'fa'
                  ? 'لوله‌های سیلندری برای کاربردهای هیدرولیکی'
                  : 'Cylinder tubes for hydraulic applications',
              },
              {
                title: language === 'fa' ? 'فولادهای ابزاری' : 'Tool Steel',
                desc: language === 'fa'
                  ? 'فولادهای ابزاری گرمکار و سردکار'
                  : 'Hot work and cold work tool steel',
              },
              {
                title: language === 'fa' ? 'فولادهای قالب' : 'Mold Steel',
                desc: language === 'fa'
                  ? 'فولادهای قالب پلاستیک'
                  : 'Plastic mold steel',
              },
              {
                title: language === 'fa' ? 'ورق‌های ضدسایش' : 'Wear-Resistant',
                desc: language === 'fa'
                  ? 'ورق‌های ضدسایش هارد'
                  : 'Hard wear-resistant sheets',
              },
            ].map((category, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-primary">{category.title}</h3>
                <p className="text-muted-foreground text-sm">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {language === 'fa' ? 'تضمین کیفیت' : 'Quality Assurance'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: language === 'fa' ? 'استانداردهای بین‌المللی' : 'International Standards',
                desc: language === 'fa'
                  ? 'تمام محصولات طبق استانداردهای بین‌المللی تولید می‌شوند'
                  : 'All products manufactured to international standards',
              },
              {
                title: language === 'fa' ? 'کنترل کیفیت سخت' : 'Strict Quality Control',
                desc: language === 'fa'
                  ? 'هر محصول تحت کنترل کیفیت دقیق قرار می‌گیرد'
                  : 'Each product undergoes rigorous quality control',
              },
              {
                title: language === 'fa' ? 'گواهی‌نامه‌ها' : 'Certifications',
                desc: language === 'fa'
                  ? 'دارای گواهی‌نامه‌های ISO و سایر استانداردهای معتبر'
                  : 'ISO certified and other recognized standards',
              },
            ].map((item, index) => (
              <div key={index} className="bg-secondary/10 border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
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
              ? 'نیاز به محصول خاصی دارید؟'
              : 'Need a Specific Product?'}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {language === 'fa'
              ? 'تیم متخصص ما آماده کمک به شما برای انتخاب بهترین محصول است'
              : 'Our expert team is ready to help you find the right product'}
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => window.location.href = '/contact'}
          >
            {t('btn.contact')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
          </Button>
        </div>
      </section>
    </div>
  );
}
