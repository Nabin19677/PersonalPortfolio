import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import SkillCard from "../ui/skill-card";

import {
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiAngular,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  {
    iconName: "javascript",
    title: "Javascript",
    iconModule: SiJavascript,
  },
  {
    iconName: "nodedotjs",
    title: "Node.js",
    iconModule: SiNodedotjs,
  },
  {
    iconName: "python",
    title: "Python",
    iconModule: SiPython,
  },
  {
    iconName: "angular",
    title: "Angular",
    iconModule: SiAngular,
  },
  {
    iconName: "react",
    title: "React",
    iconModule: SiReact,
  },
  {
    iconName: "html5",
    title: "HTML 5",
    iconModule: SiHtml5,
  },
  {
    iconName: "css3",
    title: "CSS 3",
    iconModule: SiCss3,
  },
  {
    iconName: "typescript",
    title: "TypeScript",
    iconModule: SiTypescript,
  },
  {
    iconName: "mongodb",
    title: "MongoDB",
    iconModule: SiMongodb,
  },
  {
    iconName: "postgresql",
    title: "PostgreSQL",
    iconModule: SiPostgresql,
  },
];

export default function Skills() {
  return (
    <Box id="skills">
      <Center>
        <Heading>My Skills</Heading>
      </Center>
      <Grid templateColumns="repeat(5,1fr)" gap={6} p={10}>
        {skills.map((skill) => (
          <GridItem key={skill.iconName}>
            <SkillCard
              iconName={skill.iconName}
              title={skill.title}
              iconModule={skill.iconModule}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
