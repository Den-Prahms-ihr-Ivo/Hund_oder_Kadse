import { Grid, GridItem, VStack, IconButton, Text } from "@chakra-ui/react";
import { LuHouse } from "react-icons/lu";

import { useColorMode } from "./components/ui/color-mode";
import LinkWrapper from "./components/ui/link";

import { Routes, Route } from "react-router-dom";

// import GameGrid from "./components/GameGrid";
// import GameHeading from "./components/GameHeading";
// import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import PlatformSelector from "./components/PlatformSelector";
// import SortSelector from "./components/SortSelector";
// import { Platform } from "./hooks/useGames";
// import { Genre } from "./hooks/useGenres";

function App() {
  const { colorMode } = useColorMode();

  return (
    <Grid
      w={"100vw"}
      h={"100vh"}
      templateAreas={{
        base: `"header header"
                  "main main"
                  "nav nav"`,
        lg: `"header header"
                  "nav main"`,
      }}
      gridTemplateRows={"70px 1fr"}
      gridTemplateColumns={"150px 1fr"}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem
        pl="0"
        bg={colorMode === "light" ? "red.300" : "blue.300"}
        area={"header"}
      >
        <NavBar />
      </GridItem>
      <GridItem pl="0" bg="pink.300" area={"nav"}>
        Nav
        <VStack key={"ghost"}>
          <LinkWrapper to="/Home">
            <Text textStyle="xs">{"ghost"}</Text>
            <IconButton
              size="sm"
              aria-label="Call support"
              key={"ghost"}
              variant={"ghost"}
            >
              <LuHouse />
            </IconButton>
          </LinkWrapper>
        </VStack>
      </GridItem>
      <GridItem pl="0" bg="green.300" area={"main"}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* catch-all */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </GridItem>
    </Grid>
  );
}

export default App;
