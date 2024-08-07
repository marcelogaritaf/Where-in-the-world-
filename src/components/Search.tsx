import {
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router";
import useCountryStore from "../store";
import FilterCountry from "./FilterCountry";

const Search = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = useCountryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <>
      <SimpleGrid
        templateColumns={{
          base: "1fr",
          lg: "500px 1fr",
          xl: "6oopx 1fr",
        }}
        paddingX={"30px"}
        paddingY={"30px"}
        spacingY={"50px"}
        spacingX={{ base: "580px", lg: "200px", xl: "400px", "2xl": "800px" }}
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
