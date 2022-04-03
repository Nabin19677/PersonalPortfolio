import { Box, Icon, Link } from "@chakra-ui/react";

export default function SocialIcon({ iconModule, link }) {
  return (
    <Box>
      <Link href={link} isExternal>
        <Icon as={iconModule} />
      </Link>
    </Box>
  );
}
