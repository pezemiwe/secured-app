import { Flex, Input } from "@chakra-ui/react";
import React from "react";

const Search: React.FC = () => {
  return (
    <Flex w="100%" mt="48px" mb="56px" justifyContent="center">
      <Input
        placeholder="Type book name or Author"
        w="448px"
        bg="#FFFFFF"
        h="40px"
        borderRadius="23px"
        border="none"
        boxShadow="0px 4px 30px rgba(134, 84, 57, 0.06)"
        sx={{
          "::placeholder": {
            color: "rgba(134, 84, 57, 0.3)",
            fontSize: "14px",
            fontWeight: "600",
            ml: "24px",
            mt: "12px",
          },
        }}
      />
    </Flex>
  );
};

export default Search;
