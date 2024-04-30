import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./Tema";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router";
import "./index.css";

import routes from "./routes";
const reactQuery = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={reactQuery}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
