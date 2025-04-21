'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, {
        x: clientX - 10, // Adjust for the center of the cursor
        y: clientY - 10,
        duration: 0.5,
        ease: 'power4.out',
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      });
    };

    const clickableElements = document.querySelectorAll<HTMLElement>(
      'a, button, [role="button"], input, textarea, select'
    );

    clickableElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clickableElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="hidden md:block h-[20px] w-[20px] bg-white rounded-full z-50 fixed top-0 left-0 mix-blend-difference pointer-events-none transform scale-100"
      style={{ transformOrigin: 'center' }}
    ></div>
  );
};

export default Cursor;
