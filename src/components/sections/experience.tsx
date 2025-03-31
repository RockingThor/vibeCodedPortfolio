import { motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";

type ExperienceItemProps = {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  link: string;
  delay: number;
  isLast: boolean;
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
  isLast,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className="mb-16 last:mb-0 relative"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[15px] top-[30px] bottom-[-80px] w-[2px] bg-white/20"></div>
      )}

      <div className="flex items-start">
        {/* Timeline dot */}
        <div className="relative z-10 mt-2 mr-6 h-8 w-8 rounded-full border-2 border-white/30 bg-transparent flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-white"></div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center gap-6 bg-transparent backdrop-blur-xs p-8 rounded-lg border border-white/10 shadow-lg hover:border-white/20 transition-all duration-300">
            <div className="md:w-1/4">
              <h3 className="text-2xl font-bold text-white mb-2">{company}</h3>
              <div className="flex flex-col space-y-1">
                <p className="text-gray-400 font-medium">{duration}</p>
                <p className="text-gray-400 italic">{location}</p>
              </div>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-xl font-semibold text-white mb-4">
                {position}
              </h4>
              <ul className="list-disc pl-5 space-y-3 mb-5">
                {description.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-300 leading-relaxed pl-2 list-none"
                  >
                    <span className="inline-block -ml-2">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-transparent text-gray-300 text-sm rounded-full border border-white/10 hover:border-white/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors inline-flex items-center group"
              >
                Visit Website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform"
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
        "Building real-time collaboration systems",
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
        "Reduced server resource utilization by 35% by implementing caching mechanisms (Redis) and optimizing database queries in Node.js",
      ],
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Jest", "Agile"],
      link: "https://www.nokia.com",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="experience"
      className="relative bg-black py-20 mt-[-80px] overflow-hidden"
    >
      {/* Dim overlay for the sides */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

        {/* BackgroundPaths with reduced opacity */}
        <div className="opacity-40">
          <BackgroundPaths title="" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
        </motion.div>

        <div className="mt-12 pl-4 md:pl-8">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              {...exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
