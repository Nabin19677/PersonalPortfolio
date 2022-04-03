import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Divider,
  Spacer,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box>
      <Center>
        <Heading>Contact Me</Heading>
      </Center>
      <HStack mt="35">
        <Box>
          <Heading size="md">Let&apos;s Work!</Heading>
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
