"use client";

import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "./ui/spline-scene";

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[600px] bg-black relative overflow-hidden  border-none shadow-lg rounded-xl mx-auto max-w-7xl">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
      />

      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text  bg-gradient-to-r text-white">
            Your Friendly Engineer
          </h1>
          <p className="mt-4 text-gray-300 max-w-lg">
            I'm here to help you build your next project. Whether you need
            assistance with a specific task or want to discuss your next
            project, I'm here to support you.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
