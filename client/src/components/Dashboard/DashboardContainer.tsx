import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { ContribuitionDisplay } from "./ContribuitionDisplay";

import { DashboardItem } from "./DashboardItem";

export const DashboardContainer = () => {
  const wideVersion = useBreakpointValue({
    base: true,
    xl: false,
  });

  return (
    <Flex gap={4} direction={wideVersion ? "column" : "row"}>
      <ContribuitionDisplay title="Aportes" />
      <DashboardItem title="Patrimônio" />
    </Flex>
  );
};
