import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContribuitionsProvider } from "./contexts/ContribuitionsContext";
import { PatrimonyProvider } from "./contexts/PatrimonyContext";

import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ContribuitionsProvider>
      <PatrimonyProvider>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </PatrimonyProvider>
    </ContribuitionsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
