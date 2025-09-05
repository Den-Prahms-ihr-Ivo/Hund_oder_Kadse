import {
  Grid,
  GridItem,
  VStack,
  IconButton,
  Text,
  HStack,
} from "@chakra-ui/react";
import { LuGamepad2, LuDatabaseZap } from "react-icons/lu";

import { useColorMode } from "./components/ui/color-mode";
import LinkWrapper from "./components/ui/link";

import { Routes, Route } from "react-router-dom";

// ICONS: https://lucide.dev/icons/gamepad-2
// INSPIRATION: https://dribbble.com/shots/25281865-Store-Inventory-Dashboard-Mobile-app

// import GameGrid from "./components/GameGrid";
// import GameHeading from "./components/GameHeading";
// import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Database from "./components/Database";
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
      <GridItem px="2" py="6" bg="pink.300" area={"nav"}>
        <VStack key={"ghost"}>
          <LinkWrapper to="/">
            <HStack>
              <IconButton
                size="sm"
                aria-label="Call support"
                key={"ghost"}
                variant={"ghost"}
              >
                <LuGamepad2 />
              </IconButton>
              <Text textStyle="xs">Los geht's!</Text>
            </HStack>
          </LinkWrapper>

          <LinkWrapper to="/database">
            <HStack>
              <IconButton
                size="sm"
                aria-label="Call support"
                key={"ghost"}
                variant={"ghost"}
              >
                <LuDatabaseZap />
              </IconButton>
              <Text textStyle="xs">Datenbank</Text>
            </HStack>
          </LinkWrapper>
        </VStack>
      </GridItem>
      <GridItem p="2" bg="green.300" area={"main"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/database" element={<Database />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GridItem>
    </Grid>
  );
}

export default App;
