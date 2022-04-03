import { Box, Grid, Heading, Text, Image } from "@chakra-ui/react";

const Card = ({ title, description, keyPoints, technologies, links }) => (
  <Box>
    <Heading>{title}</Heading>
    {/* <Text>{description}</Text> */}
  </Box>
);

const Project = ({ alternate, ...props }) => {
  if (alternate) {
    return <Card {...props} />;
  }
  return <Image boxSize="70vh" objectFit="scale-down" src={props.imageUrl} />;
};

export default function ProjectCard({ project, index }) {
  return (
    <Grid container direction="row" style={{ height: "70vh" }}>
      <Grid container item xs={12} sm={6}>
        <Project alternate={index % 2 == 0 ? true : false} {...project} />
      </Grid>
      <Grid container item xs={12} sm={6}>
        <Project alternate={index % 2 == 0 ? false : true} {...project} />
      </Grid>
    </Grid>
  );
}
