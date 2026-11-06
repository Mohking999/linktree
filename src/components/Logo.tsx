import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer handmade ring */}
      <div className="absolute inset-0 rounded-full border border-white/30 backdrop-blur-sm bg-black/25 shadow-xl" />
      {/* Delicate peach ring */}
      <div className="absolute inset-1 rounded-full border border-[#EFB38F]/60" />
      {/* Monogram emblem */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <span className="font-serif text-2xl font-bold tracking-[0.15em] text-white">
          M
        </span>
        <div className="w-4 h-[1px] bg-[#EFB38F] my-0.5" />
        <span className="text-[7px] font-mono tracking-[0.3em] uppercase text-white/80">
          STYLE
        </span>
      </div>
    </div>
  );
};

