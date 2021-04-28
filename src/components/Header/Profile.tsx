import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Guilherme Fujita</Text>
          <Text color="gray.300" fontSize="small">fujitaguilherme@hotmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Guilherme Fujita" src="https://github.com/GuilhermeFujita.png" />
    </Flex>

  );
}