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
    <Box p="16">
      <Center>
        <Heading>About Me</Heading>
      </Center>
      <Box px="8" py="16">
        <HStack>
          <Container>
            <Text fontSize="lg">
              Hi, I&apos;m Anil! I am a full stack developer that studied
              computer science and software engineering at the University of
              Bedfordshire.
            </Text>
          </Container>
          <Spacer />
          <Box boxSize="sm">
            <Image src="https://bit.ly/dan-abramov" alt="Anil Khadka Pic" />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
