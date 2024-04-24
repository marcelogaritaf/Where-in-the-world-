import { HStack, Heading } from "@chakra-ui/react";
import SwitchColorMode from "./SwitchColorMode";

const Navbar = () => {
  return (
    <HStack
      padding={5}
      justifyContent={"space-between"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
    >
      <Heading as={"h1"} marginBottom={"10px"}>
        Where in the World?
      </Heading>
      <SwitchColorMode />
    </HStack>
  );
};

export default Navbar;
