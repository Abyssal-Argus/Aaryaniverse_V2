"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";

export default function Work(){
    return(
        <>
        <div id="work" className="h-10 hidden"></div>
        <div  className="text-center pb-20">
        <h2 data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='300' className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white libre-bodoni text-5xl pb-7">
          Work
        </h2>
        <p data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='500' className="text-gray-300 text-xs md:text-lg poppins-medium">
        A detailed overview of my professional experiences across organization(s).
        </p>
        </div>
        <div data-aos='flip-down' data-aos-duration='1000' data-aos-delay='500'className="flex justify-center items-center pb-20">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 h-auto">
            <div className="flex flex-col justify-center items-center text-center">
            <img
            src='images/alpas.jpeg'
            alt="alpas"
            height="200"
            width="200"
            className="object-contain"
          />
          <p className="text-base sm:text-2xl font-bold libre-bodoni mt-6 mb-2 text-neutral-200">
            Alpas Technology
          </p>
          <p className="text-xs mb-2 text-neutral-400 poppins-medium">
          At Alpas Technologies, I interned as a Front-End Developer, where I enhanced my React skills through real-world projects and tasks. I also learned Next.js and improved my UI/UX design skills by focusing on clean, user-friendly interfaces. The experience helped me grow both technically and creatively.
          </p>
          <p className="text-sm mt-2 text-neutral-400 poppins-medium font-bold">
            January 2025 - May 2025
          </p>
            </div>
        </BackgroundGradient>
      </div>
        </>
    );
}
