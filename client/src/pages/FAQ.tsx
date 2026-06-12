import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FAQItem {
  id: string;
  question_fa: string;
  question_en: string;
  answer_fa: string;
  answer_en: string;
  category: 'technical' | 'delivery' | 'quality' | 'general';
}

const faqItems: FAQItem[] = [
  {
    id: 'tech-1',
    question_fa: 'تفاوت بین شافتهای هارد کروم و شافتهای لاینر چیست؟',
    question_en: 'What is the difference between hard chrome shafts and linear shafts?',
    answer_fa: 'شافتهای هارد کروم دارای روکش کروم سخت (20-50 میکرومتر) با سختی 900-1100 HV هستند و برای کاربردهای فشار بالا مناسب هستند. شافتهای لاینر بدون روکش یا با روکش کم بوده و برای کاربردهای حرکت خطی استفاده می‌شوند.',
    answer_en: 'Hard chrome shafts have a hard chrome coating (20-50 micrometers) with hardness of 900-1100 HV and are suitable for high-pressure applications. Linear shafts have minimal or no coating and are used for linear motion applications.',
    category: 'technical'
  },
  {
    id: 'tech-2',
    question_fa: 'مشخصات سطح برای لوله‌های سیلندری چیست؟',
    question_en: 'What are the surface specifications for cylinder tubes?',
    answer_fa: 'لوله‌های سیلندری داخل سنگخورده دارای زبری سطح 0.2-0.8 میکرومتر، تحمل ابعادی ±0.05 میلی‌متر، و فشار کاری 210-280 بار هستند. این مشخصات مطابق با استانداردهای ISO 9001 و DIN 2391 است.',
    answer_en: 'Cylinder tubes have surface roughness of 0.2-0.8 micrometers, dimensional tolerance of ±0.05 mm, and working pressure of 210-280 bar. These specifications comply with ISO 9001 and DIN 2391 standards.',
    category: 'technical'
  },
  {
    id: 'tech-3',
    question_fa: 'آیا می‌توانید مشخصات سفارشی تولید کنید؟',
    question_en: 'Can you produce custom specifications?',
    answer_fa: 'بله، ما می‌توانیم محصولات سفارشی تولید کنیم. برای جزئیات بیشتر لطفاً با تیم فروش ما تماس بگیرید و نیازهای خاص خود را توضیح دهید.',
    answer_en: 'Yes, we can produce custom specifications. Please contact our sales team for more details and explain your specific requirements.',
    category: 'technical'
  },
  {
    id: 'tech-4',
    question_fa: 'فولادهای سمانته چه مزایایی دارند؟',
    question_en: 'What are the advantages of cemented steels?',
    answer_fa: 'فولادهای سمانته دارای سختی سطح بالا (58-62 HRC) با هسته نرم هستند. این ترکیب باعث می‌شود که آنها مقاومت خوبی در برابر سایش داشته باشند و در عین حال شکست‌پذیری کمتری نسبت به فولادهای کاملاً سخت داشته باشند.',
    answer_en: 'Cemented steels have high surface hardness (58-62 HRC) with a soft core. This combination provides excellent wear resistance while maintaining better toughness compared to fully hardened steels.',
    category: 'technical'
  },
  {
    id: 'delivery-1',
    question_fa: 'زمان تحویل معمولی چقدر است؟',
    question_en: 'What is the typical delivery time?',
    answer_fa: 'برای سفارشات استاندارد، زمان تحویل معمولاً 2-4 هفته است. برای سفارشات بزرگ یا مشخصات خاص، لطفاً با ما تماس بگیرید تا زمان تحویل را مشخص کنیم.',
    answer_en: 'For standard orders, typical delivery time is 2-4 weeks. For large orders or custom specifications, please contact us to confirm delivery time.',
    category: 'delivery'
  },
  {
    id: 'delivery-2',
    question_fa: 'آیا تحویل فوری ممکن است؟',
    question_en: 'Is expedited delivery possible?',
    answer_fa: 'بله، برای سفارشات فوری می‌توانیم تحویل سریع‌تری فراهم کنیم. لطفاً با تیم فروش ما تماس بگیرید تا هزینه و زمان تحویل فوری را مشخص کنیم.',
    answer_en: 'Yes, we can provide expedited delivery for urgent orders. Please contact our sales team to confirm the cost and expedited delivery time.',
    category: 'delivery'
  },
  {
    id: 'delivery-3',
    question_fa: 'آیا شما ارسال بین‌المللی انجام می‌دهید؟',
    question_en: 'Do you provide international shipping?',
    answer_fa: 'ما خدمات ارسال محدودی به کشورهای منتخب فراهم می‌کنیم. برای اطلاعات بیشتر درباره ارسال به کشور خود، لطفاً با ما تماس بگیرید.',
    answer_en: 'We provide limited shipping services to select countries. For information about shipping to your country, please contact us.',
    category: 'delivery'
  },
  {
    id: 'quality-1',
    question_fa: 'چگونه کیفیت محصولات تضمین می‌شود؟',
    question_en: 'How is product quality assured?',
    answer_fa: 'کیفیت تضمینشده در هر مرحله از تولید است. ما استفاده از مواد اولیه با کیفیت بالا، استانداردهای سختگیرانه تولید، و آزمایش‌های دقیق را انجام می‌دهیم. تمام محصولات مطابق با استانداردهای ISO 9001 و DIN 2391 هستند.',
    answer_en: 'Quality is assured at every stage of production. We use high-quality raw materials, strict production standards, and rigorous testing. All products comply with ISO 9001 and DIN 2391 standards.',
    category: 'quality'
  },
  {
    id: 'quality-2',
    question_fa: 'آیا گواهی‌های کیفیت ارائه می‌شوند؟',
    question_en: 'Are quality certificates provided?',
    answer_fa: 'بله، ما گواهی‌های کیفیت ISO، گواهی‌های مواد، و گواهی‌های آزمایش را برای تمام محصولات فراهم می‌کنیم. این گواهی‌ها با هر سفارش ارسال می‌شوند.',
    answer_en: 'Yes, we provide ISO quality certificates, material certificates, and test certificates for all products. These certificates are sent with each order.',
    category: 'quality'
  },
  {
    id: 'general-1',
    question_fa: 'حداقل مقدار سفارش چقدر است؟',
    question_en: 'What is the minimum order quantity?',
    answer_fa: 'حداقل مقدار سفارش بسته به محصول متفاوت است. برای اطلاعات دقیق، لطفاً با تیم فروش ما تماس بگیرید.',
    answer_en: 'Minimum order quantity varies by product. For specific information, please contact our sales team.',
    category: 'general'
  },
  {
    id: 'general-2',
    question_fa: 'شرایط پرداخت چیست؟',
    question_en: 'What are the payment terms?',
    answer_fa: 'ما شرایط پرداخت انعطاف‌پذیری را برای سفارشات بزرگ ارائه می‌دهیم. برای جزئیات بیشتر، لطفاً با تیم فروش ما تماس بگیرید.',
    answer_en: 'We offer flexible payment terms for large orders. For more details, please contact our sales team.',
    category: 'general'
  },
];

export default function FAQ() {
  const { language } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: 'technical', label_fa: 'سوالات فنی', label_en: 'Technical Questions' },
    { id: 'delivery', label_fa: 'زمان تحویل', label_en: 'Delivery Time' },
    { id: 'quality', label_fa: 'کیفیت', label_en: 'Quality' },
    { id: 'general', label_fa: 'سوالات عمومی', label_en: 'General Questions' },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'fa' ? 'سوالات متداول' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {language === 'fa'
              ? 'پاسخ به سوالات رایج درباره محصولات، تحویل، و کیفیت'
              : 'Answers to common questions about products, delivery, and quality'}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {categories.map((category) => {
            const categoryFaqs = faqItems.filter((item) => item.category === category.id);
            return (
              <div key={category.id} className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
                  {language === 'fa' ? category.label_fa : category.label_en}
                </h2>

                <div className="space-y-4">
                  {categoryFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors"
                    >
                      <button
                        onClick={() => toggleExpand(faq.id)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                      >
                        <span className="font-semibold text-gray-900">
                          {language === 'fa' ? faq.question_fa : faq.question_en}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-primary transition-transform ${
                            expandedId === faq.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {expandedId === faq.id && (
                        <div className="px-6 py-4 bg-white border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">
                            {language === 'fa' ? faq.answer_fa : faq.answer_en}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'fa' ? 'سوال دیگری دارید؟' : 'Have Another Question?'}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === 'fa'
              ? 'تیم متخصص ما آماده پاسخ به تمام سوالات شما است'
              : 'Our expert team is ready to answer all your questions'}
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            {language === 'fa' ? 'تماس با ما' : 'Contact Us'}
          </a>
        </div>
      </section>
    </div>
  );
}
