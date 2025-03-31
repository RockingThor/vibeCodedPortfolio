import { useState } from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "../ui/glowing-effect";
import { cn } from "@/lib/utils";
import { Code } from "lucide-react";

// Define skill categories and items
const skillsData = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Firebase", "CI/CD", "RESTful APIs"],
  },
];

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
}

const GridItem = ({ area, icon, title }: GridItemProps) => {
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
    <div className="container mx-auto px-4 py-16">
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
      <div className="flex justify-center mb-12 gap-4 flex-wrap">
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

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skillsData[activeCategory].skills.map((skill, index) => (
          <GridItem
            key={skill}
            area={`md:[grid-area:${index + 1}/1/2/7] xl:[grid-area:${
              index + 1
            }/1/2/5]`}
            icon={<Code />}
            title={skill}
          />
        ))}
      </div>
    </div>
  );
};
