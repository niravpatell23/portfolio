import About from "./components/About";
import Contact from "./components/Contact";
import Edu from "./components/Edu";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBars";
import PortFolio from "./components/PortFolio";
import Social from "./components/Social";
import Expe from "./components/Expe";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Expe />
      <Edu />
      <Social />
      <About />
      <PortFolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
