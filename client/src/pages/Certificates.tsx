import { useLanguage } from '@/contexts/LanguageContext';
import { Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Certificates() {
  const { t, language } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-96 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('nav.certificates')}
            </h1>
          </div>
        </div>
      </section>

      {/* Certificates Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'fa' ? 'گواهی‌نامه‌ها و استانداردها' : 'Certifications & Standards'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === 'fa'
                ? 'تمام محصولات بازرگانی فولادهای آلیاژی سهند دارای گواهی‌نامه‌های بین‌المللی و استانداردهای معتبر هستند'
                : 'All Sahand Steel products have international certifications and valid standards'}
            </p>
          </div>

          {/* ISO Certificates */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              {language === 'fa' ? 'گواهی‌نامه‌های ISO' : 'ISO Certificates'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  cert: 'ISO 9001:2015',
                  title: language === 'fa' ? 'مدیریت کیفیت' : 'Quality Management',
                  desc: language === 'fa' ? 'سیستم مدیریت کیفیت' : 'Quality management system',
                },
                {
                  cert: 'ISO 14001:2015',
                  title: language === 'fa' ? 'مدیریت محیط‌زیست' : 'Environmental Management',
                  desc: language === 'fa' ? 'سیستم مدیریت محیط‌زیست' : 'Environmental management system',
                },
                {
                  cert: 'ISO 45001:2018',
                  title: language === 'fa' ? 'ایمنی و بهداشت' : 'Occupational Health & Safety',
                  desc: language === 'fa' ? 'سیستم ایمنی و بهداشت شغلی' : 'Occupational health and safety system',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2 text-primary">{item.cert}</h4>
                  <p className="font-semibold text-foreground mb-2">{item.title}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Certificates */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              {language === 'fa' ? 'گواهی‌نامه‌های کیفیت' : 'Quality Certificates'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  cert: 'ASTM',
                  title: language === 'fa' ? 'استانداردهای آمریکایی' : 'American Standards',
                  desc: language === 'fa' ? 'استانداردهای تست و مواد آمریکایی' : 'American testing and materials standards',
                },
                {
                  cert: 'DIN',
                  title: language === 'fa' ? 'استانداردهای آلمانی' : 'German Standards',
                  desc: language === 'fa' ? 'استانداردهای صنعتی آلمانی' : 'German industrial standards',
                },
                {
                  cert: 'EN',
                  title: language === 'fa' ? 'استانداردهای اروپایی' : 'European Standards',
                  desc: language === 'fa' ? 'استانداردهای اروپایی' : 'European standards',
                },
                {
                  cert: 'JIS',
                  title: language === 'fa' ? 'استانداردهای ژاپنی' : 'Japanese Standards',
                  desc: language === 'fa' ? 'استانداردهای صنعتی ژاپنی' : 'Japanese industrial standards',
                },
                {
                  cert: 'GB',
                  title: language === 'fa' ? 'استانداردهای چینی' : 'Chinese Standards',
                  desc: language === 'fa' ? 'استانداردهای صنعتی چینی' : 'Chinese industrial standards',
                },
                {
                  cert: 'GOST',
                  title: language === 'fa' ? 'استانداردهای روسی' : 'Russian Standards',
                  desc: language === 'fa' ? 'استانداردهای صنعتی روسی' : 'Russian industrial standards',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2 text-primary">{item.cert}</h4>
                  <p className="font-semibold text-foreground mb-2">{item.title}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Material Certificates */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">
              {language === 'fa' ? 'گواهی‌نامه‌های مواد' : 'Material Certificates'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  cert: 'Mill Certificates',
                  title: language === 'fa' ? 'گواهی‌نامه کارخانه' : 'Factory Certificates',
                  desc: language === 'fa' ? 'گواهی‌نامه‌های مواد اولیه' : 'Raw material certificates',
                },
                {
                  cert: 'Test Reports',
                  title: language === 'fa' ? 'گزارش‌های آزمایش' : 'Test Reports',
                  desc: language === 'fa' ? 'گزارش‌های آزمایش دقیق' : 'Detailed test reports',
                },
                {
                  cert: 'Analysis Certificates',
                  title: language === 'fa' ? 'گواهی‌نامه‌های آنالیز' : 'Analysis Certificates',
                  desc: language === 'fa' ? 'گواهی‌نامه‌های آنالیز شیمیایی' : 'Chemical analysis certificates',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2 text-primary">{item.cert}</h4>
                  <p className="font-semibold text-foreground mb-2">{item.title}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Details */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'جزئیات گواهی‌نامه‌ها' : 'Certificate Details'}
          </h2>
          <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg p-8">
            <div className="space-y-6">
              {[
                {
                  label: language === 'fa' ? 'سال اعتبار ISO 9001' : 'ISO 9001 Valid Since',
                  value: '2015',
                },
                {
                  label: language === 'fa' ? 'سال اعتبار ISO 14001' : 'ISO 14001 Valid Since',
                  value: '2018',
                },
                {
                  label: language === 'fa' ? 'سال اعتبار ISO 45001' : 'ISO 45001 Valid Since',
                  value: '2020',
                },
                {
                  label: language === 'fa' ? 'استانداردهای تایید شده' : 'Approved Standards',
                  value: 'ASTM, DIN, EN, JIS, GB, GOST',
                },
                {
                  label: language === 'fa' ? 'آخرین بازرسی' : 'Last Audit',
                  value: language === 'fa' ? 'سال 1402' : '2024',
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
      </section>

      {/* Request Certificate */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'fa' ? 'درخواست گواهی‌نامه' : 'Request Certificate'}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === 'fa'
              ? 'اگر به گواهی‌نامه خاصی نیاز دارید، لطفا با ما تماس بگیرید'
              : 'If you need a specific certificate, please contact us'}
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => window.location.href = '/contact'}
          >
            {t('btn.contact')}
          </Button>
        </div>
      </section>
    </div>
  );
}
