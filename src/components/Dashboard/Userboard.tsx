import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { AllBooks } from "./Books";
import About from "./About/About";
import Search from "./Search/Search";
import Waitlist from "./Waitlist/Waitlist";
import Footer from "./Footer/Footer";

export const UserBoard: React.FC = () => {
  return (
    <Flex
      bg="#FFFBF9"
      flexDirection="column"
      w="100%"
      h="100%"
      overflow="hidden"
    >
      <Search />
      <AllBooks title="New Books" margin="108px" />
      <Waitlist />
      <AllBooks title="Bestseller" margin="88px" />
      <AllBooks title="Multiple Award Winners" margin="88px" />
      <AllBooks title="Editor’s Choice" margin="133px" />
      <About />
      <Footer />
    </Flex>
  );
};

export default UserBoard;
