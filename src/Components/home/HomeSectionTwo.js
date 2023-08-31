import { Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRightShort } from "react-icons/bs"

const SectionTwo = () => {
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
  const handleHover = (index) => {
    setIsHovered(index)
  }
  const handleHoverLeave = () => {
    setIsHovered(null)
  }
  return (
    <Flex flexDirection={"column"} gap={6} w={"100%"}>
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
        <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
          <Text fontSize={"xl"} fontWeight={"semibold"}>
            View all design categories
          </Text>
          <Icon as={BsArrowRightShort} boxSize={8} />
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
                boxShadow={index === isHovered && "2xl"}
                transition={"all 0.5s"}
                minW={"232px"}
              >
                <Flex overflow={"hidden"}>
                  <Image
                    src={featuredItem.imageURL}
                    transition={"transform 0.5s"}
                    transform={index === isHovered && "scale(1.1)"}
                  />
                </Flex>
                <Flex justifyContent={"space-between"} p={"20px"}>
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
    </Flex>
  )
}

export default SectionTwo
