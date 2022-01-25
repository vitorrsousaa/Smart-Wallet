import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Comfortaa",
    h1: "Antic",
  },
  styles: {
    global: {
      body: {
        bg: "gray.800",
        color: "white",
      },
      h1: {
        fontFamily: "Antic",
        letterSpacing: "1px",
        fontSize: "48px",
      },
      button: {
        color: "gray.200",
      },
      span: {
        color: "orange.450",
        letterSpacing: "2px",
        fontWeight: "bold",
      },
    },
  },
  colors: {
    gray: {
      200: "#e1e1e6",
      950: "#1f2729",
      1000: "#121214",
      550: "#A0AEC0",
      450: "#c4c4c4",
    },
    orange: {
      450: "#EBA417",
    },
    green: {
      450: "#04D361",
    },
  },
});
