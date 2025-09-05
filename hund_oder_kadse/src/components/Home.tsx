import { Grid, GridItem, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Grid
      h="100%"
      w="100%"
      templateAreas={`"section1 section1"
                  "section2 section2"
                  "button1 button2"`}
      gridTemplateRows={"1fr 1fr 50px"}
      gridTemplateColumns={"1fr 1fr"}
      rowGap="6"
      columnGap="2"
    >
      <GridItem area={"section1"}>
        <Box h="100%" pl="2" bg="blue.300">
          Question
        </Box>
      </GridItem>
      <GridItem area={"section2"}>
        <Box h="100%" pl="2" bg="blue.300">
          Vorschlag für Punishment
        </Box>
      </GridItem>
      <GridItem area={"button1"}>
        <Box h="100%" pl="0" bg="blue.300">
          New Question
        </Box>
      </GridItem>
      <GridItem area={"button2"}>
        <Box h="100%" pl="0" bg="blue.300">
          Shuffle
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Home;
