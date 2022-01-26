import { Circle, Flex, HStack, Spinner, Text, Box } from "@chakra-ui/react";
import { ReactElement } from "react";

interface InfoContentProps {
  title: string;
  value: string;
  icon: ReactElement;
  isLoading: ReactElement;
}

export const InfoContent = ({
  title,
  value,
  icon,
  isLoading,
}: InfoContentProps) => {
  if (value) {
    return (
      <HStack gap={2}>
        <Circle size="45px" bg="gray.450" color="white" fontSize="22px">
          {icon}
        </Circle>
        <Flex align="flex-start" direction="column">
          <Text>{title}</Text>
          <Text color="gray.300" fontSize="12px">
            {value}
          </Text>
        </Flex>
      </HStack>
    );
  } else {
    return <Box>{isLoading}</Box>;
  }
};
