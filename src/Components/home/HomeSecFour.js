import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  textDecoration,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRightShort } from "react-icons/bs"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

const HomeSecFour = () => {
  const [btnHovered, setBtnHovered] = useState(false)
  const handleMouseEnter = () => {
    setBtnHovered(() => !btnHovered)
  }
  const handleMouseLeave = () => {
    setBtnHovered(() => !btnHovered)
  }
  return (
    <Flex py={"80px"}>
      <Flex w={"50%"}>
        <Flex maxW={"540px"} gap={1} pl={{ base: 0, md: "28px" }}>
          <Flex flexDirection={"column"} pt={"45px"}>
            <Flex flexDirection={"column"} alignItems={"center"} zIndex={"1"}>
              <Flex justifyContent={"center"}>
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mt={"28px"} />
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mt={"6px"} />
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mx={"4px"} />
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mt={"6px"} />
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mt={"28px"} />
              </Flex>
              <Image
                src="/images/Homepage/profile-image-reza-ernanda.webp"
                loading="lazy"
                w={"66px"}
                h={"66px"}
                borderRadius={"66px"}
                mt={"-20px"}
                border={"2px solid white"}
              />
            </Flex>
            <Flex flexDirection={"column"} gap={1} mt={"-35px"}>
              <Image
                src="/images/Homepage/copilot-helmet-logo-design.webp"
                loading="lazy"
              />
              <Image
                src="/images/Homepage/mountain-sun-wanderlust-bar-logo-design.webp"
                loading="lazy"
              />
              <Image
                src="/images/Homepage/megahouse-logo-design.webp"
                loading="lazy"
              />
            </Flex>
            <Text fontStyle={"italic"} fontSize={"sm"} textAlign={"right"}>
              by reza ernanda
            </Text>
          </Flex>

          <Flex flexDirection={"column"}>
            <Flex flexDirection={"column"} alignItems={"center"} zIndex={"1"}>
              <Flex justifyContent={"center"}>
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mt={"28px"} />
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mt={"6px"} />
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mx={"4px"} />
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mt={"6px"} />
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mt={"28px"} />
              </Flex>
              <Image
                src="/images/Homepage/profile-image-mad-pepper.webp"
                loading="lazy"
                w={"66px"}
                h={"66px"}
                borderRadius={"66px"}
                mt={"-20px"}
                border={"2px solid white"}
              />
            </Flex>
            <Flex flexDirection={"column"} gap={1} mt={"-35px"}>
              <Image
                src="/images/Homepage/bozzi-biscotti-bear-biking-logo-design.webp"
                loading="lazy"
              />
              <Image
                src="/images/Homepage/diy-gundog-logo-design.webp"
                loading="lazy"
              />
              <Image
                src="/images/Homepage/lone-oak-studio-fox-logo-design.webp"
                loading="lazy"
              />
            </Flex>
            <Text fontStyle={"italic"} fontSize={"sm"} textAlign={"right"}>
              by Mad pepper
            </Text>
          </Flex>

          <Flex flexDirection={"column"} pt={"45px"}>
            <Flex flexDirection={"column"} alignItems={"center"} zIndex={"1"}>
              <Flex justifyContent={"center"}>
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mt={"28px"} />
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mt={"6px"} />
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mx={"4px"} />
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mt={"6px"} />
                <Icon as={FaStar} color={"#FE5F50"} boxSize={5} mt={"28px"} />
              </Flex>
              <Image
                src="/images/Homepage/profile-image-radovan-ciobanenco.webp"
                loading="lazy"
                w={"66px"}
                h={"66px"}
                borderRadius={"66px"}
                mt={"-20px"}
                border={"2px solid white"}
              />
            </Flex>
            <Flex flexDirection={"column"} gap={1} mt={"-35px"}>
              <Image
                src="/images/Homepage/tilt-logo-design.webp"
                loading="lazy"
              />
              <Image
                src="/images/Homepage/fit-for-purpose-logo-design.webp"
                loading="lazy"
              />
              <Image
                src="/images/Homepage/nordnorsk-finans-logo-design.webp"
                loading="lazy"
              />
            </Flex>
            <Text fontStyle={"italic"} fontSize={"sm"} textAlign={"right"}>
              by Radovan Ciobanenco
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        w={"50%"}
        px={"5%"}
        flexDirection={"column"}
        gap={"28px"}
        justifyContent={"center"}
      >
        <Heading
          as={"h2"}
          color={"#FE5F50"}
          fontSize={"xxx-large"}
          fontWeight={"medium"}
        >
          Work with creative experts you can trust
        </Heading>
        <Box bgColor={"#FE5F50"} h={"5px"} w={"39px"} />
        <Text pl={{ base: 0, md: "28px" }} pr={{ base: 0, md: "40px" }}>
          Logos, websites, packaging design and more. Our trusted designer
          community has helped thousands of businesses launch, grow, expand and
          rebrand with custom, professional design.
        </Text>
        <Flex
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ml={{ base: 0, md: "28px" }}
          alignItems={"center"}
          borderBottom={btnHovered ? "2px solid #ccc" : "2px solid transparent"}
          w={"fit-content"}
          transition={"all 0.3s"}
        >
          <Link to={'/'}>
            <Flex>
              <Text fontSize={"xl"} fontWeight={"semibold"}>
                Browse designer portfolios
              </Text>
              <Icon as={BsArrowRightShort} boxSize={8} />
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomeSecFour
