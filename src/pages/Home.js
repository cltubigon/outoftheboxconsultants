import {
  Flex,
} from "@chakra-ui/react"
import React from "react"
import { pageContainerStyle } from "../styles/pageContainerStyle"
import HomeSectionOne from "../Components/home/HomeSectionOne"
import HomeSectionTwo from "../Components/home/HomeSectionTwo"
import HomeSecThree from "../Components/home/HomeSecThree"
import HomeSecFour from "../Components/home/HomeSecFour"
import HomeSecFive from "../Components/home/HomeSecFive"

function Home() {
  return (
    <Flex sx={pageContainerStyle.container}>
      <Flex flexDirection={'column'} overflowX={'hidden'}>
        <HomeSectionOne />
        <HomeSectionTwo />
        <HomeSecThree />
        <HomeSecFour />
        <HomeSecFive />
      </Flex>
    </Flex>
  )
}

export default Home