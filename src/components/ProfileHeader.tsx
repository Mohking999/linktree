import React from 'react';
import { Logo } from './Logo';
import { BrandConfig } from '../types';

interface ProfileHeaderProps {
  brand: BrandConfig;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ brand }) => {
  return (
    <header className="flex flex-col items-center text-center w-full mb-6 sm:mb-8 animate-fade-in-up">
      {/* Centered MyStyle Logo */}
      <a
        href={brand.website}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 sm:mb-5 group cursor-pointer transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EFB38F] rounded-full"
        title="MyStyle - mystyledz.online"
        aria-label="MyStyle Official Website"
      >
        <Logo className="w-20 h-20 sm:w-24 sm:h-24" />
      </a>

      {/* Brand Name (White Typography) */}
      <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
        {brand.name}
      </h1>

      {/* Short Tagline */}
      <p className="text-xs sm:text-sm font-mono tracking-[0.28em] uppercase text-[#EFB38F] font-semibold mt-2 mb-2.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
        {brand.tagline}
      </p>

      {/* Description */}
      <p className="text-xs sm:text-sm text-white/90 font-light max-w-sm leading-relaxed px-4 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
        {brand.description}
      </p>
    </header>
  );
};
