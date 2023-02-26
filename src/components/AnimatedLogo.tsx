import { motion, AnimatePresence } from 'framer-motion';
import { useMotionValue, useMotionValueEvent } from "framer-motion"
import { useState } from 'react';

const AnimatedLogo = () => {
  const top = useMotionValue("0%"); // this is the value that will be animated
  const [isAnimating, setIsAnimating] = useState(true);


  useMotionValueEvent(top, "animationComplete", () => { // this is the event that will be fired when the animation is complete
    setIsAnimating(false);
  })

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className='flex flex-col justify-center items-center min-h-screen mx-auto absolute w-full h-full top-0 left-0 z-50 bg-primary'
          key='container'
        >
          <motion.div
            className='text-secondary font-bold text-4xl relative h-32 w-32 flex justify-center items-center overflow-hidden'
            key='logo'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.5 } }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
          >
            <motion.div
              className='h-1 bg-secondary min-w-full absolute top-0'
              key="top"
              initial={{ left: "-100%" }}
              animate={{ left: "0%" }}
              transition={{
                duration: 0.8,
                delay: 1.5,
              }}
            />
            <motion.div className='bg-secondary h-32 w-1 absolute left-0'
              key="left"
              style={{ top }}
              initial={{ top: "-100%" }}
              animate={{ top: "0%" }}
              transition={{
                duration: 0.8,
                delay: 1.5,
              }} />
            M
            <motion.div className='h-1 bg-secondary min-w-full absolute bottom-0'
              key="bottom"
              initial={{ right: "-100%" }}
              animate={{ right: "0%" }}
              transition={{
                duration: 0.8,
                delay: 1.5,
              }} />
            <motion.div className='bg-secondary h-32 w-1 absolute right-0'
              key="right"
              initial={{ bottom: "-100%" }}
              animate={{ bottom: "0%" }}
              transition={{
                duration: 0.8,
                delay: 1.5,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AnimatedLogo