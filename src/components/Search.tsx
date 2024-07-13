import {
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useCountryStore from "../store";
import FilterCountry from "./FilterCountry";
import { useNavigate } from "react-router";

const Search = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = useCountryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <>
      <SimpleGrid
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr",
          xl: "1fr 1fr",
        }}
        paddingX={"30px"}
        paddingY={"30px"}
        spacingY={"50px"}
        spacingX={"580px"}
      >
        <GridItem>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchRef.current) {
                setSearchText(searchRef.current.value);
                navigate("/");
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
        </GridItem>
        <GridItem>
          <FilterCountry />
        </GridItem>
      </SimpleGrid>
      {/* <HStack padding={8} justifyContent={"space-between"}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchRef.current) {
              setSearchText(searchRef.current.value);
              navigate("/");
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
      </HStack> */}
    </>
  );
};

export default Search;
