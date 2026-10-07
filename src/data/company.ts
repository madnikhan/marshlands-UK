export const company = {
  brand: 'MARSHLAND',
  legalName: 'AL-RAZAQ UK PVT LIMITED',
  legalNameDisplay: 'Al Razaq UK PVT LTD',
  tagline: 'Better Products. Better Everyday Living.',
  description:
    'MARSHLAND is a UK-registered brand delivering thoughtfully selected consumer and lifestyle products to customers across the United Kingdom through Amazon, while building lasting partnerships with manufacturers and distributors worldwide across top-selling categories.',
  website: 'https://www.marshlands.co.uk',
  websiteDisplay: 'www.marshlands.co.uk',
  location: 'United Kingdom',
  address: 'Al Razaq UK Pvt Ltd, Stoneton Crescent, Balsall Common, Coventry, England, CV7 7QS',
  emails: {
    general: 'info@marshlands.co.uk',
    partnership: 'sourcing@marshlands.co.uk',
  },
  trust: {
    title: 'British Brand',
    subtitle: 'Built for the UK market',
  },
  copyright: (year: number) =>
    `© ${year} AL-RAZAQ UK PVT LIMITED. Trading as MARSHLAND. All rights reserved.`,
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
  { href: '/contact', label: 'Contact Us' },
] as const;

export const heroVideos = [
  {
    id: 'marshland',
    mp4: '/videos/marshland.mp4',
    poster: '/videos/marshland.jpg',
    label: 'MARSHLAND',
  },
] as const;
