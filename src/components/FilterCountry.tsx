import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useCountryStore from "../store";

const FilterCountry = () => {
  const { setFilterRegion, countryQuery } = useCountryStore((s) => ({
    countryQuery: s.countryQuery,
    setFilterRegion: s.setFilterRegion,
  }));
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Filter By Region:{" "}
        {countryQuery.filterRegion ? countryQuery.filterRegion : " "}
      </MenuButton>
      <MenuList>
        {regions.map((region) => (
          <MenuItem key={region} onClick={() => setFilterRegion(region)}>
            {region}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterCountry;
