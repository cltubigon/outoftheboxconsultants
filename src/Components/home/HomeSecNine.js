import { Flex, Image } from "@chakra-ui/react"
import React from "react"

const HomeSecNine = () => {
  return (
    <Flex w={"100%"} justifyContent={"center"} bgColor={"#F3F2F0"}>
      <Flex
        w={"1300px"}
        px={{ ph: "15px", tl: "40px", lt: "50px", dt: "0px" }}
        mt={"30px"}
        justifyContent={"center"}
        borderBottom={"1px solid #DAD9D7"}
      >
        <Flex
          gap={10}
          pt={{ ph: "30px", tl: "30px" }}
          pb={{ ph: "30px", tl: "60px" }}
          maxW={{ ph: "100%", lt: "700px" }}
          flexWrap={"wrap"}
          justifyContent={"center"}
          flexDirection={{ ph: "column", tl: "row" }}
        >
          <Image
            src="/images/Homepage/wallstreetjournal.svg"
            m={"0 auto"}
            w={"230px"}
            h={"30px"}
            style={{ fill: "red", color: "blue" }}
          />
          <Image
            src="/images/Homepage/techcrunch.svg"
            m={"0 auto"}
            w={"221px"}
            h={"30px"}
            color={"red"}
          />
          <Image
            src="/images/Homepage/entrepreneur.svg"
            m={"0 auto"}
            w={"151px"}
            h={"30px"}
            color={"red"}
          />
          <Image
            src="/images/Homepage/thenewyorktimes.svg"
            m={"0 auto"}
            w={"218px"}
            h={"30px"}
            color={"red"}
          />
          <Image
            src="/images/Homepage/forbes.svg"
            m={"0 auto"}
            w={"115px"}
            h={"30px"}
            color={"red"}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomeSecNine
