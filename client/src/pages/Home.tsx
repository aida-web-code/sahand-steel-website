import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Award, Zap, Users } from 'lucide-react';

export default function Home() {
  const { t, language, isRTL } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-secondary/80 text-secondary-foreground py-20 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={language === 'fa' ? 'lg:order-2' : ''}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {language === 'fa' ? (
                  <>
                    تهیه و توزیع
                    <br />
                    <span className="text-primary">فولادهای الیاژی</span>
                  </>
                ) : (
                  <>
                    Premium Alloy Steel
                    <br />
                    <span className="text-primary">Supply & Distribution</span>
                  </>
                )}
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
                {language === 'fa'
                  ? 'لوله‌های سیلندری هیدرولیکی و شافت‌های هارد کروم با بالاترین کیفیت صنعتی'
                  : 'Hydraulic cylinder tubes and hard chrome shafts with premium industrial quality'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  {t('hero.cta')}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10"
                  onClick={() => window.location.href = '/products'}
                >
                  {t('btn.viewAll')}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-secondary-foreground/20">
                <div>
                  <div className="text-3xl font-bold text-primary">38+</div>
                  <p className="text-sm opacity-80">{language === 'fa' ? 'سال تجربه' : 'Years Experience'}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">740+</div>
                  <p className="text-sm opacity-80">{language === 'fa' ? 'مشتری راضی' : 'Happy Clients'}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">450+</div>
                  <p className="text-sm opacity-80">{language === 'fa' ? 'پروژه انجام شده' : 'Projects Done'}</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className={`relative h-96 md:h-full min-h-96 ${language === 'fa' ? 'lg:order-1' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg" />
              <div className="absolute inset-4 border-2 border-primary/30 rounded-lg" />
              <div className="absolute top-8 right-8 w-24 h-24 bg-primary/10 rounded-lg rotate-12" />
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-primary/10 rounded-lg -rotate-12" />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-primary font-bold text-lg">
                    {language === 'fa' ? 'کیفیت صنعتی' : 'Industrial Quality'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'fa' ? 'درباره سهند فولاد' : 'About Sahand Steel'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === 'fa'
                ? 'بازرگانی فولادهای آلیاژی سهند با سابقه بیش از ۳۸ سال در تامین و توزیع فولادهای صنعتی، تهیه‌کننده معتبری برای صنایع کشور است.'
                : 'Sahand Alloy Steels Trading, with over 38 years of experience in supplying and distributing industrial steels, is a trusted provider for industries nationwide.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, label: language === 'fa' ? 'برش دقیق' : 'Precise Cutting' },
              { icon: Users, label: language === 'fa' ? 'کارشناسان متخصص' : 'Expert Team' },
              { icon: Award, label: language === 'fa' ? 'تجهیزات پیشرفته' : 'Advanced Equipment' },
              { icon: Zap, label: language === 'fa' ? 'آنالیز ساخت' : 'Quality Analysis' },
            ].map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'fa' ? 'محصولات برتر' : 'Featured Products'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'fa'
                ? 'مجموعه‌ای از محصولات صنعتی با کیفیت بین‌المللی'
                : 'A range of industrial products with international quality standards'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'chrome-plated-bar', name: t('product.chromePlatedBar') },
              { id: 'chrome-plated-tube', name: t('product.chromePlatedTube') },
              { id: 'piston-rod', name: t('product.pistonRod') },
              { id: 'linear-shaft', name: t('product.linearShaft') },
              { id: 'honed-tube', name: t('product.honedTube') },
            ].map((product) => (
              <div
                key={product.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer"
                onClick={() => window.location.href = `/products/${product.id}`}
              >
                <div className="w-full h-40 bg-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                  <Zap className="w-12 h-12 text-primary/30" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'fa' ? 'محصول صنعتی با کیفیت بالا' : 'Premium industrial product'}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `/products/${product.id}`;
                  }}
                >
                  {t('btn.learnMore')}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = '/products'}
            >
              {t('btn.viewAll')}
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'fa'
              ? 'آماده شروع پروژه خود هستید؟'
              : 'Ready to Start Your Project?'}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {language === 'fa'
              ? 'تیم متخصص ما آماده کمک به شما برای انتخاب بهترین محصول است'
              : 'Our expert team is ready to help you choose the best product for your needs'}
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
