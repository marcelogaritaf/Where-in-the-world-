import { Flex } from "@chakra-ui/react";
import MainCountryPage from "../components/MainCountryPage";
import Search from "../components/Search";
const HomePage = () => {
  return (
    <Flex direction={"column"}>
      <Search />
      <MainCountryPage />
    </Flex>
  );
};

export default HomePage;
