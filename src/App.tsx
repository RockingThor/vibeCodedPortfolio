import "./App.css";
import { About } from "./components/sections/about";
import { Contact } from "./components/sections/contact";
import { Experience } from "./components/sections/experience";
import { Projects } from "./components/sections/projects";
import { Skills } from "./components/sections/skills";
import { SplineSceneBasic } from "./components/spline-scene-demo";
import { AnimeNavBar } from "./components/ui/anime-navbar";
import { Footer } from "./components/ui/large-name-footer";

function App() {
  return (
    <div className="bg-black min-h-screen w-full text-white">
      <AnimeNavBar />
      <main className="pt-16">
        <section id="home" className="mt-[-100px]">
          <SplineSceneBasic />
        </section>

        <section id="about" className="mt-[-60px]">
          <About />
        </section>
        <section id="skills" className="py-16">
          <Skills />
        </section>

        <section id="experience" className="py-16">
          <Experience />
        </section>

        <section id="projects" className="py-16">
          <Projects />
        </section>

        {/* <section id="contact" className="py-16">
          <Contact />
        </section> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
