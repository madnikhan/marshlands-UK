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
    id: 'salt-pepper-grinder',
    name: 'Salt & Pepper Grinder Set',
    shortDescription:
      'A premium acacia wood and marble mill set — practical everyday seasoning with a refined kitchen presence.',
    features: [
      'Acacia wood bodies with contrasting marble tops',
      'Adjustable grind for fine or coarse seasoning',
      'Refillable design for salt, peppercorns, and spices',
      'MARSHLAND engraved detailing on each mill',
      'A stylish set for cooking and the dining table',
    ],
    amazonUrl:
      'https://www.amazon.co.uk/stores/page/B68DE6A8-92F3-42E1-9056-EB70FE76934C',
    image: '/images/products/salt-pepper-grinder.jpg',
    status: 'live',
    category: 'Kitchen Tools',
  },
  {
    id: 'tin-opener',
    name: 'Tin Opener',
    shortDescription:
      'A heavy-duty manual can opener with a soft grip and magnetic lid lift — built for smooth, everyday opening.',
    features: [
      'Stainless steel cutting mechanism for reliable use',
      'Ergonomic soft handles for comfortable control',
      'Magnetic lid lift for cleaner, safer opening',
      'Built-in bottle opener for everyday versatility',
      'Compact design that stores easily in a drawer',
    ],
    amazonUrl:
      'https://www.amazon.co.uk/stores/page/C6EE6881-119C-44C9-ACB7-B8E01A8B7B9D',
    image: '/images/products/tin-opener.jpg',
    rating: '4.1',
    status: 'live',
    category: 'Kitchen Tools',
  },
  {
    id: 'peeler',
    name: 'Premium Peeler',
    shortDescription:
      'A sharp, rustproof stainless steel swivel peeler with a non-slip grip — made for fast, comfortable kitchen prep.',
    features: [
      'Stainless steel blade for precise peeling',
      'Ergonomic non-slip comfort grip',
      'Smooth swivel action for uneven produce',
      'Ideal for potatoes, carrots, citrus, and fruit',
      'Dishwasher safe and easy to care for',
    ],
    amazonUrl:
      'https://www.amazon.co.uk/stores/page/93F4140E-A3CE-4CA0-8ACB-27428C1BD49F',
    image: '/images/products/peeler.jpg',
    rating: '4.4',
    status: 'live',
    category: 'Kitchen Tools',
  },
  {
    id: 'garlic-press',
    name: 'Garlic Press',
    shortDescription:
      'A heavy-duty garlic press designed for effortless crushing — clean hands, quick prep, and easy cleaning.',
    features: [
      'Crush garlic cloves with less effort',
      'Spacious chamber for faster meal prep',
      'No-peel convenience for everyday cooking',
      'Dishwasher-safe construction for easy cleanup',
      'Durable design built for regular kitchen use',
    ],
    amazonUrl:
      'https://www.amazon.co.uk/stores/page/D370DC24-E5B4-4819-9257-3BD9EA34C330',
    image: '/images/products/garlic-press.jpg',
    status: 'live',
    category: 'Kitchen Tools',
  },
];

export const expandingRangeNote =
  'Our kitchen range is growing. MARSHLAND continues to develop practical, stylish cooking tools — and explore new product lines through carefully selected manufacturing and supply partners worldwide.';
