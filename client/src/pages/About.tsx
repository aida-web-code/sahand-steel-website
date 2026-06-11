import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, Award, Users, Zap } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-96 overflow-hidden bg-gray-900">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/manufacturing-facility-hpqYJaKbM5sRnKy5uhmyto.webp"
          alt="Manufacturing Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('nav.about')}
            </h1>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'fa' ? 'درباره سهند فولاد' : 'About Sahand Steel'}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {language === 'fa'
                  ? 'سهند فولاد یکی از پیشرو‌ترین تامین‌کنندگان فولادهای صنعتی در ایران است. با 38 سال تجربه، ما متخصص در تولید و تامین میله‌های روکش کروم، لوله‌های سیلندری، میله‌های پیستون و شفت‌های خطی برای صنایع مختلف ایران هستیم.'
                  : 'Sahand Steel is one of the leading industrial steel suppliers in Iran. With 38 years of experience, we specialize in manufacturing and supplying chrome plated bars, cylinder tubes, piston rods, and linear shafts for various Iranian industries.'}
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {language === 'fa'
                  ? 'تعهد ما به کیفیت، نوآوری و خدمات مشتری برتر ما را به انتخاب اول برای مشتریان در سراسر ایران تبدیل کرده است.'
                  : 'Our commitment to quality, innovation, and excellent customer service has made us the first choice for customers throughout Iran.'}
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/steel-warehouse-7DvmpQvFs83GDykybLJvUk.webp"
                alt="Steel Warehouse"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                {language === 'fa' ? 'ماموریت' : 'Mission'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fa'
                  ? 'فراهم‌کردن فولادهای صنعتی با کیفیت بین‌المللی برای صنایع مختلف ایران و کمک به توسعه صنعت و تکنولوژی کشور.'
                  : 'Providing industrial steels with international quality standards for various Iranian industries and contributing to Iran\'s industrial and technological development.'}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                {language === 'fa' ? 'دید' : 'Vision'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fa'
                  ? 'تبدیل شدن به تامین‌کننده معتبر فولادهای صنعتی در ایران با کیفیت برتر و خدمات نوآورانه.'
                  : 'Becoming a trusted industrial steel supplier in Iran with superior quality and innovative services.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'ارزش‌های اساسی' : 'Core Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: language === 'fa' ? 'کیفیت' : 'Quality',
                desc: language === 'fa' ? 'کیفیت برتر در هر محصول' : 'Superior quality in every product',
              },
              {
                title: language === 'fa' ? 'اعتماد' : 'Integrity',
                desc: language === 'fa' ? 'صداقت و شفافیت در تمام معاملات' : 'Honesty and transparency in all dealings',
              },
              {
                title: language === 'fa' ? 'نوآوری' : 'Innovation',
                desc: language === 'fa' ? 'بهبوی مستمر و تکنولوژی نوین' : 'Continuous improvement and modern technology',
              },
              {
                title: language === 'fa' ? 'خدمت' : 'Service',
                desc: language === 'fa' ? 'خدمات مشتری برتر و پاسخ‌گویی سریع' : 'Excellent customer service and quick response',
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'توانمندی‌های ما' : 'Our Capabilities'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: language === 'fa' ? 'تولید' : 'Manufacturing',
                items: [
                  language === 'fa' ? 'میله‌های روکش کروم' : 'Chrome plated bars',
                  language === 'fa' ? 'لوله‌های سیلندری' : 'Cylinder tubes',
                  language === 'fa' ? 'میله‌های پیستون' : 'Piston rods',
                  language === 'fa' ? 'شفت‌های خطی' : 'Linear shafts',
                ],
              },
              {
                title: language === 'fa' ? 'خدمات' : 'Services',
                items: [
                  language === 'fa' ? 'کنترل کیفیت جامع' : 'Comprehensive quality control',
                  language === 'fa' ? 'تحویل سریع' : 'Fast delivery',
                  language === 'fa' ? 'پشتیبانی فنی' : 'Technical support',
                  language === 'fa' ? 'سفارشی‌سازی' : 'Customization',
                ],
              },
            ].map((section, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
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

      {/* Steel Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'انواع فولادهای تامین‌شده' : 'Steel Types Supplied'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: language === 'fa' ? 'فولاد های کربنی' : 'Carbon Steels', id: 'carbon' },
              { name: language === 'fa' ? 'فولاد های آلیاژی' : 'Alloy Steels', id: 'alloy' },
              { name: language === 'fa' ? 'فولادهای ابزاری گرمکار' : 'Hot Work Tool Steels', id: 'hot-work' },
              { name: language === 'fa' ? 'فولاد های ابزاری سردکار' : 'Cold Work Tool Steels', id: 'cold-work' },
              { name: language === 'fa' ? 'فولاد های قالب پلاستیک' : 'Plastic Mold Steels', id: 'mold' },
            ].map((steel, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:bg-primary/5 transition-colors">
                <p className="font-semibold text-foreground text-sm">{steel.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'دپارتمان‌های شرکت' : 'Company Departments'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: language === 'fa' ? 'دپارتمان مشاوره' : 'Consulting Department', desc: language === 'fa' ? 'مشاوره تخصصی' : 'Expert Consulting' },
              { name: language === 'fa' ? 'دپارتمان مهندسی' : 'Engineering Department', desc: language === 'fa' ? 'حل‌های مهندسی' : 'Engineering Solutions' },
              { name: language === 'fa' ? 'دپارتمان مالی و حقوقی' : 'Finance & Legal', desc: language === 'fa' ? 'خدمات مالی' : 'Financial Services' },
              { name: language === 'fa' ? 'دپارتمان طراحی' : 'Design Department', desc: language === 'fa' ? 'طراحی و توسعه' : 'Design & Development' },
              { name: language === 'fa' ? 'دپارتمان امور مشتریان' : 'Customer Affairs', desc: language === 'fa' ? 'خدمات مشتری' : 'Customer Service' },
            ].map((dept, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="font-bold text-foreground mb-2">{dept.name}</h3>
                <p className="text-sm text-muted-foreground">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'تیم متخصص' : 'Expert Team'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: language === 'fa' ? 'مدیریت' : 'Management', count: '15+' },
              { role: language === 'fa' ? 'مهندسی' : 'Engineering', count: '25+' },
              { role: language === 'fa' ? 'تولید' : 'Production', count: '120+' },
              { role: language === 'fa' ? 'کنترل کیفیت' : 'Quality Control', count: '30+' },
            ].map((dept, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{dept.count}</div>
                <p className="text-muted-foreground">{dept.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
