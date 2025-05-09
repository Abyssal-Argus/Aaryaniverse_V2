import React from 'react';
import { motion } from "framer-motion";

interface TogglerProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
  }


const Toggler:React.FC<TogglerProps> = ({ setOpen, open }) => {
  return (
    <button 
      className='w-[50px] h-[50px] rounded-full fixed top-[28px] left-[38px] bg-transparent border-none cursor-pointer z-50' 
      onClick={() => setOpen((prev) => !prev)}
    >
      <motion.svg width='23' height='23' viewBox='0 0 23 23'>
        <motion.path 
          strokeWidth="3" 
          stroke="black" 
          strokeLinecap='round' 
          variants={{
            close: { d: "M 2 2.5 L 20 2.5" }, 
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
          animate={open ? "open" : "close"}
        />
        <motion.path 
          strokeWidth="3" 
          stroke="black" 
          strokeLinecap='round' 
          d="M 2 9.423 L 20 9.423" 
          variants={{
            close: { opacity: 1 }, 
            open: { opacity: 0 }
          }}
          animate={open ? "open" : "close"}
        />
        <motion.path 
          strokeWidth="3" 
          stroke="black" 
          strokeLinecap='round' 
          variants={{
            close: { d: "M 2 16.346 L 20 16.346" }, 
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
          animate={open ? "open" : "close"}
        />
      </motion.svg>
    </button>
  );
};

export default Toggler;