import Head from "next/head";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

//Components
import Landing from "../components/sections/Landing";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

import styles from "../styles/Home.module.css";

const BoxWrapper = ({ children }) => {
  return <Box p="16">{children}</Box>;
};

export default function Home() {
  return (
    <div>
      <Landing />
      <BoxWrapper>
        <About />
      </BoxWrapper>
      <BoxWrapper>
        <Experience />
      </BoxWrapper>
      <BoxWrapper>
        <Skills />
      </BoxWrapper>

      {/*<Projects />
      <Contact /> */}
    </div>
  );
}
