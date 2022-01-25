import { Box, VStack, Text } from "@chakra-ui/react";

interface DashboardItemProps {
  title: string;
}

export const DashboardItem = ({ title }: DashboardItemProps) => {
  return (
    <VStack
      bg="gray.600"
      borderRadius="8px"
      w="590px"
      h="288px"
      align="flex-start"
      gap={2}
      p="1rem 2rem 2rem 2rem"
    >
      <Text fontSize="20px">{title}</Text>
      <Box w="100%" h="100%" bg="white" color="gray.600">
        Evolução do {title} do alongo dos anos
      </Box>
    </VStack>
  );
};
