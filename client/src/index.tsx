import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContribuitionsProvider } from "./contexts/ContribuitionsContext";

import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ContribuitionsProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </ContribuitionsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
