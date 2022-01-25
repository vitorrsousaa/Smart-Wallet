import { Box, Center, Circle, HStack, Icon, Text } from "@chakra-ui/react";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

interface ProductCardProps {
  type: string;
  name: string;
}

export const ProductCard = ({ type, name }: ProductCardProps) => {
  return (
    <HStack bg="gray.600" p="1rem" borderRadius="8px">
      <Center
        bg={type === "high" ? "green.450" : "red.500"}
        h="100%"
        w="10px"
        borderRadius="8px"
      />
      <Box>
        <Text
          color={type === "high" ? "green.450" : "red.500"}
          fontSize="20px"
          fontWeight="bold"
        >
          VALE3
        </Text>
        <Text color="orange.450" fontSize="16px">
          R$ 74,21
        </Text>
        <Text fontSize="12px">R$ 1,20 (0.5 %)</Text>
      </Box>
      <Circle>
        <Icon
          as={
            type === "high"
              ? BsFillArrowUpCircleFill
              : BsFillArrowDownCircleFill
          }
          color={type === "high" ? "green.450" : "red.500"}
          fontSize="40px"
          ml={8}
        />
      </Circle>
    </HStack>
  );
};
