import { useState } from "react";

const experiences = [
  {
    company: "Ceeras It Solution",
    logo: "/companylogo/ceeras.jpeg",
    url: "https://www.ceeras.in/",
    position: "Junior Software Developer",
    duration: "feb 2024 - Current",
    description:
      "Implemented a multi-tenant web dashboard for the MeSH eSIM platform using Flask and PostgreSQL. Developed a scheduler with Celery and RabbitMQ for asynchronous task management. Dockerized deployments and set up CI/CD pipelines with GitLab. Enhanced error detection by 20% using Kibana and optimized system performance with caching."
  },
  {
    company: "Skillanto Pvt.ltd, Bhubaneswar",
    logo: "data:image/png;base64,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",
    url: "https://www.ceeras.in/",
    position: "Web Developer Intern",
    duration: "Jan 2024 - Apr 2025",
    description:
      "Implemented a multi-tenant web dashboard for the MeSH eSIM platform using Flask and PostgreSQL. Developed a scheduler with Celery and RabbitMQ for asynchronous task management. Dockerized deployments and set up CI/CD pipelines with GitLab. Enhanced error detection by 20% using Kibana and optimized system performance with caching."
  },
  
];

export default function WorkExperience() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="work" className="w-full">
      <div className="max-w-2xl mx-auto space-y-4">
        <h2 className="text-xl font-bold">Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="block cursor-pointer">
            <div className="rounded-lg bg-card text-card-foreground flex p-4 hover:bg-[#F4F5F7] relative group">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="aspect-square h-full w-full object-contain"
                  />
                </span>
              </div>
              <div className="flex-grow ml-4 flex flex-col">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none text-xs sm:text-sm">
                    {exp.company}
                  </h3>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-chevron-right size-4 transform transition-transform duration-300 ease-in-out ${openIndex === index ? "rotate-90" : ""}`}
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </div>
                <div className="font-sans text-xs font-semibold ">{exp.position}</div>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right font-semibold">
                  {exp.duration}
                </div>
              </div>
              
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0"}`}
            >
              <div className="text-xs sm:text-sm bg-gray-100 p-3 rounded-md">
                {exp.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
