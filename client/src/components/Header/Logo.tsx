import { Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlineLaptop } from "react-icons/ai";

export const Logo = () => {
  console.log("breakpoints: Logo");
  console.log("320px - 485px");
  console.log("485px - 800px");
  console.log("800px - 995px");
  console.log("995px - 1300px");
  return (
    <Flex flexDirection="row" alignItems="center" justify="center" gap={2}>
      <Icon as={AiOutlineLaptop} fontSize={["1.5rem", "2.5rem"]} />

      <Text as="h1" fontSize={["1rem", "2rem", "2rem"]}>
        Smart Wallet
      </Text>
    </Flex>
  );
};
