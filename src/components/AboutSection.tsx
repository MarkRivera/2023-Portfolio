import closeup from '../images/close-up-face.jpg'
import { Arrow } from './Arrow'
import Section from './Section'

const TechList = () => {
  const tech = [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'JavaScript',
    'HTML',
    'CSS',
    'Sass',
    'tRPC'
  ]

  return <ul className='flex flex-col flex-wrap h-20'>
    {tech.map((tech, index) => {
      return <li key={index} className='flex items-center'>
        <Arrow />
        <span>{tech}</span>
      </li>
    })}
  </ul>
}



const About = () => {
  return <section className="flex flex-col mb-16 md:grid md:grid-flow- md:grid-cols-2 px-12">
    <aside className='md:mr-16'>
      <p className='my-4 w-auto self-center'>
        Hi there! I'm Mark and I enjoy creating software to help others! I've had the privilege to work with companies and non-profits such as
        <a
          className='bg-clip-text text-transparent font-bold ml-1 text-gradient'
          href='https://humanrightsfirst.org/'>
          Human Rights First</a>,

        <a
          className='bg-clip-text text-transparent font-bold ml-1 text-gradient'

          href='https://roll20.net/'> Roll 20</a>, SvnStar and more.</p>
      <p className='mb-8 w-auto'>These days, I focus on creating inclusive and accessible software to help those who need it most.</p>
      <div className='mt-4'>
        <p className='mb-4'>Some technologies I work with include: </p>
        <TechList />
      </div>
    </aside>
    <div className='relative h-2/3 w-2/3 max-w-96 max-h-96 mb-8 min-w-full md:mb-0 mx-auto md:h-auto md:left-0 md:right-0 md:mx-0'>
      <img className='rounded-lg mx-auto mt-4 w-56 md:w-auto md:h-full self-center md:left-0' src={closeup} alt="face of Mark Rivera" />
    </div>
  </section>
}

const AboutSection = () => {
  return (
    <Section number={"01"} title='About Me' children={<About />} />
  )
}

export default AboutSection