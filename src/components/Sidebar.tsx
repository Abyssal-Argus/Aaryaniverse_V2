import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './Links';
import Toggler from './Toggler';

type variantsType={
    open: {
        clipPath: string,
        transition: {
          type: string,
          stiffness?: number,
        },
      },
      close: {
        clipPath: string,
        transition: {
          type: string,
          stiffness: number,
          damping?: number,
        }
      }
};

const variants:variantsType = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  close: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
};
const Sidebar:React.FC = () => {
const [open, setOpen] = useState<boolean>(false);
  return (
    <motion.div animate={open ? "open" : "close"} initial='close'>
      <motion.div 
        className='fixed top-0 left-0 w-[100vw] h-screen bg-white z-40' 
        variants={variants}
      >
        <Links/>
      </motion.div>
      <Toggler setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Sidebar;