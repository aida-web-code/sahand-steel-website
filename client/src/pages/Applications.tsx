import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export default function Applications() {
  const { t, language } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-96 overflow-hidden bg-gray-900">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hydraulic-system-EHVhKJhvQvfFMHyYxLkXQu.webp"
          alt="Applications"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('nav.applications')}
            </h1>
          </div>
        </div>
      </section>

      {/* Applications Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'fa' ? 'کاربردهای محصولات' : 'Product Applications'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === 'fa'
                ? 'محصولات سهند فولاد در صنایع مختلف و کاربردهای متنوع استفاده می‌شوند'
                : 'Sahand Steel products are used in various industries and diverse applications'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: language === 'fa' ? 'صنایع هیدرولیکی' : 'Hydraulic Industry',
                desc: language === 'fa' ? 'سیستم‌های هیدرولیکی و سیلندرها' : 'Hydraulic systems and cylinders',
                icon: '⚙️',
              },
              {
                title: language === 'fa' ? 'صنایع خودروسازی' : 'Automotive Industry',
                desc: language === 'fa' ? 'قطعات و سیستم‌های خودروسازی' : 'Automotive parts and systems',
                icon: '🚗',
              },
              {
                title: language === 'fa' ? 'صنایع ساختمانی' : 'Construction Industry',
                desc: language === 'fa' ? 'تجهیزات و ماشین‌آلات ساختمانی' : 'Construction equipment and machinery',
                icon: '🏗️',
              },
              {
                title: language === 'fa' ? 'صنایع کشاورزی' : 'Agricultural Industry',
                desc: language === 'fa' ? 'ماشین‌آلات کشاورزی و تجهیزات' : 'Agricultural machinery and equipment',
                icon: '🌾',
              },
              {
                title: language === 'fa' ? 'صنایع معدن' : 'Mining Industry',
                desc: language === 'fa' ? 'تجهیزات و ماشین‌آلات معدن' : 'Mining equipment and machinery',
                icon: '⛏️',
              },
              {
                title: language === 'fa' ? 'صنایع نفت و گاز' : 'Oil & Gas Industry',
                desc: language === 'fa' ? 'تجهیزات نفت و گاز' : 'Oil and gas equipment',
                icon: '🛢️',
              },
              {
                title: language === 'fa' ? 'صنایع پلاستیک' : 'Plastics Industry',
                desc: language === 'fa' ? 'ماشین‌آلات تولید پلاستیک' : 'Plastic production machinery',
                icon: '🏭',
              },
              {
                title: language === 'fa' ? 'صنایع غذایی' : 'Food Industry',
                desc: language === 'fa' ? 'تجهیزات پردازش غذایی' : 'Food processing equipment',
                icon: '🥫',
              },
              {
                title: language === 'fa' ? 'صنایع دارویی' : 'Pharmaceutical Industry',
                desc: language === 'fa' ? 'تجهیزات تولید دارویی' : 'Pharmaceutical production equipment',
                icon: '💊',
              },
            ].map((app, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{app.title}</h3>
                <p className="text-muted-foreground text-sm">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product-Specific Applications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'کاربردهای محصولات' : 'Product-Specific Uses'}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                product: language === 'fa' ? 'میله‌های روکش کروم' : 'Chrome Plated Bars',
                uses: [
                  language === 'fa' ? 'میله‌های پیستون' : 'Piston rods',
                  language === 'fa' ? 'میله‌های سیلندر' : 'Cylinder rods',
                  language === 'fa' ? 'شفت‌های دوران' : 'Rotating shafts',
                  language === 'fa' ? 'میله‌های دستگاه‌ها' : 'Machine rods',
                ],
              },
              {
                product: language === 'fa' ? 'لوله‌های سیلندری' : 'Cylinder Tubes',
                uses: [
                  language === 'fa' ? 'سیلندرهای هیدرولیکی' : 'Hydraulic cylinders',
                  language === 'fa' ? 'سیلندرهای پنوماتیکی' : 'Pneumatic cylinders',
                  language === 'fa' ? 'سیستم‌های فشاری' : 'Pressure systems',
                  language === 'fa' ? 'سیستم‌های انتقال' : 'Transfer systems',
                ],
              },
              {
                product: language === 'fa' ? 'میله‌های پیستون' : 'Piston Rods',
                uses: [
                  language === 'fa' ? 'سیلندرهای هیدرولیکی' : 'Hydraulic cylinders',
                  language === 'fa' ? 'دستگاه‌های فشاری' : 'Pressing devices',
                  language === 'fa' ? 'ماشین‌آلات صنعتی' : 'Industrial machinery',
                  language === 'fa' ? 'تجهیزات ساختمانی' : 'Construction equipment',
                ],
              },
              {
                product: language === 'fa' ? 'شفت‌های خطی' : 'Linear Shafts',
                uses: [
                  language === 'fa' ? 'سیستم‌های راهنمایی' : 'Guide systems',
                  language === 'fa' ? 'دستگاه‌های دقیق' : 'Precision devices',
                  language === 'fa' ? 'ماشین‌آلات CNC' : 'CNC machinery',
                  language === 'fa' ? 'سیستم‌های اتوماسیون' : 'Automation systems',
                ],
              },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-primary">{item.product}</h3>
                <ul className="space-y-3">
                  {item.uses.map((use, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'آمار صنعتی' : 'Industry Statistics'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: language === 'fa' ? 'صنایع مختلف' : 'Different Industries', value: '50+' },
              { label: language === 'fa' ? 'کاربردهای متنوع' : 'Diverse Applications', value: '200+' },
              { label: language === 'fa' ? 'مشتریان صنعتی' : 'Industrial Customers', value: '740+' },
              { label: language === 'fa' ? 'کشورهای صادرات' : 'Export Countries', value: '45+' },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
