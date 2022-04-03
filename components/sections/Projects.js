import { Box, Button, Center, Heading, Link } from "@chakra-ui/react";

export default function Projects() {
  return (
    <Box>
      <Center>
        <Heading>Featured Projects</Heading>
      </Center>

      <Center>
        <Link href="/projects">
          <Button>VIEW ALL</Button>
        </Link>
      </Center>
    </Box>
  );
}
