import {
  Box,
  Grid,
  Heading,
  Text,
  Image,
  HStack,
  Spacer,
  Container,
  VStack,
  Stack,
} from "@chakra-ui/react";
import SocialIcon from "../ui/social-icon";
import Technologies from "./technologies";
import iconMapper from "../../utils/icon-mapper.js";

const Card = ({ title, description, keyPoints, technologies, links }) => (
  <Box borderRadius={5} bg="tomato" p="4" textAlign="start">
    <Container>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </Container>
    <Box>
      <HStack>
        <Spacer />
        {links.map((l) => (
          <SocialIcon
            key={l.title}
            link={l.url}
            iconModule={iconMapper[l.icon]}
          />
        ))}
      </HStack>
    </Box>
  </Box>
);

const Project = ({ alternate, ...props }) => {
  if (alternate) {
    return (
      <>
        <VStack>
          <Card {...props} />

          <Technologies techs={props.technologies} />
        </VStack>
      </>
    );
  }
  return (
    <Box>
      <Image
        boxSize="55vh"
        objectFit="cover"
        objectPosition="center top"
        src={props.imageUrl}
      />
    </Box>
  );
};

export default function ProjectCard({ project, index }) {
  return (
    <Box my={20}>
      <Stack
        direction={["column", "row"]}
        justifyContent="center"
        spacing="5vw"
      >
        <Project alternate={index % 2 == 0 ? true : false} {...project} />
        <Project alternate={index % 2 == 0 ? false : true} {...project} />
      </Stack>
    </Box>
  );
}
