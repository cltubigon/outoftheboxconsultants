import { Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import { CgQuote } from "react-icons/cg"

const SlideTwo = () => {
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
          Get this: A new design is created on 99designs every 2 seconds!
        </Text>
        <Heading
          as={"h2"}
          fontSize={{ ph: '40px', tl: '68px', lt: "80px", dt: "90px" }}
          letterSpacing={'tight'}
          color={"#ED6800"}
          fontWeight={"semibold"}
        >
          97,339,806 designs
        </Heading>
      </Flex>
    </Flex>
  )
}

export default SlideTwo
