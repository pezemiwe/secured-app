import * as React from "react";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Star from "../../../assets/star.svg";

interface BookProps {
  image: string;
  title: string;
  author: string;
};

export const Books = ({ image, title, author }: BookProps) => {
  return (
    <Flex
      w="280px"
      h="376px"
      borderRadius="16px"
      bg="#FFFFFF"
      boxShadow="0px 4px 30px rgba(134, 84, 57, 0.06)"
      pt="21px"
      px="23.08px"
      flexDirection="column"
      ml="52px"
    >
      <Image src={image} mb="13px" w="213.83px" h="208px" />
      <Text mb="6px">{title}</Text>
      <Text mb="6.62px">{author}</Text>
      <Flex mb="22.62px">
        <Image src={Star} mr="0.49px" h="10px" w="12.15px" />
        <Image src={Star} mr="0.49px" h="10px" w="12.15px" />
        <Image src={Star} mr="0.49px" h="10px" w="12.15px" />
        <Image src={Star} mr="0.49px" h="10px" w="12.15px" />
        <Image src={Star} h="10px" w="12.15px" />
      </Flex>
      <Flex
        fontWeight="700"
        fontSize="14px"
        lineHeight="16.8px"
        w="100%"
        justifyContent="center"
      >
        <Button
          mr="24.3px"
          w="70.47px"
          h="23px"
          bg="#ffffff"
          border="1px solid #865439"
          color="#865439"
          _hover={{ bg: "#fff" }}
        >
          Rent
        </Button>
        <Button
          color="#ffffff"
          w="64.39px"
          h="23px"
          bg="#341B0D"
          _hover={{ bg: "#341B0D" }}
        >
          Buy
        </Button>
      </Flex>
    </Flex>
  );
};
export default Books;
