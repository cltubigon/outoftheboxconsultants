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
      </Flex>
    </Flex>
  )
}

export default Home