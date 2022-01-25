import { Circle, Flex, HStack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface InfoContentProps {
  title: string;
  value: number;
  icon: ReactElement;
}

export const InfoContent = ({ title, value, icon }: InfoContentProps) => {
  return (
    <HStack gap={2}>
      <Circle size="45px" bg="gray.450" color="white" fontSize="22px">
        {icon}
      </Circle>
      <Flex align="flex-start" direction="column">
        <Text>{title}</Text>
        <Text color="gray.300" fontSize="12px">
          R$ {value}
        </Text>
      </Flex>
    </HStack>
  );
};
