import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { productCategories } from '@/lib/products';
import { useState } from 'react';

export default function Products() {
  const { t, language, isRTL } = useLanguage();
  const [expandedCategory, setExpandedCategory] = useState<string | null>('chrome-plated-bars');

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-96 overflow-hidden bg-gray-900">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/steel-warehouse-7DvmpQvFs83GDykybLJvUk.webp"
          alt="Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('nav.products')}
            </h1>
            <p className="text-lg text-white/90">
              {language === 'fa'
                ? 'محصولات صنعتی با کیفیت بین‌المللی'
                : 'Industrial products with international quality'}
            </p>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {language === 'fa' ? 'دسته‌بندی محصولات' : 'Product Categories'}
          </h2>

          <div className="space-y-6">
            {productCategories.map((category) => (
              <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full bg-gradient-to-r from-primary to-primary/90 text-white p-6 flex items-center justify-between hover:from-primary/90 hover:to-primary transition-colors"
                >
                  <div className="text-left">
                    <h3 className="text-2xl font-bold">
                      {language === 'fa' ? category.name : category.nameEn}
                    </h3>
                    <p className="text-white/90 mt-1">
                      {language === 'fa' ? category.description : category.descriptionEn}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 transition-transform ${
                      expandedCategory === category.id ? 'rotate-180' : ''
                    } ${isRTL ? 'mr-4' : 'ml-4'}`}
                  />
                </button>

                {/* Subcategories */}
                {expandedCategory === category.id && (
                  <div className="bg-gray-50 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.subcategories.map((subcategory) => (
                        <div
                          key={subcategory.id}
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          {/* Product Image */}
                          <div className="w-full h-48 bg-gray-100 overflow-hidden flex items-center justify-center border-b border-gray-200">
                            <img
                              src={subcategory.image}
                              alt={language === 'fa' ? subcategory.name : subcategory.nameEn}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="p-6">
                            <h4 className="text-lg font-bold mb-2 text-foreground">
                              {language === 'fa' ? subcategory.name : subcategory.nameEn}
                            </h4>
                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                              {language === 'fa' ? subcategory.description : subcategory.descriptionEn}
                            </p>

                            {/* Specs */}
                            <div className="mb-6 space-y-2">
                              {subcategory.specs.map((spec, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                  <span className="text-muted-foreground">{spec}</span>
                                </div>
                              ))}
                            </div>

                            {/* CTA Button */}
                            <Button
                              className="w-full bg-primary hover:bg-primary/90 text-white"
                              onClick={() => window.location.href = `/products/${category.id}/${subcategory.id}`}
                            >
                              {t('btn.learnMore')}
                              <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {language === 'fa' ? 'تضمین کیفیت' : 'Quality Assurance'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: language === 'fa' ? 'استانداردهای بین‌المللی' : 'International Standards',
                desc: language === 'fa' ? 'ISO، ASTM، DIN' : 'ISO, ASTM, DIN',
              },
              {
                title: language === 'fa' ? 'کنترل کیفیت سخت' : 'Strict Quality Control',
                desc: language === 'fa' ? 'هر محصول آزمایش شده' : 'Every product tested',
              },
              {
                title: language === 'fa' ? 'گواهی‌نامه‌ها' : 'Certifications',
                desc: language === 'fa' ? 'تمام گواهی‌نامه‌های معتبر' : 'All valid certificates',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'fa' ? 'نیاز به محصول خاصی دارید؟' : 'Need a Specific Product?'}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            {language === 'fa'
              ? 'تیم متخصص ما آماده کمک به شما است'
              : 'Our expert team is ready to help you'}
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
