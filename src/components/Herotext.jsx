import React from 'react';
import { motion } from 'framer-motion';


function Herotext() {
  return (
    <div className="sticky top-[7vh] md:top-[10vh] min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center items-center px-4 text-center z-10">
      <motion.div 
        className="space-y-4 md:space-y-6 text-base md:text-xl font-normal md:font-light leading-relaxed max-w-md md:max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="herotext-main pt-6 md:pt-10">
          <p className="herotext-1 text-lg md:text-2xl">(*)</p>
          <p className='herotext-2'>A full-service designer specialized in</p>
          <p className="herotext-3 font-medium md:font-normal">Branding & Web Design.</p>
          <p className='herotext-4'>I help brands</p>
          <p className='herotext-5'>connect with people with</p>
          <p className='herotext-6'>a fresh and distinctive approach.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Herotext;