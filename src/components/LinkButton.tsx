import React from 'react';
import {
  Compass,
  Scissors,
  Layers,
  MessageCircle,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { NavLink } from '../types';
import { InstagramIcon, TikTokIcon } from './SocialIcons';

interface LinkButtonProps {
  link: NavLink;
  index: number;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ link, index }) => {
  const isAlt = index % 2 === 1;

  const renderIcon = () => {
    const iconClass = 'w-5 h-5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] shrink-0';
    switch (link.iconName) {
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'Scissors':
        return <Scissors className={iconClass} />;
      case 'Layers':
        return <Layers className={iconClass} />;
      case 'MessageCircle':
        return <MessageCircle className={iconClass} />;
      case 'Instagram':
        return <InstagramIcon className={iconClass} />;
      case 'TikTok':
        return <TikTokIcon className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.title}${link.subtitle ? ` - ${link.subtitle}` : ''}`}
      style={{ animationDelay: `${index * 70 + 80}ms` }}
      className={`group w-full flex items-center justify-between px-5 py-4 bg-[#EFB38F] hover:bg-[#F4C09E] border border-[#E2A177]/80 text-white cursor-pointer select-none transition-all animate-fade-in-up opacity-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 ${
        isAlt ? 'paper-edge-alt' : 'paper-edge'
      }`}
    >
      <div className="flex items-center gap-3.5 min-w-0">
        {/* Handmade Icon Well */}
        <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
          {renderIcon()}
        </div>

        {/* Text Info (White Typography) */}
        <div className="text-start min-w-0">
          <h3 className="font-serif font-bold text-sm sm:text-base text-white tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] truncate">
            {link.title}
          </h3>
          {link.subtitle && (
            <p className="text-[11px] sm:text-xs text-white/90 font-light tracking-normal truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
              {link.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Trailing arrow */}
      <div className="ps-2 shrink-0">
        <div className="w-7 h-7 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white/90 group-hover:text-white group-hover:bg-white/25 group-hover:translate-x-0.5 transition-all shadow-inner">
          <ChevronRight className="w-4 h-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]" />
        </div>
      </div>
    </a>
  );
};
