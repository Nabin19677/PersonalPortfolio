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
        <Button key={btn.label} size="sm" variant="unstyled">
          {btn.label}
        </Button>
      ))}
    </Stack>
  );
};

export default function NavBar() {
  return (
    <HStack px="4" py="2" background="#DFE8F5">
      <Logo />
      <Spacer />
      <NavButtons />
    </HStack>
  );
}
