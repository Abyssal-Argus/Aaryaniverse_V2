'use client';
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Education from "@/components/Education";
import Work from "@/components/Work";
import Cursor from "@/components/Cursor";
import Techstack from "@/components/Techstack";
import Project from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset:70
    });
  }, []);
  return (
 <div className="bg-black overflow-hidden">
 <Cursor/>
 <Navbar/>
 <Hero/>
 <About/>
 <Education/>
 <Work/>
 <Techstack/>
 <Project/>
 <Contact/>
 <Footer/>
 </div>
  );
}
