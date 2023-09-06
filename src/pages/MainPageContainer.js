import { Flex } from "@chakra-ui/react"
import NavMobile from "../Components/NavigationMenu/NavMobile"
import MainNav from "../Components/NavigationMenu/MainNav"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import Footer from "../Components/Footer"
import Homepage from "./Homepage"

function MainPageContainer() {
  const mobileMenuShow = useSelector(
    (state) => state.globalactions.mobileMenuShow
  )

  const animation = {
    initialRight: {
      x: "0px",
      boxShadow: "-5px 0px 8px 0px rgba(0, 0, 0, 0)",
    },
    slideRight: {
      x: "260px",
      boxShadow: "-5px 0px 8px 0px rgba(0, 0, 0, 0.20)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    slideLeft: {
      x: "0px",
      boxShadow: "-5px 0px 8px 0px rgba(0, 0, 0, 0)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }
  return (
    <Flex w={"100%"} boxSizing={"border-box"} flexDirection={"row"}>
      <NavMobile />
      <Flex
        as={motion.div}
        variants={animation}
        initial={"initialRight"}
        animate={mobileMenuShow ? "slideRight" : "slideLeft"}
        flexDirection={"column"}
        overflowX={"hidden"}
        alignItems={"center"}
        w={"100%"}
        zIndex={99}
      >
        <MainNav />
        <Homepage />
        <Footer />
      </Flex>
    </Flex>
  )
}

export default MainPageContainer
