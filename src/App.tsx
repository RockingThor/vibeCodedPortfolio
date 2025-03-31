import "./App.css";
import { About } from "./components/sections/about";
import { Contact } from "./components/sections/contact";
import { Experience } from "./components/sections/experience";
import { Footer } from "./components/sections/footer";
import { Projects } from "./components/sections/projects";
import { Skills } from "./components/sections/skills";
import { SplineSceneBasic } from "./components/spline-scene-demo";
import { Navbar } from "./components/ui/navbar";

function App() {
  return (
    <div className="bg-black min-h-screen w-full text-white">
      <Navbar />
      <main className="pt-16">
        <section id="home" className="mt-[-100px]">
          <SplineSceneBasic />
        </section>

        <section id="about" className="mt-[-60px]">
          <About />
        </section>

        <section id="experience" className="py-16">
          <Experience />
        </section>

        <section id="skills" className="py-16">
          <Skills />
        </section>

        <section id="projects" className="py-16">
          <Projects />
        </section>

        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
