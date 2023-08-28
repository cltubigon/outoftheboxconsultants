import {
  Flex,
} from "@chakra-ui/react"
import React from "react"
import { pageContainerStyle } from "../styles/pageContainerStyle"
import SectionOne from "../Components/home/SectionOne"

function Home() {
  return (
    <Flex sx={pageContainerStyle.container}>
      <SectionOne />
    </Flex>
  )
}

export default Home