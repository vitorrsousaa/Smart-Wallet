import { Box, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export const NavSection = ({ title, children }: NavSectionProps) => {
  const wideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!wideVersion) {
    return (
      <Box>
        <Text color="gray.600" fontWeight="bold">
          {title}
        </Text>
        <Stack mt="6" align="stretch" spacing="4">
          {children}
        </Stack>
      </Box>
    );
  } else {
    return (
      <Box>
        <Stack mt="6" align="stretch" spacing="4">
          {children}
        </Stack>
      </Box>
    );
  }
};
