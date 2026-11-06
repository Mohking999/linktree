import React from 'react';
import logoImg from '../assets/logo.png';

export const Logo: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className} group`}>
      {/* Warm Peach Ambient Backlight Glow matching the site theme */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#EFB38F]/40 via-[#F7CBB0]/25 to-transparent blur-md pointer-events-none group-hover:scale-110 transition-transform duration-500" />
      
      {/* Outer Fine Peach Accent Ring */}
      <div className="relative w-full h-full rounded-[26px] p-0.5 bg-gradient-to-tr from-[#EFB38F]/80 via-[#EFB38F]/40 to-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(239,179,143,0.3)]">
        {/* Inner Logo Image */}
        <div className="w-full h-full rounded-[24px] overflow-hidden bg-[#0D0B0A] flex items-center justify-center">
          <img
            src={logoImg}
            alt="MyStyle Logo"
            className="w-full h-full object-cover select-none transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
