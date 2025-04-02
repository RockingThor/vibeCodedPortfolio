import { motion } from "framer-motion";
import { ExternalLink as LinkIcon, Github as GithubIcon, Laptop, Code, Briefcase } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
  delay: number;
};

export function GlowingEffectDemo({ projects }: { projects: ProjectProps[] }) {
  // Define specific grid areas for each project
  const gridAreas = [
    "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    "md:[grid-area:2/1/3/13] xl:[grid-area:1/5/3/13]",
  ];

  // Define icons for each project
  const projectIcons = [
    <Laptop className="h-4 w-4" key="laptop" />,
    <Briefcase className="h-4 w-4" key="briefcase" />,
    <Code className="h-4 w-4" key="code" />
  ];

  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      {projects.map((project, index) => (
        index < 3 && (
          <GridItem
            key={index}
            area={gridAreas[index]}
            icon={projectIcons[index]}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            github={project.github}
          />
        )
      ))}
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  technologies: string[];
  link: string;
  github?: string;
}

const GridItem = ({ area, icon, title, description, technologies, link, github }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors inline-flex items-center text-sm"
            >
              View Project
              <LinkIcon className="h-3 w-3 ml-1" />
            </a>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors inline-flex items-center text-sm"
              >
                GitHub
                <GithubIcon className="h-3 w-3 ml-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export function Projects() {
  const projects: ProjectProps[] = [
    
    {
      title: "Insurance Policy Management",
      description:
        "A comprehensive insurance policy management system with document upload functionality using Firebase Storage and react-dropzone.",
      technologies: ["React", "Firebase", "Node.js", "Express", "MongoDB"],
      link: "#",
      github: "https://github.com/RockingThor",
      delay: 0.2,
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek, modern portfolio website built with React, TypeScript, and Tailwind CSS. Features 3D animations with Spline and smooth transitions with Framer Motion.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Spline",
      ],
      link: "https://me.rohitnandi.com/",
      github: "https://github.com/RockingThor",
      delay: 0.3,
    },
    {
      title: "Hangout Server",
      description:
        "A full-stack hangout platform, built with Next.js, AWS, and PostgreSQL. Features real-time chat, user authentication, and responsive design.",
      technologies: [
        "Next.js",
        "TypeScript",
        "AWS",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      link: "https://github.com/RockingThor",
      github: "https://github.com/RockingThor",
      delay: 0.1,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-80px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
      </motion.div>

      <GlowingEffectDemo projects={projects} />
    </div>
  );
}
