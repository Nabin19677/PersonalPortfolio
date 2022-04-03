import { Box, Heading, HStack, Icon, Image, Text } from "@chakra-ui/react";

export default function SkillCard({ iconModule, iconName, title }) {
  return (
    <Box>
      <HStack>
        <Box>
          <Icon as={iconModule} />
        </Box>
        <Box>
          <Text size="md">{title}</Text>
        </Box>
      </HStack>
    </Box>
  );
}
