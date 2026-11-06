import React from 'react';
import logoImg from '../assets/logo.png';

export const Logo: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Delicate peach aura glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#EFB38F]/40 to-transparent blur-sm pointer-events-none" />
      {/* Official MyStyle Logo Container */}
      <div className="relative w-full h-full rounded-[24px] overflow-hidden border border-white/25 shadow-2xl bg-black">
        <img
          src={logoImg}
          alt="MyStyle Logo"
          className="w-full h-full object-cover select-none"
        />
      </div>
    </div>
  );
};
