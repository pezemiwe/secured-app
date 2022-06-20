import * as React from "react";
import { Flex, Link, Icon, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <Flex
      h="647px"
      w="100%"
      bg="#865439"
      pt="70px"
      pl="63px"
      color="#ffffff"
      fontSize="18px"
    >
      <Flex flexDirection="column" fontWeight="500" mr="18px">
        <Text fontWeight="700" mb="17px">
          About
        </Text>
        <Link
          href="#"
          mb="17px"
          _hover={{ textDecoration: "underline", color: "#FFF" }}
        >
          About Booker
        </Link>
        <Link
          href="#"
          mb="17px"
          _hover={{ textDecoration: "underline", color: "#FFF" }}
        >
          Press
        </Link>
        <Link
          href="#"
          mb="17px"
          _hover={{ textDecoration: "underline", color: "#FFF" }}
        >
          Our blog
        </Link>
        <Link
          href="#"
          mb="17px"
          _hover={{ textDecoration: "underline", color: "#FFF" }}
        >
          Join out Team!
        </Link>
        <Link
          href="#"
          mb="17px"
          _hover={{ textDecoration: "underline", color: "#FFF" }}
        >
          Contact us
        </Link>
        <Link
          href="#"
          mb="17px"
          _hover={{ textDecoration: "underline", color: "#FFF" }}
        >
          Invite friends
        </Link>
        <Link href="#" _hover={{ textDecoration: "underline", color: "#FFF" }}>
          Booker for Organizations
        </Link>
      </Flex>
      <Flex flexDirection="column" fontWeight="500" mr="125px">
        <Text fontWeight="700" mb="17px">
          Support
        </Text>
        <Link
          href="#"
          mb="17px"
          _hover={{ textDecoration: "underline", color: "#FFF" }}
        >
          Help/ FAQ’s
        </Link>
        <Link
          href="#"
          mb="17px"
          _hover={{ textDecoration: "underline", color: "#FFF" }}
        >
          Accessibility
        </Link>
        <Link
          href="#"
          mb="17px"
          _hover={{ textDecoration: "underline", color: "#FFF" }}
        >
          Purchase help
        </Link>
        <Link
          href="#"
          mb="17px"
          _hover={{ textDecoration: "underline", color: "#FFF" }}
        >
          Adchoice
        </Link>
        <Link href="#" _hover={{ textDecoration: "underline", color: "#FFF" }}>
          Publishers
        </Link>
      </Flex>
      <Flex flexDirection="column" fontWeight="500" mr="52px">
        <Text fontWeight="700" mb="17px">
          Legal
        </Text>
        <Link
          href="#"
          mb="17px"
          _hover={{ textDecoration: "underline", color: "#FFF" }}
        >
          Terms
        </Link>
        <Link
          href="#"
          mb="17px"
          _hover={{ textDecoration: "underline", color: "#FFF" }}
        >
          Privacy
        </Link>
        <Link
          href="#"
          mb="17px"
          _hover={{ textDecoration: "underline", color: "#FFF" }}
        >
          Copyright
        </Link>
        <Link href="#" _hover={{ textDecoration: "underline", color: "#FFF" }}>
          Cookies preference
        </Link>
      </Flex>
      <Flex flexDirection="column" fontWeight="500" mr="52px">
        <Text fontWeight="700" mb="17px">
          Socials
        </Text>
        <Icon as={FaFacebook} mb="17px" h="24px" w="24px" cursor="pointer" />
        <Icon as={FaTwitter} mb="17px" h="24px" w="24px" cursor="pointer" />
        <Icon as={FaYoutube} h="24px" w="24px" cursor="pointer" />
      </Flex>
    </Flex>
  );
};

export default Footer;
