import { Flex, Icon } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { BsCircleFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { SET_ACTIVE_SLIDE } from "../../store/actions/homepageActions"
import SliderOne from "../home/SliderOne"

function FadeSlider() {
  const dispatch = useDispatch()
  const activeSlide = useSelector((state) => state.homepage.activeSlide)

  const handleSlideClick = (slideNumber) => {
    dispatch(SET_ACTIVE_SLIDE(slideNumber))
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (activeSlide === 4) {
        dispatch(SET_ACTIVE_SLIDE(1))
      } else if (activeSlide < 4) {
        dispatch(SET_ACTIVE_SLIDE(activeSlide + 1))
      }
    }, 6000)

    return () => {
      clearInterval(intervalId)
    }
  }, [activeSlide])

  return (
    <Flex flexDirection={"column"} position={"relative"} w={'100%'}>
      <Flex position={"relative"} flexDirection={"column"} alignItems={'flex-end'}>
        <SliderOne />
      </Flex>
      {/* <Flex w={}> */}
        <Flex
          gap={4}
          position={"absolute"}
          bottom={"-38px"}
          minW={"100%"}
          w={"100%"}
          justifyContent={"center"}
          mx={'auto'}
        >
          <Icon
            as={BsCircleFill}
            boxSize={3}
            color={activeSlide === 1 ? "gray.600" : "gray.400"}
            onClick={() => handleSlideClick(1)}
          />
          <Icon
            as={BsCircleFill}
            boxSize={3}
            color={activeSlide === 2 ? "gray.600" : "gray.400"}
            onClick={() => handleSlideClick(2)}
          />
          <Icon
            as={BsCircleFill}
            boxSize={3}
            color={activeSlide === 3 ? "gray.600" : "gray.400"}
            onClick={() => handleSlideClick(3)}
          />
          <Icon
            as={BsCircleFill}
            boxSize={3}
            color={activeSlide === 4 ? "gray.600" : "gray.400"}
            onClick={() => handleSlideClick(4)}
          />
        </Flex>
      {/* </Flex> */}
    </Flex>
  )
}

export default FadeSlider
