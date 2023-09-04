import { Flex, Icon } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { SET_ACTIVE_SLIDE_TWO, SET_SLIDE_TWO_EVENT } from "../../../store/actions/homepageActions"

const ArrowControl = () => {
  const dispatch = useDispatch()
  const activeSlideTwo = useSelector((state) => state.homepage.activeSlideTwo)
  const [thisColor, setThisColor] = useState("#A5823D")

  useEffect(() => {
    activeSlideTwo === 1 && setThisColor("#A5823D")
    activeSlideTwo === 2 && setThisColor("#ED6800")
    activeSlideTwo === 3 && setThisColor("#1C1B1A")
    activeSlideTwo === 4 && setThisColor("#1C1B1A")
    activeSlideTwo === 5 && setThisColor("#DB7700")
    activeSlideTwo === 6 && setThisColor("#DB7700")
    activeSlideTwo === 7 && setThisColor("#CA0000")
    activeSlideTwo === 8 && setThisColor("#CA0000")
  }, [activeSlideTwo])

  const handlePreviousSlide = () => {
    dispatch(SET_SLIDE_TWO_EVENT('previous'))
    const newActiveSlide = activeSlideTwo - 1
    newActiveSlide > 0 && dispatch(SET_ACTIVE_SLIDE_TWO(newActiveSlide))
    newActiveSlide === 0 && dispatch(SET_ACTIVE_SLIDE_TWO(8))
}
const handleNexSlide = () => {
      dispatch(SET_SLIDE_TWO_EVENT('next'))
    const newActiveSlide = activeSlideTwo + 1
    newActiveSlide <= 8 && dispatch(SET_ACTIVE_SLIDE_TWO(newActiveSlide))
    newActiveSlide === 9 && dispatch(SET_ACTIVE_SLIDE_TWO(1))
  }
  return (
    <Flex
      w={"100%"}
      position={"absolute"}
      justifyContent={"space-between"}
      top={"calc(50% - 60px)"}
      display={{ ph: 'none', lt: 'flex' }}
    >
      <Flex
        cursor={"pointer"}
        onClick={handlePreviousSlide}
        bgColor={thisColor}
        w={"120px"}
        h={"120px"}
        zIndex={"11"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Icon as={BsArrowLeftShort} boxSize={16} color={"#fff"} />
      </Flex>
      <Flex
        cursor={"pointer"}
        onClick={handleNexSlide}
        bgColor={thisColor}
        w={"120px"}
        h={"120px"}
        zIndex={"11"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Icon as={BsArrowRightShort} boxSize={16} color={"#fff"} />
      </Flex>
    </Flex>
  )
}

export default ArrowControl
