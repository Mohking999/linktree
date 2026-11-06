import { BrandConfig, NavLink } from '../types';

export const BRAND_CONFIG: BrandConfig = {
  name: 'MyStyle',
  website: 'https://mystyledz.online/',
  tagline: 'Your Style. Your Design. Your Identity.',
  description: 'Discover a new way to design and personalize your clothing.',
  // High-fashion atelier avatar
  avatarUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&auto=format&fit=crop&q=80',
  // Atmospheric, full-screen fashion photographic background
  bgImageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1800&auto=format&fit=crop&q=85',
};

export const MAIN_LINKS: NavLink[] = [
  {
    id: 'explore-mystyle',
    title: 'Explore MyStyle',
    subtitle: 'Visit our official online platform',
    url: 'https://mystyledz.online/',
    iconName: 'Compass',
    featured: true,
  },
  {
    id: 'custom-outfit',
    title: 'Create Your Custom Outfit',
    subtitle: 'Design clothing tailored to your measurements',
    url: 'https://mystyledz.online/custom/studio',
    iconName: 'Scissors',
  },
  {
    id: 'discover-services',
    title: 'Discover Our Services',
    subtitle: 'Ateliers, tailoring & bespoke craftsmanship',
    url: 'https://mystyledz.online/services',
    iconName: 'Layers',
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    subtitle: 'Direct chat with our team on WhatsApp',
    url: 'https://wa.me/213550123456?text=Hello%20MyStyle,%20I%20would%20like%20more%20information%20about%20your%20services',
    iconName: 'MessageCircle',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    subtitle: '@mylstyle1 • Collections & runway looks',
    url: 'https://www.instagram.com/mylstyle1',
    iconName: 'Instagram',
  },
  {
    id: 'tiktok',
    title: 'TikTok',
    subtitle: '@mystyledz • Behind-the-scenes & trends',
    url: 'https://tiktok.com/@mystyledz',
    iconName: 'TikTok',
  },
];

