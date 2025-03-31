import { motion } from "framer-motion";

type SkillCategory = {
  category: string;
  skills: string[];
};

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Context API", "Framer Motion"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "AWS", "Firebase"]
    },
    {
      category: "Tools & Practices",
      skills: ["Git", "GitHub Actions", "CI/CD", "Jest", "Testing Library", "Agile", "Scrum", "Technical Architecture", "Performance Optimization"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

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
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-2"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-4">{category.category}</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={item}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
