import { Box, Flex, Icon, Text } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import SlideOne from "../Sliders/Slider2/SlideOne"
import SlideFour from "../Sliders/Slider2/SlideFour"
import SlideSix from "../Sliders/Slider2/SlideSix"
import SlideEight from "../Sliders/Slider2/SlideEight"
import SlideControl from "../Sliders/Slider2/SlideControl"
import { useDispatch, useSelector } from "react-redux"
import SlideTwo from "../Sliders/Slider2/SlideTwo"
import SlideThree from "../Sliders/Slider2/SlideThree"
import SlideFive from "../Sliders/Slider2/SlideFive"
import SlideSeven from "../Sliders/Slider2/SlideSeven"
import ArrowControl from "../Sliders/Slider2/ArrowControl"
import {
  SET_ACTIVE_SLIDE_TWO,
  SET_SLIDE_TWO_EVENT,
} from "../../store/actions/homepageActions"
import { BsArrowRightShort, BsStarFill } from "react-icons/bs"
import { MdStar, MdStarHalf } from "react-icons/md"
import { Link } from "react-router-dom"

const HomeSecSix = () => {
  console.log("HomeSecSix")
  const dispatch = useDispatch()
  const containerRef = useRef(null)
  const activeSlideTwo = useSelector((state) => state.homepage.activeSlideTwo)

  const [startX, setStartX] = useState(null)
  const [startY, setStartY] = useState(null)
  const [btnHovered, setBtnHovered] = useState(false)

  const handleMouseEnter = () => {
    setBtnHovered(() => !btnHovered)
  }
  const handleMouseLeave = () => {
    setBtnHovered(() => !btnHovered)
  }

  const handleTouchStart = (e) => {
    setStartX(e.changedTouches[0].clientX)
    setStartY(e.changedTouches[0].clientY)
  }
  const handleTouchEnd = (e) => {
    if (startX !== null) {
      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const deltaX = endX - startX
      const deltaY = endY - startY
      if (deltaX > 10 && deltaY > -100 && deltaY < 60) {
        handlePrevious()
      } else if (deltaX < -20 && deltaY > -100 && deltaY < 60) {
        handleNext()
      }
    }
  }

  const handleDragStart = (e) => {
    setStartX(e.clientX)
    setStartY(e.clientY)
    e.dataTransfer.setDragImage(document.createElement("div"), 0, 0)
  }

  const handleDragEnd = (e) => {
    if (startX !== null) {
      const endX = e.clientX
      const endY = e.clientY
      const deltaX = endX - startX
      const deltaY = endY - startY

      if (deltaX > 10 && deltaY > -100 && deltaY < 80) {
        handlePrevious()
      } else if (deltaX < -20 && deltaY > -100 && deltaY < 80) {
        handleNext()
      }

      setStartX(null)
    }
  }

  const handlePrevious = () => {
    dispatch(SET_SLIDE_TWO_EVENT("previous"))
    const newActiveSlide = activeSlideTwo - 1
    newActiveSlide > 0 && dispatch(SET_ACTIVE_SLIDE_TWO(newActiveSlide))
    newActiveSlide === 0 && dispatch(SET_ACTIVE_SLIDE_TWO(8))
  }
  const handleNext = () => {
    dispatch(SET_SLIDE_TWO_EVENT("next"))
    const newActiveSlide = activeSlideTwo + 1
    newActiveSlide <= 8 && dispatch(SET_ACTIVE_SLIDE_TWO(newActiveSlide))
    newActiveSlide === 9 && dispatch(SET_ACTIVE_SLIDE_TWO(1))
  }

  return (
    <Flex w={"100%"} flexDirection={"column"} pb={"60px"} alignItems={"center"}>
      <Flex
        w={"100%"}
        flexDirection={"column"}
        py={"60px"}
        alignItems={"center"}
        position={"relative"}
        draggable="true"
        ref={containerRef}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ArrowControl />
        <Flex
          maxW={"1300px"}
          px={{ ph: "10px", tl: "40px", lt: "50px", dt: "0px" }}
          flexDirection={"column"}
          alignItems={"center"}
          gap={4}
          cursor={"grab"}
        >
          {activeSlideTwo === 1 && <SlideOne />}
          {activeSlideTwo === 2 && <SlideTwo />}
          {activeSlideTwo === 3 && <SlideThree />}
          {activeSlideTwo === 4 && <SlideFour />}
          {activeSlideTwo === 5 && <SlideFive />}
          {activeSlideTwo === 6 && <SlideSix />}
          {activeSlideTwo === 7 && <SlideSeven />}
          {activeSlideTwo === 8 && <SlideEight />}

          <Flex zIndex={"10"}>
            <SlideControl />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        mt={"-25px"}
        alignItems={"center"}
        borderBottom={btnHovered ? "2px solid #ccc" : "2px solid transparent"}
        w={"fit-content"}
        transition={"all 0.3s"}
      >
        <Link to={"/"}>
          <Flex>
            <Text fontSize={"xl"} fontWeight={"semibold"}>
              Designers, join now
            </Text>
            <Icon as={BsArrowRightShort} boxSize={8} />
          </Flex>
        </Link>
      </Flex>
      <Flex gap={3} mt={{ ph: 6, tl: 14 }}>
        <Icon as={MdStar} boxSize={9} />
        <Icon as={MdStar} boxSize={9} />
        <Icon as={MdStar} boxSize={9} />
        <Icon as={MdStar} boxSize={9} />
        <Icon as={MdStarHalf} boxSize={9} />
      </Flex>
      <Flex mt={5}>
        <Text textAlign={"center"}>
          Folks think we're pretty rad. We're rated 4.8/5 from 37,551 customer
          reviews.
        </Text>
      </Flex>
    </Flex>
  )
}

export default HomeSecSix
