import { Box, Heading, HStack, Image } from "@chakra-ui/react";

export default function SkillCard({ iconName, title }) {
  return (
    <Box>
      <HStack>
        <Box>
          <Image src={`/techico/${iconName}.svg`} />
        </Box>
        <Box>
          <Heading size="md">{title}</Heading>
        </Box>
      </HStack>
    </Box>
  );
}
