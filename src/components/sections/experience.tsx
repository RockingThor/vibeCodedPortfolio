import { motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

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
      className="mb-20 last:mb-0 relative"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[15px] top-[30px] bottom-[-100px] w-[2px] bg-gradient-to-b from-purple-500/70 to-transparent"></div>
      )}

      <div className="flex items-start">
        {/* Timeline dot */}
        <div className="relative z-10 mt-2 mr-6 h-8 w-8 rounded-full border-2 border-purple-500/70 bg-black flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
        </div>

        <div className="flex-1">
          <div className="relative flex flex-col md:flex-row gap-8 bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.3)]">
            {/* Add GlowingEffect */}
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
            />
            
            <div className="md:w-1/4 flex flex-col">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
                {company}
              </h3>
              <div className="flex flex-col space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span>{location}</span>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center group mt-4"
                >
                  <ExternalLink className="h-4 w-4 mr-1 text-purple-400" />
                  <span className="border-b border-dashed border-purple-400/50 group-hover:border-purple-400">
                    Visit Website
                  </span>
                </a>
              </div>
            </div>
            
            <div className="md:w-3/4">
              <h4 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-white/10">
                {position}
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm uppercase tracking-wider text-purple-400 mb-3 font-medium">Responsibilities</h5>
                  <ul className="space-y-3 mb-6">
                    {description.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-300 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-purple-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm uppercase tracking-wider text-purple-400 mb-3 font-medium">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-900/20 text-purple-200 text-sm rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
      duration: "2024 - Present",
      location: "Remote",
      description: [
        "Leading development of high-performance React applications",
        "Designing and implementing scalable Node.js services",
        "Building real-time collaboration systems",
      ],
      technologies: ["React", "Javascript", "Typescript", "Docker",  "Node.js", "TypeScript", "AWS"],
      link: "https://groundzero.cloud",
      delay: 0.1,
    },
    {
      company: "Wipro",
      position: "Frontend Developer → Fullstack Developer",
      duration: "2022 - 2024",
      location: "On Site",
      description: [
        "Developed and optimized over 50 responsive web pages using ReactJS and Next.js, ensuring seamless performance across all devices.",
        "Delivered a complex 9-page claim form using React.js (frontend) and Node.js (backend), reducing user submission errors by 30% through intuitive UI design and robust server-side logic.",
        "Leveraged Redux and Context API for dynamic state handling, ensuring glitch-free performance for over 200,000 daily users",
        "Implemented robust security features, resolving 95% of identified vulnerabilities, and ensuring compliance with GDPR and ISO27001 standards",
        "Integrated Jest-based automated testing and GitHub Actions pipelines, reducing deployment errors by 50%.",
        "Reduced server resource utilization by 35% by implementing caching mechanisms (Redis) and optimizing database queries in Node.js",
      ],
      technologies: ["React", "TypeScript", "Javascript", "Node.js", "AWS", "Jest", "Agile", "Docker"],
      link: "https://www.wipro.com",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="experience"
      className="relative bg-black py-10 mt-[-80px] overflow-hidden"
    >
      {/* Background effects */}
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
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey through the tech landscape, building solutions that matter.
          </p>
        </motion.div>

        <div className="mt-16 pl-4 md:pl-8">
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
