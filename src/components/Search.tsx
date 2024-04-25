import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import FilterCountry from "./FilterCountry";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <HStack padding={8} justifyContent={"space-between"}>
      <form>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
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
