import { motion } from "framer-motion";
import { Squares } from "@/components/ui/squares-background";

export function About() {
  return (
    <div className="relative overflow-hidden py-16">
      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b  from-black/50 via-black/30 to-black/20 z-[1]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-white">
            About Me
          </h2>
          <div className="w-20 h-1 text-white"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed  bg-none p-8 rounded-xl shadow-xl border border-none"
        >
          <p className="mb-6">
            Frontend-focused Full Stack Engineer specializing in
            high-performance React applications, scalable Node.js services, and
            real-time collaboration systems. Experienced in technical
            architecture design and remote team collaboration.
          </p>
          <p className="mb-6">
            I'm passionate about creating elegant solutions to complex problems
            and building applications that deliver exceptional user experiences.
            My approach combines technical expertise with a deep understanding
            of user needs.
          </p>
          <p>
            Based in Kolkata, India, I'm always open to discussing new
            opportunities and collaborations that challenge me to grow and
            innovate.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
