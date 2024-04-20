import { Box, Flex, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./index.css";
import MainCountryPage from "./components/MainCountryPage";
function App() {
  return (
    <Flex
      // gridTemplateAreas={{
      //   base: `"nav""search main"`,
      //   lg: `"nav nav" "search main"`,
      // }}
      // gridTemplateColumns={{
      //   base: "1fr",
      //   lg: "1fr",
      // }}
      direction={"column"}
    >
      <Box backgroundColor={"hsl(209, 23%, 22%)"}>
        <Navbar />
      </Box>
      <Search />
      <MainCountryPage />
    </Flex>
  );
}

export default App;
