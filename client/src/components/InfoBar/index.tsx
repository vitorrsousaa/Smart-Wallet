import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { InfoContent } from "./InfoContent";

export const InfoBar = () => {
  const wideVersion = useBreakpointValue({
    base: true,
    md: false,
  });
  return (
    <Flex
      w={["15rem", "22rem", "35rem", "40rem", "50rem", "75rem"]}
      bg="gray.600"
      mt="8"
      h={["14rem", "", "4.25rem"]}
      gap={2}
      justify="space-around"
      borderRadius="8px"
      align="center"
      direction={wideVersion ? "column" : "row"}
    >
      <InfoContent
        title="Valor Aplicado"
        value={123.45}
        icon={<AiOutlineArrowUp />}
      />
      <InfoContent
        title="Saldo Bruto"
        value={1234.5}
        icon={<HiOutlineClipboardList />}
      />
      <InfoContent
        title="Rentabilidade"
        value={5.21}
        icon={<BsArrowUpRight />}
      />
    </Flex>
  );
};
