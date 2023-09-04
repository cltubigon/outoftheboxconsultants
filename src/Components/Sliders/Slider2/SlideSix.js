import { Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { CgQuote } from "react-icons/cg"
import { useSelector } from "react-redux"

const SlideSix = () => {
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
      flexDirection={{ ph: "column-reverse", lt: "row" }}
    >
      <Flex
        w={{ ph: "100%", lt: "50%" }}
        flexDirection={"column"}
        gap={3}
        alignItems={"flex-end"}
        position={"relative"}
        pr={{ ph: "0", tl: "100px", lt: "0" }}
      >
        <Image
          src="/images/Homepage/testimonial-4-photo1-fd80d760b0.webp"
          display={{ ph: "none", tl: "block" }}
          zIndex={"1"}
          // loading="lazy"
        />
        <Image
          src="/images/Homepage/testimonial-4-photo2-a684fc1c68.webp"
          display={{ ph: "none", tl: "block" }}
          zIndex={"1"}
          // loading="lazy"
        />
        <Flex
          position={{ ph: "unset", tl: "absolute" }}
          alignSelf={{ ph: "center", tl: "unset" }}
          px={{ ph: "85px", tl: "0" }}
          flexDirection={"column"}
          left={"35px"}
          top={"calc(50% - 180px)"}
        >
          <Image
            src="/images/Homepage/testimonial-4-artwork-3665771dea.webp"
            // loading="lazy"
          />
          <Text fontSize={"sm"} color={"gray.800"} fontStyle={"italic"}>
            by Steve Hai
          </Text>
        </Flex>
      </Flex>

      <Flex
        w={{ ph: "100%", lt: "50%" }}
        flexDirection={"column"}
        gap={6}
        justifyContent={"center"}
        pl={{ ph: "70px", lt: "50px" }}
        pr={{ ph: "20px", lt: "10%", dt: "16%" }}
        position={"relative"}
        minH={{ ph: "408px", tl: "313px", dt: "562px" }}
      >
        <Icon
          as={CgQuote}
          boxSize={{ ph: 16, tl: 24 }}
          color={"#DB7700"}
          position={"absolute"}
          top={{ ph: "-25px", tl: "-40px", lt: "35px" }}
          left={{ ph: "10px", tl: "-10px", lt: "-32px" }}
        />
        <Heading
          as={"h3"}
          color={"#DB7700"}
          fontWeight={"semibold"}
          letterSpacing={"tight"}
          lineHeight={"1.1em"}
        >
          When it came to developing my own brand, I didn’t really think of
          other options…
        </Heading>
        <Text lineHeight={"1.7em"}>
          I want to make sure I have alignment between who I am and what I am
          representing. We all gravitated pretty quickly to the design from
          Steve Hai. He was really responsive and a great designer. — photo
          courtesy: instagram @matthewdelly"
        </Text>
        <Flex gap={4} alignItems={"center"}>
          <Image
            src="/images/Homepage/testimonial-4-profile-photo-aa22c7f058.webp"
            w={"64px"}
            h={"64px"}
            borderRadius={"64px"}
            // loading="lazy"
          />
          <Flex flexDirection={"column"}>
            <Text color={"gray.600"} fontSize={"md"} fontStyle={"italic"}>
              Matthew Dellavedova
            </Text>
            <Text color={"gray.600"} fontSize={"sm"}>
              Australian NBA superstar
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SlideSix
