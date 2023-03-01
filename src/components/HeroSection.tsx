
const HeroSection = () => {
  return (
    <section
      className="h-screen min-h-screen flex flex-col pt-16 md:pt-32 px-4 md:px-16 lg:px-24 lg:w-2/3"
    >
      <h1 className="text-lg font-thin text-white mb-4">Oh hi, I'm</h1>
      <p className="font-extrabold text-6xl lg:text-8xl bg-clip-text text-transparent text-gradient">Mark Rivera.</p>
      <p className="text-2xl md:text-5xl lg:w-7xl bg-clip-text text-transparent font-semibold text-gradient-dark">
        Software engineer that loves Z-rated movies.
      </p>
      <p className="text-xl md:text-2xl mt-6 md:mt-12 bg-clip-text text-transparent font-semibold text-gradient-dark">
        I love to create applications that solve real problems especially for those
        who are in need. I'm currently working as a software engineer at
        <a
          href="https://glimpse-neon.vercel.app/"
          className="font-bold text-gradient"
          target="_blank"

        > SurvAI
        </a> and I'm also a <a
          href="https://beta.reactjs.org/"
          className="font-bold text-gradient"
          target="_blank"
        >React</a> enthusiast.
      </p>

      <a
        className="text-secondary text-2xl w-min mt-12 hover:bg-secondary hover:bg-opacity-20 transition-all duration-300 ease-in-out"
        href="https://www.github.com/markrivera"
        target="_blank"
      >
        <button
          className="border-solid border-4 border-secondary px-8 py-2 font-mono cta-btn"
        >
          GitHub
        </button>
      </a>
    </section>
  )
}

export default HeroSection