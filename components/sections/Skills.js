import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import SkillCard from "../ui/skill-card";

const skills = [
  {
    iconName: "javascript",
    title: "Javascript",
  },
  {
    iconName: "nodedotjs",
    title: "Node.js",
  },
  {
    iconName: "python",
    title: "Python",
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
            <SkillCard iconName={skill.iconName} title={skill.title} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
