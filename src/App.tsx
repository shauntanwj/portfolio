import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/ProjectsGrid";
import Footer from "./components/Footer/Footer";
import { ProjectData } from "./data/projectData";
import Education from "./components/Education/Education";
import Working from "./components/Working/Working";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"` }}
        templateRows={{ base: "1fr" }}
        templateColumns={{ base: "1fr" }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <Home />
          <About />
          <Working />
          <Projects projects={ProjectData} />
          <Education />

          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
