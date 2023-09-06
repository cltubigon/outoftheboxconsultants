import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import ScrollToTop from "./utils/ScrollToTop"
import { Flex } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import Footer from "./Components/Footer"
import MainNav from "./Components/NavigationMenu/MainNav"
import NavMobile from "./Components/NavigationMenu/NavMobile"
import Homepage from "./pages/Homepage"
import { mobileMenuAnimation } from "./utils/MobileMenuAnimation"

function App() {
  const mobileMenuShow = useSelector(
    (state) => state.globalactions.mobileMenuShow
  )
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Flex w={"100%"} boxSizing={"border-box"} flexDirection={"row"} overflowX={"hidden"}>
        <NavMobile />
        <Flex
          as={motion.div}
          variants={mobileMenuAnimation}
          initial={"initialRight"}
          animate={mobileMenuShow ? "slideRight" : "slideLeft"}
          flexDirection={"column"}
          overflowX={"hidden"}
          alignItems={"center"}
          w={"100%"}
          zIndex={99}
          bgColor={'white'}
        >
          <MainNav />
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
          </Routes>
          <Footer />
        </Flex>
      </Flex>
    </BrowserRouter>
  )
}

export default App
