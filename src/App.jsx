import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Project />
        <Experience />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
