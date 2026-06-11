export interface ProductSubcategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  specs: string[];
  image: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  subcategories: ProductSubcategory[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'chrome-plated-bars',
    name: 'میله‌های روکش کروم',
    nameEn: 'Chrome Plated Bars',
    description: 'میله‌های فولادی با روکش کروم سخت برای کاربردهای صنعتی',
    descriptionEn: 'Steel bars with hard chrome plating for industrial applications',
    subcategories: [
      {
        id: 'a-chrome-30',
        name: 'A-Chrome 30',
        nameEn: 'A-Chrome 30',
        description: 'میله‌های روکش کروم 30 میکرومتری',
        descriptionEn: 'Chrome plated bars with 30μm coating',
        specs: ['Diameter: 10-100mm', 'Chrome Coating: 30μm', 'ISO/ASTM Standard', 'Custom Length'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hero-chrome-bars-46HBD8CLvQy8N5Z5Hogj8q.webp',
      },
      {
        id: 'a-chrome-40',
        name: 'A-Chrome 40',
        nameEn: 'A-Chrome 40',
        description: 'میله‌های روکش کروم 40 میکرومتری',
        descriptionEn: 'Chrome plated bars with 40μm coating',
        specs: ['Diameter: 10-100mm', 'Chrome Coating: 40μm', 'ISO/ASTM Standard', 'Custom Length'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/steel-warehouse-8Tz4Dq6vvHfmNQKjXrH2Qm.webp',
      },
      {
        id: 'a-chrome-50',
        name: 'A-Chrome 50',
        nameEn: 'A-Chrome 50',
        description: 'میله‌های روکش کروم 50 میکرومتری',
        descriptionEn: 'Chrome plated bars with 50μm coating',
        specs: ['Diameter: 10-100mm', 'Chrome Coating: 50μm', 'ISO/ASTM Standard', 'Custom Length'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/manufacturing-facility-7mJQnHvKvqKjHqmQqKzfBc.webp',
      },
      {
        id: 'a-chrome-50-ultra',
        name: 'A-Chrome 50 Ultra',
        nameEn: 'A-Chrome 50 Ultra',
        description: 'میله‌های روکش کروم 50 میکرومتری فوق‌العاده',
        descriptionEn: 'Premium chrome plated bars with 50μm ultra coating',
        specs: ['Diameter: 10-100mm', 'Chrome Coating: 50μm Ultra', 'Premium Quality', 'Custom Length'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/quality-inspection-LXDSSjAGNKKE7EsDnBQeXx.webp',
      },
      {
        id: 'a-chrome-inox',
        name: 'A-Chrome Inox',
        nameEn: 'A-Chrome Inox',
        description: 'میله‌های روکش کروم استنلس',
        descriptionEn: 'Stainless steel chrome plated bars',
        specs: ['Diameter: 10-100mm', 'Stainless Steel Base', 'Chrome Coating', 'Corrosion Resistant'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hydraulic-system-EHVhKJhvQvfFMHyYxLkXQu.webp',
      },
    ],
  },
  {
    id: 'linear-shafts',
    name: 'شفت‌های خطی',
    nameEn: 'Linear Shafts',
    description: 'شفت‌های خطی با دقت بالا برای کاربردهای صنعتی',
    descriptionEn: 'High-precision linear shafts for industrial applications',
    subcategories: [
      {
        id: 'a-line-ground',
        name: 'A-Line (Ground)',
        nameEn: 'A-Line (Ground)',
        description: 'شفت‌های خطی ساییده‌شده',
        descriptionEn: 'Ground linear shafts',
        specs: ['Diameter: 6-100mm', 'Ground Finish', 'High Precision', 'Custom Length'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hero-chrome-bars-46HBD8CLvQy8N5Z5Hogj8q.webp',
      },
      {
        id: 'a-line-10',
        name: 'A-Line 10 (Chrome Plated 10μm)',
        nameEn: 'A-Line 10 (Chrome Plated 10μm)',
        description: 'شفت‌های خطی روکش کروم 10 میکرومتری',
        descriptionEn: 'Linear shafts with 10μm chrome plating',
        specs: ['Diameter: 6-100mm', 'Chrome Coating: 10μm', 'Ground Base', 'Custom Length'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/steel-warehouse-8Tz4Dq6vvHfmNQKjXrH2Qm.webp',
      },
      {
        id: 'a-line-25',
        name: 'A-Line 25 (Chrome Plated 25μm)',
        nameEn: 'A-Line 25 (Chrome Plated 25μm)',
        description: 'شفت‌های خطی روکش کروم 25 میکرومتری',
        descriptionEn: 'Linear shafts with 25μm chrome plating',
        specs: ['Diameter: 6-100mm', 'Chrome Coating: 25μm', 'Ground Base', 'Custom Length'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/manufacturing-facility-7mJQnHvKvqKjHqmQqKzfBc.webp',
      },
      {
        id: 'c53-ground',
        name: 'C53 Ground',
        nameEn: 'C53 Ground',
        description: 'شفت‌های C53 ساییده‌شده',
        descriptionEn: 'C53 ground linear shafts',
        specs: ['Diameter: 6-100mm', 'C53 Material', 'Ground Finish', 'Custom Length'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/quality-inspection-LXDSSjAGNKKE7EsDnBQeXx.webp',
      },
      {
        id: 'c53-chrome-plated',
        name: 'C53 Chrome Plated',
        nameEn: 'C53 Chrome Plated',
        description: 'شفت‌های C53 روکش کروم',
        descriptionEn: 'C53 chrome plated linear shafts',
        specs: ['Diameter: 6-100mm', 'C53 Material', 'Chrome Plated', 'Custom Length'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hydraulic-system-EHVhKJhvQvfFMHyYxLkXQu.webp',
      },
      {
        id: 'a440b-stainless',
        name: 'A440B Stainless Steel Shaft',
        nameEn: 'A440B Stainless Steel Shaft',
        description: 'شفت‌های استنلس A440B',
        descriptionEn: 'A440B stainless steel linear shafts',
        specs: ['Diameter: 6-100mm', 'A440B Stainless Steel', 'Corrosion Resistant', 'Custom Length'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hero-chrome-bars-46HBD8CLvQy8N5Z5Hogj8q.webp',
      },
      {
        id: 'x46-stainless',
        name: 'X46 Stainless Steel Shaft',
        nameEn: 'X46 Stainless Steel Shaft',
        description: 'شفت‌های استنلس X46',
        descriptionEn: 'X46 stainless steel linear shafts',
        specs: ['Diameter: 6-100mm', 'X46 Stainless Steel', 'Corrosion Resistant', 'Custom Length'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/steel-warehouse-8Tz4Dq6vvHfmNQKjXrH2Qm.webp',
      },
    ],
  },
  {
    id: 'cylinder-tubes',
    name: 'لوله‌های سیلندری',
    nameEn: 'Cylinder Tubes',
    description: 'لوله‌های سیلندری برای سیستم‌های هیدرولیکی و پنوماتیکی',
    descriptionEn: 'Cylinder tubes for hydraulic and pneumatic systems',
    subcategories: [
      {
        id: 'a-tube-scd',
        name: 'Seamless Cold Drawn Tubes (A-Tube SCD)',
        nameEn: 'Seamless Cold Drawn Tubes (A-Tube SCD)',
        description: 'لوله‌های بدون درز سرد‌شده',
        descriptionEn: 'Seamless cold drawn tubes',
        specs: ['Diameter: 20-200mm', 'Seamless Design', 'Cold Drawn', 'ISO/ASTM Standard'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/manufacturing-facility-7mJQnHvKvqKjHqmQqKzfBc.webp',
      },
      {
        id: 'a-tube-dom',
        name: 'Welded Cold Drawn Tubes (A-Tube DOM)',
        nameEn: 'Welded Cold Drawn Tubes (A-Tube DOM)',
        description: 'لوله‌های جوشی سرد‌شده',
        descriptionEn: 'Welded cold drawn tubes',
        specs: ['Diameter: 20-200mm', 'Welded Design', 'Cold Drawn', 'ISO/ASTM Standard'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/quality-inspection-LXDSSjAGNKKE7EsDnBQeXx.webp',
      },
      {
        id: 'a-tube-hrt',
        name: 'Hot Rolled Honed Tubes (A-Tube HRT)',
        nameEn: 'Hot Rolled Honed Tubes (A-Tube HRT)',
        description: 'لوله‌های گرم‌شده هون‌شده',
        descriptionEn: 'Hot rolled honed tubes',
        specs: ['Diameter: 20-200mm', 'Hot Rolled', 'Honed Surface', 'ISO/ASTM Standard'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hydraulic-system-EHVhKJhvQvfFMHyYxLkXQu.webp',
      },
      {
        id: 'a-tube-rtu',
        name: 'SSID Ready-to-Use Welded Tubes (A-Tube RTU)',
        nameEn: 'SSID Ready-to-Use Welded Tubes (A-Tube RTU)',
        description: 'لوله‌های جوشی آماده‌به‌کار',
        descriptionEn: 'SSID ready-to-use welded tubes',
        specs: ['Diameter: 20-200mm', 'Welded Design', 'Ready-to-Use', 'ISO/ASTM Standard'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hero-chrome-bars-46HBD8CLvQy8N5Z5Hogj8q.webp',
      },
      {
        id: 'telescopic-tubes',
        name: 'Telescopic Tubes (Chrome Plated, Skived, Honed)',
        nameEn: 'Telescopic Tubes (Chrome Plated, Skived, Honed)',
        description: 'لوله‌های تلسکوپی روکش کروم',
        descriptionEn: 'Telescopic tubes with chrome plating, skived, and honed',
        specs: ['Diameter: 20-200mm', 'Telescopic Design', 'Chrome Plated/Honed', 'Custom Length'],
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/steel-warehouse-8Tz4Dq6vvHfmNQKjXrH2Qm.webp',
      },
    ],
  },
];

export function getCategoryById(id: string): ProductCategory | undefined {
  return productCategories.find(cat => cat.id === id);
}

export function getSubcategoryById(categoryId: string, subcategoryId: string): ProductSubcategory | undefined {
  const category = getCategoryById(categoryId);
  return category?.subcategories.find(sub => sub.id === subcategoryId);
}
