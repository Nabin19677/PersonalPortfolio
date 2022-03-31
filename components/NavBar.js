import {
  Box,
  Button,
  Spacer,
  HStack,
  Stack,
  VStack,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";

const navBtns = [
  {
    label: "About",
  },
  {
    label: "Experience",
  },
  {
    label: "Skills",
  },
  {
    label: "Projects",
  },
  {
    label: "Contact",
  },
];

const Logo = () => {
  return (
    <Box m="2" direction="row">
      <img alt="" height="80" width="80" src="/logo.png" />
    </Box>
  );
};

const NavButtons = () => {
  return (
    <Stack direction="row" spacing="8">
      {navBtns.map((btn) => (
        <Button key={btn.label} size="md" variant="link">
          {btn.label}
        </Button>
      ))}
    </Stack>
  );
};

export default function NavBar() {
  return (
    <HStack px="10" py="25">
      <Logo />
      <Spacer />
      <NavButtons />
    </HStack>
  );
}
