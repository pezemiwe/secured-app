import * as React from "react";

import { Flex, Text } from "@chakra-ui/react";

export const About: React.FC = () => {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mb="171px"
    >
      <Text
        fontWeight="700"
        fontSize="45px"
        lineHeight="59.99px"
        color="#865439"
        mb="45px"
      >
        About Booker
      </Text>
      <Text
        fontWeight="500"
        fontSize="24px"
        lineHeight="28.8px"
        w="984px"
        textAlign="center"
        color="#865439"
      >
        Our extensive selection of bestselling ebooks truly has something for
        everyone. Bestselling self-improvement titles — from the likes of Mark
        Manson, Rachel Hollis, Stephen R. Covey, and more — offer a deeper
        relationship with the self, whereas our curated selection of
        contemporary fiction helps you connect with compelling stories beyond
        your immediate setting. Interested in keeping up to speed with the
        current political moment? Our selection of political ebooks offer both
        intrigue and insight. If you’re more interested in exploring a new hobby
        or deepening an existing one, we recommend exploring our cooking, food,
        and wine ebooks as well as our home and garden titles. We have also
        compiled the best of the best, from Pulitzer Prize winners to classics
        that have stood the test of time. Our Scribd Editors’ Picks are updated
        weekly to showcase the books that we can’t put down. With a Scribd
        ebooks subscription, you can access these titles and more through any
        web browser, Android, or iOS device.
      </Text>
    </Flex>
  );
};

export default About;
