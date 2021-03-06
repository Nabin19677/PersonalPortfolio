import {
  Box,
  Button,
  Spacer,
  HStack,
  Stack,
  VStack,
  Heading,
  Badge,
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
        height="70"
        width="70"
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
    <Sticky enabled innerZ={99}>
      <Box bg="white">
        <HStack px="16" py="1">
          <Logo />
          <Spacer />
          <NavButtons />
        </HStack>
        {/* <Badge>Under Development</Badge> */}
      </Box>
    </Sticky>
  );
}
