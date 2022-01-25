import { NavSection } from "./NavSection";
import { Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { RiDashboardLine } from "react-icons/ri";
import { CgDatabase } from "react-icons/cg";
import { VscNewFile } from "react-icons/vsc";

export const SideBarNav = () => {
  return (
    <Stack align="flex-start" spacing="12">
      <NavSection title="CARTEIRA">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
      </NavSection>

      <NavSection title="GERENCIAMENTO">
        <NavLink icon={CgDatabase} href="/produtos">
          Produtos
        </NavLink>
        <NavLink icon={VscNewFile} href="/gerenciamento">
          Gerenciar
        </NavLink>
      </NavSection>
    </Stack>
  );
};
