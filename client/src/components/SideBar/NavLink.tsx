import {
  Box,
  Icon,
  LinkProps as ChakraLinkProps,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "./ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export const NavLink = ({ icon, href, children }: NavLinkProps) => {
  const wideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (wideVersion) {
    return (
      <ActiveLink to={href}>
        <Box display="flex" align="center" mr="2">
          <Icon as={icon} fontSize="24" />
        </Box>
      </ActiveLink>
    );
  } else {
    return (
      <ActiveLink to={href}>
        <Box display="flex" align="center" mr="2">
          <Icon as={icon} fontSize="24" />
          <Text ml="4">{children}</Text>
        </Box>
      </ActiveLink>
    );
  }
};
