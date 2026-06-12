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

export interface ProductSubcategory {
  id: string;
  name: string;
  nameEn: string;
  products: Product[];
}

export interface ProductCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  subcategories: ProductSubcategory[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'carbon-steels',
    name: 'فولادهای کربنی',
    nameEn: 'Carbon Steels',
    description: 'فولادهای کربنی با مقاطع مختلف برای کاربردهای صنعتی',
    descriptionEn: 'Carbon steels with various sections for industrial applications',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/carbon-steels-KmP83Cb848RWtTjiiZpgij.webp',
    subcategories: [
      {
        id: 'carbon-round-sections',
        name: 'مقاطع گرد',
        nameEn: 'Round Sections',
        products: [
          {
            id: 'cs-round-1',
            name: 'مقطع گرد کربنی استاندارد',
            nameEn: 'Standard Carbon Steel Round Section',
            description: 'مقاطع گرد فولاد کربنی با کیفیت استاندارد',
            descriptionEn: 'Standard quality carbon steel round sections',
            specs: ['Diameter: 10-100mm', 'ISO/ASTM Standard', 'Custom Length', 'High Precision'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/carbon-steels-KmP83Cb848RWtTjiiZpgij.webp',
            diameter: { min: 10, max: 100, unit: 'mm' },
            alloyType: 'Carbon Steel',
            material: 'Steel',
          },
        ],
      },
      {
        id: 'carbon-square-sections',
        name: 'مقاطع چهارگوش',
        nameEn: 'Square Sections',
        products: [
          {
            id: 'cs-square-1',
            name: 'مقطع چهارگوش کربنی',
            nameEn: 'Carbon Steel Square Section',
            description: 'مقاطع چهارگوش فولاد کربنی',
            descriptionEn: 'Carbon steel square sections',
            specs: ['Size: 10-100mm', 'ISO/ASTM Standard', 'Custom Length', 'High Precision'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/carbon-steels-KmP83Cb848RWtTjiiZpgij.webp',
            alloyType: 'Carbon Steel',
            material: 'Steel',
          },
        ],
      },
    ],
  },
  {
    id: 'alloy-steels',
    name: 'فولادهای آلیاژی',
    nameEn: 'Alloy Steels',
    description: 'فولادهای آلیاژی با مقاطع و انواع مختلف',
    descriptionEn: 'Alloy steels with various sections and types',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/alloy-steels-UPed4hLcokid7tE8Re2zkd.webp',
    subcategories: [
      {
        id: 'alloy-round-sections',
        name: 'مقاطع گرد',
        nameEn: 'Round Sections',
        products: [
          {
            id: 'as-round-1',
            name: 'مقطع گرد آلیاژی',
            nameEn: 'Alloy Steel Round Section',
            description: 'مقاطع گرد فولاد آلیاژی',
            descriptionEn: 'Alloy steel round sections',
            specs: ['Diameter: 10-100mm', 'ISO/ASTM Standard', 'Custom Length', 'High Precision'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/alloy-steels-UPed4hLcokid7tE8Re2zkd.webp',
            diameter: { min: 10, max: 100, unit: 'mm' },
            alloyType: 'Alloy Steel',
            material: 'Steel',
          },
        ],
      },
      {
        id: 'alloy-square-sections',
        name: 'مقاطع چهارگوش',
        nameEn: 'Square Sections',
        products: [
          {
            id: 'as-square-1',
            name: 'مقطع چهارگوش آلیاژی',
            nameEn: 'Alloy Steel Square Section',
            description: 'مقاطع چهارگوش فولاد آلیاژی',
            descriptionEn: 'Alloy steel square sections',
            specs: ['Size: 10-100mm', 'ISO/ASTM Standard', 'Custom Length', 'High Precision'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/alloy-steels-UPed4hLcokid7tE8Re2zkd.webp',
            alloyType: 'Alloy Steel',
            material: 'Steel',
          },
        ],
      },
      {
        id: 'cemented-steels',
        name: 'فولادهای سمانته',
        nameEn: 'Cemented Steels',
        products: [
          {
            id: 'as-cemented-1',
            name: 'فولاد سمانته نیکل‌دار',
            nameEn: 'Nickel-containing Cemented Steel',
            description: 'فولاد سمانته با نیکل',
            descriptionEn: 'Cemented steel with nickel content',
            specs: ['Precision Cutting', 'Expert Engineers', 'Advanced Equipment', 'Construction Analysis'],
            image: '/manus-storage/Tool-Steel-Die-Steel_423b9cca.jpg',
            diameter: { min: 10, max: 80, unit: 'mm' },
            alloyType: 'Nickel-containing Alloy',
            coating: 'Cemented',
            material: 'Steel',
          },
          {
            id: 'as-cemented-2',
            name: 'فولاد سمانته غیر نیکل‌دار',
            nameEn: 'Non-nickel Cemented Steel',
            description: 'فولاد سمانته بدون نیکل',
            descriptionEn: 'Cemented steel without nickel content',
            specs: ['Precision Cutting', 'Expert Engineers', 'Advanced Equipment', 'Construction Analysis'],
            image: '/manus-storage/Tool-Steel-Die-Steel_423b9cca.jpg',
            diameter: { min: 10, max: 80, unit: 'mm' },
            alloyType: 'Carbon Steel',
            coating: 'Cemented',
            material: 'Steel',
          },
        ],
      },
    ],
  },
  {
    id: 'hot-work-tool-steels',
    name: 'فولادهای ابزاری گرمکار',
    nameEn: 'Hot Work Tool Steels',
    description: 'فولادهای ابزاری گرمکار برای قالب‌های گرم',
    descriptionEn: 'Hot work tool steels for hot die applications',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hot-work-tool-steels-Kqg8KtbrLLgRJBUx4KcVrC.webp',
    subcategories: [
      {
        id: 'hwts-round-sections',
        name: 'مقاطع گرد',
        nameEn: 'Round Sections',
        products: [
          {
            id: 'hwts-round-1',
            name: 'مقطع گرد ابزاری گرمکار',
            nameEn: 'Hot Work Tool Steel Round Section',
            description: 'مقاطع گرد فولاد ابزاری گرمکار',
            descriptionEn: 'Hot work tool steel round sections',
            specs: ['Diameter: 20-150mm', 'Heat Treatment Ready', 'ISO/ASTM Standard', 'Custom Length'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hot-work-tool-steels-Kqg8KtbrLLgRJBUx4KcVrC.webp',
            diameter: { min: 20, max: 150, unit: 'mm' },
            alloyType: 'Tool Steel',
            material: 'Steel',
          },
        ],
      },
      {
        id: 'hwts-square-sections',
        name: 'مقاطع چهارگوش',
        nameEn: 'Square Sections',
        products: [
          {
            id: 'hwts-square-1',
            name: 'مقطع چهارگوش ابزاری گرمکار',
            nameEn: 'Hot Work Tool Steel Square Section',
            description: 'مقاطع چهارگوش فولاد ابزاری گرمکار',
            descriptionEn: 'Hot work tool steel square sections',
            specs: ['Size: 20-150mm', 'Heat Treatment Ready', 'ISO/ASTM Standard', 'Custom Length'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hot-work-tool-steels-Kqg8KtbrLLgRJBUx4KcVrC.webp',
            alloyType: 'Tool Steel',
            material: 'Steel',
          },
        ],
      },
      {
        id: 'hwts-strip',
        name: 'تسمه',
        nameEn: 'Strip',
        products: [
          {
            id: 'hwts-strip-1',
            name: 'تسمه ابزاری گرمکار',
            nameEn: 'Hot Work Tool Steel Strip',
            description: 'تسمه فولاد ابزاری گرمکار',
            descriptionEn: 'Hot work tool steel strip',
            specs: ['Width: 50-300mm', 'Thickness: 5-50mm', 'Heat Treatment Ready', 'Custom Size'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hot-work-tool-steels-Kqg8KtbrLLgRJBUx4KcVrC.webp',
            alloyType: 'Tool Steel',
            material: 'Steel',
          },
        ],
      },
    ],
  },
  {
    id: 'cold-work-tool-steels',
    name: 'فولادهای ابزاری سردکار',
    nameEn: 'Cold Work Tool Steels',
    description: 'فولادهای ابزاری سردکار برای قالب‌های سرد',
    descriptionEn: 'Cold work tool steels for cold die applications',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/cold-work-tool-steels-m7Tu9RzV2J7PPxZeV3NdbG.webp',
    subcategories: [
      {
        id: 'cwts-round-sections',
        name: 'مقاطع گرد',
        nameEn: 'Round Sections',
        products: [
          {
            id: 'cwts-round-1',
            name: 'مقطع گرد ابزاری سردکار',
            nameEn: 'Cold Work Tool Steel Round Section',
            description: 'مقاطع گرد فولاد ابزاری سردکار',
            descriptionEn: 'Cold work tool steel round sections',
            specs: ['Diameter: 10-100mm', 'Ground Finish', 'High Precision', 'ISO/ASTM Standard'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/cold-work-tool-steels-m7Tu9RzV2J7PPxZeV3NdbG.webp',
            diameter: { min: 10, max: 100, unit: 'mm' },
            alloyType: 'Tool Steel',
            material: 'Steel',
          },
        ],
      },
      {
        id: 'cwts-square-sections',
        name: 'مقاطع چهارگوش',
        nameEn: 'Square Sections',
        products: [
          {
            id: 'cwts-square-1',
            name: 'مقطع چهارگوش ابزاری سردکار',
            nameEn: 'Cold Work Tool Steel Square Section',
            description: 'مقاطع چهارگوش فولاد ابزاری سردکار',
            descriptionEn: 'Cold work tool steel square sections',
            specs: ['Size: 10-100mm', 'Ground Finish', 'High Precision', 'ISO/ASTM Standard'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/cold-work-tool-steels-m7Tu9RzV2J7PPxZeV3NdbG.webp',
            alloyType: 'Tool Steel',
            material: 'Steel',
          },
        ],
      },
      {
        id: 'cwts-strip',
        name: 'تسمه',
        nameEn: 'Strip',
        products: [
          {
            id: 'cwts-strip-1',
            name: 'تسمه ابزاری سردکار',
            nameEn: 'Cold Work Tool Steel Strip',
            description: 'تسمه فولاد ابزاری سردکار',
            descriptionEn: 'Cold work tool steel strip',
            specs: ['Width: 50-300mm', 'Thickness: 5-50mm', 'Ground Finish', 'High Precision'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/cold-work-tool-steels-m7Tu9RzV2J7PPxZeV3NdbG.webp',
            alloyType: 'Tool Steel',
            material: 'Steel',
          },
        ],
      },
    ],
  },
  {
    id: 'plastic-mold-steels',
    name: 'فولادهای قالب پلاستیک',
    nameEn: 'Plastic Mold Steels',
    description: 'فولادهای تخصصی برای قالب‌های پلاستیک',
    descriptionEn: 'Specialized steels for plastic molds',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/plastic-mold-steels-YoYSqwcH98wqyL4sZmWArq.webp',
    subcategories: [
      {
        id: 'pms-strip',
        name: 'تسمه',
        nameEn: 'Strip',
        products: [
          {
            id: 'pms-strip-1',
            name: 'تسمه قالب پلاستیک',
            nameEn: 'Plastic Mold Steel Strip',
            description: 'تسمه فولاد قالب پلاستیک',
            descriptionEn: 'Plastic mold steel strip',
            specs: ['Width: 50-300mm', 'Thickness: 5-50mm', 'High Precision', 'Polished Finish'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/plastic-mold-steels-YoYSqwcH98wqyL4sZmWArq.webp',
            alloyType: 'Mold Steel',
            material: 'Steel',
          },
        ],
      },
      {
        id: 'pms-block',
        name: 'بلوک فولادی',
        nameEn: 'Steel Block',
        products: [
          {
            id: 'pms-block-1',
            name: 'بلوک فولادی قالب پلاستیک',
            nameEn: 'Plastic Mold Steel Block',
            description: 'بلوک فولاد قالب پلاستیک',
            descriptionEn: 'Plastic mold steel block',
            specs: ['Custom Size', 'High Precision', 'Polished Finish', 'ISO/ASTM Standard'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/plastic-mold-steels-YoYSqwcH98wqyL4sZmWArq.webp',
            alloyType: 'Mold Steel',
            material: 'Steel',
          },
        ],
      },
    ],
  },
  {
    id: 'cylinder-tubes',
    name: 'لولههای سیلندری',
    nameEn: 'Cylinder Tubes',
    description: 'لولههای سیلندری با دقت بالا',
    descriptionEn: 'High-precision cylinder tubes',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/cylinder-tubes-Qy6Lu6A265qEuwGrUGYxgM.webp',
    subcategories: [
      {
        id: 'ct-honed',
        name: 'لولههای داخل سنگخورده',
        nameEn: 'Honed Tubes',
        products: [
          {
            id: 'ct-honed-1',
            name: 'لوله سیلندری داخل سنگخورده',
            nameEn: 'Honed Cylinder Tube',
            description: 'لولههای سیلندری داخل سنگخورده دقیق',
            descriptionEn: 'Precision honed cylinder tubes',
            specs: ['ID: 10-200mm', 'Ra: 0.2-0.8μm', 'ISO 9001', 'Custom Length'],
            image: '/manus-storage/hon_tubes_8a1e36e4.png',
            diameter: { min: 10, max: 200, unit: 'mm' },
            coating: 'Honed',
            material: 'Steel',
          },
        ],
      },
      {
        id: 'ct-hydraulic',
        name: 'لولههای هیدرولیکی',
        nameEn: 'Hydraulic Tubes',
        products: [
          {
            id: 'ct-hydraulic-1',
            name: 'لوله هیدرولیکی',
            nameEn: 'Hydraulic Tube',
            description: 'لولههای هیدرولیکی دقیق',
            descriptionEn: 'Precision hydraulic tubes',
            specs: ['ID: 10-200mm', 'High Pressure Rating', 'ISO 9001', 'Custom Length'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/cylinder-tubes-Qy6Lu6A265qEuwGrUGYxgM.webp',
            diameter: { min: 10, max: 200, unit: 'mm' },
            material: 'Steel',
          },
        ],
      },
    ],
  },
  {
    id: 'hard-chrome-shafts',
    name: 'شافتهای هارد کروم',
    nameEn: 'Hard Chrome Shafts',
    description: 'شافتهای فولادی با روکش کروم سخت',
    descriptionEn: 'Steel shafts with hard chrome plating',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hard-chrome-shafts-RBZEqEdhCYhA3LLD8yasAd.webp',
    subcategories: [
      {
        id: 'hcs-bars',
        name: 'میلههای فولادی روکش کروم سخت',
        nameEn: 'Chrome Plated Bars',
        products: [
          {
            id: 'hcs-bars-1',
            name: 'میله فولادی روکش کروم سخت',
            nameEn: 'Chrome Plated Steel Bar',
            description: 'میله‌های فولادی با روکش کروم سخت',
            descriptionEn: 'Steel bars with hard chrome plating',
            specs: ['Diameter: 6-100mm', 'Chrome: 0.5-1.5mm', 'ISO 9001', 'Custom Length'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hard-chrome-shafts-RBZEqEdhCYhA3LLD8yasAd.webp',
            diameter: { min: 6, max: 100, unit: 'mm' },
            coating: 'Hard Chrome',
            material: 'Steel',
          },
        ],
      },
      {
        id: 'hcs-shafts',
        name: 'شافتهای کروم سخت',
        nameEn: 'Chrome Shafts',
        products: [
          {
            id: 'hcs-shafts-1',
            name: 'شافت کروم سخت',
            nameEn: 'Hard Chrome Shaft',
            description: 'شافتهای کروم سخت دقیق',
            descriptionEn: 'Precision hard chrome shafts',
            specs: ['Diameter: 6-100mm', 'Chrome: 0.5-1.5mm', 'ISO 9001', 'Custom Length'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hard-chrome-shafts-RBZEqEdhCYhA3LLD8yasAd.webp',
            diameter: { min: 6, max: 100, unit: 'mm' },
            coating: 'Hard Chrome',
            material: 'Steel',
          },
        ],
      },
    ],
  },
  {
    id: 'induction-hardened-chrome',
    name: 'شافتهای اینداکشن شده هارد کروم',
    nameEn: 'Induction Hardened Chrome Shafts',
    description: 'شافتهای القایی روکش کروم سخت',
    descriptionEn: 'Induction hardened chrome plated shafts',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/induction-hardened-chrome-SvNRMJJ6chAN5cigThLdda.webp',
    subcategories: [
      {
        id: 'ihcs-shafts',
        name: 'شافتهای القایی روکش کروم سخت',
        nameEn: 'Induction Hardened Chrome Shafts',
        products: [
          {
            id: 'ihcs-shafts-1',
            name: 'شافت القایی روکش کروم سخت',
            nameEn: 'Induction Hardened Chrome Shaft',
            description: 'شافتهای القایی روکش کروم سخت',
            descriptionEn: 'Induction hardened chrome plated shafts',
            specs: ['Diameter: 10-100mm', 'Chrome: 0.5-1.5mm', 'Induction Hardened', 'ISO 9001'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/induction-hardened-chrome-SvNRMJJ6chAN5cigThLdda.webp',
            diameter: { min: 10, max: 100, unit: 'mm' },
            coating: 'Hard Chrome',
            material: 'Steel',
          },
        ],
      },
    ],
  },
  {
    id: 'hard-chrome-tubes',
    name: 'لولههای هارد کروم',
    nameEn: 'Hard Chrome Tubes',
    description: 'لولههای فولادی با روکش کروم سخت',
    descriptionEn: 'Steel tubes with hard chrome plating',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hard-chrome-tubes-fqUk4rwDdzoQ225nxkR7Hm.webp',
    subcategories: [
      {
        id: 'hct-tubes',
        name: 'لولههای فولادی روکش کروم سخت',
        nameEn: 'Chrome Plated Steel Tubes',
        products: [
          {
            id: 'hct-tubes-1',
            name: 'لوله فولادی روکش کروم سخت',
            nameEn: 'Chrome Plated Steel Tube',
            description: 'لولههای فولادی با روکش کروم سخت',
            descriptionEn: 'Steel tubes with hard chrome plating',
            specs: ['ID: 20-200mm', 'Chrome: 0.5-1.5mm', 'ISO 9001', 'Custom Length'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/hard-chrome-tubes-fqUk4rwDdzoQ225nxkR7Hm.webp',
            diameter: { min: 20, max: 200, unit: 'mm' },
            coating: 'Hard Chrome',
            material: 'Steel',
          },
        ],
      },
    ],
  },
  {
    id: 'wear-resistant-plates',
    name: 'ورقهای ضدسایش',
    nameEn: 'Wear-Resistant Plates',
    description: 'ورقهای ضدسایش Hardox برای کاربردهای سنگین',
    descriptionEn: 'Hardox wear-resistant plates for heavy-duty applications',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/wear-resistant-plates-QdMSZSAoaeYgFyJYLZGAUB.webp',
    subcategories: [
      {
        id: 'wrp-hardox400',
        name: 'Hardox 400',
        nameEn: 'Hardox 400',
        products: [
          {
            id: 'wrp-hardox400-1',
            name: 'ورقه Hardox 400',
            nameEn: 'Hardox 400 Plate',
            description: 'ورقه ضدسایش Hardox 400',
            descriptionEn: 'Hardox 400 wear-resistant plate',
            specs: ['Thickness: 6-50mm', 'Hardness: 400 HB', 'Custom Size', 'ISO 9001'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/wear-resistant-plates-QdMSZSAoaeYgFyJYLZGAUB.webp',
            material: 'Steel',
          },
        ],
      },
      {
        id: 'wrp-hardox450',
        name: 'Hardox 450',
        nameEn: 'Hardox 450',
        products: [
          {
            id: 'wrp-hardox450-1',
            name: 'ورقه Hardox 450',
            nameEn: 'Hardox 450 Plate',
            description: 'ورقه ضدسایش Hardox 450',
            descriptionEn: 'Hardox 450 wear-resistant plate',
            specs: ['Thickness: 6-50mm', 'Hardness: 450 HB', 'Custom Size', 'ISO 9001'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/wear-resistant-plates-QdMSZSAoaeYgFyJYLZGAUB.webp',
            material: 'Steel',
          },
        ],
      },
      {
        id: 'wrp-hardox500',
        name: 'Hardox 500',
        nameEn: 'Hardox 500',
        products: [
          {
            id: 'wrp-hardox500-1',
            name: 'ورقه Hardox 500',
            nameEn: 'Hardox 500 Plate',
            description: 'ورقه ضدسایش Hardox 500',
            descriptionEn: 'Hardox 500 wear-resistant plate',
            specs: ['Thickness: 6-50mm', 'Hardness: 500 HB', 'Custom Size', 'ISO 9001'],
            image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750195236/eHvbcoMfvBAtmw5BhrQUsd/wear-resistant-plates-QdMSZSAoaeYgFyJYLZGAUB.webp',
            material: 'Steel',
          },
        ],
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

export function getProductById(categoryId: string, productId: string): Product | undefined {
  const category = getCategoryById(categoryId);
  if (!category) return undefined;
  
  for (const subcategory of category.subcategories) {
    const product = subcategory.products.find(p => p.id === productId);
    if (product) return product;
  }
  return undefined;
}

export function getAllProductsInCategory(categoryId: string): Product[] {
  const category = getCategoryById(categoryId);
  if (!category) return [];
  
  const allProducts: Product[] = [];
  for (const subcategory of category.subcategories) {
    allProducts.push(...subcategory.products);
  }
  return allProducts;
}
