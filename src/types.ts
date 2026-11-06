export interface NavLink {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  iconName: 'Compass' | 'Sparkles' | 'Scissors' | 'Layers' | 'MessageCircle' | 'Instagram' | 'TikTok' | 'ExternalLink';
  isExternal?: boolean;
  featured?: boolean;
}

export interface BrandConfig {
  name: string;
  website: string;
  tagline: string;
  description: string;
  avatarUrl: string;
  bgImageUrl: string;
}
