import About from "./components/About";
import Contact from "./components/Contact";
import Exp from "./components/Exp";
import Home from "./components/Home";
import NavBar from "./components/NavBars";
import PortFolio from "./components/PortFolio";
import Social from "./components/Social";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Social />
      <About />
      <PortFolio />
      <Exp />
      <Contact />
    </div>
  );
}

export default App;
