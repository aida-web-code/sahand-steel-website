import { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { X, Search } from 'lucide-react';
import { Product } from '@/lib/products';
import { useFilterState } from '@/hooks/useFilterState';

interface ProductFilterProps {
  products: Product[];
  onFilter: (filteredProducts: Product[]) => void;
  categoryId: string;
}

export default function ProductFilter({ products, onFilter, categoryId }: ProductFilterProps) {
  const { language, isRTL } = useLanguage();
  const {
    searchQuery,
    setSearchQuery,
    selectedAlloyType,
    setSelectedAlloyType,
    selectedCoating,
    setSelectedCoating,
    diameterMin,
    setDiameterMin,
    diameterMax,
    setDiameterMax,
    resetFilters,
    isLoaded,
  } = useFilterState(categoryId);
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract unique filter options
  const alloyTypes = useMemo(() => {
    const types = new Set(products.map(p => p.alloyType).filter((t): t is string => Boolean(t)));
    return Array.from(types).sort();
  }, [products]);

  const coatings = useMemo(() => {
    const coats = new Set(products.map(p => p.coating).filter((c): c is string => Boolean(c)));
    return Array.from(coats).sort();
  }, [products]);

  // Filter products based on all criteria
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query) ||
                           product.nameEn.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query) ||
                           product.descriptionEn.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }

      // Alloy type filter
      if (selectedAlloyType && product.alloyType !== selectedAlloyType) {
        return false;
      }

      // Coating filter
      if (selectedCoating && product.coating !== selectedCoating) {
        return false;
      }

      // Diameter range filter
      if (product.diameter) {
        if (diameterMin !== null && product.diameter.max < diameterMin) {
          return false;
        }
        if (diameterMax !== null && product.diameter.min > diameterMax) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedAlloyType, selectedCoating, diameterMin, diameterMax, products]);

  // Call onFilter in useEffect to avoid setState during render
  useEffect(() => {
    onFilter(filteredProducts);
  }, [filteredProducts, onFilter])

  const handleReset = () => {
    resetFilters();
  };

  const hasActiveFilters = searchQuery || selectedAlloyType !== '' || selectedCoating !== '' || diameterMin !== null || diameterMax !== null;

  // Don't render until filters are loaded from localStorage
  if (!isLoaded) {
    return null;
  }

  return (
    <div className={`bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">
          {language === 'fa' ? 'جستجو و فیلتر' : 'Search & Filter'}
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary hover:text-primary/80 transition-colors"
        >
          {isExpanded ? (
            <X className="w-5 h-5" />
          ) : (
            <Search className="w-5 h-5" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {/* Search Input */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {language === 'fa' ? 'جستجو' : 'Search'}
            </label>
            <Input
              type="text"
              placeholder={language === 'fa' ? 'نام یا توضیح محصول...' : 'Product name or description...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              dir={isRTL ? 'rtl' : 'ltr'}
              className="w-full"
            />
          </div>

          {/* Alloy Type Filter */}
          {alloyTypes.length > 0 && (
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'fa' ? 'نوع آلیاژ' : 'Alloy Type'}
              </label>
              <div className="flex flex-wrap gap-2">
                {alloyTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedAlloyType(selectedAlloyType === type ? '' : type)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedAlloyType === type
                        ? 'bg-primary text-white'
                        : 'bg-white border border-gray-300 text-foreground hover:border-primary'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Coating Filter */}
          {coatings.length > 0 && (
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'fa' ? 'نوع روکش' : 'Coating Type'}
              </label>
              <div className="flex flex-wrap gap-2">
                {coatings.map(coating => (
                  <button
                    key={coating}
                    onClick={() => setSelectedCoating(selectedCoating === coating ? '' : coating)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedCoating === coating
                        ? 'bg-primary text-white'
                        : 'bg-white border border-gray-300 text-foreground hover:border-primary'
                    }`}
                  >
                    {coating}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Diameter Range Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {language === 'fa' ? 'محدوده قطر (میلی‌متر)' : 'Diameter Range (mm)'}
            </label>
            <div className="flex gap-2 items-center">
              <Input
                type="number"
                placeholder={language === 'fa' ? 'حداقل' : 'Min'}
                value={diameterMin ?? ''}
                onChange={(e) => setDiameterMin(e.target.value ? parseInt(e.target.value) : null)}
                className="w-24"
              />
              <span className="text-muted-foreground">-</span>
              <Input
                type="number"
                placeholder={language === 'fa' ? 'حداکثر' : 'Max'}
                value={diameterMax ?? ''}
                onChange={(e) => setDiameterMax(e.target.value ? parseInt(e.target.value) : null)}
                className="w-24"
              />
            </div>
          </div>

          {/* Reset Button */}
          {hasActiveFilters && (
            <Button
              onClick={handleReset}
              variant="outline"
              className="w-full"
            >
              {language === 'fa' ? 'پاک کردن فیلترها' : 'Clear Filters'}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
