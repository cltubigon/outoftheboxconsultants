import { Flex, Image, Text } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react"
import { SET_ACTIVE_SLIDE, SET_SLIDE_IMAGE_HEIGHT } from "../../store/actions/homepageActions"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const SliderOne = () => {
  const imageRef = useRef(null)
  const dispatch = useDispatch()

  const activeSlide = useSelector((state) => state.homepage.activeSlide)
  const activeColor = useSelector((state) => state.homepage.activeColor)

  const clickMe = {
    _before: {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "0 8px 13.9px",
      borderColor: `transparent transparent #FE5F50`,
      borderRadius: "2px",
      top: "-8px",
      left: "-8px",
      transform: " rotate(72deg)",
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
      borderColor: `transparent transparent ${activeColor}`,
      borderRadius: "2px",
      bottom: "-4px",
      right: "-10px",
      transform: " rotate(12deg)",
    },
  }
  const clickMeThree = {
    _before: {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "0 8px 13.9px",
      borderColor: `transparent transparent #F9F57B`,
      borderRadius: "2px",
      top: "-8px",
      left: "-8px",
      transform: " rotate(72deg)",
    },
  }
  const clickMeFour = {
    _before: {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "0 8px 13.9px",
      borderColor: `transparent transparent ${activeColor}`,
      borderRadius: "2px",
      top: "-8px",
      left: "-8px",
      transform: " rotate(72deg)",
    },
  }

  const [showIt, setShowIt] = useState(false)
  useEffect(()=> {
    
  }, [])

  useEffect(() => {

    const showTimeOut = setTimeout(()=> {
      setShowIt(true)
    }, 1500)

    dispatch(SET_ACTIVE_SLIDE(1))

    if (imageRef.current) {
      const timeOutID = setTimeout(() => {
        dispatch(SET_SLIDE_IMAGE_HEIGHT(imageRef.current.offsetHeight))
      }, 3000)

      return () => {
        clearTimeout(showTimeOut)
        clearTimeout(timeOutID)
      }
    }
  }, [])

  const imageSlides = () => {
    if (activeSlide === 1) return "/images/Homepage/vegan-jerky.jpg"
    if (activeSlide === 2) return "/images/Homepage/little-danube.jpg"
    if (activeSlide === 3) return "/images/Homepage/feel-good.jpg"
    if (activeSlide === 4) return "/images/Homepage/the-studio.jpg"
  }

  const slideAnimation = {
    initial: {
      opacity: 0,
    },
    fading: {
      opacity: 1,
      transition: {
        duration: 1.2,
      },
    },
  }
  return (
    <Flex p={"1px"} position={"relative"} flexDirection={"column"}>
      {activeSlide === 1 && (
        <Flex
          as={motion.div}
          variants={slideAnimation}
          initial={"initial"}
          animate={"fading"}
          position={"absolute"}
          zIndex={10}
        >
          <Image ref={imageRef} src={"images/Homepage/vegan-jerky.jpg"} loading="eager" />
          <Flex>
            <Flex
              as={motion.div}
              variants={slideAnimation}
              initial={"initial"}
              animate={"fading"}
              display={!showIt && 'none'}
            >
              <Text
                position={"absolute"}
                bottom={{ base: "0", md: "15px" }}
                right={"30px"}
                fontStyle={"italic"}
                fontSize={"sm"}
              >
                Created for Vegan Jerky Co
              </Text>
            </Flex>
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
          </Flex>
        </Flex>
      )}

      {activeSlide === 2 && (
        <Flex
          as={motion.div}
          variants={slideAnimation}
          initial={"initial"}
          animate={"fading"}
          position={"absolute"}
          zIndex={10}
        >
          <Image ref={imageRef} src={"images/Homepage/little-danube.jpg"} />
          <Flex>
            <Flex
              as={motion.div}
              variants={slideAnimation}
              initial={"initial"}
              animate={"fading"}
            >
              <Text
                position={"absolute"}
                bottom={{ base: "0", md: "15px" }}
                right={"30px"}
                fontStyle={"italic"}
                fontSize={"sm"}
              >
                Created for Little Danube
              </Text>
            </Flex>
            <Link to={"/"}>
              <Flex
                sx={clickMeTwo}
                p={"4px 12px 4px 4px"}
                bgColor={activeColor}
                gap={2}
                borderRadius={"50px"}
                alignItems={"center"}
                position={"absolute"}
                top={"50px"}
                right={{ base: "80px", lg: "145px" }}
                minW={"270px"}
              >
                <Image
                  src="/images/Homepage/profile-image-kamilla-oblakova.webp"
                  borderRadius={"50px"}
                  w={"32px"}
                  h={"32px"}
                />
                <Text color={"#fff"}>Branding by Kamilla Oblakova</Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      )}
      {activeSlide === 3 && (
        <Flex
          as={motion.div}
          variants={slideAnimation}
          initial={"initial"}
          animate={"fading"}
          position={"absolute"}
          zIndex={10}
        >
          <Image ref={imageRef} src={"images/Homepage/feel-good.jpg"} />
          <Flex>
            <Flex
              as={motion.div}
              variants={slideAnimation}
              initial={"initial"}
              animate={"fading"}
            >
              <Text
                position={"absolute"}
                bottom={{ base: "0", md: "15px" }}
                right={"30px"}
                fontStyle={"italic"}
                fontSize={"sm"}
              >
                Created for Feel Good Tea Co.
              </Text>
            </Flex>
            <Link to={"/"}>
              <Flex
                sx={clickMeThree}
                p={"4px 12px 4px 4px"}
                bgColor={"#F9F57B"}
                gap={2}
                borderRadius={"50px"}
                alignItems={"center"}
                position={"absolute"}
                bottom={"130px"}
                right={{ base: 0, lg: "-28px" }}
              >
                <Image
                  src="/images/Homepage/avatar-raveart.webp"
                  borderRadius={"50px"}
                  w={"32px"}
                  h={"32px"}
                />
                <Text>Brand Identity by Raveart</Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      )}
      {activeSlide === 4 && (
        <Flex
          as={motion.div}
          variants={slideAnimation}
          initial={"initial"}
          animate={"fading"}
          position={"absolute"}
          zIndex={10}
        >
          <Image ref={imageRef} src={"images/Homepage/the-studio.jpg"} />
          <Flex>
            <Flex
              as={motion.div}
              variants={slideAnimation}
              initial={"initial"}
              animate={"fading"}
            >
              <Text
                position={"absolute"}
                bottom={{ base: "0", md: "15px" }}
                right={"30px"}
                fontStyle={"italic"}
                fontSize={"sm"}
              >
                Created for The Studio Chicago
              </Text>
            </Flex>
            <Link to={"/"}>
              <Flex
                sx={clickMeFour}
                p={"4px 12px 4px 4px"}
                bgColor={activeColor}
                gap={2}
                borderRadius={"50px"}
                alignItems={"center"}
                position={"absolute"}
                bottom={"130px"}
                right="calc(50% - 134px)"
              >
                <Image
                  src="/images/Homepage/avatar-illusive-trust.webp"
                  borderRadius={"50px"}
                  w={"32px"}
                  h={"32px"}
                />
                <Text color={"#fff"}>Merchandise by illusive trust</Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      )}

      {/* This Section is very important */}
      <Flex opacity={0}>
        <Image ref={imageRef} src={"images/Homepage/the-studio.jpg"} />
        <Flex>
          <Text
            position={"absolute"}
            bottom={{ base: "25px", md: "15px" }}
            right={"30px"}
            fontStyle={"italic"}
            fontSize={"sm"}
          >
            Created for The Studio Chicago
          </Text>
          <Flex
            sx={clickMeFour}
            p={"4px 12px 4px 4px"}
            bgColor={activeColor}
            gap={2}
            borderRadius={"50px"}
            alignItems={"center"}
            position={"absolute"}
            bottom={"130px"}
            right="calc(50% - 134px)"
          >
            <Image
              src="/images/Homepage/avatar-illusive-trust.webp"
              borderRadius={"50px"}
              w={"32px"}
              h={"32px"}
            />
            <Text color={"#fff"}>Merchandise by illusive trust</Text>
          </Flex>
        </Flex>
      </Flex>
      {/* This Section is very important */}
    </Flex>
  )
}

export default SliderOne
