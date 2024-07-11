import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const CountryCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={5}
      width={"100%"}
      overflow={"hidden"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
    >
      {children}
    </Box>
  );
};

export default CountryCardContainer;
