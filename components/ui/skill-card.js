import { Box, Heading, HStack, Icon, Image, Text } from "@chakra-ui/react";

export default function SkillCard({ iconModule, iconName, title }) {
  return (
    <Box>
      <HStack spacing={4}>
        <Box>
          <Icon boxSize="4em" as={iconModule} />
        </Box>
        <Box>
          <Text fontSize="lg">{title}</Text>
        </Box>
      </HStack>
    </Box>
  );
}
