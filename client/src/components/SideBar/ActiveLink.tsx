import { Link as ChakraLink } from "@chakra-ui/react";
import { cloneElement, ReactElement, useState } from "react";
import { Link as RouterLink, LinkProps, useLocation } from "react-router-dom";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  to: string;
}

export const ActiveLink = ({ children, to, ...rest }: ActiveLinkProps) => {
  let isActive = false;

  const { pathname } = useLocation();

  if (pathname === to) {
    isActive = true;
  }

  return (
    <ChakraLink
      as={RouterLink}
      to={to}
      {...rest}
      color={isActive ? "orange.450" : "gray.200"}
    >
      {cloneElement(children)}
    </ChakraLink>
  );
};
