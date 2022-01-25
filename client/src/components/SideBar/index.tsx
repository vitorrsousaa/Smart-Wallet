import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { SideBarNav } from "./SideBarNav";

export const SideBar = () => {
  return (
    <Box
      as="aside"
      w={["4.8rem", "", "", "64"]}
      mt="8"
      mr="5"
      h="80vh"
      p={["0 2rem", " ", "0 2rem", "0 5rem"]}
      borderRight="solid gray 3px"
    >
      <SideBarNav />
    </Box>
  );
};
