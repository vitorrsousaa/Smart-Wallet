import { Flex, Spinner, useBreakpointValue } from "@chakra-ui/react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { useContribuitions } from "../../contexts/ContribuitionsContext";
import { InfoContent } from "./InfoContent";

export const InfoBar = () => {
  const wideVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  const { contribuitionsData } = useContribuitions();

  const totalAplied = contribuitionsData.length
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(
        contribuitionsData
          .map((contribuition) => contribuition.contribuitions)
          .reduce((previous, current) => previous + current)
      )
    : "loading";

  return (
    <Flex
      w={["13rem", "22rem", "40rem", "", "50rem", "75rem"]}
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
        value={totalAplied}
        isLoading={<Spinner />}
        icon={<AiOutlineArrowUp />}
      />
      <InfoContent
        title="Saldo Bruto"
        value={"1234.5"}
        isLoading={<Spinner />}
        icon={<HiOutlineClipboardList />}
      />
      <InfoContent
        title="Rentabilidade"
        value={"5.21"}
        isLoading={<Spinner />}
        icon={<BsArrowUpRight />}
      />
    </Flex>
  );
};
