import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Book from "../../../assets/book.svg";

const Waitlist: React.FC = () => {
  return (
    <Flex
      w="100vw"
      h="291px"
      flexDirection="column"
      bgImage={Book}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      mb="88px"
    >
      <Flex
        bg="linear-gradient( rgba(134, 87, 57, 0.74) 46.45%, rgba(134, 87, 57, 0) 100% )"
        w="100%"
        h="100%"
        pl="337px"
        justifyContent="center"
        flexDirection="column"
        color="#FFFFFF"
      >
        <Flex>
          <Text
            fontWeight="700"
            fontSize="45px"
            lineHeight="59.99px"
            w="626px"
            mr="126px"
          >
            Be the first to know About new books and authors.
          </Text>
          <Button
            w="145px"
            h="48px"
            bg="#341B0D"
            borderRadius="none"
            color="#FFFFFF"
            fontWeight="700"
            fontSize="24px"
            lineHeight="31.99px"
            mt="60px"
          >
            Join
          </Button>
        </Flex>
        <Text fontWeight="400" fontSize="16px" lineHeight="16.8px">
          Join the waitlist and get exclusive access to new books and debut
          authors
        </Text>
      </Flex>
    </Flex>
  );
};

export default Waitlist;
