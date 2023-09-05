import {
  Flex,
} from "@chakra-ui/react"
import React from "react"
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

function Home() {
  return (
    <Flex sx={pageContainerStyle.container}>
      <Flex flexDirection={'column'} overflowX={'hidden'} alignItems={'center'} w={'100%'}>
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