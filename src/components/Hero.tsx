"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { MdDownload } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Button } from "./ui/moving-border";


export default function Hero(){
    return(
        <div className="bottom-28 lg:bottom-4 h-screen rounded-md bg-black flex flex-col-reverse md:flex-row items-center justify-center gap-x-14 lg:gap-x-32 relative w-full">
            <div>
                <h2 data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300' className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 libre-bodoni">Hi,</h2>
                <h2 data-aos='fade-right' data-aos-duration='1000' data-aos-delay='500' className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 libre-bodoni">I&apos;m Aaryan</h2>
                <h2 data-aos='fade-right' data-aos-duration='1000' data-aos-delay='700' className="relative flex-col md:flex-row z-10 text-xl md:text-3xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 poppins-medium">NEXT.JS Developer</h2>
                <div className='flex items-center md:items-baseline gap-4 md:flex-col text-gray-300 relative top-16 z-20'>
                                    <a href="https://www.instagram.com/aaryan_.__._/" target="_blank" className='hover:text-cyan-300 transition-colors duration-400 w-min'><FaInstagram data-aos='fade-right' data-aos-duration='1000' data-aos-delay='900' className='h-6 w-6 md:h-8 md:w-8 mb-2'/></a>
                                    <a href="https://github.com/Abyssal-Argus" target="_blank" className='hover:text-cyan-300 transition-colors duration-400 w-min'><LuGithub data-aos='fade-right' data-aos-duration='1000' data-aos-delay='1100' className='h-6 w-6 md:h-8 md:w-8 mb-2'/></a>
                                    <a href="https://www.linkedin.com/in/aaryan-shrestha-0236362b4/" target="_blank" className='hover:text-cyan-300 transition-colors duration-400 w-min'><AiOutlineLinkedin data-aos='fade-right' data-aos-duration='1000' data-aos-delay='1300' className='h-6 w-6 md:h-8 md:w-8 mb-2'/></a>
                                    <Button
                                    data-aos='fade-right' data-aos-duration='1000' data-aos-delay='600'
                                    borderRadius="1.75rem"
                                    className="bg-black text-white dark:border-slate-900 hover:text-cyan-300">
                                    <a href="/file/CV.pdf" download="CV.pdf" className="flex items-center space-x-2">
                                    <span className="poppins-medium">Download CV</span>
                                    <MdDownload className="w-5 h-5" />
                                    </a>      
                                    </Button>
                                </div>
            </div>
            <div data-aos='flip-up' data-aos-duration='1200' data-aos-delay='500'>
                <img
                      src="/images/aaryaniverse.png"
                      className="w-[360px] h-[360px] animate-float"
                      alt="Aaryaniverse logo">
                      </img>
            </div>
        <ShootingStars />
        <StarsBackground />
      </div>
    );
}



// "use client";
// import React from "react";
// import { ShootingStars } from "@/components/ui/shooting-stars";
// import { StarsBackground } from "@/components/ui/stars-background";

// export default function Hero(){
//     return(
//         <div className="h-[40rem] rounded-md bg-black flex flex-col items-center justify-center relative w-full">
//         <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
//           <span>Shooting Star</span>
//           <span className="text-white text-lg font-thin">x</span>
//           <span>Star Background</span>
//         </h2>
//         <ShootingStars />
//         <StarsBackground />
//       </div>
//     );
// }