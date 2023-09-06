import { Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRightShort } from "react-icons/bs"
import { Link } from "react-router-dom"

const HomeSecSeven = () => {
  const [btnHovered, setBtnHovered] = useState(false)

  const handleMouseEnter = () => {
    setBtnHovered(() => !btnHovered)
  }
  const handleMouseLeave = () => {
    setBtnHovered(() => !btnHovered)
  }

  const clickMe = {
    _before: {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "0 8px 13.9px",
      borderColor: `transparent transparent #3E00CD`,
      borderRadius: "2px",
      top: "-8px",
      right: "-8px",
      transform: " rotate(168deg)",
    },
  }
  return (
    <Flex
      maxW={"1300px"}
      flexDirection={{ base: "column", lg: "row" }}
      pb={{ ph: "10px", lt: "30px" }}
      px={{ ph: "15px", tl: "122px", lt: "50px", dt: "0px" }}
      borderTop={"1px solid #DAD9D7"}
    >
      <Flex
        flexDirection={"column"}
        w={{ ph: "100%", lt: "50%" }}
        borderRight={{ ph: "unset", lt: "1px solid #DAD9D7" }}
        borderBottom={{ ph: "1px solid #DAD9D7", lt: "unset" }}
        pt={{ base: "28px", md: "58px" }}
        pb={{ base: "28px", md: "58px" }}
        pr={{ ph: "0", lt: "45px" }}
        gap={3}
      >
        <Heading
          color={"#3E00CD"}
          fontSize={{ ph: "24px", lt: "26px", dt: "28px" }}
          letterSpacing={"tight"}
          fontWeight={"semibold"}
        >
          Work with our branding agency
        </Heading>
        <Text mb={"14px"}>
          Our experienced in-house Project Managers and global network of
          Creative Directors offer strategic branding and custom full-service
          design packages.
        </Text>
        <Flex position={"relative"}>
          <Image src="/images/Homepage/studio-333b6e601f.webp" loading="lazy" />
          <Link to={"/"}>
            <Flex
              sx={clickMe}
              p={"4px 12px 4px 4px"}
              bgColor={"#3E00CD"}
              gap={2}
              borderRadius={"50px"}
              maxW={"205px"}
              alignItems={"center"}
              position={"absolute"}
              top={"50%"}
              left="25px"
            >
              <Image
                src="/images/Homepage/avatar-99studio.webp"
                borderRadius={"50px"}
                w={"32px"}
                h={"32px"}
              />
              <Text color={"#fff"}>99d Studio Hanoi</Text>
            </Flex>
          </Link>
        </Flex>
        <Flex
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          mt={"23px"}
          alignItems={"center"}
          borderBottom={btnHovered ? "2px solid #ccc" : "2px solid transparent"}
          w={"fit-content"}
          transition={"all 0.3s"}
        >
          <Link to={"/"}>
            <Flex>
              <Text fontSize={"xl"} fontWeight={"semibold"}>
                Learn more
              </Text>
              <Icon as={BsArrowRightShort} boxSize={8} />
            </Flex>
          </Link>
        </Flex>
      </Flex>

      <Flex
        flexDirection={"column"}
        w={{ ph: "100%", lt: "50%" }}
        pt={{ base: "28px", md: "58px" }}
        pb={{ base: "28px", md: "58px" }}
        pl={{ ph: "0", lt: "45px" }}
        gap={3}
      >
        <Heading
          fontSize={{ ph: "24px", lt: "26px", dt: "28px" }}
          letterSpacing={"tight"}
          fontWeight={"semibold"}
          mb={"13px"}
        >
          Tips, trends and tons of inspiration
        </Heading>
        <Flex gap={4}>
          <Flex w={'30%'} alignItems={'center'}>
            <Image
              src="/images/Homepage/Blog-Article-Thumbnail.webp"
              loading="lazy"
            />
          </Flex>
          <Flex
            w={'70%'}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Text
              fontSize={{ ph: 'sm', tl: "lg" }}
              textDecoration={"underline"}
              textDecorationColor={"gray.400"}
              textUnderlineOffset={"4px"}
            >
              Celebrating Queer Art: reimagining iconic logos in the style of
              renowned queer artists
            </Text>
            <Text color={"gray.600"} fontSize={"sm"}>
              3 months ago | 24 minute read
            </Text>
          </Flex>
        </Flex>
        <Flex gap={4}>
          <Flex w={'30%'} alignItems={'center'}>
            <Image src="/images/Homepage/min-vs-max-v3.webp" loading="lazy" />
          </Flex>
          <Flex
            w={'70%'}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Text
              fontSize={{ ph: 'sm', tl: "lg" }}
              textDecoration={"underline"}
              textDecorationColor={"gray.400"}
              textUnderlineOffset={"4px"}
            >
              Minimalism vs maximalism: which is the better choice for your
              packaging design?
            </Text>
            <Text color={"gray.600"} fontSize={"sm"}>
              4 months ago | 11 minute read
            </Text>
          </Flex>
        </Flex>
        <Flex gap={4}>
          <Flex w={'30%'} alignItems={'center'}>
            <Image
              src="/images/Homepage/Small-Business-Worksheets-2.webp"
              loading="lazy"
            />
          </Flex>
          <Flex
            w={'70%'}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Text
              fontSize={{ ph: 'sm', tl: "lg" }}
              textDecoration={"underline"}
              textDecorationColor={"gray.400"}
              textUnderlineOffset={"4px"}
            >
              Brand strategy template: a small business worksheet to flesh out
              your marketing plan
            </Text>
            <Text color={"gray.600"} fontSize={"sm"}>
              4 months ago | 19 minute read
            </Text>
          </Flex>
        </Flex>
        <Flex
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          mt={"38px"}
          alignItems={"center"}
          borderBottom={btnHovered ? "2px solid #ccc" : "2px solid transparent"}
          w={"fit-content"}
          transition={"all 0.3s"}
        >
          <Link to={"/"}>
            <Flex>
              <Text fontSize={"xl"} fontWeight={"semibold"}>
                Take me to the blog!
              </Text>
              <Icon as={BsArrowRightShort} boxSize={8} />
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomeSecSeven
