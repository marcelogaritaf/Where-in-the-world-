import { Box, Flex, useColorMode } from "@chakra-ui/react";
import MainCountryPage from "./components/MainCountryPage";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./index.css";
function App() {
  const { colorMode } = useColorMode();
  const background =
    colorMode === "dark" ? "hsl(209, 23%, 22%)" : "hsla(210, 100%, 99%, 0.849)";
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
      <Box backgroundColor={background}>
        <Navbar />
      </Box>
      <Search />
      <MainCountryPage />
    </Flex>
  );
}

export default App;
