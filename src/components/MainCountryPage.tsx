import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CardCountry from "./CardCountry";

const MainCountryPage = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 3, xl: 4 }}
      spacing={5}
      padding={8}
      justifyContent={"center"}
    >
      <CardCountry />
    </SimpleGrid>
  );
};

export default MainCountryPage;
