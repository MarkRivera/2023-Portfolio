import { useState } from "react";
import cx from "classnames";
import Section from "./Section";
import { Arrow } from "./Arrow";

type WorkHistory = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

type ResumeData = WorkHistory[];

const Resume = () => {
  const data: ResumeData = [
    {
      company: "Human Rights First",
      position: "Lead Software Engineer",
      startDate: "Jan 2022",
      endDate: "February 2023",
      responsibilities: [
        "Developed machine learning-powered full stack web application to parse human rights video data to reduce manual investigation by more than 50 %+.",
        "Partnered with machine learning engineer and designer to solicit feedback showing an improvement of positive user experience by 80 %.",
        "Utilized PaaS to upload and pipeline videos into machine learning model to increase accuracy by 5%."
      ]
    },
    {
      company: "QuotaPath",
      position: "Software Engineer",
      startDate: "Aug 2021",
      endDate: "Apr 2022",
      responsibilities: [
        "Optimized React application performance through caching, memoization, and dependency management. Reducing unnecessary rerenders by 96 %.",
        "Updated and maintained a Django / Python backend with a PostgreSQL database.",
        "Authored Unit and E2E tests with tools such as Cypress and CircleCI to maintain at least 75% test coverage and 99.999 % uptime."
      ]
    },
    {
      company: "SvnStar",
      position: "Software Engineer",
      startDate: "Feb 2021",
      endDate: "Nov 2021",
      responsibilities: [
        "Collaborated with 3 engineers to create a SaaS to enable safe interactions with public law enforcement. Culminating in an acceptance by the AWS accelerator program",
        "Designed and engineered technical spec sheets and beta application for investors, securing $800,000+ in investment capital.",
        "Authored a comprehensive suite of unit tests to enable a migration from Next.js to AWS Amplify without the loss of functionality.",
        "Coordinated with the Project Manager to produce technical specs and working prototype that was presented to the City of Chicago and Port Authority."
      ]
    },
    {
      company: "The Orr Group (Roll20)",
      position: "Junior Software Engineer",
      startDate: "Aug 2020",
      endDate: "Jan 2021",
      responsibilities: [
        "Developed and updated over 20+ virtual tabletop gaming sheets, which are used by over 8,000,000 users.",
        "Resolved 8 to 10 user generated tickets daily, which resulted in consistently updated sheets and improved user satisfaction.",
        "Designed wireframes for multiple sheets, improving team coordination and development time on long or complex projects."
      ]
    }
  ];

  const [activeCompany, setActiveCompany] = useState<WorkHistory>(data[0]);

  const handleCompanyClick = (company: WorkHistory) => {
    setActiveCompany(company);
  };

  return (
    <section className="mb-16 flex flex-col">
      <div className="flex w-full overflow-x-auto">
        <ul className="ml-4 flex w-full scrollbar-thin scrollbar-track-primary scrollbar-thumb-secondary scrollbar-thumb-rounded">
          {data.map((item, index) => {
            return (
              <li
                key={index}
                className={cx(
                  "w-max mt-4 px-4 h-12 whitespace-nowrap cursor-pointer",
                  {
                    "sm:border-b-secondary sm:border-b-2 font-semibold text-secondary sm:text-white":
                      activeCompany.company === item.company
                  }
                )}
                onClick={() => handleCompanyClick(item)}
              >
                {item.company}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-8 px-12">
        <h2 className="mb-2">
          {`${activeCompany.position} @ `}
          <span className="font-semibold text-secondary">
            {`${activeCompany.company}`}
          </span>
        </h2>
        <h3 className="mb-4">{`${activeCompany.startDate} - ${activeCompany.endDate}`}</h3>
        <ul>
          {activeCompany.responsibilities.map((item, index) => {
            return (
              <li key={index} className="mb-4">
                <Arrow /> {item}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const ResumeSection = () => {
  return (
    <Section title="Resume" number="02" id="resume">
      <Resume />
    </Section>
  );
};

export default ResumeSection;
