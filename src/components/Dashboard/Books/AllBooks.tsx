import * as React from "react";

import { Flex, Text } from "@chakra-ui/react";
import { Books } from ".";
import Pawn from "../../../assets/pawn.svg";
import Beauty from "../../../assets/beauty.svg";

interface AllBooksProps {
  title: string;
  margin: string;
}

export const AllBooks = ({ title, margin }: AllBooksProps) => {
  const books = [
    {
      image: Pawn,
      title: "Pawn King",
      author: "Martin Heraghty",
    },
    {
      image: Beauty,
      title: "The beauty is breaking",
      author: "Michele Harper",
    },
    {
      image: Pawn,
      title: "Pawn King",
      author: "Martin Heraghty",
    },
    {
      image: Pawn,
      title: "Pawn King",
      author: "Martin Heraghty",
    },
    {
      image: Pawn,
      title: "Pawn King",
      author: "Martin Heraghty",
    },
    {
      image: Pawn,
      title: "Pawn King",
      author: "Martin Heraghty",
    },
  ];
  return (
    <Flex flexDirection="column" mb={margin} overflow="hidden">
      <Flex mb="32px" alignItems="center" justifyContent="space-between">
        <Text ml="54px" fontWeight="700" fontSize="24px" lineHeight="28.8px">
          {title}
        </Text>
        <Text
          mr="64px"
          color="#865439"
          fontWeight="400"
          fontSize="14px"
          lineHeight="16.8px"
          cursor="pointer"
          _hover={{ textDecoration: "underline" }}
        >
          See all
        </Text>
      </Flex>
      <Flex overflow="hidden">
        {books.map((book, index) => (
          <Books key={index} {...book} />
        ))}
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

export default AllBooks;
