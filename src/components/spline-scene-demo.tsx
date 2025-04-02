"use client";

import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "./ui/spline-scene";
import { motion } from "framer-motion";

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[600px] bg-black relative overflow-hidden border-none shadow-lg rounded-xl mx-auto max-w-7xl">
      <div className="absolute inset-0 bg-gradient-to-r from-black/200 via-black/170 to-black/150 z-[1]"></div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
      />

      <div className="flex h-full flex-col md:flex-row relative z-[2] items-center justify-center">
        {/* Left content */}
        <motion.div
          className="flex-1 p-8 relative z-10 flex flex-col justify-center backdrop-blur-sm bg-black/10 rounded-l-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Rohit Nandi
          </h1>
          <h2 className=" font-serif text-white mt-2">Full Stack Engineer</h2>
        </motion.div>

        {/* Right content */}
        <motion.div
          className="flex-1 relative h-[80%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </Card>
  );
}
