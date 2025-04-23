'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import React, { useState } from "react";


type Project = {
  id: number;
  projpic: string;
  projname: string;
  projdesc?: string;
  url?: string;
};

const Project = () => {
  const [acti, setacti] = useState(0);
  const [visible, setVisible] = useState<number | false>(false);

  const handleDisplay = (index: number) => {
    setVisible(index);
  };

  const handleExit = () => {
    setVisible(false);
  };
 

  const projects: Project[] = [
    {
      id: 1,
      projpic: "/images/projects/pj1.PNG",
      projname: 'Benelli Website',
      projdesc: 'My love for benelli made me create this website using Django, this page shows details about various benelli bikes.',
      url: 'https://github.com/Abyssal-Argus/Benelli'
    },
    {
      id: 2,
      projpic: "/images/projects/pj2.PNG",
      projname: 'Ecommerce website',
      projdesc: 'A Django project that allows users to register and auction their products.',
      url: 'https://github.com/Abyssal-Argus/COMMERCE'
    },
    {
      id: 3,
      projpic: "/images/projects/pj3.PNG",
      projname: 'Pokemon Card Generator',
      projdesc: "This is a vanilla JavaScript project that randomly generates pokemon (till Kalos region) and displays its stats.",
      url: 'https://github.com/Abyssal-Argus/pokemon-card-generator'
    },
    {
      id: 4,
      projpic: "/images/projects/pj4.PNG",
      projname: 'Weather App',
      projdesc: 'Gives accurate real-time weather information of the location you have entered.',
      url: 'https://github.com/Abyssal-Argus/weather-app'
    },
    {
      id: 5,
      projpic: "/images/projects/pj5.PNG",
      projname: 'NepAir (Frontend)',
      projdesc: "Herald college's final year project (frontend only), which I made using React.",
      url: 'https://github.com/Abyssal-Argus/Nepair'
    },
    {
      id: 6,
      projpic: "/images/projects/pj6.PNG",
      projname: 'Custom Portfolio',
      projdesc: "Allows you to generate your own portfolio with the information you have provided.",
      url: 'https://github.com/Abyssal-Argus/custom-portfolio'
    },
    {
      id: 7,
      projpic: "/images/projects/pj7.PNG",
      projname: 'Aaryaniverse V1',
      projdesc: "My 1st ever official portfolio made using React hosted on netlify.",
      url: 'https://aaryaniversev1.netlify.app/'
    },
  ];

  return (
    <>
      <div id="proj" className="bg-black">
      <div className="text-center w-full mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='300' className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white libre-bodoni text-5xl pb-7">
          Projects
        </h2>
        <p data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='500' className="text-gray-300 text-xs md:text-lg poppins-medium">
        These are some of my key projects, showcasing my core tech stack.
        </p>
      </div>
        <div className='h-full flex items-center justify-center pb-10'>
          <div data-aos='slide-up' data-aos-duration='1000' data-aos-delay='500' className='max-w-5xl overflow-x-hidden hidden md:block'>
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }}
              onSlideChange={(swiper) => setacti(swiper.realIndex)}
              loop={true}
              centeredSlides={true}
              speed={800}
              autoplay={{ delay: 3000 }}
              modules={[Autoplay]}
              className='w-full'
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.id}>
                  <div 
                    className='h-[26rem] flex' 
                    onMouseEnter={() => handleDisplay(index)} 
                    onMouseLeave={handleExit}
                  >
                    <div
                      className={`card ${acti === index ? 'card-active' : ''} grid content-end`} 
                      style={{ 
                        backgroundImage: `url(${project.projpic})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                      }}
                    >
                      <h2 
                        className={`poppins-medium text-2xl mt-5 font-bold text-cyan-300 ${visible === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} 
                        style={{textShadow: '1px 1px 1px rgba(0, 0, 0, 1)'}}
                      >
                        {project.projname}
                      </h2>
                      <h2 
                        className={`poppins-medium text-sm mt-5 font-bold text-cyan-300 ${visible === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} 
                        style={{textShadow: '1px 1px 1px rgba(0, 0, 0, 1)'}}
                      >
                        {project.projdesc}
                      </h2>
                      <div className='flex justify-center pt-5'>
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`py-2 px-4 rounded-md text-white font-bold bg-cyan-300 hover:bg-cyan-500 w-36 ${visible === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 poppins-medium`}
                        >
                          View project
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div 
      data-aos='slide-up' data-aos-duration='1000' data-aos-delay='500'
      className='h-auto flex flex-col justify-center items-center gap-y-8 md:hidden pb-14'>
          {projects.map((project) =>(
            <div key={project.id} 
            style={{
              backgroundImage: `url('${project.projpic}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              }}
            className='flex flex-col font-bold rounded-3xl justify-center text-center text-cyan-300 w-3/4 h-96'>
              <h1 className='mt-48  poppins-medium' style={{textShadow: '1px 1px 1px rgba(0, 0, 0, 1)'}}>{project.projname}</h1>
              <div className='flex justify-center mt-5'>
              <a href={project.url} className='py-2 px-4 rounded-md text-white bg-cyan-400 hover:bg-cyan-700 w-36 poppins-medium'>View Project</a>
              </div>
            </div>
          ))}
        </div>
    </>
  );
};


export default Project;