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
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import Sticky from "react-stickynode";

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
      <img
        alt=""
        height="80"
        width="80"
        src="/logo.png"
        onClick={scroll.scrollToTop}
      />
    </Box>
  );
};

const NavButtons = () => {
  return (
    <Stack direction="row" spacing="8">
      {navBtns.map((btn) => (
        <Button key={btn.label} size="sm" variant="unstyled">
          <ScrollLink
            to={btn.label.toLowerCase()}
            spy
            smooth
            offset={-150}
            duration={500}
          >
            {btn.label}
          </ScrollLink>
        </Button>
      ))}
    </Stack>
  );
};

export default function NavBar() {
  return (
    <Sticky>
      <HStack px="4" py="2" bg="white">
        <Logo />
        <Spacer />
        <NavButtons />
      </HStack>
    </Sticky>
  );
}
