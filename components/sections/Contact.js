import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Spacer,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  Container,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box>
      <Center>
        <Heading>Contact Me</Heading>
      </Center>
      <HStack mt="35">
        <Box>
          <Container>
            <Heading size="md">Let&apos;s Work!</Heading>
            <Text>
              I am always ready to consider your proposal. You just need to
              write to me. If you are not comfortable doing this through a
              website, then here are the networks that can help you.
            </Text>
          </Container>
        </Box>
        <Spacer />
        <Box w="40vw">
          <Stack>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" type="text" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Input id="phone" type="tel" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                type="text"
                placeholder="Hi! ............."
              />
            </FormControl>
            <Button>SEND</Button>
          </Stack>
        </Box>
      </HStack>
    </Box>
  );
}
