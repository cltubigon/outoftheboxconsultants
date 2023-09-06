import { Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRightShort } from "react-icons/bs"
import { Link } from "react-router-dom"

const HomeSecTwo = () => {
  console.log("HomeSecTwo")
  const featuredList = [
    {
      imageURL: "/images/Homepage/logo-identity.webp",
      title: "Logo & Branding design",
    },
    {
      imageURL: "/images/Homepage/web-app-design.webp",
      title: "Website & app design",
    },
    {
      imageURL: "/images/Homepage/business-advertising.webp",
      title: "Business & advertising",
    },
    {
      imageURL: "/images/Homepage/art-illustration.webp",
      title: "Art & illustration",
    },
    {
      imageURL: "/images/Homepage/packaging-label.webp",
      title: "Packaging & label",
    },
  ]

  const [isHovered, setIsHovered] = useState(null)
  const [btnHovered, setBtnHovered] = useState(false)

  const handleHover = (index) => {
    setIsHovered(index)
  }
  const handleHoverLeave = () => {
    setIsHovered(null)
  }

  const handleMouseEnter = () => {
    setBtnHovered(() => !btnHovered)
  }
  const handleMouseLeave = () => {
    setBtnHovered(() => !btnHovered)
  }
  return (
    <Flex
      w={"100%"}
      bgColor={"#F3F2F0"}
      justifyContent={"center"}
      pt={{ base: "28px", md: "60px" }}
      pb={{ base: "75px", md: "50px" }}
      minW={'360px'}
    >
      <Flex
        flexDirection={"column"}
        gap={6}
        maxW={"1300px"}
        w={"100%"}
        px={{ ph: "15px", tl: "40px", lt: "50px", dt: "0px" }}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"100%"}>
          <Flex>
            <Heading
              as={"h2"}
              fontWeight={"semibold"}
              fontSize={{ base: "24px", md: "xx-large" }}
            >
              Design for what you need
            </Heading>
          </Flex>
          <Flex
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            display={{ ph: 'none', lt: 'flex' }}
            ml={"28px"}
            alignItems={"center"}
            borderBottom={
              btnHovered ? "2px solid #ccc" : "2px solid transparent"
            }
            w={"fit-content"}
            transition={"all 0.3s"}
          >
            <Link to={"/"}>
              <Flex>
                <Text fontSize={"xl"} fontWeight={"semibold"}>
                  View all design categories
                </Text>
                <Icon as={BsArrowRightShort} boxSize={8} />
              </Flex>
            </Link>
          </Flex>
        </Flex>

        <Flex
          overflowX={"scroll"}
          scrollSnapType="x mandatory"
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex gap={5}>
            {featuredList.map((featuredItem, index) => {
              return (
                <Flex
                  key={index}
                  flexDirection={"column"}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHoverLeave()}
                  borderRadius={"md"}
                  overflow={"hidden"}
                  boxShadow={index === isHovered && "xl"}
                  transition={"all 0.5s"}
                  minW={"232px"}
                  mb={"30px"}
                >
                  <Flex overflow={"hidden"}>
                    <Image
                      src={featuredItem.imageURL}
                      transition={"transform 0.5s"}
                      transform={index === isHovered && "scale(1.1)"}
                    />
                  </Flex>
                  <Flex
                    justifyContent={"space-between"}
                    p={"20px"}
                    bgColor={"white"}
                  >
                    <Text>{featuredItem.title}</Text>
                    {index === isHovered && (
                      <Flex transition={"all 5.5s"}>
                        <Icon as={BsArrowRightShort} boxSize={6} />
                      </Flex>
                    )}
                  </Flex>
                </Flex>
              )
            })}
          </Flex>
        </Flex>
        <Flex
          alignItems={"flex-end"}
          mt={"-10px"}
          justifyContent={"center"}
          display={{ base: "flex", lg: "none" }}
          minW={"345px"}
        >
          <Text fontSize={"xl"} fontWeight={"semibold"}>
            View all design categories
          </Text>
          <Icon as={BsArrowRightShort} boxSize={8} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomeSecTwo
