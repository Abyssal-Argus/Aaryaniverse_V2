import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function About() {
  return (
    <div id="about" className="overflow-hidden max-h-[100vh] md:max-h-[130vh] lg:max-h-[150vh] lappy relative bottom-56 bg-black w-full">
      <MacbookScroll
        title={
          <span data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='300' className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white libre-bodoni text-5xl pb-7">
            About me
          </span>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
              <ShootingStars />
              <StarsBackground />
    </div>
  );
}