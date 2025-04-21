import { motion } from 'framer-motion'
import React from 'react'

type variantsType={
    open:{
        transition:{
            staggeredChildren: number,
        },
    },
    closed:{
        transition:{
            staggeredChildren: number,
            staggeredDirection: -1|1,
        },
    }
}


type NavLinkType={
    id: number,
    name : string,
    link: string
}

const variants: variantsType={
    open:{
        transition:{
            staggeredChildren: 0.1,
        },
    },
    closed:{
        transition:{
            staggeredChildren: 0.05,
            staggeredDirection:-1,
        },
    }
}

const Links = () => {
const navlinks:NavLinkType[]=[
    {
        id: 1,
        name: 'ABOUT',
        link: `#about`
    },
    {
        id: 2,
        name: 'EDUCATION',
        link: `#edu` 
    },
    {
        id:3,
        name: 'WORK',
        link: `#work`  
    },
    {
        id: 4,
        name: 'TECH STACK',
        link: `#tech` 
    },
    {
        id: 5,
        name: 'PROJECTS',
        link: `#proj` 
    },
    {
        id: 6,
        name: 'CONTACT',
        link: `#contact` 
    },
]
  return (
   <motion.div variants={variants}>
   <ul className='absolute w-full h-full flex flex-col items-center justify-center gap-5'>
            {navlinks.map((link)=>(
                <li key={link.id} className='pb-2'>
                    <a data-aos='fade-right' data-aos-duration='1000' data-aos-delay={700+link.id*100} href={link.link} className="text-4xl transition-transform duration-250 hover:scale-125 inline-block text-black poppins-medium" >{link.name}</a>
                </li>
            ))}
            </ul>
   </motion.div>
  )
}

export default Links