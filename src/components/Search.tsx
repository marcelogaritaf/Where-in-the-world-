import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useCountryStore from "../store";
import FilterCountry from "./FilterCountry";

const Search = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = useCountryStore((s) => s.setSearchText);
  return (
    <HStack padding={8} justifyContent={"space-between"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchRef.current) {
            setSearchText(searchRef.current.value);
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            borderRadius={"5px"}
            placeholder="Search for a Country..."
            variant={"filled"}
            ref={searchRef}
          />
        </InputGroup>
      </form>
      <FilterCountry />
    </HStack>
  );
};

export default Search;
