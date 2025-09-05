import { Grid, GridItem } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
import { useState, useEffect } from "react";

// import GameGrid from "./components/GameGrid";
// import GameHeading from "./components/GameHeading";
// import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
// import PlatformSelector from "./components/PlatformSelector";
// import SortSelector from "./components/SortSelector";
// import { Platform } from "./hooks/useGames";
// import { Genre } from "./hooks/useGenres";

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

function App() {
  const { width } = useWindowSize();

  return (
    <Provider>
      <Grid
        w={"100vw"}
        h={"100vh"}
        templateAreas={{
          base: `"header header"
                  "main main"
                  "footer footer"`,
          lg: `"header header"
                  "nav main"
                  "footer footer"`,
        }}
        gridTemplateRows={"70px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="0" area={"header"}>
          <NavBar />
        </GridItem>
        {width > 1024 && (
          <GridItem pl="0" bg="pink.300" area={"nav"}>
            Nav
          </GridItem>
        )}
        <GridItem pl="0" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="0" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </Provider>
  );
}

export default App;
