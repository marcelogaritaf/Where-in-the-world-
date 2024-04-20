import { HStack, Heading } from "@chakra-ui/react";
import React from "react";
import SwitchColorMode from "./SwitchColorMode";

const Navbar = () => {
  return (
    <HStack padding={5} justifyContent={"space-between"} boxShadow={5}>
      <Heading as={"h1"} marginBottom={"10px"}>
        Where in the World?
      </Heading>
      <SwitchColorMode />
    </HStack>
  );
};

export default Navbar;
