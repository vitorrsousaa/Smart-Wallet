import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { ButtonLogged } from "./ButtonLogged";
import { ButtonLogin } from "./ButtonLogin";
import { Logo } from "./Logo";

export const Header = () => {
  const wideVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  let isLogged = true;

  return (
    <Flex
      h="100px"
      align="center"
      justify="space-between"
      p={["0 2rem", " ", "0 2rem", "0 5rem"]}
      bg="gray.900"
    >
      <Logo />

      {!isLogged ? (
        <ButtonLogin wideVersion={wideVersion} />
      ) : (
        <ButtonLogged wideVersion={wideVersion} />
      )}
    </Flex>
  );
};
