import { HoverEffect } from "./ui/card-hover-effect";

type Tech={
    id: number,
        img: string;
        title: string;
    progress: number
    link?: string,
}

const techs:Tech[]=[
    {
        id: 1,
        img: '/images/tech/ts.png', 
        title: 'Typecript',
        progress: 70,
    },
    {
        id: 2,
        img:'/images/tech/react.png', 
        title: 'React ',
        progress: 65,
    },
    {
        id: 3,
        img:'/images/tech/nextjs.png', 
        title: 'Next.js ',
        progress: 55,
    },
    {
        id: 4,
        img: '/images/tech/tailwind.png', 
        title: 'Tailwind CSS',
        progress: 75,
    },
    {
        id: 5,
        img:'/images/tech/java.png', 
        title: 'Java ',
        progress: 50,
    },
    {
        id: 6,
        img:'/images/tech/django.png', 
        title: 'Django ' ,
        progress: 60,
    },
    {
        id: 7,
        img: '/images/tech/mongo.png', 
        title: 'MongoDB',
        progress: 40,
    },
    {
        id: 8,
        img: '/images/tech/node.png', 
        title: 'Node',
        progress: 40,
    }
]

export default function Techstack(){
    return(
        <div id="tech" className="py-16 relative bg-black">
        <h2 data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='300' className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white libre-bodoni text-5xl pb-7 text-center">
          Tech Stack
        </h2>
        <div className="mx-4">
        <p data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='500' className="text-gray-300 md:text-lg text-xs poppins-medium pb-10 text-center">
        My tech stack consisting of multiple programming languages and technical skills, with varying levels of proficiency.
        </p>
        </div>
        <div data-aos='flip-up' data-aos-duration='1000' data-aos-delay='500' className="max-w-5xl mx-auto px-8">
        <HoverEffect items={techs} />
      </div>
            </div>
    );
}