import { motion } from "framer-motion";

type ExperienceItemProps = {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  link: string;
  delay: number;
};

function ExperienceItem({
  company,
  position,
  duration,
  location,
  description,
  technologies,
  link,
  delay,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className="mb-12 last:mb-0"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="md:w-1/3">
          <h3 className="text-xl font-bold text-white">{company}</h3>
          <p className="text-gray-400">{duration}</p>
          <p className="text-gray-400">{location}</p>
        </div>
        <div className="md:w-2/3">
          <h4 className="text-xl font-semibold text-purple-400 mb-2">{position}</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
            {description.map((item, index) => (
              <li key={index} className="text-gray-300">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
          >
            Visit Website
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const experiences = [
    {
      company: "Groundzero",
      position: "Senior Software Engineer",
      duration: "2023 - Present",
      location: "Remote",
      description: [
        "Leading development of high-performance React applications",
        "Designing and implementing scalable Node.js services",
        "Building real-time collaboration systems"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS"],
      link: "https://parabol.co",
      delay: 0.1,
    },
    {
      company: "Wipro",
      position: "Frontend Developer → Fullstack Developer",
      duration: "2020 - 2023",
      location: "On Site",
      description: [
        "Developed and optimized over 50 responsive web pages using ReactJS and Next.js, ensuring seamless performance across all devices.",
        "Delivered a complex 9-page claim form using React.js (frontend) and Node.js (backend), reducing user submission errors by 30% through intuitive UI design and robust server-side logic.",
        "Leveraged Redux and Context API for dynamic state handling, ensuring glitch-free performance for over 200,000 daily users",
        "Implemented robust security features, resolving 95% of identified vulnerabilities, and ensuring compliance with GDPR and ISO27001 standards",
        "Integrated Jest-based automated testing and GitHub Actions pipelines, reducing deployment errors by 50%.",
        "Reduced server resource utilization by 35% by implementing caching mechanisms (Redis) and optimizing database queries in Node.js"
      ],
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Jest", "Agile"],
      link: "https://www.nokia.com",
      delay: 0.3,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          Work Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-2"></div>
      </motion.div>

      <div className="mt-12">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}
