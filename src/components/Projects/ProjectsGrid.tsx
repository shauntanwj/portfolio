import { Heading, SimpleGrid, Stack, StackDivider } from "@chakra-ui/react";
import { Project } from "../../data/projectData";
import ProjectsCard from "./ProjectsCard";

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <>
      <Stack
        px={{ base: "20px", md: "30px", lg: "45px", xl: "60px" }}
        spacing={5}
        divider={<StackDivider borderColor="gray.200" />}
        id="projects"
        mb={{ base: 5, lg: 10 }}
      >
        <Heading
          textColor="#ddd4d4"
          fontSize={{ base: "22px", md: "30px", lg: "40px" }}
        >
          Past Projects
        </Heading>
        <SimpleGrid
          columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
          spacing={{ base: 2, lg: 6 }}
        >
          {projects.map((project) => (
            <ProjectsCard key={project.id} project={project}></ProjectsCard>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default Projects;
