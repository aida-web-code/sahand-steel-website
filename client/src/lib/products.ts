export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  specs: string[];
  image: string;
  diameter?: { min: number; max: number; unit: string };
  alloyType?: string;
  coating?: string;
  material?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'hard-chrome-shafts',
    name: 'شافت هارد کروم',
    nameEn: 'Hard Chrome Shafts',
    description: 'شافت‌های فولادی با روکش کروم سخت برای کاربردهای صنعتی',
    descriptionEn: 'Steel shafts with hard chrome plating for industrial applications',
    products: [
      {
        id: 'hcs-1',
        name: 'شافت هارد کروم استاندارد',
        nameEn: 'Standard Hard Chrome Shaft',
        description: 'شافت‌های هارد کروم با کیفیت استاندارد',
        descriptionEn: 'Standard quality hard chrome shafts',
        specs: ['Diameter: 6-100mm', 'Chrome Coating: 0.5-1.5mm', 'ISO/ASTM Standard', 'Custom Length'],
        image: '/manus-storage/oZDfuFnlvq5Z_60145ccf.png',
        diameter: { min: 6, max: 100, unit: 'mm' },
        alloyType: 'Carbon Steel',
        coating: 'Hard Chrome',
        material: 'Steel',
      },
    ],
  },
  {
    id: 'steel-linear-shafts',
    name: 'شافت های فولادی لاینر',
    nameEn: 'Steel Linear Shafts',
    description: 'شافت‌های خطی فولادی با دقت بالا',
    descriptionEn: 'High-precision steel linear shafts',
    products: [
      {
        id: 'sls-1',
        name: 'شافت خطی فولادی NI',
        nameEn: 'NI Series Steel Linear Shaft',
        description: 'شافت‌های خطی سری NI',
        descriptionEn: 'NI series linear shafts',
        specs: ['Diameter: 6-100mm', 'Ground Finish', 'High Precision', 'Custom Length'],
        image: '/manus-storage/fFekMuOQk8ne_b82c4082.jpg',
        diameter: { min: 6, max: 100, unit: 'mm' },
        alloyType: 'Alloy Steel',
        coating: 'Ground Finish',
        material: 'Steel',
      },
    ],
  },
  {
    id: 'cemented-steels',
    name: 'فولادهای سمانته',
    nameEn: 'Cemented Steels',
    description: 'فولادهای سمانته نیکل‌دار و غیر نیکل‌دار',
    descriptionEn: 'Nickel-containing and non-nickel cemented steels',
    products: [
      {
        id: 'cs-1',
        name: 'سمانته نیکل‌دار',
        nameEn: 'Nickel-containing Cemented Steel',
        description: 'فولاد سمانته با نیکل',
        descriptionEn: 'Cemented steel with nickel content',
        specs: ['Precision Cutting', 'Expert Engineers', 'Advanced Equipment', 'Construction Analysis'],
        image: '/manus-storage/DVyYGofaqCZ5_8d2cbd3f.jpg',
        diameter: { min: 10, max: 80, unit: 'mm' },
        alloyType: 'Nickel-containing Alloy',
        coating: 'Cemented',
        material: 'Steel',
      },
      {
        id: 'cs-2',
        name: 'سمانته غیر نیکل‌دار',
        nameEn: 'Non-nickel Cemented Steel',
        description: 'فولاد سمانته بدون نیکل',
        descriptionEn: 'Cemented steel without nickel content',
        specs: ['Precision Cutting', 'Expert Engineers', 'Advanced Equipment', 'Construction Analysis'],
        image: '/manus-storage/2nI6Tm5kVFQK_849123ec.jpg',
        diameter: { min: 10, max: 80, unit: 'mm' },
        alloyType: 'Carbon Steel',
        coating: 'Cemented',
        material: 'Steel',
      },
    ],
  },
  {
    id: 'plastic-mold-steels',
    name: 'فولادهای قالب پلاستیک',
    nameEn: 'Plastic Mold Steels',
    description: 'فولادهای تخصصی برای قالب‌های پلاستیک',
    descriptionEn: 'Specialized steels for plastic molds',
    products: [
      {
        id: 'pms-1',
        name: 'فولاد قالب پلاستیک',
        nameEn: 'Plastic Mold Steel',
        description: 'فولاد با کیفیت بالا برای قالب‌های پلاستیک',
        descriptionEn: 'High-quality steel for plastic molds',
        specs: ['High Precision', 'ISO/ASTM Standard', 'Custom Sizes', 'Quality Assured'],
        image: '/manus-storage/moBKeT03AhYw_16672f38.webp',
        diameter: { min: 20, max: 150, unit: 'mm' },
        alloyType: 'Tool Steel',
        coating: 'None',
        material: 'Steel',
      },
    ],
  },
  {
    id: 'hard-chrome-plated-tubes',
    name: 'لوله های روکش کروم سخت',
    nameEn: 'Hard Chrome Plated Tubes',
    description: 'لوله‌های فولادی با روکش کروم سخت',
    descriptionEn: 'Steel tubes with hard chrome plating',
    products: [
      {
        id: 'hcpt-1',
        name: 'لوله روکش کروم سخت',
        nameEn: 'Hard Chrome Plated Tube',
        description: 'لوله‌های با روکش کروم سخت',
        descriptionEn: 'Tubes with hard chrome plating',
        specs: ['Diameter: 20-200mm', 'Chrome Coating: 0.5-1.5mm', 'ISO/ASTM Standard', 'Custom Length'],
        image: '/manus-storage/chrome_cylinder_tubes_da831614.png',
        diameter: { min: 20, max: 200, unit: 'mm' },
        alloyType: 'Carbon Steel',
        coating: 'Hard Chrome',
        material: 'Steel',
      },
    ],
  },
  {
    id: 'honed-tubes',
    name: 'لوله سیلندری داخل سنگخورده',
    nameEn: 'Cylinder Tube (Honed)',
    description: 'لوله‌های سیلندری داخل سنگخورده برای سیستم‌های هیدرولیکی',
    descriptionEn: 'Cylinder tubes (honed) for hydraulic systems',
    products: [
      {
        id: 'ht-1',
        name: 'لوله سیلندری داخل سنگخورده',
        nameEn: 'Cylinder Tube (Honed)',
        description: 'لوله‌های سیلندری داخل سنگخورده با دقات بالا',
        descriptionEn: 'High-precision cylinder tubes (honed)',
        specs: ['Diameter: 20-200mm', 'Honed Surface', 'ISO/ASTM Standard', 'Custom Length', 'For Hydraulic Systems'],
        image: '/manus-storage/honed-cylinder-tubes_bf8b83db.png',
        diameter: { min: 20, max: 200, unit: 'mm' },
        alloyType: 'Alloy Steel',
        coating: 'Honed',
        material: 'Steel',
      },
    ],
  },
];

export const steelTypes = [
  { id: 'carbon-steels', name: 'فولاد های کربنی', nameEn: 'Carbon Steels' },
  { id: 'alloy-steels', name: 'فولاد های آلیاژی', nameEn: 'Alloy Steels' },
  { id: 'hot-work-tool-steels', name: 'فولادهای ابزاری گرمکار', nameEn: 'Hot Work Tool Steels' },
  { id: 'cold-work-tool-steels', name: 'فولاد های ابزاری سردکار', nameEn: 'Cold Work Tool Steels' },
  { id: 'plastic-mold-steels', name: 'فولاد های قالب پلاستیک', nameEn: 'Plastic Mold Steels' },
];

export const departments = [
  { id: 'consulting', name: 'دپارتمان مشاوره', nameEn: 'Consulting Department' },
  { id: 'engineering', name: 'دپارتمان مهندسی', nameEn: 'Engineering Department' },
  { id: 'finance-legal', name: 'دپارتمان مالی و حقوقی', nameEn: 'Finance and Legal Department' },
  { id: 'design', name: 'دپارتمان طراحی', nameEn: 'Design Department' },
  { id: 'customer-affairs', name: 'دپارتمان امور مشتریان', nameEn: 'Customer Affairs Department' },
];

export function getCategoryById(id: string): ProductCategory | undefined {
  return productCategories.find(cat => cat.id === id);
}

export function getProductById(categoryId: string, productId: string): Product | undefined {
  const category = getCategoryById(categoryId);
  return category?.products.find(prod => prod.id === productId);
}
