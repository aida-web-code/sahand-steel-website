import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, Zap } from 'lucide-react';

export default function Applications() {
  const { t, language } = useLanguage();

  const applications = [
    {
      title: language === 'fa' ? 'سیستم‌های هیدرولیکی' : 'Hydraulic Systems',
      description: language === 'fa'
        ? 'میله‌های پیستون و لوله‌های سیلندری برای سیستم‌های هیدرولیکی صنعتی'
        : 'Piston rods and cylinder tubes for industrial hydraulic systems',
      products: ['Piston Rod', 'Cylinder Tubes', 'Chrome Plated Bar'],
    },
    {
      title: language === 'fa' ? 'ماشین‌آلات صنعتی' : 'Industrial Machinery',
      description: language === 'fa'
        ? 'شفت‌های خطی و میله‌های فولادی برای ماشین‌آلات تولید'
        : 'Linear shafts and steel bars for production machinery',
      products: ['Linear Shaft', 'Chrome Plated Bar', 'Honed Tube'],
    },
    {
      title: language === 'fa' ? 'تجهیزات ساختمانی' : 'Construction Equipment',
      description: language === 'fa'
        ? 'فولادهای الیاژی و ابزاری برای تجهیزات ساختمانی'
        : 'Alloy and tool steels for construction equipment',
      products: ['Alloy Steel', 'Tool Steel', 'Carbon Steel'],
    },
    {
      title: language === 'fa' ? 'خودروسازی' : 'Automotive',
      description: language === 'fa'
        ? 'میله‌های پیستون و شفت‌های خطی برای صنعت خودروسازی'
        : 'Piston rods and linear shafts for automotive industry',
      products: ['Piston Rod', 'Linear Shaft', 'Chrome Plated Tube'],
    },
    {
      title: language === 'fa' ? 'صنایع نفت و گاز' : 'Oil & Gas Industry',
      description: language === 'fa'
        ? 'فولادهای مقاوم به خوردگی برای صنایع نفت و گاز'
        : 'Corrosion-resistant steels for oil and gas industries',
      products: ['Alloy Steel', 'Wear-Resistant Steel', 'Tool Steel'],
    },
    {
      title: language === 'fa' ? 'صنایع غذایی' : 'Food Industry',
      description: language === 'fa'
        ? 'فولادهای بهداشتی برای صنایع غذایی و دارویی'
        : 'Hygienic steels for food and pharmaceutical industries',
      products: ['Stainless Steel', 'Chrome Plated Bar', 'Honed Tube'],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('nav.applications')}
          </h1>
          <p className="text-lg opacity-90 max-w-3xl">
            {language === 'fa'
              ? 'محصولات سهند فولاد در صنایع مختلف کاربرد دارند'
              : 'Sahand Steel products are used across various industries'}
          </p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{app.title}</h3>
                <p className="text-muted-foreground mb-6">{app.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">
                    {language === 'fa' ? 'محصولات مرتبط:' : 'Related Products:'}
                  </p>
                  <ul className="space-y-1">
                    {app.products.map((product, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'تجربه در صنایع مختلف' : 'Experience Across Industries'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { industry: language === 'fa' ? 'هیدرولیک' : 'Hydraulic', projects: '120+' },
              { industry: language === 'fa' ? 'خودرو' : 'Automotive', projects: '95+' },
              { industry: language === 'fa' ? 'ساختمان' : 'Construction', projects: '85+' },
              { industry: language === 'fa' ? 'دیگر صنایع' : 'Other Industries', projects: '150+' },
            ].map((stat, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.projects}</div>
                <p className="text-muted-foreground">{stat.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
