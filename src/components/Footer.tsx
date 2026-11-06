import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center pt-10 pb-8 mt-auto flex flex-col items-center">
      {/* Official website anchor pill */}
      <a
        href="https://mystyledz.online/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-white/90 hover:text-white hover:border-[#EFB38F]/60 transition-all text-xs font-mono tracking-wider drop-shadow-md group mb-3"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#EFB38F]" />
        <span>mystyledz.online</span>
        <ExternalLink className="w-3 h-3 text-white/60 group-hover:text-white transition-colors" />
      </a>

      <p className="text-[11px] font-mono tracking-widest uppercase text-white/60 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
        © {new Date().getFullYear()} MyStyle · All Rights Reserved
      </p>
    </footer>
  );
};

