import { useState } from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "../ui/glowing-effect";
import { cn } from "@/lib/utils";
import {
  Code,
  Braces,
  FileType,
  Layers,
  Cpu,
  Server,
  Database,
  GitBranch,
  Container,
  Cloud,
  Flame,
  Workflow,
  Globe,
} from "lucide-react";

// Define skill categories and items
const skillsData = [
  {
    category: "Frontend",
    description:
      "Building beautiful, responsive user interfaces with modern technologies",
    skills: [
      {
        name: "React",
        icon: <Braces className="w-6 h-6" />,
        description:
          "Component-based UI library for building interactive interfaces",
        bgImage: "/images/skills/react-bg.png",
      },
      {
        name: "TypeScript",
        icon: <FileType className="w-6 h-6" />,
        description: "Typed JavaScript for safer, more maintainable code",
      },
      {
        name: "Next.js",
        icon: <Layers className="w-6 h-6" />,
        description: "React framework for production-grade applications",
      },
      {
        name: "Tailwind CSS",
        icon: <Cpu className="w-6 h-6" />,
        description: "Utility-first CSS framework for rapid UI development",
      },
      {
        name: "HTML/CSS",
        icon: <Code className="w-6 h-6" />,
        description: "Core web technologies for structure and styling",
      },
      {
        name: "JavaScript",
        icon: <Braces className="w-6 h-6" />,
        description: "Dynamic programming language for the web",
      },
    ],
  },
  {
    category: "Backend",
    description:
      "Creating robust server-side applications and database solutions",
    skills: [
      {
        name: "Node.js",
        icon: <Server className="w-6 h-6" />,
        description:
          "JavaScript runtime for building scalable network applications",
        bgImage: "/images/skills/nodejs-bg.png",
      },
      {
        name: "Express",
        icon: <Server className="w-6 h-6" />,
        description: "Fast, unopinionated web framework for Node.js",
      },
      {
        name: "Python",
        icon: <Code className="w-6 h-6" />,
        description: "Versatile programming language for various applications",
      },
      {
        name: "Django",
        icon: <Layers className="w-6 h-6" />,
        description: "High-level Python web framework for rapid development",
      },
      {
        name: "MongoDB",
        icon: <Database className="w-6 h-6" />,
        description: "NoSQL database for modern applications",
      },
      {
        name: "PostgreSQL",
        icon: <Database className="w-6 h-6" />,
        description: "Powerful, open-source object-relational database",
      },
    ],
  },
  {
    category: "Tools & Others",
    description:
      "Leveraging industry-standard tools for efficient development workflows",
    skills: [
      {
        name: "Git",
        icon: <GitBranch className="w-6 h-6" />,
        description: "Distributed version control system for code management",
        bgImage: "/images/skills/git-bg.png",
      },
      {
        name: "Docker",
        icon: <Container className="w-6 h-6" />,
        description:
          "Platform for developing, shipping, and running applications",
      },
      {
        name: "AWS",
        icon: <Cloud className="w-6 h-6" />,
        description: "Comprehensive cloud computing platform",
      },
      {
        name: "Firebase",
        icon: <Flame className="w-6 h-6" />,
        description: "Platform for building web and mobile applications",
      },
      {
        name: "CI/CD",
        icon: <Workflow className="w-6 h-6" />,
        description: "Automated practices for software delivery",
      },
      {
        name: "RESTful APIs",
        icon: <Globe className="w-6 h-6" />,
        description: "Architectural style for designing networked applications",
      },
    ],
  },
];

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description?: string;
  isFirst?: boolean;
  bgImage?: string;
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  isFirst = false,
  bgImage,
}: GridItemProps) => {
  return (
    <li
      className={cn(
        "min-h-[14rem] list-none",
        area,
        isFirst && "col-span-2 row-span-2 md:col-span-3 lg:col-span-3"
      )}
    >
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
          {isFirst && bgImage && (
            <div className="absolute inset-0 z-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-l from-background to-transparent z-10 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-10 opacity-60" />
              <img
                src={bgImage}
                alt={`${title} background`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}
          <div className="relative z-20 flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
              {isFirst && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 mt-2 items-center justify-center">
                    <span className="px-3 py-1 text-xs rounded-full bg-muted/50 border border-border">
                      Proficient
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-muted/50 border border-border">
                      Modern Stack
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-muted/50 border border-border">
                      Production-Ready
                    </span>
                  </div>
                  <div className="mt-4 text-sm">
                    <p>
                      Experienced in building responsive, accessible, and
                      performant web applications using modern frontend
                      technologies.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="container mx-auto px-4 mt-[-50px] ">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Category Selection */}
      <div className="flex justify-center mb-12 gap-4 flex-wrap mt-[-30px]">
        {skillsData.map((category, index) => (
          <motion.button
            key={category.category}
            className={`relative px-6 py-3 rounded-full text-lg font-medium overflow-hidden ${
              activeCategory === index
                ? "text-white"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveCategory(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">{category.category}</div>
            {activeCategory === index && (
              <div className="absolute inset-0 rounded-full">
                <GlowingEffect
                  disabled={false}
                  glow={true}
                  spread={40}
                  blur={8}
                  movementDuration={1.5}
                />
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Category Description */}
      <motion.p
        className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto mt-[-30px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {skillsData[activeCategory].description}
      </motion.p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skillsData[activeCategory].skills.map((skill, index) => (
          <GridItem
            key={skill.name}
            area={
              index === 0
                ? ""
                : `md:[grid-area:${index + 1}/1/2/7] xl:[grid-area:${
                    index + 1
                  }/1/2/5]`
            }
            icon={skill.icon}
            title={skill.name}
            description={skill.description}
            isFirst={index === 0}
            bgImage={skill.bgImage}
          />
        ))}
      </div>
    </div>
  );
};
