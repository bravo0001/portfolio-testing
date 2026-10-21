import { useState, useEffect, useRef } from 'react';
import './index.css';

import CustomCursor from './components/CustomCursor';
import SideNav from './components/SideNav';
import HeroSection from './components/HeroSection';
import WorksSection from './components/WorksSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

// ── Active section tracker using smooth scroll position ─────────────────────
function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return active;
}

const SECTION_IDS = ['hero', 'works', 'about', 'contact'];

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Sticky side nav */}
      <SideNav activeSection={activeSection} />

      {/* Page sections */}
      <main>
        <HeroSection />
        <WorksSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
