import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Wrap,
  WrapItem,
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
import skills from "../../data/skills";
import iconMapper from "../../utils/icon-mapper";

export default function Skills() {
  return (
    <Box id="skills">
      <Box>
        <Center>
          <Heading>My Skills</Heading>
        </Center>
      </Box>
      <Box mt={70}>
        <Wrap spacing="4vw">
          {skills.map((skill) => (
            <WrapItem key={skill.iconName}>
              <SkillCard
                iconName={skill.iconName}
                title={skill.title}
                iconModule={iconMapper[skill.iconName]}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      <Box>
        <iframe
          src="https://www.codewars.com/users/Nabin19677/badges/large"
          title="Codewars"
        ></iframe>
      </Box>
    </Box>
  );
}
