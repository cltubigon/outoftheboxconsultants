import { Flex } from "@chakra-ui/react"
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

const HomeSecSix = () => {
  console.log("HomeSecSix")
  const dispatch = useDispatch()
  const containerRef = useRef(null);
  const activeSlideTwo = useSelector((state) => state.homepage.activeSlideTwo)

  const [startX, setStartX] = useState(null)

  const handleTouchStart = (e) => {
    setStartX(e.changedTouches[0].clientX)
    // e.dataTransfer.setDragImage(document.createElement("div"), 0, 0)
    setStartX(e.touches[0].clientX - containerRef.current.getBoundingClientRect().left);
  }
  const handleTouchEnd = (e) => {
    console.log("e: ", e.changedTouches[0].clientX)
    if (startX !== null) {
      const endX = e.changedTouches[0].clientX
      const deltaX = endX - startX
      if (deltaX > 0) {
        handlePrevious()
      } else if (deltaX < 0) {
        handleNext()
      }
    }
  }

  const handleDragStart = (e) => {
    setStartX(e.clientX)
    e.dataTransfer.setDragImage(document.createElement("div"), 0, 0)
  }

  const handleDragEnd = (e) => {
    if (startX !== null) {
      const endX = e.clientX
      const deltaX = endX - startX

      if (deltaX > 0) {
        handlePrevious()
      } else if (deltaX < 0) {
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
  )
}

export default HomeSecSix
