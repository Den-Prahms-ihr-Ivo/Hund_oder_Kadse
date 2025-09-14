import { Grid, GridItem, Box, Button } from "@chakra-ui/react";
import InfoCard from "./InfoCard";

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
        <Box h="100%" pl="0">
          <InfoCard
            pos_img_left={false}
            title="Question"
            texts={[
              "Wie viele Drittklässler kannst du unter den Tisch trinken?",
              "Sobald einer kotzt, muss der nächste ran!",
            ]}
            category="Hypothetical Story"
          />
        </Box>
      </GridItem>
      <GridItem area={"section2"}>
        <InfoCard
          pos_img_left={true}
          title="Penalty"
          texts={["Loser orders the winner’s drink of choice."]}
          category="Drinks"
        />
      </GridItem>
      <GridItem area={"button1"}>
        <Button
          h="100%"
          w="100%"
          fontWeight="bold"
          colorPalette="orange"
          variant="surface"
        >
          Shuffle
        </Button>
      </GridItem>
      <GridItem area={"button2"}>
        <Button h="100%" w="100%" fontWeight="bold" colorPalette="orange">
          New Question
        </Button>
      </GridItem>
    </Grid>
  );
};

export default Home;
