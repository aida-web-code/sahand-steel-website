import { useLanguage } from '@/contexts/LanguageContext';
import { Award, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Certificates() {
  const { t, language } = useLanguage();

  const certificates = [
    {
      category: language === 'fa' ? 'گواهی‌نامه‌های ISO' : 'ISO Certificates',
      items: [
        { name: 'ISO 9001:2015', desc: language === 'fa' ? 'مدیریت کیفیت' : 'Quality Management' },
        { name: 'ISO 14001:2015', desc: language === 'fa' ? 'مدیریت محیط‌زیست' : 'Environmental Management' },
        { name: 'ISO 45001:2018', desc: language === 'fa' ? 'ایمنی و بهداشت کار' : 'Occupational Health & Safety' },
      ],
    },
    {
      category: language === 'fa' ? 'گواهی‌نامه‌های کیفیت' : 'Quality Certificates',
      items: [
        { name: language === 'fa' ? 'گواهی کیفیت مواد' : 'Material Quality Certificate', desc: language === 'fa' ? 'تایید کیفیت مواد اولیه' : 'Raw material quality verification' },
        { name: language === 'fa' ? 'گواهی آزمایش' : 'Test Certificate', desc: language === 'fa' ? 'نتایج آزمایش‌های مکانیکی' : 'Mechanical test results' },
        { name: language === 'fa' ? 'گواهی تطابق' : 'Conformance Certificate', desc: language === 'fa' ? 'تطابق با استانداردهای بین‌المللی' : 'International standards compliance' },
      ],
    },
    {
      category: language === 'fa' ? 'گواهی‌نامه‌های مواد' : 'Material Certificates',
      items: [
        { name: language === 'fa' ? 'گواهی آنالیز شیمیایی' : 'Chemical Analysis Report', desc: language === 'fa' ? 'تحلیل دقیق ترکیب شیمیایی' : 'Detailed chemical composition analysis' },
        { name: language === 'fa' ? 'گواهی آزمایش فیزیکی' : 'Physical Test Report', desc: language === 'fa' ? 'نتایج آزمایش‌های فیزیکی' : 'Physical testing results' },
        { name: language === 'fa' ? 'گواهی مبدا' : 'Certificate of Origin', desc: language === 'fa' ? 'مبدا و منشأ مواد' : 'Material origin and source' },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('nav.certificates')}
          </h1>
          <p className="text-lg opacity-90 max-w-3xl">
            {language === 'fa'
              ? 'تمام محصولات سهند فولاد دارای گواهی‌نامه‌های معتبر بین‌المللی هستند'
              : 'All Sahand Steel products have valid international certificates'}
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {certificates.map((certGroup, groupIndex) => (
            <div key={groupIndex} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                {certGroup.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certGroup.items.map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => alert(language === 'fa' ? 'دانلود فایل...' : 'Downloading file...')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {language === 'fa' ? 'دانلود' : 'Download'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'درباره گواهی‌نامه‌ها' : 'About Our Certificates'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">
                {language === 'fa' ? 'اعتبار بین‌المللی' : 'International Validity'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'fa'
                  ? 'تمام گواهی‌نامه‌های ما توسط نهادهای بین‌المللی معتبر صادر شده‌اند و در سراسر جهان مورد تایید هستند.'
                  : 'All our certificates are issued by recognized international bodies and are valid worldwide.'}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">
                {language === 'fa' ? 'بروزرسانی منظم' : 'Regular Updates'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'fa'
                  ? 'گواهی‌نامه‌های ما به طور منظم بروزرسانی و تجدید می‌شوند تا مطابقت با آخرین استانداردهای بین‌المللی را حفظ کنند.'
                  : 'Our certificates are regularly updated and renewed to maintain compliance with latest international standards.'}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">
                {language === 'fa' ? 'شفافیت کامل' : 'Full Transparency'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'fa'
                  ? 'ما تمام گواهی‌نامه‌های خود را برای بررسی و تایید مشتریان در دسترس قرار می‌دهیم.'
                  : 'We make all our certificates available for customer review and verification.'}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">
                {language === 'fa' ? 'تضمین کیفیت' : 'Quality Guarantee'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'fa'
                  ? 'هر محصول با گواهی‌نامه‌های مربوطه تحویل داده می‌شود و کیفیت آن تضمین شده است.'
                  : 'Every product is delivered with relevant certificates and quality is guaranteed.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Certificate */}
      <section className="py-16 md:py-24 bg-background">
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
