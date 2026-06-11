import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Blog() {
  const { t, language, isRTL } = useLanguage();

  const articles = [
    {
      id: 1,
      title: language === 'fa' ? 'میله‌های روکش کروم چیست؟' : 'What is a Chrome Plated Bar?',
      excerpt: language === 'fa'
        ? 'میله‌های روکش کروم فولادی هستند که با لایه‌ای از کروم سخت پوشش داده شده‌اند. این محصول برای کاربردهای صنعتی که نیاز به مقاومت بالا دارند، بسیار مناسب است.'
        : 'Chrome plated bars are steel bars coated with a hard chrome layer. This product is ideal for industrial applications requiring high resistance.',
      author: language === 'fa' ? 'تیم سهند' : 'Sahand Team',
      date: '2026-06-01',
      category: t('product.chromePlatedBar'),
    },
    {
      id: 2,
      title: language === 'fa' ? 'مقایسه میله‌های کروم و فولاد ضد زنگ' : 'Chrome Bar vs Stainless Steel',
      excerpt: language === 'fa'
        ? 'میله‌های کروم و فولاد ضد زنگ هر دو برای کاربردهای صنعتی استفاده می‌شوند، اما تفاوت‌های مهمی بین آن‌ها وجود دارد. بیایید این تفاوت‌ها را بررسی کنیم.'
        : 'Both chrome bars and stainless steel are used for industrial applications, but there are important differences. Let\'s explore them.',
      author: language === 'fa' ? 'تیم سهند' : 'Sahand Team',
      date: '2026-05-25',
      category: language === 'fa' ? 'مقایسه محصولات' : 'Product Comparison',
    },
    {
      id: 3,
      title: language === 'fa' ? 'کاربردهای میله‌های پیستون هیدرولیکی' : 'Applications of Hydraulic Piston Rods',
      excerpt: language === 'fa'
        ? 'میله‌های پیستون هیدرولیکی در بسیاری از صنایع مختلف استفاده می‌شوند. از خودروسازی تا ساختمان‌سازی، این محصولات نقش مهمی ایفا می‌کنند.'
        : 'Hydraulic piston rods are used in many different industries. From automotive to construction, these products play an important role.',
      author: language === 'fa' ? 'تیم سهند' : 'Sahand Team',
      date: '2026-05-15',
      category: t('product.pistonRod'),
    },
    {
      id: 4,
      title: language === 'fa' ? 'چگونه کیفیت کروم‌کاری را بررسی کنیم؟' : 'How to Inspect Chrome Plating Quality',
      excerpt: language === 'fa'
        ? 'کیفیت کروم‌کاری یکی از مهم‌ترین عوامل در انتخاب محصولات صنعتی است. در این مقاله، روش‌های بررسی کیفیت کروم‌کاری را یاد می‌گیریم.'
        : 'Chrome plating quality is one of the most important factors in selecting industrial products. In this article, we learn how to inspect it.',
      author: language === 'fa' ? 'تیم سهند' : 'Sahand Team',
      date: '2026-05-10',
      category: language === 'fa' ? 'کنترل کیفیت' : 'Quality Control',
    },
    {
      id: 5,
      title: language === 'fa' ? 'لوله‌های کروم‌شده در مقابل لوله سیلندری داخل سنگخورده' : 'Chrome Plated Tube vs Cylinder Tube (Honed)',
      excerpt: language === 'fa'
        ? 'لوله‌های کروم‌شده و لوله‌های هون‌شده هر دو برای سیستم‌های هیدرولیکی استفاده می‌شوند. اما کدام یک برای نیاز شما مناسب‌تر است؟'
        : 'Both chrome plated and cylinder tubes (honed) are used for hydraulic systems. But which one is better for your needs?',
      author: language === 'fa' ? 'تیم سهند' : 'Sahand Team',
      date: '2026-05-01',
      category: language === 'fa' ? 'مقایسه محصولات' : 'Product Comparison',
    },
    {
      id: 6,
      title: language === 'fa' ? 'استانداردهای بین‌المللی برای فولادهای صنعتی' : 'International Standards for Industrial Steels',
      excerpt: language === 'fa'
        ? 'استانداردهای بین‌المللی برای فولادهای صنعتی نقش مهمی در تضمین کیفیت دارند. بیایید این استانداردها را بهتر بشناسیم.'
        : 'International standards for industrial steels play an important role in ensuring quality. Let\'s learn more about them.',
      author: language === 'fa' ? 'تیم سهند' : 'Sahand Team',
      date: '2026-04-25',
      category: language === 'fa' ? 'استانداردها' : 'Standards',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('nav.blog')}
          </h1>
          <p className="text-lg opacity-90 max-w-3xl">
            {language === 'fa'
              ? 'مقالات و اطلاعات مفید درباره محصولات و صنعت فولاد'
              : 'Useful articles and information about products and steel industry'}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                {/* Image Placeholder */}
                <div className="w-full h-40 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary/30 mb-2">📄</div>
                    <p className="text-sm text-muted-foreground">{article.category}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-3 mb-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString(language === 'fa' ? 'fa-IR' : 'en-US')}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => alert(language === 'fa' ? 'مقاله کامل' : 'Full Article')}
                  >
                    {language === 'fa' ? 'خواندن بیشتر' : 'Read More'}
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'دسته‌بندی‌ها' : 'Categories'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              language === 'fa' ? 'محصولات' : 'Products',
              language === 'fa' ? 'کنترل کیفیت' : 'Quality Control',
              language === 'fa' ? 'استانداردها' : 'Standards',
              language === 'fa' ? 'کاربردها' : 'Applications',
            ].map((category, index) => (
              <button
                key={index}
                className="bg-card border border-border rounded-lg p-4 text-center hover:bg-primary/10 hover:border-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'fa' ? 'اطلاع‌رسانی‌های جدید' : 'Latest Updates'}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {language === 'fa'
              ? 'برای دریافت آخرین مقالات و اطلاعات، ایمیل خود را وارد کنید'
              : 'Enter your email to receive the latest articles and updates'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={language === 'fa' ? 'ایمیل شما' : 'Your email'}
              className="flex-1 px-4 py-3 rounded text-foreground"
              dir={isRTL ? 'rtl' : 'ltr'}
            />
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              {language === 'fa' ? 'ثبت‌نام' : 'Subscribe'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
