
const HeroSection = () => {
  return (
    <section
      className="h-screen min-h-screen flex flex-col justify-center px-0 lg:w-2/3"
    >
      <h1 className="text-lg font-thin text-white mb-4">Oh hi, I'm</h1>
      <p className="text-gradient font-extrabold text-6xl lg:text-8xl">Mark Rivera.</p>
      <p className="text-white text-5xl lg:w-7xl text-gradient-muted">
        Software engineer that loves Z-rated movies.
      </p>
      <p className="text-white text-2xl mt-12 text-gradient-muted">
        I love to create applications that solve real problems especially for those
        who are in need. I'm currently working as a software engineer at
        <a
          href="https://glimpse-neon.vercel.app/"
          className="text-gradient font-bold"
          target="_blank">SurvAI
        </a> and I'm also a <a
          href="https://beta.reactjs.org/"
          className="text-gradient font-bold"
          target="_blank">React</a> enthusiast.
      </p>

      <a
        className="text-secondary text-2xl w-min mt-12"
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