import { Flex, VStack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { InfoBar } from "../components/InfoBar";
import { SideBar } from "../components/SideBar";

export const Products = () => {
  return (
    <>
      <Header />
      <Flex direction="row" w="98vw">
        <SideBar />
        <VStack align="center" m="0 auto" gap={3}>
          <InfoBar />
        </VStack>
      </Flex>
    </>
  );
};
