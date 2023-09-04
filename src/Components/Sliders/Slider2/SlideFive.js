import { Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { CgQuote } from "react-icons/cg"
import { useSelector } from "react-redux"

const SlideFive = () => {
  const activeSlideTwo = useSelector((state) => state.homepage.activeSlideTwo)
  const slideTwoEvent = useSelector((state) => state.homepage.slideTwoEvent)

  const animation = {
    initialOfSlideLeft: {
      x: "100%",
    },
    slideLeft: {
      x: "0",
      transition: {
        duration: 0.3,
      },
    },
    initialOfSlideRight: {
      x: "-100%",
    },
    slideRight: {
      x: "0",
      transition: {
        duration: 0.3,
      },
    },
  }
  return (
    <Flex
      as={motion.div}
      variants={animation}
      initial={
        slideTwoEvent === "next" ? "initialOfSlideLeft" : "initialOfSlideRight"
      }
      animate={slideTwoEvent === "next" ? "slideLeft" : "slideRight"}
      w={"100%"}
      gap={10}
    >
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
        <Text
          fontSize={{ ph: "lg", lt: "xl" }}
          fontWeight={"semibold"}
          textAlign={"center"}
          px={{ ph: 'unset', lt: '10%', dt: 'unset' }}
        >
          Global is good. Our designers challenge and inspire each other with
          their unique perspectives.
        </Text>
        <Heading
          as={"h2"}
          fontSize={{ ph: "40px", tl: "68px", lt: "80px", dt: "90px" }}
          letterSpacing={"tight"}
          color={"#ED6800"}
          fontWeight={"semibold"}
        >
          192 countries
        </Heading>
      </Flex>
    </Flex>
  )
}

export default SlideFive
