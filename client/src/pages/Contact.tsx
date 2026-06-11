import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { t, language, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('nav.contact')}
          </h1>
          <p className="text-lg opacity-90 max-w-3xl">
            {language === 'fa'
              ? 'با تیم متخصص ما تماس بگیرید و بهترین راه‌حل برای نیازهای خود را بیابید'
              : 'Contact our expert team and find the best solution for your needs'}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Phone Card */}
            <div className="bg-card border border-border rounded-lg p-8">
              <Phone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">
                {language === 'fa' ? 'تلفن' : 'Phone'}
              </h3>
              <a
                href="tel:+982166632876"
                className="text-primary hover:underline font-semibold"
              >
                +98 21 6663 2876
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-card border border-border rounded-lg p-8">
              <Mail className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">
                {language === 'fa' ? 'ایمیل' : 'Email'}
              </h3>
              <a
                href="mailto:info@sahandsteel.com"
                className="text-primary hover:underline font-semibold break-all"
              >
                info@sahandsteel.com
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-card border border-border rounded-lg p-8">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">
                {language === 'fa' ? 'آدرس' : 'Address'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('company.address')}
              </p>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                {language === 'fa' ? 'فرم تماس' : 'Contact Form'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'fa' ? 'نام شما' : 'Your Name'}
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={language === 'fa' ? 'نام کامل' : 'Full Name'}
                    required
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'fa' ? 'ایمیل' : 'Email'}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'fa' ? 'تلفن' : 'Phone'}
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+98 21 ..."
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'fa' ? 'موضوع' : 'Subject'}
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={language === 'fa' ? 'موضوع پیام' : 'Message Subject'}
                    required
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'fa' ? 'پیام' : 'Message'}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={language === 'fa' ? 'پیام خود را بنویسید...' : 'Write your message...'}
                    rows={6}
                    required
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={submitted}
                >
                  {submitted
                    ? language === 'fa'
                      ? 'ارسال شد!'
                      : 'Sent!'
                    : t('btn.send')}
                </Button>
              </form>
            </div>

            {/* Business Hours */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                {language === 'fa' ? 'ساعات کاری' : 'Business Hours'}
              </h2>
              <div className="space-y-6">
                <div className="bg-secondary/10 border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">
                        {language === 'fa' ? 'شنبه تا چهارشنبه' : 'Saturday to Wednesday'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fa' ? '8:00 صبح تا 5:00 عصر' : '8:00 AM to 5:00 PM'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">
                        {language === 'fa' ? 'پنج‌شنبه' : 'Thursday'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fa' ? '8:00 صبح تا 12:00 ظهر' : '8:00 AM to 12:00 PM'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">
                        {language === 'fa' ? 'جمعه' : 'Friday'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fa' ? 'تعطیل' : 'Closed'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 bg-primary text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">
                  {language === 'fa' ? 'تماس سریع' : 'Quick Contact'}
                </h3>
                <p className="mb-4 opacity-90">
                  {language === 'fa'
                    ? 'برای سوالات فوری، می‌توانید مستقیماً با ما تماس بگیرید'
                    : 'For urgent inquiries, you can reach us directly'}
                </p>
                <a
                  href="https://wa.me/982166632876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-primary px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
