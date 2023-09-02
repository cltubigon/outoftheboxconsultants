import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRightShort } from "react-icons/bs"

const HomeSecFive = () => {
  const featuredList = [
    {
      imageURL: "/images/Homepage/business-card-design-b10a8518d4.webp",
      title: "Business card",
    },
    {
      imageURL: "/images/Homepage/postcard-flyer-design-5baadd1784.webp",
      title: "Postcard, flyer or print",
    },
    {
      imageURL: "/images/Homepage/poster-design-2a5e49904a.webp",
      title: "Poster",
    },
    {
      imageURL: "/images/Homepage/brochure-design-aad5ee87bc.webp",
      title: "Brochure",
    },
    {
      imageURL: "/images/Homepage/sticker-design-40cfe67895.webp",
      title: "Sticker",
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
    <Flex flexDirection={"column"} gap={6} w={"100%"} py={"90px"} bgColor={'#F3F2F0'}>
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"100%"}>
        <Flex flexDirection={"column"} gap={2}>
          <Text
            borderRadius={"20px"}
            bgColor={"#E88954"}
            py={"5px"}
            px={"12px"}
            w={"fit-content"}
            fontSize={"sm"}
            color={"#fff"}
            mb={"8px"}
          >
            New
          </Text>
          <Flex alignItems={"center"} gap={2}>
            <Heading
              as={"h3"}
              fontWeight={"semibold"}
              fontSize={{ base: "24px", md: "x-large" }}
              color={"#313030"}
            >
              Design with 99designs, print with
            </Heading>
            <Image
              src="/images/homepage/vistaprint-logo-e8f9c7f535.webp"
              loading="lazy"
              maxH={"24px"}
            />
          </Flex>
          <Heading
            as={"h2"}
            fontWeight={"semibold"}
            fontSize={{ base: "24px", md: "xx-large" }}
            color={"#313030"}
          >
            Printing your custom design is easier than ever
          </Heading>
          <Box
            bgColor={"#313030"}
            h={"4px"}
            w={"39px"}
            mt={"17px"}
            mb={"25px"}
          />
          <Text pr={{ base: 0, md: "120px" }}>
            The fastest, easiest way to get your custom design and share it with
            the world. When you work closely with a professional designer, it
            takes just one click to send completed files to VistaPrint.
          </Text>
        </Flex>
        <Flex
          alignItems={'flex-end'}
          justifyContent={"flex-end"}
          display={{ base: "none", md: "flex" }}
          minW={"345px"}
        >
          <Text fontSize={"xl"} fontWeight={"semibold"}>
            View all design categories
          </Text>
          <Icon as={BsArrowRightShort} boxSize={8} />
        </Flex>
      </Flex>

      <Flex
        mt={"20px"}
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
                mb={'20px'}
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

export default HomeSecFive
