import { Button, Flex, HStack, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { DashboardContainer } from "../components/Dashboard/DashboardContainer";
import { HitProducts } from "../components/Dashboard/HitProducts";
import { Header } from "../components/Header";
import { InfoBar } from "../components/InfoBar";
import { SideBar } from "../components/SideBar";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Flex direction="row" w="98vw">
        <SideBar />
        <VStack align="center" m="0 auto" gap={3}>
          <InfoBar />
          <DashboardContainer />
          {/* <HStack gap={4}>
            <HitProducts type="high" />
            <HitProducts type="low" />
          </HStack> */}
        </VStack>
      </Flex>
    </>
  );
};
