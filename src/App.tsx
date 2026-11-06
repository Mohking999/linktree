import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { BRAND_CONFIG, MAIN_LINKS } from './config/site';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkButton } from './components/LinkButton';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'MyStyle | Your Style. Your Design. Your Identity.',
      text: 'Discover a new way to design and personalize your clothing with MyStyle.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard if share was cancelled or failed
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden selection:bg-[#EFB38F] selection:text-neutral-900">
      {/* Full-Screen Photographic Background */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 transform scale-105"
        style={{ backgroundImage: `url(${BRAND_CONFIG.bgImageUrl})` }}
        aria-hidden="true"
      />

      {/* Dark Overlay for Depth, Contrast & Editorial Elegance */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/80 backdrop-blur-[1.5px] z-0"
        aria-hidden="true"
      />

      {/* Main Container - Mobile First Presentation */}
      <main className="relative z-10 w-full max-w-md mx-auto px-5 py-8 sm:py-12 min-h-screen flex flex-col items-center justify-between">
        {/* Discreet Top Share Pill */}
        <div className="w-full flex justify-end mb-1">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white/80 hover:text-white hover:border-[#EFB38F]/60 text-xs font-mono transition-all cursor-pointer shadow-lg active:scale-95"
            title="Share page"
            aria-label="Share page"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-[#EFB38F]" />
            ) : (
              <Share2 className="w-3.5 h-3.5" />
            )}
            <span>{copied ? 'Copied' : 'Share'}</span>
          </button>
        </div>

        {/* Profile Section */}
        <ProfileHeader brand={BRAND_CONFIG} />

        {/* Links Section with Handmade Paper-Inspired Peach Buttons */}
        <section
          aria-label="MyStyle Quick Links"
          className="w-full space-y-3.5 my-2 flex-1 flex flex-col justify-center"
        >
          {MAIN_LINKS.map((link, idx) => (
            <LinkButton key={link.id} link={link} index={idx} />
          ))}
        </section>

        {/* Minimal Fashion Footer */}
        <Footer />
      </main>
    </div>
  );
};
