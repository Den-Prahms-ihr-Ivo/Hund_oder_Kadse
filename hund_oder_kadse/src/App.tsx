import { Grid, GridItem } from "@chakra-ui/react";

import { useColorMode } from "./components/ui/color-mode";

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
import Header from "./components/Header";
import { useIsSideBar } from "./context/SideBarContext";
import Categories from "./components/categories";
// import PlatformSelector from "./components/PlatformSelector";
// import SortSelector from "./components/SortSelector";
// import { Platform } from "./hooks/useGames";
// import { Genre } from "./hooks/useGenres";

function App() {
  const { colorMode } = useColorMode();
  const { isSideBar } = useIsSideBar();

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
      gap="0"
      color="blackAlpha.700"
      fontWeight="bold"
      className={colorMode === "light" ? "light" : "dark"}
    >
      <GridItem p="0" area={"header"} className="header">
        <Header />
      </GridItem>

      <GridItem
        p="0"
        w="100%"
        h="100%"
        area={"nav"}
        className={isSideBar ? "nav-bar" : "nav-bar nav-bar-bottom"}
      >
        <NavBar />
      </GridItem>

      <GridItem p="2" area={"main"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/database" element={<Database />} />
          <Route path="/categories" element={<Categories />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GridItem>
    </Grid>
  );
}

export default App;
