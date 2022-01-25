import { Button, Icon } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { UserLogged } from "./UserLogged";

interface ButtonLoggedProps {
  wideVersion: boolean | undefined;
}

export const ButtonLogged = ({ wideVersion }: ButtonLoggedProps) => {
  return (
    <Button
      bg="gray.950"
      gap={2}
      w={!wideVersion ? "25rem" : "5rem"}
      h={!wideVersion ? "80px" : "50px"}
      justifyContent="space-between"
      align="center"
      borderRadius={100}
      transition="all 0.4s"
      _hover={{ bg: "gray.700", color: "white" }}
    >
      <Icon as={AiOutlineGithub} color="green.450" fontSize={24} />
      <UserLogged wideVersion={wideVersion} />
    </Button>
  );
};
