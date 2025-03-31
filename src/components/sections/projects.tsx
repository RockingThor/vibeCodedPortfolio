import { motion } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
  image?: string;
  delay: number;
};

function ProjectCard({
  title,
  description,
  technologies,
  link,
  github,
  image,
  delay,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden shadow-xl"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
          >
            View Project
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
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center"
            >
              GitHub
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
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "Hangout Server",
      description: "A full-stack hangout platform, built with Next.js, AWS, and PostgreSQL. Features real-time chat, user authentication, and responsive design.",
      technologies: ["Next.js", "TypeScript", "AWS", "PostgreSQL", "Tailwind CSS"],
      link: "https://github.com/RockingThor",
      github: "https://github.com/RockingThor",
      delay: 0.1,
    },
    {
      title: "Insurance Policy Management",
      description: "A comprehensive insurance policy management system with document upload functionality using Firebase Storage and react-dropzone.",
      technologies: ["React", "Firebase", "Node.js", "Express", "MongoDB"],
      link: "#",
      github: "https://github.com/RockingThor",
      delay: 0.2,
    },
    {
      title: "Portfolio Website",
      description: "A sleek, modern portfolio website built with React, TypeScript, and Tailwind CSS. Features 3D animations with Spline and smooth transitions with Framer Motion.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Spline"],
      link: "https://me.rohitnandi.com/",
      github: "https://github.com/RockingThor",
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
          Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-2"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
