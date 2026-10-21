import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const dotSpringConfig = { damping: 40, stiffness: 600, mass: 0.2 };
  const dotSpringX = useSpring(dotX, dotSpringConfig);
  const dotSpringY = useSpring(dotY, dotSpringConfig);

  const isHoveringRef = useRef(false);
  const ringRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };

    const handleMouseEnterLink = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'scale(1.8)';
        ringRef.current.style.borderColor = 'rgba(0, 200, 117, 0.7)';
        ringRef.current.style.backgroundColor = 'rgba(0, 200, 117, 0.06)';
      }
    };

    const handleMouseLeaveLink = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'scale(1)';
        ringRef.current.style.borderColor = 'rgba(240, 236, 228, 0.5)';
        ringRef.current.style.backgroundColor = 'transparent';
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"], .cyberdeck-key, .pegboard-hotspot')) {
        handleMouseEnterLink();
      } else {
        handleMouseLeaveLink();
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          border: '1.5px solid rgba(240, 236, 228, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          x: springX,
          y: springY,
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s ease, background-color 0.3s ease',
        }}
      />
      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          backgroundColor: 'var(--color-text)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          x: dotSpringX,
          y: dotSpringY,
        }}
      />
    </>
  );
}
