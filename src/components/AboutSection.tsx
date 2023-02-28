import closeup from '../images/close-up-face.jpg'
import Section from './Section'

const TechList = () => {
  const tech = [
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Sass',
    'tRPC'
  ]

  return <ul className='flex flex-col flex-wrap h-32'>
    {tech.map((tech, index) => {
      return <li key={index} className='flex items-center'>
        <Arrow />
        <span>{tech}</span>
      </li>
    })}
  </ul>
}

const Arrow = () => {
  return <svg className='inline-block mr-2' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 5L10 5" stroke="#da62c4" strokeWidth="2" />
    <path d="M5 0L10 5L5 10" stroke="#da62c4" strokeWidth="2" />
  </svg>
}

const About = () => {
  return <section className="flex flex-col md:grid md:grid-flow- md:grid-cols-2 px-16">
    <aside className='md:mr-16'>
      <p className='my-4 w-auto self-center'>
        Hi there! I'm Mark and I enjoy creating software to help others! I've had the privilege to work with companies and non-profits such as
        <a
          className='bg-clip-text text-transparent font-bold ml-1'
          style={{
            background: 'linear-gradient(45deg, rgb(155, 10, 238), #da62c4 30%, white 60%)',
            backgroundSize: "400%",
            backgroundPosition: "0%",
            WebkitBackgroundClip: "text",
          }}
          href='https://humanrightsfirst.org/'>
          Human Rights First</a>,

        <a
          className='bg-clip-text text-transparent font-bold ml-1'
          style={{
            background: 'linear-gradient(45deg, rgb(155, 10, 238), #da62c4 30%, white 60%)',
            backgroundSize: "400%",
            backgroundPosition: "0%",
            WebkitBackgroundClip: "text",
          }}
          href='https://roll20.net/'> Roll 20</a>, SvnStar and more.</p>
      <p className='mb-8 w-auto'>These days, I focus on creating inclusive and accessible software to help those who need it most.</p>
    </aside>
    <div className='relative h-2/3 w-2/3 mb-8 min-w-full md:mb-0 mx-auto md:w-full md:h-auto md:left-0 md:right-0 md:mx-0'>
      <div
        className='absolute z-20 rounded-lg top-0 left-1/3 w-1/3 md:w-full md:left-0 h-full bg-secondary opacity-40 transition-all duration-300 hover:opacity-100 hover:bg-transparent'
      ></div>

      <img className='rounded-lg relative left-1/3 z-10 w-1/3 h-1/3 md:w-auto md:h-full self-center md:left-0' src={closeup} alt="face of Mark Rivera" />
    </div>
    <div className='mt-4'>
      <p className='mb-4'>Some technologies I work with include: </p>
      <TechList />
    </div>
  </section>
}

const AboutSection = () => {
  return (
    <Section number={"01"} title='About Me' children={<About />} />
  )
}

export default AboutSection