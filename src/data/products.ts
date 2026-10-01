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
    id: 'premium-i-shape-peeler',
    name: 'Premium I-Shape Swivel Peeler',
    shortDescription:
      'A sharp, rustproof stainless steel peeler with an ergonomic non-slip grip — built for fast, comfortable everyday kitchen prep.',
    features: [
      'Stainless steel blade for precise peeling',
      'Ergonomic non-slip comfort grip',
      'Smooth swivel action for uneven produce',
      'Ideal for potatoes, carrots, citrus and fruit',
      'Dishwasher safe and easy to care for',
    ],
    amazonUrl: 'https://www.amazon.co.uk/dp/B0D8LK182J',
    image: '/images/product-peeler-i.jpg',
    rating: '4.4',
    status: 'live',
    category: 'Kitchen Tools',
  },
  {
    id: 'premium-y-shape-peeler',
    name: 'Premium Y-Shape Swivel Peeler',
    shortDescription:
      'The same Marshland precision in a classic Y-shape profile — sharp, durable, and designed for confident daily use.',
    features: [
      'Stainless steel swivel blade',
      'Strong, comfortable handle',
      'Versatile for fruit and vegetables',
      'Built for everyday kitchen reliability',
    ],
    amazonUrl:
      'https://www.amazon.co.uk/stores/MARSHLAND/page/6EDDBC64-4F50-4638-975A-006DEA3C68B0',
    image: '/images/product-peeler-y.jpg',
    status: 'live',
    category: 'Kitchen Tools',
  },
];

export const expandingRangeNote =
  'Our catalogue is growing. MARSHLAND is actively researching and sourcing top-selling consumer product lines across multiple categories — through carefully selected manufacturing and supply partners worldwide.';
