import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const CountryCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={5} width={"100%"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default CountryCardContainer;
