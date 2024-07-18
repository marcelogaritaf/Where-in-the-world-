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
      height={"364px"}
      overflow={"hidden"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .15s ease-in",
        cursor: "pointer",
      }}
    >
      {children}
    </Box>
  );
};

export default CountryCardContainer;
