import {
    Flex,
    Image,
    Text,
  } from "@chakra-ui/react"
  import React from "react"
  import { Link } from "react-router-dom"

const SlideOne = () => {
    const clickMe = {
        _before: {
          content: "''",
          position: "absolute",
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 8px 13.9px",
          borderColor: "transparent transparent var(--color,#fe5f50)",
          borderRadius: "2px",
          top: "-8px",
          left: "-8px",
          transform: " rotate(72deg)",
        },
      }
  return (
    <>
    <Image
            position={"absolute"}
            src="/images/Homepage/vegan-jerky-star.webp"
            left={"55px"}
            bottom={"94px"}
            w={"22px"}
            h={"25px"}
          />
          <Image
            position={"absolute"}
            src="/images/Homepage/vegan-jerky-background.webp"
            w={"574px"}
            h={"195px"}
            right={0}
          />
          <Image
            position={"absolute"}
            src="/images/Homepage/vegan-jerky.webp"
            w={"350px"}
            h={"350px"}
            right={"30px"}
            top={"110px"}
          />
          <Image
            position={"absolute"}
            src="/images/Homepage/vegan-jerky-packaging.webp"
            w={"334px"}
            h={"410px"}
            top={"115px"}
            left={"50px"}
          />
          <Image
            position={"absolute"}
            src="/images/Homepage/vegan-jerky-front.webp"
            w={"354px"}
            h={"113px"}
            right={"50px"}
            top={"125px"}
          />
          <Text
            position={"absolute"}
            bottom={"50px"}
            right={"30px"}
            fontStyle={"italic"}
            fontSize={"sm"}
          >
            Created for Vegan Jerky Co
          </Text>
          <Link to={"/"}>
            <Flex
              sx={clickMe}
              p={"4px 12px 4px 4px"}
              bgColor={"#FE5F50"}
              gap={2}
              borderRadius={"50px"}
              maxW={"205px"}
              alignItems={"center"}
              position={"absolute"}
              bottom={"130px"}
              right="95px"
            >
              <Image
                src="/images/Homepage/avatar-mjvass.webp"
                borderRadius={"50px"}
                w={"32px"}
                h={"32px"}
              />
              <Text color={"#fff"}>Packaging by Mj.vass</Text>
            </Flex>
          </Link>
    </>
  )
}

export default SlideOne
