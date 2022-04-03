import { Box, Center, Heading, Link, VStack } from "@chakra-ui/react";

export default function ErrorPage() {
  return (
    <Box>
      <Center h="100vh">
        <VStack>
          <Heading>I think you have lost your way.</Heading>
          <Link href="/">GO TO HOME</Link>
        </VStack>
      </Center>
    </Box>
  );
}
