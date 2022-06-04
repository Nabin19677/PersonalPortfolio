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
import { experiences } from "../../data/experiences";

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
