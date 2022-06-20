import * as React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useKeycloak } from "@react-keycloak/web";

export const landingPage: React.FC = () => {
  const { keycloak } = useKeycloak();
  const handleLogin = () => {
    keycloak.login();
  };
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      w="100%"
    >
      <Text fontSize="120px" fontWeight="700" mb="24px" color="#341B0D">
        Welcome to Booker
      </Text>
      <Button
        h="50px"
        borderRadius="full"
        w="260px"
        color="#ffffff"
        bg="#341B0D"
        onClick={handleLogin}
      >
        Get Started
      </Button>
    </Flex>
  );
};

export default landingPage;
