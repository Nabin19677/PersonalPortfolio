import {
  Box,
  Button,
  Center,
  Heading,
  Link,
  Flex,
  Grid,
} from "@chakra-ui/react";
import ProjectCard from "../ui/project-card";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <Box id="projects">
      <Center>
        <Heading>Featured Projects</Heading>
      </Center>

      {projects.map((proj, i) => {
        return <ProjectCard key={proj.title} index={i} project={proj} />;
      })}

      <Box mt={35}>
        <Center>
          <Link href="/projects">
            <Button>VIEW ALL</Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
}
