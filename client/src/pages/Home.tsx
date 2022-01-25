import { Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

export const Home = () => {
  const navigate = useNavigate();

  function handleClickCTA() {
    navigate("/dashboard");
  }

  return (
    <>
      <Header />
      <Flex
        direction="column"
        m="2rem 0 "
        pl={["2rem", "", "", "5rem"]}
        gap={4}
        maxWidth="990px"
      >
        <Text fontSize={["1.25rem", "1.5rem"]}>👋🏻 Seja bem vindo!</Text>
        <Text fontSize={["2.2rem", "", "3rem", "4.5rem"]} fontWeight="bold">
          O sistema que controla sua carteira e mantém você no controle!
        </Text>

        <Text mb="2rem" fontSize={["1rem", "1.25rem", "1.5rem"]}>
          Tenha acesso a todas as funcionalidades <br />
          por <span> R$ 9,90 / mês</span>
        </Text>

        <Button
          bg="orange.450"
          color="gray.1000"
          borderRadius="100"
          w={260}
          h={76}
          onClick={handleClickCTA}
        >
          Cadastre-se
        </Button>
      </Flex>
    </>
  );
};
