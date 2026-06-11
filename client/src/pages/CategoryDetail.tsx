import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getCategoryById } from '@/lib/products';

export default function CategoryDetail() {
  const { language, isRTL } = useLanguage();
  const [location] = useLocation();
  
  // Extract category ID from URL
  const pathParts = location.split('/').filter(Boolean);
  const categoryId = pathParts[1];

  const category = getCategoryById(categoryId);

  if (!category) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {language === 'fa' ? 'دسته‌بندی یافت نشد' : 'Category Not Found'}
          </h1>
          <p className="text-muted-foreground mb-6">
            {language === 'fa' ? 'متاسفانه این دسته‌بندی موجود نیست' : 'Sorry, this category does not exist'}
          </p>
          <Button onClick={() => window.location.href = '/products'}>
            {language === 'fa' ? 'بازگشت به محصولات' : 'Back to Products'}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <a href="/" className="text-primary hover:underline">
              {language === 'fa' ? 'خانه' : 'Home'}
            </a>
            <span className="text-muted-foreground">/</span>
            <a href="/products" className="text-primary hover:underline">
              {language === 'fa' ? 'محصولات' : 'Products'}
            </a>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">
              {language === 'fa' ? category.name : category.nameEn}
            </span>
          </div>
        </div>
      </section>

      {/* Category Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {language === 'fa' ? category.name : category.nameEn}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === 'fa' ? category.description : category.descriptionEn}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {language === 'fa' ? 'محصولات این دسته' : 'Products in This Category'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <div className="w-full h-48 bg-gray-100 overflow-hidden flex items-center justify-center border-b border-gray-200">
                  <img
                    src={product.image}
                    alt={language === 'fa' ? product.name : product.nameEn}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {language === 'fa' ? product.name : product.nameEn}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {language === 'fa' ? product.description : product.descriptionEn}
                  </p>

                  {/* Specs */}
                  <div className="mb-6 space-y-2">
                    {product.specs.slice(0, 3).map((spec: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => window.location.href = `/products/${categoryId}/${product.id}`}
                  >
                    {language === 'fa' ? 'مشاهده جزئیات' : 'View Details'}
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                  </Button>
                </div>
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
            {language === 'fa' ? 'درخواست قیمت' : 'Request Quote'}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
          </Button>
        </div>
      </section>
    </div>
  );
}
