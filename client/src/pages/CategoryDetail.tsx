import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getCategoryById, getAllProductsInCategory, Product } from '@/lib/products';
import ProductFilter from '@/components/ProductFilter';

export default function CategoryDetail() {
  const { language, isRTL } = useLanguage();
  const [location] = useLocation();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Extract category ID from URL
  const pathParts = location.split('/').filter(Boolean);
  const categoryId = pathParts[1];

  const category = getCategoryById(categoryId);
  
  // Memoize products array to prevent new reference on every render
  const allProducts = useMemo(() => {
    return category ? getAllProductsInCategory(categoryId) : [];
  }, [categoryId, category]);

  // Initialize filtered products when category changes
  useEffect(() => {
    if (category) {
      setFilteredProducts(allProducts);
    }
  }, [allProducts, category]);

  // Stable callback reference for filter
  const handleFilter = useCallback((filtered: Product[]) => {
    setFilteredProducts(filtered);
  }, []);

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

          {/* Filter Component */}
          {category && (
            <ProductFilter 
              products={allProducts} 
              onFilter={handleFilter}
              categoryId={categoryId}
            />
          )}

          {/* Results Count */}
          {filteredProducts.length > 0 && (
            <p className="text-sm text-muted-foreground mb-6">
              {language === 'fa' 
                ? `${filteredProducts.length} محصول یافت شد`
                : `${filteredProducts.length} product(s) found`
              }
            </p>
          )}

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                {language === 'fa' 
                  ? 'محصولی با این معیارها یافت نشد'
                  : 'No products found matching your criteria'
                }
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <div className="w-full h-48 bg-gray-100 overflow-hidden flex items-center justify-center border-b border-gray-200">
                  <img
                    src={product.image}
                    alt={language === 'fa' ? product.name : product.nameEn}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-out"
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

      {/* Technical Specifications Section - Only for Honed Tubes */}
      {/* Technical Specifications Section - Hard Chrome Shafts */}
      {categoryId === 'hard-chrome-shafts' && (
        <section className="py-16 md:py-24 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {language === 'fa' ? 'مشخصات فنی' : 'Technical Specifications'}
            </h2>
            
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'مشخصه' : 'Specification'}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'مقدار' : 'Value'}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'واحد' : 'Unit'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'قطر' : 'Diameter'}</td>
                    <td className="border border-gray-300 px-4 py-3">6 - 100</td>
                    <td className="border border-gray-300 px-4 py-3">mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'طول' : 'Length'}</td>
                    <td className="border border-gray-300 px-4 py-3">500 - 6000</td>
                    <td className="border border-gray-300 px-4 py-3">mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'ضخامت روکش کروم' : 'Chrome Coating Thickness'}</td>
                    <td className="border border-gray-300 px-4 py-3">20 - 50</td>
                    <td className="border border-gray-300 px-4 py-3">μm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'سختی' : 'Hardness'}</td>
                    <td className="border border-gray-300 px-4 py-3">900 - 1100</td>
                    <td className="border border-gray-300 px-4 py-3">HV</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'زبری سطح' : 'Surface Roughness'}</td>
                    <td className="border border-gray-300 px-4 py-3">0.1 - 0.4</td>
                    <td className="border border-gray-300 px-4 py-3">μm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'استاندارد' : 'Standard'}</td>
                    <td className="border border-gray-300 px-4 py-3">ISO 9001, DIN 2391</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/catalogs/Hard_Chrome_Shafts_Catalog.pdf';
                  link.download = language === 'fa' ? 'کاتالوگ_شافت_هارد_کروم.pdf' : 'Hard_Chrome_Shafts_Catalog.pdf';
                  link.click();
                }}
              >
                {language === 'fa' ? '📥 دانلود کاتالوگ کامل' : '📥 Download Full Catalog'}
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Technical Specifications Section - Steel Linear Shafts */}
      {categoryId === 'steel-linear-shafts' && (
        <section className="py-16 md:py-24 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {language === 'fa' ? 'مشخصات فنی' : 'Technical Specifications'}
            </h2>
            
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'مشخصه' : 'Specification'}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'مقدار' : 'Value'}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'واحد' : 'Unit'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'قطر' : 'Diameter'}</td>
                    <td className="border border-gray-300 px-4 py-3">8 - 80</td>
                    <td className="border border-gray-300 px-4 py-3">mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'طول' : 'Length'}</td>
                    <td className="border border-gray-300 px-4 py-3">500 - 6000</td>
                    <td className="border border-gray-300 px-4 py-3">mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'تحمل ابعادی' : 'Dimensional Tolerance'}</td>
                    <td className="border border-gray-300 px-4 py-3">h7</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'زبری سطح' : 'Surface Roughness'}</td>
                    <td className="border border-gray-300 px-4 py-3">0.4 - 0.8</td>
                    <td className="border border-gray-300 px-4 py-3">μm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'استاندارد' : 'Standard'}</td>
                    <td className="border border-gray-300 px-4 py-3">ISO 9001, DIN 2391</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/catalogs/Linear_Shafts_Catalog.pdf';
                  link.download = language === 'fa' ? 'کاتالوگ_شافت_لاینر.pdf' : 'Linear_Shafts_Catalog.pdf';
                  link.click();
                }}
              >
                {language === 'fa' ? '📥 دانلود کاتالوگ کامل' : '📥 Download Full Catalog'}
              </Button>
            </div>
          </div>
        </section>
      )}

      {categoryId === 'honed-tube' && (
        <section className="py-16 md:py-24 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {language === 'fa' ? 'مشخصات فنی' : 'Technical Specifications'}
            </h2>
            
            {/* Specifications Table */}
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'مشخصه' : 'Specification'}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'مقدار' : 'Value'}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'واحد' : 'Unit'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      {language === 'fa' ? 'قطر داخلی' : 'Inner Diameter'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">10 - 200</td>
                    <td className="border border-gray-300 px-4 py-3">mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      {language === 'fa' ? 'ضخامت دیواره' : 'Wall Thickness'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">2 - 16</td>
                    <td className="border border-gray-300 px-4 py-3">mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      {language === 'fa' ? 'طول' : 'Length'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">500 - 6000</td>
                    <td className="border border-gray-300 px-4 py-3">mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      {language === 'fa' ? 'زبری سطح (Ra)' : 'Surface Roughness (Ra)'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">0.2 - 0.8</td>
                    <td className="border border-gray-300 px-4 py-3">μm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      {language === 'fa' ? 'تحمل ابعادی' : 'Dimensional Tolerance'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">±0.05</td>
                    <td className="border border-gray-300 px-4 py-3">mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      {language === 'fa' ? 'استاندارد' : 'Standard'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">ISO 9001, DIN 2391</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      {language === 'fa' ? 'فشار کاری' : 'Working Pressure'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">210 - 280</td>
                    <td className="border border-gray-300 px-4 py-3">bar</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      {language === 'fa' ? 'دمای کاری' : 'Working Temperature'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">-20 to +80</td>
                    <td className="border border-gray-300 px-4 py-3">°C</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Download Catalog Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/catalogs/Cylinder_Tubes_Catalog.pdf';
                  link.download = language === 'fa' ? 'کاتالوگ_لوله_سیلندری.pdf' : 'Cylinder_Tubes_Catalog.pdf';
                  link.click();
                }}
              >
                {language === 'fa' ? '📥 دانلود کاتالوگ کامل' : '📥 Download Full Catalog'}
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Technical Specifications Section - Cemented Steels */}
      {categoryId === 'cemented-steels' && (
        <section className="py-16 md:py-24 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {language === 'fa' ? 'مشخصات فنی' : 'Technical Specifications'}
            </h2>
            
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'مشخصه' : 'Specification'}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'مقدار' : 'Value'}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'واحد' : 'Unit'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'قطر' : 'Diameter'}</td>
                    <td className="border border-gray-300 px-4 py-3">10 - 150</td>
                    <td className="border border-gray-300 px-4 py-3">mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'طول' : 'Length'}</td>
                    <td className="border border-gray-300 px-4 py-3">500 - 6000</td>
                    <td className="border border-gray-300 px-4 py-3">mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'سختی سطح' : 'Surface Hardness'}</td>
                    <td className="border border-gray-300 px-4 py-3">58 - 62</td>
                    <td className="border border-gray-300 px-4 py-3">HRC</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'عمق سمانته' : 'Case Depth'}</td>
                    <td className="border border-gray-300 px-4 py-3">0.8 - 1.2</td>
                    <td className="border border-gray-300 px-4 py-3">mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'استاندارد' : 'Standard'}</td>
                    <td className="border border-gray-300 px-4 py-3">ISO 9001, DIN 3505</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/catalogs/Cemented_Steel_Catalog.pdf';
                  link.download = language === 'fa' ? 'کاتالوگ_فولاد_سمانته.pdf' : 'Cemented_Steel_Catalog.pdf';
                  link.click();
                }}
              >
                {language === 'fa' ? '📥 دانلود کاتالوگ کامل' : '📥 Download Full Catalog'}
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Technical Specifications Section - Plastic Mold Steels */}
      {categoryId === 'plastic-mold-steels' && (
        <section className="py-16 md:py-24 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {language === 'fa' ? 'مشخصات فنی' : 'Technical Specifications'}
            </h2>
            
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'مشخصه' : 'Specification'}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'مقدار' : 'Value'}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      {language === 'fa' ? 'واحد' : 'Unit'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'قطر' : 'Diameter'}</td>
                    <td className="border border-gray-300 px-4 py-3">20 - 200</td>
                    <td className="border border-gray-300 px-4 py-3">mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'طول' : 'Length'}</td>
                    <td className="border border-gray-300 px-4 py-3">500 - 6000</td>
                    <td className="border border-gray-300 px-4 py-3">mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'سختی' : 'Hardness'}</td>
                    <td className="border border-gray-300 px-4 py-3">28 - 38</td>
                    <td className="border border-gray-300 px-4 py-3">HRC</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'زبری سطح' : 'Surface Roughness'}</td>
                    <td className="border border-gray-300 px-4 py-3">0.4 - 0.8</td>
                    <td className="border border-gray-300 px-4 py-3">μm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">{language === 'fa' ? 'استاندارد' : 'Standard'}</td>
                    <td className="border border-gray-300 px-4 py-3">ISO 9001, DIN 1.2738</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/catalogs/Plastic_Mold_Steel_Catalog.pdf';
                  link.download = language === 'fa' ? 'کاتالوگ_فولاد_قالب_پلاستیک.pdf' : 'Plastic_Mold_Steel_Catalog.pdf';
                  link.click();
                }}
              >
                {language === 'fa' ? '📥 دانلود کاتالوگ کامل' : '📥 Download Full Catalog'}
              </Button>
            </div>
          </div>
        </section>
      )}

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
