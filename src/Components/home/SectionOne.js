import {
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { pageContainerStyle } from "../../styles/pageContainerStyle"
import { Link } from "react-router-dom"
import { BsSearch, BsCircleFill } from "react-icons/bs"
import { globalStyle } from "../../styles/globalStyle"
import SlideOne from "./slideOne/SlideOne"

function SectionOne() {
  
  return (
    <Flex sx={pageContainerStyle.container}>
      <Flex flexDirection={"row"} w={"100%"}>
        <Flex
          w={"50%"}
          position={"relative"}
          flexDirection={"column"}
          minH={"550px"}
        >
          <SlideOne />
          <Flex gap={4} position={'absolute'} left={'calc(50% - 45px)'} bottom={0}>
            <Icon as={BsCircleFill} boxSize={3} color={'gray.400'} />
            <Icon as={BsCircleFill} boxSize={3} color={'gray.400'} />
            <Icon as={BsCircleFill} boxSize={3} color={'gray.400'} />
            <Icon as={BsCircleFill} boxSize={3} color={'gray.400'} />
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          gap={6}
          w={"50%"}
          pl={"70px"}
        >
          <Heading
            as={"h1"}
            my={"0"}
            color={"#834692"}
            fontSize={"78px"}
            fontWeight={"600"}
            pr={"20px"}
            lineHeight={"1.05em"}
          >
            Grow with great design
          </Heading>
          <Text pl={"30px"} pr={"50px"}>
            No matter what your business needs, we can connect you with a
            creative expert to make your business look and feel professional.
            Because good design makes great business.
          </Text>
          <InputGroup gap={4} alignItems={"center"} pr={"20px"}>
            <InputLeftElement pointerEvents="none">
              <Icon as={BsSearch} boxSize={5} color={"gray.500"} my={"auto"} />
            </InputLeftElement>
            <Input
              border={"1px"}
              borderStyle={"solid"}
              borderColor={"gray.400"}
              type="text"
              placeholder="What do you need designed?"
              py={"26px"}
            />
            <Button
              bgColor={"blackAlpha.900"}
              color={"white"}
              _hover={{
                bgColor: "blackAlpha.800",
                color: "white",
              }}
              sx={globalStyle.buttons}
              fontSize={"xl"}
            >
              Get a design
            </Button>
          </InputGroup>
          <Flex gap={5} alignItems={"center"}>
            <Text>Popular:</Text>
            <Link to={"/"}>
              <Text bgColor={"#DAD9D7"} borderRadius={"md"} p={"3px 15px"}>
                Logo design
              </Text>
            </Link>
            <Link to={"/"}>
              <Text bgColor={"#DAD9D7"} borderRadius={"md"} p={"3px 15px"}>
                Website
              </Text>
            </Link>
            <Link to={"/"}>
              <Text bgColor={"#DAD9D7"} borderRadius={"md"} p={"3px 15px"}>
                Branding
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SectionOne
