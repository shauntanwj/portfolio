import { Divider, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
