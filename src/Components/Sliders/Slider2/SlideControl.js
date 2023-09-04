import { Flex, Icon } from "@chakra-ui/react"
import React from "react"
import { BsCircleFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { SET_ACTIVE_SLIDE_TWO } from "../../../store/actions/homepageActions"

const SlideControl = () => {
  const dispatch = useDispatch()

  const activeSlideTwo = useSelector((state) => state.homepage.activeSlideTwo)

  const handleSlideClick = (slideNumber) => {
    dispatch(SET_ACTIVE_SLIDE_TWO(slideNumber))
  }
  return (
    <Flex gap={3} cursor={'default'}>
      <Icon
        as={BsCircleFill}
        cursor={"pointer"}
        boxSize={3}
        color={activeSlideTwo === 1 ? "gray.600" : "gray.400"}
        onClick={() => handleSlideClick(1)}
      />
      <Icon
        as={BsCircleFill}
        cursor={"pointer"}
        boxSize={3}
        color={activeSlideTwo === 2 ? "gray.600" : "gray.400"}
        onClick={() => handleSlideClick(2)}
      />
      <Icon
        as={BsCircleFill}
        cursor={"pointer"}
        boxSize={3}
        color={activeSlideTwo === 3 ? "gray.600" : "gray.400"}
        onClick={() => handleSlideClick(3)}
      />
      <Icon
        as={BsCircleFill}
        cursor={"pointer"}
        boxSize={3}
        color={activeSlideTwo === 4 ? "gray.600" : "gray.400"}
        onClick={() => handleSlideClick(4)}
      />
      <Icon
        as={BsCircleFill}
        cursor={"pointer"}
        boxSize={3}
        color={activeSlideTwo === 5 ? "gray.600" : "gray.400"}
        onClick={() => handleSlideClick(5)}
      />
      <Icon
        as={BsCircleFill}
        cursor={"pointer"}
        boxSize={3}
        color={activeSlideTwo === 6 ? "gray.600" : "gray.400"}
        onClick={() => handleSlideClick(6)}
      />
      <Icon
        as={BsCircleFill}
        cursor={"pointer"}
        boxSize={3}
        color={activeSlideTwo === 7 ? "gray.600" : "gray.400"}
        onClick={() => handleSlideClick(7)}
      />
      <Icon
        as={BsCircleFill}
        cursor={"pointer"}
        boxSize={3}
        color={activeSlideTwo === 8 ? "gray.600" : "gray.400"}
        onClick={() => handleSlideClick(8)}
      />
    </Flex>
  )
}

export default SlideControl
