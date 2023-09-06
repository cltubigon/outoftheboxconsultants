import { Flex, Icon, Text } from "@chakra-ui/react"
import React from "react"
import { BsLightningFill, BsListUl, BsQuestionCircleFill } from "react-icons/bs"
import { FaLightbulb, FaPhoneAlt } from "react-icons/fa"
import { TbUserSearch } from "react-icons/tb"
import { PiBuildingsBold, PiHouseFill } from "react-icons/pi"

const NavMobile = () => {
  return (
    <Flex position={"absolute"} maxW={"260px"} width={"100%"}>
      <Flex justifyContent={"flex-start"} p={4} w={"100%"}>
        <Flex
          display={{ ph: "flex", lt: "none" }}
          flexDirection={"column"}
          w={"100%"}
        >
          <Flex
            flexDirection={"column"}
            pb={"32px"}
            borderBottom={"1px solid #DAD9D7"}
          >
            <Flex gap={3} py={3} alignItems={"center"}>
              <Icon as={PiHouseFill} boxSize={5} />
              <Text>Home</Text>
            </Flex>
            <Flex gap={3} py={3} alignItems={"center"}>
              <Icon as={BsListUl} boxSize={5} />
              <Text>Browse categories</Text>
            </Flex>
            <Flex gap={3} py={3} alignItems={"center"}>
              <Icon as={BsLightningFill} boxSize={5} />
              <Text>How it works</Text>
            </Flex>
            <Flex gap={3} py={3} alignItems={"center"}>
              <Icon as={TbUserSearch} boxSize={5} />
              <Text>Find a designer</Text>
            </Flex>
            <Flex gap={3} py={3} alignItems={"center"}>
              <Icon as={FaLightbulb} boxSize={5} />
              <Text>Inspiration</Text>
            </Flex>
            <Flex gap={3} py={3} alignItems={"center"}>
              <Icon as={PiBuildingsBold} boxSize={5} />
              <Text>Agencies</Text>
            </Flex>
          </Flex>

          <Flex
            flexDirection={"column"}
            pb={"32px"}
            borderBottom={"1px solid #DAD9D7"}
            mt={"14px"}
          >
            <Text py={3} fontWeight={"semibold"}>
              Design Services
            </Text>
            <Text py={3}>Design contests</Text>
            <Text py={3}>1-to-1 Projects</Text>
            <Text py={3}>Find a designer</Text>
            <Text py={3}>Discover inspiration</Text>
            <Text py={3}>Agencies</Text>
            <Text py={3}>99designs Studio</Text>
            <Text py={3}>99designs Select</Text>
          </Flex>

          <Flex
            flexDirection={"column"}
            pb={"32px"}
            borderBottom={"1px solid #DAD9D7"}
            mt={"14px"}
          >
            <Text py={3} fontWeight={"semibold"}>
              Get a design
            </Text>
            <Text py={3}>Logo design</Text>
            <Text py={3}>Business card</Text>
            <Text py={3}>Web page design</Text>
            <Text py={3}>Brand guide</Text>
            <Text py={3}>Browse all categories</Text>
          </Flex>

          <Flex
            flexDirection={"column"}
            pb={"32px"}
            borderBottom={"1px solid #DAD9D7"}
            mt={"14px"}
          >
            <Text py={3} fontWeight={"semibold"}>
              Support
            </Text>
            <Flex gap={3} py={3} alignItems={"center"}>
              <Icon as={FaPhoneAlt} boxSize={5} />
              <Text>1 800 513 1678</Text>
            </Flex>
            <Flex gap={3} py={3} alignItems={"center"}>
              <Icon as={BsQuestionCircleFill} boxSize={5} />
              <Text>Help Center</Text>
            </Flex>
          </Flex>

          <Flex
            flexDirection={"column"}
            pb={"32px"}
            borderBottom={"1px solid #DAD9D7"}
            mt={"14px"}
          >
            <Text py={3} fontWeight={"semibold"}>
              Resources
            </Text>
            <Text py={3}>Pricing</Text>
            <Text py={3}>Become a designer</Text>
            <Text py={3}>Blog</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default NavMobile
