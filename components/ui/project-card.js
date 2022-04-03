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
} from "@chakra-ui/react";
import SocialIcon from "../ui/social-icon";
import Technologies from "./technologies";
import iconMapper from "../../utils/icon-mapper.js";

const Card = ({ title, description, keyPoints, technologies, links }) => (
  <Box borderRadius={5} bg="tomato" p="4">
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
    <Box m="auto" p="auto">
      <Image
        boxSize="60vh"
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
      <HStack>
        <Project alternate={index % 2 == 0 ? true : false} {...project} />
        <Spacer />
        <Project alternate={index % 2 == 0 ? false : true} {...project} />
      </HStack>
    </Box>
  );
}

{
  /* <Grid container direction="row" style={{ height: "70vh" }}>
<Grid container item xs={12} sm={6}>
  
</Grid>
<Grid container item xs={12} sm={6}>
  <Project alternate={index % 2 == 0 ? false : true} {...project} />
</Grid>
</Grid> */
}
