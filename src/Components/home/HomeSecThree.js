import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRightShort } from "react-icons/bs"
import { Link } from "react-router-dom"

const HomeSecThree = () => {
  const clickMeThree = {
    _before: {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "0 8px 13.9px",
      borderColor: `transparent transparent #CC9BFF`,
      borderRadius: "2px",
      bottom: "-8px",
      left: "-8px",
      transform: " rotate(107deg)",
    },
  }
  const clickMeTwo = {
    _before: {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "0 8px 13.9px",
      borderColor: `transparent transparent #51AFF4`,
      borderRadius: "2px",
      bottom: "-8px",
      right: "-8px",
      transform: " rotate(12deg)",
    },
  }
  const clickMeOne = {
    _before: {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "0 8px 13.9px",
      borderColor: `transparent transparent #FF9000`,
      borderRadius: "2px",
      left: "-8px",
      top: "-8px",
      transform: " rotate(72deg)",
    },
  }
  const [btnHovered, setBtnHovered] = useState(false)
  const handleMouseEnter = () => {
    setBtnHovered(() => !btnHovered)
  }
  const handleMouseLeave = () => {
    setBtnHovered(() => !btnHovered)
  }
  return (
    <Flex
      maxW={"1300px"}
      flexDirection={{ base: "column", lg: "row" }}
      pt={{ base: "28px", md: "58px" }}
      pb={"30px"}
      px={{ ph: "10px", tl: "40px", lt: "50px", dt: '0px' }}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"28px"}
        w={{ base: "100%", lg: "40%" }}
      >
        <Heading
          as={"h2"}
          color={"#2486CB"}
          fontSize={{ base: "44px", md: "xxx-large" }}
          lineHeight={{ base: "1em", md: "1.3em" }}
          letterSpacing={{ base: "tight", md: "normal" }}
          fontWeight={"medium"}
        >
          Your business deserves great design
        </Heading>
        <Box bgColor={"#2486CB"} h={"5px"} w={"39px"} />
        <Text pl={"28px"} pr={{ base: 0, md: "40px" }}>
          Logos, websites, packaging design and more. Our trusted designer
          community has helped thousands of businesses launch, grow, expand and
          rebrand with custom, professional design.
        </Text>
        <Flex
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ml={"28px"}
          alignItems={"center"}
          borderBottom={btnHovered ? "2px solid #ccc" : "2px solid transparent"}
          w={"fit-content"}
          transition={"all 0.3s"}
        >
          <Link to={"/"}>
            <Flex>
              <Text fontSize={"xl"} fontWeight={"semibold"}>
                Start your brand
              </Text>
              <Icon as={BsArrowRightShort} boxSize={8} />
            </Flex>
          </Link>
        </Flex>
      </Flex>

      <Flex w={{ base: "100%", lg: "60%" }} position={"relative"}>
        <Image
          src="/images/Homepage/business-deserves-great-design.webp"
          loading="lazy"
        />

        <Link to={"/"}>
          <Flex
            sx={clickMeThree}
            p={"4px 12px 4px 4px"}
            bgColor={"#CC9BFF"}
            gap={2}
            borderRadius={"50px"}
            alignItems={"center"}
            position={"absolute"}
            top={"20px"}
            left={{ base: "50%", lg: "50%" }}
          >
            <Image
              src="/images/Homepage/avatar-dunychi.webp"
              borderRadius={"50px"}
              w={"32px"}
              h={"32px"}
              loading="lazy"
            />
            <Text>Logo by: Dunychi</Text>
          </Flex>
        </Link>

        <Link to={"/"}>
          <Flex
            sx={clickMeTwo}
            p={"4px 12px 4px 4px"}
            bgColor={"#51AFF4"}
            gap={2}
            borderRadius={"50px"}
            alignItems={"center"}
            position={"absolute"}
            top={"50%"}
            left={{ base: "-25%", md: "0" }}
          >
            <Image
              src="/images/Homepage/avatar-setupshop.webp"
              borderRadius={"50px"}
              w={"32px"}
              h={"32px"}
              loading="lazy"
            />
            <Flex alignItems={"center"}>
              <Text>Website by SetupShop</Text>
              <Text as={"sup"} fontSize={"10px"}>
                TM
              </Text>
            </Flex>
          </Flex>
        </Link>

        <Link to={"/"}>
          <Flex
            sx={clickMeOne}
            p={"4px 12px 4px 4px"}
            bgColor={"#FF9000"}
            gap={2}
            borderRadius={"50px"}
            alignItems={"center"}
            position={"absolute"}
            bottom={"15%"}
            right={{ base: "-10%", md: "0" }}
          >
            <Image
              src="/images/Homepage/avatar-setupshop.webp"
              borderRadius={"50px"}
              w={"32px"}
              h={"32px"}
              loading="lazy"
            />
            <Text>Packaging by Gusz</Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  )
}

export default HomeSecThree
