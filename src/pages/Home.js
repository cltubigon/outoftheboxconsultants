import { Flex } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { pageContainerStyle } from "../styles/pageContainerStyle"
import HomeSecOne from "../Components/home/HomeSecOne"
import HomeSecThree from "../Components/home/HomeSecThree"
import HomeSecFour from "../Components/home/HomeSecFour"
import HomeSecFive from "../Components/home/HomeSecFive"
import HomeSecTwo from "../Components/home/HomeSecTwo"
import HomeSecSix from "../Components/home/HomeSecSix"
import HomeSecSeven from "../Components/home/HomeSecSeven"
import HomeSecEight from "../Components/home/HomeSecEight"
import HomeSecNine from "../Components/home/HomeSecNine"
import NavMobile from "../Components/NavigationMenu/NavMobile"
import MainNav from "../Components/NavigationMenu/MainNav"
import { useSelector } from "react-redux"

function Home() {
  const mobileMenuShow = useSelector(
    (state) => state.globalactions.mobileMenuShow
  )
  return (
    <Flex
      sx={pageContainerStyle.container}
      flexDirection={"row"}
      wrap={"nowrap"}
    >
      <NavMobile />
      <Flex
        flexDirection={"column"}
        overflowX={"hidden"}
        alignItems={"flex-start"}
        w={"100%"}
        // minW={mobileMenuShow && "320px"}
        
        zIndex={99}
        // pl={mobileMenuShow && 6}
      >
        <MainNav />
        <HomeSecOne />
        <HomeSecTwo />
        <HomeSecThree />
        <HomeSecFour />
        <HomeSecFive />
        <HomeSecSix />
        <HomeSecSeven />
        <HomeSecEight />
        <HomeSecNine />
      </Flex>
    </Flex>
  )
}

export default Home
