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
  List,
  ListItem,
  ListIcon,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const experiences = [
  {
    jobTitle: "MEAN Stack Developer",
    company: "Chaitanya Design",
    date: "Apr 2019 - Mar 2020",
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
    <Box id="experience">
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
              <Spacer />
              <Box>
                <Container>
                  <Heading>
                    {experiences[experienceIndex].jobTitle} @{" "}
                    {experiences[experienceIndex].company}
                  </Heading>
                  <Text>{experiences[experienceIndex].date}</Text>
                  <List spacing={2}>
                    {experiences[experienceIndex].points.map((p, i) => (
                      <ListItem key={i}>
                        <ListIcon as={FaAngleDoubleRight} />
                        {p}
                      </ListItem>
                    ))}
                  </List>
                </Container>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
