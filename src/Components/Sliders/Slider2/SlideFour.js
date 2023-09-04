import { Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { CgQuote } from "react-icons/cg"
import { useSelector } from "react-redux"

const SlideFour = () => {
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
          src="/images/Homepage/testimonial-3-photo1-2ad4434a0d.webp"
          display={{ ph: "none", tl: "block" }}
          zIndex={"1"}
          // loading="lazy"
        />
        <Image
          src="/images/Homepage/testimonial-3-photo2-4967c72a34.webp"
          display={{ ph: "none", tl: "block" }}
          zIndex={"1"}
          // loading="lazy"
        />
        <Flex
          position={{ ph: "unset", tl: "absolute" }}
          alignSelf={{ ph: "center", tl: "unset" }}
          px={{ ph: "85px", tl: "0" }}
          flexDirection={"column"}
          left={"20px"}
          top={"calc(50% - 180px)"}
        >
          <Image
            src="/images/Homepage/testimonial-3-artwork-7d873dcf47.webp"
            // loading="lazy"
          />
          <Text fontSize={"sm"} color={"gray.800"} fontStyle={"italic"}>
            by Wintrygrey
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
          // color={"#A5823D"}
          position={"absolute"}
          top={{ ph: "-25px", tl: "-40px", lt: "0px" }}
          left={{ ph: "10px", tl: "-10px", lt: "-32px" }}
        />
        <Heading
          as={"h3"}
          // color={"#A5823D"}
          fontWeight={"semibold"}
          letterSpacing={"tight"}
          lineHeight={"1.1em"}
        >
          We wanted something fun and eye-catching that didn’t look like every
          other coffee logo out there…
        </Heading>
        <Text lineHeight={"1.7em"}>
          There were so many designs to choose from and all of the designers
          were friendly and willing to change things up based on our
          preferences. In the end, we went with a design from Wintrygrey that we
          absolutely love. I would definitely recommend 99designs to anyone
          looking for logos and branding."
        </Text>
        <Flex gap={4} alignItems={"center"}>
          <Image
            src="/images/Homepage/testimonial-3-profile-photo-fe60d031d8.webp"
            w={"64px"}
            h={"64px"}
            borderRadius={"64px"}
            // loading="lazy"
          />
          <Flex flexDirection={"column"}>
            <Text color={"gray.600"} fontSize={"md"} fontStyle={"italic"}>
              Juliette Simpkins
            </Text>
            <Text color={"gray.600"} fontSize={"sm"}>
              Owner, Black Ring Coffee. USA
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SlideFour
