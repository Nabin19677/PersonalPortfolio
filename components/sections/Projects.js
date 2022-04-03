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

      <Flex pt={12}>
        <Grid container direction="column" justify="center">
          {projects.map((proj, i) => {
            return <ProjectCard key={proj.title} index={i} project={proj} />;
          })}
        </Grid>
      </Flex>

      <Box my={10}>
        <Center>
          <Link href="/projects">
            <Button>VIEW ALL</Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
}
