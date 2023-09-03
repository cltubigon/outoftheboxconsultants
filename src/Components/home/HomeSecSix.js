import { Flex, Heading, Icon } from "@chakra-ui/react"
import React from "react"
import SlideOne from "../Sliders/Slider2/SlideOne"
import SlideFour from "../Sliders/Slider2/SlideFour"
import SlideSix from "../Sliders/Slider2/SlideSix"
import SlideEight from "../Sliders/Slider2/SlideEight"
import SlideControl from "../Sliders/Slider2/SlideControl"
import { useSelector } from "react-redux"

const HomeSecSix = () => {
    const activeSlideTwo = useSelector(state => state.homepage.activeSlideTwo)
  return (
    <Flex w={"100%"} flexDirection={"column"} py={"60px"} alignItems={"center"}>
      <Flex
        maxW={"1300px"}
        px={{ ph: "10px", tl: "40px", lt: "50px", dt: "0px" }}
        flexDirection={'column'}
        alignItems={'center'}
        gap={4}
      >
        {activeSlideTwo === 1 && <SlideOne />}
        {activeSlideTwo === 4 && <SlideFour />}
        {activeSlideTwo === 6 && <SlideSix />}
        {activeSlideTwo === 8 && <SlideEight />}

        <SlideControl />
        
      </Flex>
    </Flex>
  )
}

export default HomeSecSix
