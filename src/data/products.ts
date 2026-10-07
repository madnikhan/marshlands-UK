export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  features: string[];
  amazonUrl: string;
  image: string;
  rating?: string;
  status: 'live' | 'coming-soon';
  category: string;
};

export const products: Product[] = [
  {
    id: 'peeler',
    name: 'Premium Swivel Peeler',
    shortDescription:
      'Sharp, rust-resistant stainless steel with a comfortable non-slip grip for quick, precise and effortless food preparation.',
    features: [
      'Stainless-steel blade for precise peeling',
      'Ergonomic non-slip grip',
      'Smooth swivel action',
      'Suitable for vegetables, fruit and citrus',
    ],
    amazonUrl:
      'https://www.amazon.co.uk/stores/page/93F4140E-A3CE-4CA0-8ACB-27428C1BD49F',
    image: '/images/products/peeler.jpg',
    rating: '4.4',
    status: 'live',
    category: 'Kitchen Tools',
  },
  {
    id: 'tin-opener',
    name: 'Heavy-Duty Tin Opener',
    shortDescription:
      'A robust manual tin opener with a comfortable soft-grip handle and magnetic lid lift, designed for smooth and effortless everyday use.',
    features: [
      'Stainless-steel cutting mechanism',
      'Ergonomic soft-grip handles',
      'Magnetic lid lift for easier handling',
      'Integrated bottle opener',
    ],
    amazonUrl:
      'https://www.amazon.co.uk/stores/page/C6EE6881-119C-44C9-ACB7-B8E01A8B7B9D',
    image: '/images/products/tin-opener.jpg',
    rating: '4.1',
    status: 'live',
    category: 'Kitchen Tools',
  },
  {
    id: 'garlic-press',
    name: 'Heavy-Duty Garlic Press',
    shortDescription:
      'Designed for efficient crushing with less effort, easy handling and straightforward cleaning.',
    features: [
      'Designed to crush garlic with less effort',
      'Generous chamber for efficient preparation',
      'No-peel convenience',
      'Easy-to-clean construction',
    ],
    amazonUrl:
      'https://www.amazon.co.uk/stores/page/D370DC24-E5B4-4819-9257-3BD9EA34C330',
    image: '/images/products/garlic-press.jpg',
    status: 'live',
    category: 'Kitchen Tools',
  },
  {
    id: 'salt-pepper-grinder',
    name: 'Salt & Pepper Grinder Set',
    shortDescription:
      'Natural acacia wood and marble come together in a refined grinder set designed for everyday seasoning and an elegant kitchen presence.',
    features: [
      'Acacia wood bodies with contrasting marble tops',
      'Adjustable grind for fine or coarse seasoning',
      'Refillable design for salt, peppercorns and spices',
      'MARSHLAND engraved detailing',
    ],
    amazonUrl:
      'https://www.amazon.co.uk/stores/page/B68DE6A8-92F3-42E1-9056-EB70FE76934C',
    image: '/images/products/salt-pepper-grinder.jpg',
    status: 'live',
    category: 'Kitchen Tools',
  },
];

export const expandingRangeNote =
  "Our kitchen collection is just the beginning. We're developing MARSHLAND into a broader Home & Kitchen brand, exploring new products and categories that share the same principles behind our existing range: useful functionality, dependable quality, considered design and everyday value.";
