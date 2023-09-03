import { Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import { CgQuote } from "react-icons/cg"

const SlideEight = () => {
  return (
    <Flex
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
          src="/images/Homepage/testimonial-5-photo1-d11b93aaa0.webp"
          display={{ ph: "none", tl: "block" }}
          zIndex={"1"}
          loading="lazy"
        />
        <Image
          src="/images/Homepage/testimonial-5-photo2-9e0504f672.webp"
          display={{ ph: "none", tl: "block" }}
          zIndex={"1"}
          loading="lazy"
        />
        <Flex
          position={{ ph: "unset", tl: "absolute" }}
          alignSelf={{ ph: "center", tl: "unset" }}
          px={{ ph: "85px", tl: "0" }}
          flexDirection={"column"}
          left={"-200px"}
          // top={"calc(50% - 180px)"}
          alignItems={'flex-end'}
        >
          <Image
            src="/images/Homepage/testimonial-5-artwork-f60357de65.webp"
            loading="lazy"
          />
          <Text fontSize={"sm"} alignSelf={'flex-end'} zIndex={'2'} mr={'140px'} color={"gray.800"} fontStyle={"italic"}>
          by malzi.
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
      >
        <Icon
          as={CgQuote}
          boxSize={{ ph: 16, tl: 24 }}
          color={"#CA0000"}
          position={"absolute"}
          top={{ ph: "-25px", tl: "-40px", lt: "50px" }}
          left={{ ph: "10px", tl: "-10px", lt: "-32px" }}
        />
        <Heading
          as={"h3"}
          color={"#CA0000"}
          fontWeight={"semibold"}
          letterSpacing={"tight"}
          lineHeight={"1.1em"}
        >
          It’s a privilege to work from anywhere. I’m enjoying every second of
          this lifestyle…
        </Heading>
        <Text lineHeight={"1.7em"}>
          I fund a good portion of my travel expenses through 99designs, which I
          am very grateful for. But I also don’t need to worry about client
          acquisition, so I can concentrate completely on the projects at hand."
        </Text>
        <Flex gap={4} alignItems={"center"}>
          <Image
            src="/images/Homepage/testimonial-5-profile-photo-d92cbfc9d5.webp"
            w={"64px"}
            h={"64px"}
            borderRadius={"64px"}
            loading="lazy"
          />
          <Flex flexDirection={"column"}>
            <Text color={"gray.600"} fontSize={"md"} fontStyle={"italic"}>
              Timo Malzbender (malzi.)
            </Text>
            <Text color={"gray.600"} fontSize={"sm"}>
              UI/UX designer, Germany
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SlideEight
