import {
  Button,
  Icon,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineGithub } from "react-icons/ai";

interface ButtonLoginProps {
  wideVersion: boolean | undefined;
}

export const ButtonLogin = ({ wideVersion }: ButtonLoginProps) => {
  if (!wideVersion) {
    return (
      <Button
        bg="gray.950"
        gap={2}
        borderRadius={100}
        transition="all 0.4s"
        _hover={{ bg: "gray.700", color: "white" }}
      >
        <Icon as={AiOutlineGithub} color="orange.450" w="24px" h="24px" />

        <Text fontSize="14px">Faça login com GitHub</Text>
      </Button>
    );
  } else {
    return (
      <Button
        bg="gray.950"
        gap={2}
        borderRadius={100}
        transition="all 0.4s"
        _hover={{ bg: "gray.700", color: "white" }}
      >
        <Icon as={AiOutlineGithub} color="orange.450" w="24px" h="24px" />
      </Button>
    );
  }
};
