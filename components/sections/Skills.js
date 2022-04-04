import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Wrap,
  HStack,
  WrapItem,
} from "@chakra-ui/react";
import SkillCard from "../ui/skill-card";

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
      <Box>
        <HStack>
          <Spacer />
          <img
            src="https://www.codewars.com/users/Nabin19677/badges/micro"
            title="Codewars"
          />
        </HStack>
      </Box>
      <Box mt={50}>
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
    </Box>
  );
}
