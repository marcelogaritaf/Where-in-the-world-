import { HStack, Input, InputGroup } from "@chakra-ui/react";
import React from "react";
import FilterCountry from "./FilterCountry";

const Search = () => {
  return (
    <HStack padding={8} justifyContent={"space-between"}>
      <form>
        <InputGroup>
          <Input
            borderRadius={"5px"}
            placeholder="Search for a Country..."
            variant={"filled"}
          />
        </InputGroup>
      </form>
      <FilterCountry />
    </HStack>
  );
};

export default Search;
