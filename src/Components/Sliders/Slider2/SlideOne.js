import { Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { CgQuote } from "react-icons/cg"
import { useSelector } from "react-redux"

const SlideOne = () => {
  const activeSlideTwo = useSelector(state => state.homepage.activeSlideTwo)
  const slideTwoEvent = useSelector(state => state.homepage.slideTwoEvent)

  const animation = {
    initialOfSlideLeft: {
      x: '100%',
    },
    slideLeft: {
      x: '0',
      transition: {
        duration: 0.3,
      }
    },
    initialOfSlideRight: {
      x: '-100%',
    },
    slideRight: {
      x: '0',
      transition: {
        duration: 0.3,
      }
    }
  }
  return (
    <Flex
      as={motion.div}
      variants={animation}
      initial={slideTwoEvent === 'next' ? 'initialOfSlideLeft' : 'initialOfSlideRight'}
      animate={slideTwoEvent === 'next' ? 'slideLeft' : 'slideRight'}
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
          src="/images/Homepage/testimonial-2-photo1-55ddf54556.webp"
          display={{ ph: "none", tl: "block" }}
          zIndex={"1"}
          // loading="lazy"
        />
        <Image
          src="/images/Homepage/testimonial-2-photo2-1ffa76c851.webp"
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
          top={"calc(50% - 228px)"}
        >
          <Image
            src="/images/Homepage/testimonial-2-artwork-52e73ff85c.webp"
            // loading="lazy"
          />
          <Text
            fontSize={"sm"}
            color={"gray.500"}
            fontStyle={"italic"}
            mt={"-60px"}
          >
            by betiobca
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
          color={"#A5823D"}
          position={"absolute"}
          top={{ ph: "-25px", tl: "-40px", lt: "65px" }}
          left={{ ph: "10px", tl: "-10px", lt: "-32px" }}
        />
        <Heading
          as={"h3"}
          color={"#A5823D"}
          fontWeight={"semibold"}
          letterSpacing={"tight"}
          lineHeight={"1.1em"}
        >
          99designs is a platform with a good name and a very good service…
        </Heading>
        <Text lineHeight={"1.7em"}>
          where entrepreneurs can easily find the right design for their
          company. The book cover for us was a very important part of the
          success of the book. Therefore, we entrusted this to experts and ended
          up being very happy with the result."
        </Text>
        <Flex gap={4} alignItems={"center"}>
          <Image
            src="/images/Homepage/testimonial-2-profile-photo-d1312db6c5.webp"
            w={"64px"}
            h={"64px"}
            borderRadius={"64px"}
            // loading="lazy"
          />
          <Flex flexDirection={"column"}>
            <Text color={"gray.600"} fontSize={"md"} fontStyle={"italic"}>
              Val Racheeva + Maxi Knust
            </Text>
            <Text color={"gray.600"} fontSize={"sm"}>
              Co-authors, Germany
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SlideOne
