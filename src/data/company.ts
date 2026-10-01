export const company = {
  brand: 'MARSHLAND',
  legalName: 'Al-Razaq UK Pvt Ltd',
  tagline: 'Quality products for modern living.',
  description:
    'MARSHLAND is a UK-registered brand delivering thoughtfully selected consumer and lifestyle products to customers across the United Kingdom through Amazon, while building lasting partnerships with manufacturers and distributors worldwide across top-selling categories.',
  website: 'https://www.marshlands.co.uk',
  websiteDisplay: 'www.marshlands.co.uk',
  location: 'United Kingdom',
  amazonStoreUrl:
    'https://www.amazon.co.uk/stores/MARSHLAND/page/6EDDBC64-4F50-4638-975A-006DEA3C68B0?lp_asin=B0D8LK182J&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto&bl_grd_status=override',
  directors: [
    {
      name: 'Atiq Ur Rehman',
      title: 'Director',
      phone: '+44 753 8288 982',
      phoneHref: 'tel:+447538288982',
      email: 'atiq@marshlands.co.uk',
    },
    {
      name: 'Qasim Ahmed',
      title: 'Director',
      phone: '+44 786 8698 639',
      phoneHref: 'tel:+447868698639',
      email: 'qasim@marshlands.co.uk',
    },
  ],
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Our Products' },
  { href: '/partner', label: 'Become a Partner' },
  { href: '/contact', label: 'Contact Us' },
] as const;

export const heroSlides = [
  {
    src: '/images/hero-1.jpg',
    alt: 'Modern lifestyle with curated home and consumer essentials',
  },
  {
    src: '/images/hero-2.jpg',
    alt: 'Premium assortment of top-selling consumer products',
  },
  {
    src: '/images/hero-3.jpg',
    alt: 'Global trade and partnership atmosphere',
  },
] as const;
