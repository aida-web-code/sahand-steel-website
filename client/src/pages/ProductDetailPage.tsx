import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getCategoryById, getProductById, getAllProductsInCategory, Product as ProductType } from '@/lib/products';

export default function ProductDetailPage() {
  const { language, isRTL } = useLanguage();
  const [location] = useLocation();
  
  // Extract category and product IDs from URL
  const pathParts = location.split('/').filter(Boolean);
  const categoryId = pathParts[1];
  const productId = pathParts[2];

  const category = getCategoryById(categoryId);
  const product = category ? getProductById(categoryId, productId) : null;

  if (!category || !product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {language === 'fa' ? 'محصول یافت نشد' : 'Product Not Found'}
          </h1>
          <p className="text-muted-foreground mb-6">
            {language === 'fa' ? 'متاسفانه این محصول موجود نیست' : 'Sorry, this product does not exist'}
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
            <a href={`/products/${categoryId}`} className="text-primary hover:underline">
              {language === 'fa' ? category.name : category.nameEn}
            </a>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">
              {language === 'fa' ? product.name : product.nameEn}
            </span>
          </div>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={language === 'fa' ? product.name : product.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {language === 'fa' ? product.name : product.nameEn}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {language === 'fa' ? product.description : product.descriptionEn}
              </p>

              {/* Specifications */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold mb-4 text-foreground">
                  {language === 'fa' ? 'مشخصات فنی' : 'Technical Specifications'}
                </h3>
                <ul className="space-y-3">
                  {product.specs.map((spec: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  {language === 'fa' ? 'درخواست قیمت' : 'Request Quote'}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = '/contact'}
                >
                  {language === 'fa' ? 'تماس با ما' : 'Contact Us'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fa' ? 'درباره این محصول' : 'About This Product'}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {language === 'fa'
                  ? 'این محصول با استفاده از بهترین فناوری‌های تولیدی و کنترل کیفیت سخت تولید می‌شود. ما تضمین می‌دهیم که هر محصول با استانداردهای بین‌المللی مطابقت دارد.'
                  : 'This product is manufactured using the latest production technologies and strict quality control. We guarantee that every product meets international standards.'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fa'
                  ? 'تیم متخصص ما آماده است تا برای نیازهای خاص شما راه‌حل‌های سفارشی ارائه دهد.'
                  : 'Our expert team is ready to provide customized solutions for your specific needs.'}
              </p>
            </div>

            {/* Advantages */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fa' ? 'مزایا' : 'Advantages'}
              </h2>
              <ul className="space-y-4">
                {[
                  language === 'fa' ? 'کیفیت بالا و استانداردهای بین‌المللی' : 'High quality and international standards',
                  language === 'fa' ? 'قیمت رقابتی' : 'Competitive pricing',
                  language === 'fa' ? 'تحویل سریع' : 'Fast delivery',
                  language === 'fa' ? 'پشتیبانی فنی عالی' : 'Excellent technical support',
                  language === 'fa' ? 'سفارشی‌سازی ممکن' : 'Customization available',
                ].map((advantage, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {language === 'fa' ? 'محصولات مرتبط' : 'Related Products'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getAllProductsInCategory(categoryId).slice(0, 3).map((related: ProductType) => (
              <div
                key={related.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-40 bg-gray-100 overflow-hidden">
                  <img
                    src={related.image}
                    alt={language === 'fa' ? related.name : related.nameEn}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-2">
                    {language === 'fa' ? related.name : related.nameEn}
                  </h3>
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => window.location.href = `/products/${categoryId}/${related.id}`}
                  >
                    {language === 'fa' ? 'مشاهده' : 'View'}
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
            {language === 'fa' ? 'آماده برای سفارش؟' : 'Ready to Order?'}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            {language === 'fa'
              ? 'با تیم متخصص ما تماس بگیرید و قیمت بهترین را دریافت کنید'
              : 'Contact our expert team and get the best price'}
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
