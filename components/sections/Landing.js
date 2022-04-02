import {
  Box,
  Center,
  Heading,
  Stack,
  VStack,
  Container,
} from "@chakra-ui/react";

export default function Landing() {
  return (
    <Container h="80vh" centerContent>
      <Center>
        <Box>
          <Heading>Hello, I&apos;m Anil Khadka</Heading>
          <Heading>a Full Stack Developer.</Heading>
        </Box>
      </Center>
    </Container>
  );
}
