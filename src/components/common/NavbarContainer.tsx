import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export const NavbarContainer: React.FC = () => {
  return (
    <Flex h="100vh" flexDirection="column">
      <Navbar />
      <Flex flex="1" h="100vh" overflow="hidden ">
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default NavbarContainer;
