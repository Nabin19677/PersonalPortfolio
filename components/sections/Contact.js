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
import SocialIcon from "../ui/social-icon";

import { SiGithub, SiLinkedin, SiCodewars } from "react-icons/si";
import socialLinks from "../../data/social_links";
const socialIcons = {
  github: SiGithub,
  linkedin: SiLinkedin,
  codewars: SiCodewars,
};

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
            <Text mt={4}>
              I am always ready to consider your proposal. You just need to
              write to me. If you are not comfortable doing this through a
              website, then here are the networks that can help you.
            </Text>
            <Box mt={4}>
              <HStack>
                {socialLinks.map((soc) => (
                  <SocialIcon
                    key={soc.icon}
                    iconModule={socialIcons[soc.icon]}
                    link={soc.link}
                  />
                ))}
              </HStack>
            </Box>
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
