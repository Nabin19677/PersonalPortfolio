import {
  Center,
  Box,
  Heading,
  HStack,
  VStack,
  Container,
  Text,
  Badge,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const experiences = [
  {
    jobTitle: "MEAN Stack Developer",
    company: "Chaitanya Design",
    points: [
      "Development of Single Page Web Application using Angular 2+.",
      "Develop REST API Endpoints / Backend Development with Nodejs and MongoDB Database.",
      "Collaborate with peers on designs, code reviews, and testing.",
      "Technologies Used: [Node.js, Express.js, Angular, MongoDB, MySQL, JSON]",
    ],
  },
];

export default function Experience() {
  const [experienceIndex, setExperienceIndex] = useState(0);

  const onCompanyButton = (i) => {
    setExperienceIndex(i);
  };

  return (
    <Box p="16" id="experience">
      <Center>
        <Heading>Experience</Heading>
      </Center>
      <Center>
        <Box bg="tomato" borderRadius={5} p="8" mt="8">
          <Box>
            <HStack>
              <VStack>
                {experiences.map((exp, i) => (
                  <Button
                    key={exp.company}
                    colorScheme="red"
                    onClick={() => onCompanyButton(i)}
                  >
                    {exp.company}
                  </Button>
                ))}
              </VStack>
              <Box>
                <Container>
                  <Heading>
                    {experiences[experienceIndex].jobTitle} @{" "}
                    {experiences[experienceIndex].company}
                  </Heading>
                  <Container>
                    {experiences[experienceIndex].points.map((p, i) => (
                      <Text key={i}>{p}</Text>
                    ))}
                  </Container>
                </Container>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
