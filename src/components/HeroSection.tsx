
const HeroSection = () => {
  return (
    <section
      className="h-screen min-h-screen flex flex-col pt-16 md:pt-32 px-8 md:px-16 lg:px-24 lg:w-2/3"
    >
      <h1 className="text-lg font-thin text-white mb-4">Oh hi, I'm</h1>
      <p className="font-extrabold text-6xl lg:text-8xl bg-clip-text text-transparent" style={{
        background: 'linear-gradient(45deg, rgb(155, 10, 238), #da62c4 30%, white 60%)',
        backgroundSize: "400%",
        backgroundPosition: "0%",
        WebkitBackgroundClip: "text",
      }}>Mark Rivera.</p>
      <p className="text-white text-5xl lg:w-7xl bg-clip-text text-transparent"
        style={{
          background: 'linear-gradient(45deg, rgba(155, 10, 238, 0.5), #da62c433 40%, #ffffff33 60%)',
          backgroundSize: "400%",
          backgroundPosition: "0%",
          WebkitBackgroundClip: "text",
        }}>
        Software engineer that loves Z-rated movies.
      </p>
      <p className="text-white text-2xl mt-6 md:mt-12 bg-clip-text text-transparent"
        style={{
          background: 'linear-gradient(45deg, rgba(155, 10, 238, 0.5), #da62c433 40%, #ffffff33 60%)',
          backgroundSize: "400%",
          backgroundPosition: "0%",
          WebkitBackgroundClip: "text",
        }}>
        I love to create applications that solve real problems especially for those
        who are in need. I'm currently working as a software engineer at
        <a
          href="https://glimpse-neon.vercel.app/"
          className="text-gradient font-bold"
          target="_blank"> SurvAI
        </a> and I'm also a <a
          href="https://beta.reactjs.org/"
          className="text-gradient font-bold"
          target="_blank">React</a> enthusiast.
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