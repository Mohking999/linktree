import React from 'react';
import { BRAND_CONFIG, MAIN_LINKS } from './config/site';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkButton } from './components/LinkButton';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
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
      <main className="relative z-10 w-full max-w-md mx-auto px-5 py-10 sm:py-14 min-h-screen flex flex-col items-center justify-between">
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
