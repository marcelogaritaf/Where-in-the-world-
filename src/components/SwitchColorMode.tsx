import {
  Button,
  HStack,
  Icon,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const SwitchColorMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      {/* <Switch as={Button}
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      /> */}
      <Button
        backgroundColor={"rgba(127, 255, 212, 0)"}
        onClick={toggleColorMode}
      >
        {colorMode === "dark" ? <MdDarkMode /> : <MdLightMode />}
      </Button>
      <Text whiteSpace={"nowrap"}>
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
    </HStack>
  );
};

export default SwitchColorMode;
