import { Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import { CgQuote } from "react-icons/cg"

const SlideThree = () => {
  return (
    <Flex w={"100%"} gap={10}>
      <Flex
        w={"100%"}
        flexDirection={"column"}
        // gap={3}
        justifyContent={"center"}
        alignItems={"center"}
        // pl={{ ph: "70px", lt: "50px" }}
        // pr={{ ph: "20px", lt: "10%", dt: "16%" }}
        position={"relative"}
        minH={{ ph: "408px", tl: "562px" }}
        // bgColor={'blue'}
      >
        <Text fontSize={{ ph: 'lg', lt: 'xl' }} fontWeight={"semibold"} textAlign={'center'}>
        Collaboration is the key to creativity, and we love bringing people together.
        </Text>
        <Heading
          as={"h2"}
          fontSize={{ ph: '40px', tl: '68px', lt: "80px", dt: "90px" }}
          letterSpacing={'tight'}
          color={"#1C1B1A"}
          fontWeight={"semibold"}
        >
          697,884 connections
        </Heading>
      </Flex>
    </Flex>
  )
}

export default SlideThree
