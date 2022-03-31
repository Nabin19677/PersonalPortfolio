import Head from "next/head";
import Image from "next/image";

//Components
import Landing from "../components/sections/Landing";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Landing />
      {/* <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact /> */}
    </div>
  );
}
