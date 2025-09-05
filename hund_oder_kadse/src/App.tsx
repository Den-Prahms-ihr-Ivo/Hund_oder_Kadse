import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";

// import GameGrid from "./components/GameGrid";
// import GameHeading from "./components/GameHeading";
// import GenreList from "./components/GenreList";
// import NavBar from "./components/NavBar";
// import PlatformSelector from "./components/PlatformSelector";
// import SortSelector from "./components/SortSelector";
// import { Platform } from "./hooks/useGames";
// import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  // genre: Genre | null;
  // platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Provider>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <h2>NAV BAR</h2>
          {/* <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} /> */}
        </GridItem>
        <Show when={"above"}>
          <GridItem area="aside" paddingX={5}>
            <h2>GENRE LIST</h2>
            {/* <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre})} /> */}
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <h2>GAME HEADING</h2>
            {/* <GameHeading gameQuery={gameQuery} /> */}
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <h3>PLATFORM SELECTOR</h3>
                {/* <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform}) } /> */}
              </Box>
              <h3>SORT SELECTOR</h3>
              {/* <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} /> */}
            </Flex>
          </Box>
          <h3>GAME QUERY</h3>
          {/* <GameGrid gameQuery={gameQuery} /> */}
        </GridItem>
      </Grid>
    </Provider>
  );
}

export default App;
