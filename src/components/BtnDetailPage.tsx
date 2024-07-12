import { Box, Button, useColorMode } from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

const BtnDetailPage = () => {
  const { colorMode } = useColorMode();
  const background =
    colorMode === "dark" ? "hsl(209, 23%, 22%)" : "rgb(250, 248, 247)";
  return (
    <Box padding={"55px"}>
      <Button
        leftIcon={<MdKeyboardBackspace />}
        width={"130px"}
        backgroundColor={background}
        boxShadow={"rgba(10, 10, 1, 0.4) 0px 7px 29px 0px;"}
      >
        <Link to={"/"}>Back</Link>
      </Button>
    </Box>
  );
};

export default BtnDetailPage;
