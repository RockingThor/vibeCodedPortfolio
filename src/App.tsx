import "./App.css";
import { SplineSceneBasic } from "./components/spline-scene-demo";
import { GradientButton } from "./components/ui/gradient-button";
import { Navbar } from "./components/ui/navbar";

function App() {
  return (
    <div className="bg-black h-full w-full">
      <Navbar />
      <div className="pt-16">
        <SplineSceneBasic />
      </div>
    </div>
  );
}

export default App;
