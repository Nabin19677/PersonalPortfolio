import {
  Center,
  Box,
  Heading,
  Container,
  HStack,
  Text,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { Fragment } from "react";

export default function About() {
  return (
    <Box id="about">
      <Center>
        <Heading>About Me</Heading>
      </Center>
      <Box px="20" py="16">
        <HStack>
          <Box boxSize="sm">
            <Image src="/coding.png" alt="Coding Pic" />
          </Box>
          <Spacer />
          <Container>
            <Text fontSize="lg">
              Hi, I&apos;m Anil! I am a full stack developer that studied
              computer science and software engineering at the University of
              Bedfordshire.
            </Text>
          </Container>
        </HStack>
      </Box>
    </Box>
  );
}
