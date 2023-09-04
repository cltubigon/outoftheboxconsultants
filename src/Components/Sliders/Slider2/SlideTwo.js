import { Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { CgQuote } from "react-icons/cg"
import { useDispatch, useSelector } from "react-redux"
import { SET_TOTAL_DESIGNS } from "../../../store/actions/homepageActions"

const SlideTwo = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.homepage)
  // console.log('state: ', state)
  const totalDesigns = useSelector((state) => state.homepage.totalDesigns)
  const slideTwoEvent = useSelector((state) => state.homepage.slideTwoEvent)

  console.log('totalDesigns: ', totalDesigns)

  useEffect(()=> {
    const intervalID = setInterval(()=> {
      const newTotal = totalDesigns + 1
      console.log('newTotal: ', newTotal)
      dispatch(SET_TOTAL_DESIGNS(newTotal))
    }, 2500)

    return () => {
      clearInterval(intervalID)
    }
  }, [totalDesigns])

  const animation = {
    initialOfSlideLeft: {
      x: "100%",
    },
    slideLeft: {
      x: "0",
      transition: {
        duration: 0.3,
      },
    },
    initialOfSlideRight: {
      x: "-100%",
    },
    slideRight: {
      x: "0",
      transition: {
        duration: 0.3,
      },
    },
  }
  return (
    <Flex
      as={motion.div}
      variants={animation}
      initial={
        slideTwoEvent === "next" ? "initialOfSlideLeft" : "initialOfSlideRight"
      }
      animate={slideTwoEvent === "next" ? "slideLeft" : "slideRight"}
      w={"100%"}
      gap={10}
      px={'30px'}
    >
      <Flex
        w={"100%"}
        flexDirection={"column"}
        // gap={3}
        justifyContent={"center"}
        alignItems={"center"}
        // pl={{ ph: "70px", lt: "50px" }}
        // pr={{ ph: "20px", lt: "10%", dt: "16%" }}
        position={"relative"}
        minH={{ ph: "408px", tl: "562px" }}
        // bgColor={'blue'}
      >
        <Text
          fontSize={{ ph: "lg", lt: "xl" }}
          fontWeight={"semibold"}
          textAlign={"center"}
        >
          Get this: A new design is created on 99designs every 2 seconds!
        </Text>
        <Heading
          as={"h2"}
          fontSize={{ ph: "40px", tl: "68px", lt: "80px", dt: "90px" }}
          letterSpacing={"tight"}
          color={"#ED6800"}
          fontWeight={"semibold"}
          textAlign={'center'}
        >
          {totalDesigns.toLocaleString()} designs
        </Heading>
      </Flex>
    </Flex>
  )
}

export default SlideTwo