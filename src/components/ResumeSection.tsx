import { useState } from "react";
import Section from "./Section";
import { Arrow } from "./Arrow";

type WorkHistory = {
  company: string
  position: string
  startDate: string
  endDate: string
  responsibilities: string[]
};

type ResumeData = WorkHistory[]

const Resume = () => {
  const [data, setData] = useState<ResumeData>([
    {
      company: "Human Rights First",
      position: "Lead Software Engineer",
      startDate: "Jan 2022",
      endDate: "February 2023",
      responsibilities: ["Develop, document and maintain the startup's AI powered web interface using React, TypeScript, Postgres and NextJS", "Collaborate with designers, engineers and product managers to build new features", "Write modern, performant, and maintainable code"]
    },
    {
      company: "QuotaPath",
      position: "Software Engineer",
      startDate: "Aug 2021",
      endDate: "Apr 2022",
      responsibilities: ["Improved render performance by 96% through dependency upgrades and code refactoring", "Contributed to the development and maintenance of a Django/React application", "Worked closely with UI/UX and QA teams to ensure product stability and user retention"]
    },
    {
      company: "SvnStar",
      position: "Software Engineer",
      startDate: "Feb 2021",
      endDate: "Nov 2021",
      responsibilities: ["Developed a React/Redux web application for a startup that provides a platform for users to safely interact with US law enforcement", "Authored test suites to ensure app stability and redundancy", "Write modern, performant, and maintainable code"]
    },
    {
      company: "The Orr Group (Roll20)",
      position: "Junior Software Engineer",
      startDate: "Aug 2020",
      endDate: "Jan 2021",
      responsibilities: ["Authored and maintained over 20+ virtual tabletop gaming sheets which are used by over 8 million players", "Resolved over 100+ bugs and feature requests in a 6 month period", "Collaborated with UI/UX to design wireframes and mockups for new features"]
    }
  ])

  const [activeCompany, setActiveCompany] = useState<WorkHistory>(data[0]);

  const handleCompanyClick = (company: WorkHistory) => {
    setActiveCompany(company)
  }

  return <section className="flex flex-col h-96">
    <div className="flex w-full overflow-x-auto">
      <div className="hidden md:block w-1 bg-secondary"></div>
      <ul className="flex w-full ml-4">
        {data.map((item, index) => {
          return <li key={index} className="w-max mt-4 px-4 h-12 whitespace-nowrap cursor-pointer" onClick={() => handleCompanyClick(item)}>
            {item.company}
          </li>
        })
        }
      </ul>
    </div>
    <div className="px-12 mt-8">
      <h2 className="mb-2">
        {`${activeCompany.position} @ `}
        <span className="text-secondary font-semibold">
          {`${activeCompany.company}`}
        </span>
      </h2>
      <h3 className="mb-4">{`${activeCompany.startDate} - ${activeCompany.endDate}`}</h3>
      <ul>
        {activeCompany.responsibilities.map((item, index) => {
          return <li key={index} className="mb-4">
            <Arrow /> {item}
          </li>
        })}
      </ul>
    </div>
  </section>
}

const ResumeSection = () => {
  return (
    <Section title="Resume" number="02" children={<Resume />} />
  )
}

export default ResumeSection