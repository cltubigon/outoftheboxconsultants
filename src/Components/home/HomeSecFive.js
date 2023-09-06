import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRightShort } from "react-icons/bs"
import { Link } from "react-router-dom"

const HomeSecFive = () => {
  console.log('HomeSecFive')
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
    <Flex bgColor={"#F3F2F0"} w={"100%"} py={"60px"} minW={'360px'}>
      <Flex
        flexDirection={"column"}
        gap={6}
        w={"100%"}
        mx={"auto"}
        maxW={"1300px"}
        px={{ ph: "15px", tl: "40px", lt: "50px", dt: '0px' }}
      >
        <Flex
          alignItems={"center"}
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Flex flexDirection={"column"} gap={2} pl={{ base: 0, md: "30px" }} w={{ ph: '100%', lt: '70%' }}>
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
            <Flex
              alignItems={{ base: "flex-start", md: "center" }}
              flexDirection={{ base: "column", md: "row" }}
              gap={2}
            >
              <Heading
                as={"h3"}
                fontWeight={"semibold"}
                fontSize={{ base: "20px", md: "x-large" }}
                color={"#313030"}
                letterSpacing={{ base: "tight", md: "normal" }}
              >
                Design with 99designs, print with
              </Heading>
              <Image
                src="/images/Homepage/vistaprint-logo-e8f9c7f535.webp"
                loading="lazy"
                maxH={"24px"}
              />
            </Flex>
            <Heading
              as={"h2"}
              fontWeight={"semibold"}
              fontSize={{ base: "xx-large", md: "xx-large" }}
              letterSpacing={{ base: "tight", md: "normal" }}
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
              The fastest, easiest way to get your custom design and share it
              with the world. When you work closely with a professional
              designer, it takes just one click to send completed files to
              VistaPrint.
            </Text>
          </Flex>
          <Flex
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            display={{ ph: 'none', lt: 'flex' }}
            ml={"28px"}
            alignSelf={'flex-end'}
            mb={'10px'}
            borderBottom={
              btnHovered ? "2px solid #ccc" : "2px solid transparent"
            }
            w={"fit-content"}
            transition={"all 0.3s"}
          >
            <Link to={"/"}>
              <Flex>
                <Text fontSize={{ ph: 'lg', dt: 'xl' }} fontWeight={"semibold"}>
                  View all design categories
                </Text>
                <Icon as={BsArrowRightShort} boxSize={8} />
              </Flex>
            </Link>
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
                  mb={"30px"}
                >
                  <Flex overflow={"hidden"}>
                    <Image
                      src={featuredItem.imageURL}
                      transition={"transform 0.5s"}
                      transform={index === isHovered && "scale(1.1)"}
                      loading="'lazy"
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

export default HomeSecFive
