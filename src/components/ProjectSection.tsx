import Section from "./Section"

type Project = {
  name: string
  description: string
  techStack: string[]
  github: string
  live: string | null
}

type ProjectData = Project[]

const ProjectCard = ({ project }: { project: Project }) => {
  return <div className="flex flex-col w-72 sm:w-1/2 bg-primary rounded-2xl p-8">
    <h2 className="text-2xl font-semibold mb-4 text-gradient bg-clip-text text-transparent">{project.name}</h2>
    <p className="text-sm mb-4">
      {project.description}
    </p>
    <div className="flex">
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold mb-2">Tech Stack</h3>
        <ul className="flex flex-wrap">
          {project.techStack.map((tech, index) => {
            return <li key={index} className="mr-2">{tech}</li>
          })}
        </ul>
        <div className="font-bold text-gradient bg-clip-text text-transparent mt-4">
          <a
            className="mr-4"
            href={project.github} target="blank">GitHub</a>
          {project.live && <a
            href={project.live}
            target="blank"
          >Live</a>}
        </div>
      </div>
    </div>
  </div>
}

const Projects = () => {
  const projects: ProjectData = [
    {
      name: "Glimpse",
      description: "Glimpse is a state of the art AI powered web application that allows users to empower investigations and data parsing. Users can create an account, create projects, Upload and view videos from other users. Users can also view a table of all videos and filter by multiple categories.",
      techStack: ["React", "NextJS", "tRPC", "PostgreSQL", "TypeScript", "TailwindCSS", "Prisma"],
      github: "https://github.com/Human-Rights-First-Innovation-Lab/glimpse-web",
      live: "https://glimpse-neon.vercel.app/"
    },
    {
      name: "Maximum Earnings",
      description: "A small responsive calculator built to accept any number of students and their respective potential profits. The calculator will then calculate the maximum earnings for the given students within a number of give hours.",
      techStack: ["React", "Vite", "TypeScript", "TailwindCSS"],
      github: "https://github.com/MarkRivera/maximum-earnings",
      live: "https://maximum-earnings.vercel.app/"
    },
    {
      name: "Tic Tac Toe",
      description: "A simple tic tac toe game built for the CLI with TypeScript. The game allows users to play against another player. Want to play?",
      techStack: ["TypeScript", "NodeJS"],
      github: "https://github.com/MarkRivera/tic-tac-toe",
      live: null
    },
    {
      name: "Pomodoro (Work in Progress)",
      description: "Unhappy with the current available pomodoro timers, I decided to build my own. This pomodoro timer allows users to set a custom work and break time. The timer will also play a custom sound when the timer is up.",
      techStack: ["React", "Rust", "Tauri", "TypeScript"],
      github: "https://github.com/MarkRivera/pomodoro",
      live: null
    }
  ]

  return <section className="flex flex-col sm:flex-row flex-wrap">
    {projects.map((project, index) => {
      return <ProjectCard key={index} project={project} />
    })}
  </section>
}

const ProjectSection = () => {
  return (
    <Section title="Projects" number="03" children={<Projects />} />
  )
}

export default ProjectSection