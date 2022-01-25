import {
  Avatar,
  Text,
  VStack,
  HStack,
  Icon,
  useBreakpointValue,
  Box,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface userProps {
  avatar_url: string;
  name: string;
  login: string;
}

interface UserLoggedProps {
  wideVersion: boolean | undefined;
}

export const UserLogged = ({ wideVersion }: UserLoggedProps) => {
  const [user, setUser] = useState<userProps>({} as userProps);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/vitorrsousaa")
      .then((response) => setUser(response.data));
  });

  if (!wideVersion) {
    return (
      <HStack gap={2}>
        <Flex gap={2} align="center">
          <VStack align="flex-end" borderRight="gray solid 1px" pr={4}>
            <Text fontSize="16px" color="gray.200">
              {user.name}
            </Text>
            <Text fontSize="11px" color="gray.550">
              @{user.login}
            </Text>
          </VStack>
          <Avatar src={user.avatar_url} />
        </Flex>
        <Icon as={AiOutlineClose} fontSize={24} color="gray.600" />
      </HStack>
    );
  } else {
    return (
      <Icon
        as={AiOutlineClose}
        fontSize={24}
        color="gray.600"
        borderLeft="gray solid 1px"
        pl="7px"
      />
    );
  }
};
