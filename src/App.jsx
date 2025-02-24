import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Project />
      </div>
    </BrowserRouter>
  );
}

export default App;
