import {
  Avatar,
  Text,
  Flex,
  Select,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Icon,
} from "@chakra-ui/react";
import { useKeycloak } from "@react-keycloak/web";
import { MdArrowDropDown } from "react-icons/md";

export default function Navbar() {
  const { keycloak } = useKeycloak();
  const handleLogin = () => {
    keycloak.login();
  };

  return (
    <Flex
      color="#ffffff"
      w="100%"
      h="69px"
      bg="#341B0D"
      px="64px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text fontWeight="900" fontSize="26px">
        Booker
      </Text>
      {keycloak.authenticated && (
        <Flex fontSize="14px" fontWeight="500">
          <Select
            variant="unstyled"
            mr="45px"
            border="none"
            p="0"
            fontSize="14px"
            fontWeight="500"
            placeholder="Categories"
            icon={<MdArrowDropDown />}
            _focus={{ outline: "none", borderColor: "transparent" }}
            _hover={{ outline: "none" }}
            _selected={{ borderColor: "none", outline: "none" }}
          >
            <option value="comedy">Comedy</option>
            <option value="science">Science</option>
            <option value="fiction">Fiction 3</option>
          </Select>
          <Text mr="45px" cursor="pointer" _hover={{ textDecor: "underline" }}>
            Library
          </Text>
          <Text cursor="pointer" _hover={{ textDecor: "underline" }}>
            Cart
          </Text>
        </Flex>
      )}
      <Flex alignItems="center">
        <Avatar size="sm" mr="2" />
        <Menu>
          <MenuButton aria-label="Options">
            <Icon as={MdArrowDropDown} size="2xl" />
          </MenuButton>
          <MenuList color="#341B0D">
            {keycloak.authenticated ? (
              <MenuItem onClick={() => keycloak.logout()}>Logout</MenuItem>
            ) : (
              <MenuItem onClick={handleLogin}>Login</MenuItem>
            )}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
