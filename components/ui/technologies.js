import { Box, Text, HStack } from "@chakra-ui/react";

export default function Technologies({ techs }) {
  return (
    <Box>
      <HStack spacing={2}>
        {techs.map((tech, i) => (
          <Text as="kbd" key={i}>
            {tech}
          </Text>
        ))}
      </HStack>
    </Box>
  );
}
