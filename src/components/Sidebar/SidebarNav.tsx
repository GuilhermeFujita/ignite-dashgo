import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink href="/users" icon={RiContactsLine}>Usuários</NavLink>
      </NavSection>

      <Box>
        <Stack spacing="4" mt="8" align="stretch">
          <NavSection title="AUTOMAÇÃO">
            <NavLink href="/forms" icon={RiInputMethodLine}>Formulários</NavLink>
            <NavLink href="/automation" icon={RiGitMergeLine}>Automação</NavLink>
          </NavSection>
        </Stack>
      </Box>
    </Stack>
  );
}