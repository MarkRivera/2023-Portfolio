import { useRef } from 'react';
import closeup from '../images/close-up-face.jpg'

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const shiftBorderDiv = () => {
    if (ref.current) {
      ref.current.classList.add('left-[53%]');
    }
  }

  const unshiftBorderDiv = () => {
    if (ref.current) {
      ref.current.classList.remove('left-[53%]');
    }
  }

  return (
    <section className="flex flex-col">
      <header>
        <h2 className="text-3xl font-semibold ml-16">
          <span className='text-lg text-secondary mr-2'>01.</span>
          About Me
        </h2>
      </header>
      <p className='my-4 mx-16 w-auto self-center'>Hi there! I'm Mark and I enjoy creating software to help others! I've had the privilege to work with companies and non-profits such as <a href='https://humanrightsfirst.org/'>Human Rights First</a>, <a href='https://roll20.net/'>Roll 20</a>, SvnStar and more.</p>
      <p className='mx-16 mb-8 w-auto'>These days, I focus on creating inclusive and accessible software to help those who need it most.</p>

      <div className='relative flex justify-center mb-8'>
        <div
          className='absolute z-20 rounded-lg top-0 left-1/2 -translate-x-1/2 w-1/3 h-full bg-secondary opacity-40 transition-all duration-300 hover:opacity-100 hover:bg-transparent cursor-pointer'
          onMouseEnter={shiftBorderDiv}
          onMouseLeave={unshiftBorderDiv}
        ></div>

        <div className='absolute z-10 rounded-lg top-6 left-[55%] border-solid border-2 border-secondary -translate-x-1/2 w-1/3 h-full opacity-40 transition-all duration-300 cursor-pointer' ref={ref}></div>

        <img className='rounded-lg relative z-10 w-1/3 h-1/3 self-center' src={closeup} alt="face of Mark Rivera" />
      </div>
    </section>
  )
}

export default AboutSection