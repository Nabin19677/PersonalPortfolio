import { Box, Center, Text, Container } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box p={4}>
      <Center>
        <Text>
          Made with{" "}
          <span aria-label="heart" role="img">
            &#128153;
          </span>{" "}
          by <Text as="kbd"> Anil Khadka</Text>
        </Text>
      </Center>
    </Box>
  );
}
