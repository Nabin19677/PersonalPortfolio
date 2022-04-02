import {
  Center,
  Box,
  Heading,
  HStack,
  VStack,
  Container,
  Text,
  Badge,
} from "@chakra-ui/react";

export default function Experience() {
  return (
    <Box p="16">
      <Center>
        <Heading>Experience</Heading>
      </Center>
      <Center>
        <Box bg="tomato" borderRadius={5} p="8" mt="8">
          <Box>
            <HStack>
              <VStack>
                <Badge colorScheme="red">Chaitanya Design</Badge>
              </VStack>
              <Box>
                <Container>
                  <Heading>MEAN Stack Developer @ Chaitanya Design</Heading>
                  <Text>
                    Development of Single Page Web Application using Angular 2+.
                    Develop REST API Endpoints / Backend Development with Nodejs
                    and MongoDB Database. Collaborate with peers on designs,
                    code reviews, and testing. Technologies Used: [Node.js,
                    Express.js, Angular, MongoDB, MySQL, JSON]
                  </Text>
                </Container>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
