import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const FilterCountry = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Filter By Region"}
      </MenuButton>
      <MenuList>
        <MenuItem>Africa</MenuItem>
        <MenuItem>America</MenuItem>
        <MenuItem>Asia</MenuItem>
        <MenuItem>Europe</MenuItem>
        <MenuItem>Oceania</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default FilterCountry;
