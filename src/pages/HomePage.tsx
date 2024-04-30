import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Search from "../components/Search";
import MainCountryPage from "../components/MainCountryPage";
const HomePage = () => {
  return (
    <Flex direction={"column"}>
      <Search />
      <MainCountryPage />
    </Flex>
  );
};

export default HomePage;
