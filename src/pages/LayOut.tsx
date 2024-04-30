import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const LayOut = () => {
  const { colorMode } = useColorMode();
  const background =
    colorMode === "dark" ? "hsl(209, 23%, 22%)" : "hsla(210, 100%, 99%, 0.849)";
  return (
    <>
      <Box backgroundColor={background}>
        <Navbar />
      </Box>
      <Outlet />
    </>
  );
};

export default LayOut;
