import Section from "./Section";

type Project = {
  name: string;
  description: string;
  techStack: string[];
  github: string;
  live: string | null;
};

type ProjectData = Project[];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex w-full flex-col rounded-2xl bg-primary p-8 sm:w-1/2">
      <h2 className="text-gradient mb-4 bg-clip-text text-2xl font-semibold text-transparent">
        {project.name}
      </h2>
      <p className="mb-4 text-sm">{project.description}</p>
      <div className="flex">
        <div className="flex flex-col">
          <h3 className="mb-2 text-sm font-semibold">Tech Stack</h3>
          <ul className="flex flex-wrap">
            {project.techStack.map((tech, index) => {
              return (
                <li key={index} className="mr-2">
                  {tech}
                </li>
              );
            })}
          </ul>
          <div className="text-gradient mt-4 bg-clip-text font-bold text-transparent">
            <a className="mr-4" href={project.github} target="blank">
              GitHub
            </a>
            {project.live && (
              <a href={project.live} target="blank">
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: ProjectData = [
    {
      name: "Glimpse",
      description:
        "Glimpse is a state of the art AI powered web application that allows users to empower investigations and data parsing. Users can create an account, create projects, Upload and view videos from other users. Users can also view a table of all videos and filter by multiple categories.",
      techStack: [
        "React",
        "NextJS",
        "tRPC",
        "PostgreSQL",
        "TypeScript",
        "TailwindCSS",
        "Prisma"
      ],
      github:
        "https://github.com/Human-Rights-First-Innovation-Lab/glimpse-web",
      live: "https://glimpse-neon.vercel.app/"
    },
    {
      name: "Maximum Earnings",
      description:
        "A small responsive calculator built to accept any number of students and their respective potential profits. The calculator will then calculate the maximum earnings for the given students within a number of give hours.",
      techStack: ["React", "Vite", "TypeScript", "TailwindCSS"],
      github: "https://github.com/MarkRivera/maximum-earnings",
      live: "https://maximum-earnings.vercel.app/"
    },
    {
      name: "MikeMerch",
      description:
        "A simple portfolio built with React and NextJS for an musician / actor. Currently in development. Enter via the Merch side of the site.",
      techStack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
      github: "https://github.com/MarkRivera/next-merch",
      live: "https://quirky-kilby-e5e908.netlify.app/"
    },
    {
      name: "Tic Tac Toe",
      description:
        "A simple tic tac toe game built for the CLI with TypeScript. The game allows users to play against another player. Want to play?",
      techStack: ["TypeScript", "NodeJS"],
      github: "https://github.com/MarkRivera/tic-tac-toe",
      live: null
    },
    {
      name: "React Pomodoro (Work in Progress)",
      description:
        "Unhappy with the current available pomodoro timers, I decided to build my own. This pomodoro timer allows users to set a custom work and break time. The timer will also play a custom sound when the timer is up.",
      techStack: ["React", "Rust", "Tauri", "TypeScript"],
      github: "https://github.com/MarkRivera/pomodoro",
      live: null
    },
    {
      name: "Solid Pomodoro (Work in Progress)",
      description:
        "Same as the React Pomo but built with SolidJS. This pomodoro timer allows users to set a custom work and break time. The timer will also play a custom sound when the timer is up.",
      techStack: ["SolidJS", "Rust", "Tauri", "TypeScript"],
      github: "https://github.com/MarkRivera/solid-pomo",
      live: null
    },
    {
      name: "Human Rights First - Blue Witness",
      description:
        "Blue Witness is a web application that allows users to research police misconduct in the United States. Users can view a map of the United States and view police misconduct in their area. Users can also view a table of all police misconduct and filter by multiple categories.",
      techStack: [
        "React",
        "JavaScript",
        "Python",
        "Redux",
        "ChartJS",
        "Ant Design"
      ],
      github:
        "https://github.com/BloomTech-Labs/human-rights-first-police-fe-a",
      live: null
    }
  ];

  return (
    <section className="flex flex-col flex-wrap sm:flex-row sm:justify-center">
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </section>
  );
};

const ProjectSection = () => {
  return (
    <Section title="Projects" number="03" id="projects">
      <Projects />
    </Section>
  );
};

export default ProjectSection;
