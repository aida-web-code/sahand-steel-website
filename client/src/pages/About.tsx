import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, Award, Users, Zap } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('nav.about')}
          </h1>
          <p className="text-lg opacity-90 max-w-3xl">
            {language === 'fa'
              ? 'بازرگانی فولادهای آلیاژی سهند متشکل از دو شرکت ثبت‌شده با سابقه بیش از ۳۸ سال در خدمات صنایع کشور'
              : 'Sahand Alloy Steels Trading, composed of two registered companies with over 38 years of service to domestic industries'}
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'fa' ? 'تاریخچه شرکت' : 'Company History'}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {language === 'fa'
                    ? 'بازرگانی فولادهای آلیاژی سهند متشکل از دو شرکت ثبت‌شده به نام‌های جهان فولاد سهند و آسیا فولاد سهند با سابقه بیش از ربع قرن در خدمات صنایع کشور می‌باشد.'
                    : 'Sahand Alloy Steels Trading consists of two registered companies: Jahan Folad Sahand and Asia Folad Sahand, with over 25 years of service to domestic industries.'}
                </p>
                <p>
                  {language === 'fa'
                    ? 'این بازرگانی خدمات تهیه و توزیع مواد اولیه فولادی را با در اختیار داشتن ۲۲ نفر پرسنل و ۳ نمایندگی انحصاری به انجام می‌رساند.'
                    : 'The company provides steel material supply and distribution services with 22 personnel and 3 exclusive representatives.'}
                </p>
                <p>
                  {language === 'fa'
                    ? 'عمده شرکت‌های طرف قرارداد این بازرگانی شرکت نیمت رومانی و شرکت‌های بیلای و داجین چین و دیگر شرکت‌های معتبر بین‌المللی می‌باشد.'
                    : 'Main contract partners include Nimet Romania, Bilay and Dakin from China, and other reputable international companies.'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '38+', label: language === 'fa' ? 'سال تجربه' : 'Years Experience' },
                { number: '740+', label: language === 'fa' ? 'مشتری راضی' : 'Happy Clients' },
                { number: '450+', label: language === 'fa' ? 'پروژه انجام شده' : 'Projects Completed' },
                { number: '22', label: language === 'fa' ? 'متخصص' : 'Specialists' },
              ].map((stat, index) => (
                <div key={index} className="bg-secondary/10 border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'خدمات ما' : 'Our Services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: language === 'fa' ? 'برش دقیق' : 'Precise Cutting',
                desc: language === 'fa'
                  ? 'برش دقیق فولاد تا ۸۰۰ میلیمتر با ۵ دستگاه اره نواری پیشرفته'
                  : 'Precise steel cutting up to 800mm with 5 advanced band saw machines',
              },
              {
                icon: Users,
                title: language === 'fa' ? 'کارشناسان متخصص' : 'Expert Team',
                desc: language === 'fa'
                  ? 'تیم متخصص برای مشاوره و انتخاب بهترین محصول برای پروژه شما'
                  : 'Expert team for consultation and selecting the best product for your project',
              },
              {
                icon: Award,
                title: language === 'fa' ? 'تجهیزات پیشرفته' : 'Advanced Equipment',
                desc: language === 'fa'
                  ? 'تجهیزات مدرن برای تضمین کیفیت و دقت بالا'
                  : 'Modern equipment to ensure high quality and precision',
              },
              {
                icon: Zap,
                title: language === 'fa' ? 'آنالیز ساخت' : 'Quality Analysis',
                desc: language === 'fa'
                  ? 'آنالیز دقیق ساخت و کیفیت محصولات طبق استانداردهای بین‌المللی'
                  : 'Precise analysis of product structure and quality according to international standards',
              },
            ].map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'تجهیزات و امکانات' : 'Facilities & Equipment'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: language === 'fa' ? 'نمایشگاه‌ها' : 'Showrooms',
                description: language === 'fa'
                  ? '۲ نمایشگاه سرپوشیده با مساحت ۲۵۰۰ متر مربع'
                  : '2 covered showrooms with 2,500 m² total area',
              },
              {
                title: language === 'fa' ? 'اره‌های نواری' : 'Band Saws',
                description: language === 'fa'
                  ? '۵ دستگاه اره نواری برای برش دقیق تا ۸۰۰ میلیمتر'
                  : '5 band saw machines for precise cutting up to 800mm',
              },
              {
                title: language === 'fa' ? 'تیم متخصص' : 'Expert Team',
                description: language === 'fa'
                  ? '۲۲ نفر پرسنل متخصص و ۳ نمایندگی انحصاری'
                  : '22 specialized personnel and 3 exclusive representatives',
              },
            ].map((facility, index) => (
              <div key={index} className="bg-secondary/10 border border-border rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold mb-3 text-primary">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'شرکای ما' : 'Our Partners'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Nimet Romania' },
              { name: 'Bilay China' },
              { name: 'Dakin China' },
              { name: language === 'fa' ? 'شرکت‌های معتبر بین‌المللی' : 'International Partners' },
            ].map((partner, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary font-bold text-2xl">{partner.name[0]}</span>
                </div>
                <h3 className="font-semibold text-foreground">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'دپارتمان‌های شرکت' : 'Company Departments'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              language === 'fa' ? 'دپارتمان مشاوره' : 'Consultation',
              language === 'fa' ? 'دپارتمان مهندسی' : 'Engineering',
              language === 'fa' ? 'دپارتمان مالی' : 'Finance & Legal',
              language === 'fa' ? 'دپارتمان طراحی' : 'Design',
              language === 'fa' ? 'دپارتمان مشتریان' : 'Customer Service',
            ].map((dept, index) => (
              <div key={index} className="bg-secondary/10 border border-border rounded-lg p-6 text-center hover:bg-primary/10 transition-colors">
                <p className="font-semibold text-foreground">{dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
