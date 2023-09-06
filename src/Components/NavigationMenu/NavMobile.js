import { Flex, Icon, Image, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { BsLightningFill, BsListUl } from "react-icons/bs"
import { FaLightbulb, FaPhoneAlt } from "react-icons/fa"
import { TbUserSearch } from "react-icons/tb"
import { PiBuildingsBold, PiHouseFill } from "react-icons/pi"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"

const NavMobile = () => {
  const mobileMenuShow = useSelector(
    (state) => state.globalactions.mobileMenuShow
  )
  const [defaultState, setDefaultState] = useState(true)

  useEffect(() => {
    if (mobileMenuShow) {
      setDefaultState(false)
    }
  }, [mobileMenuShow])

  const animation = {
    initialRight: {
      width: "0",
    },
    slideRight: {
      width: "260px",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    initialLeft: {
      width: "260px",
    },
    slideLeft: {
      width: "0",
      transition: {
        duration: 0.3,
      },
    },
  }
  return (
    <Flex>
      {!defaultState && (
        <Flex
          as={motion.div}
          variants={animation}
          initial={mobileMenuShow ? "initialRight" : "initialLeft"}
          animate={mobileMenuShow ? "slideRight" : "slideLeft"}
          justifyContent={"flex-start"}
          py={4}
          zIndex={0}
          boxShadow={"-8px 0px 8px 0px rgba(0, 0, 0, 0.14) inset"}
        >
          <Flex
            display={{ ph: "flex", lt: "none" }}
            flexDirection={"column"}
            minW={"260px"}
          >
            <Flex flexDirection={"column"}>
              <Flex px={4} gap={3} py={3} alignItems={"center"}>
                <Icon as={PiHouseFill} boxSize={5} />
                <Text>Home</Text>
              </Flex>
              <Flex px={4} gap={3} py={3} alignItems={"center"}>
                <Icon as={BsListUl} boxSize={5} />
                <Text>Browse categories</Text>
              </Flex>
              <Flex px={4} gap={3} py={3} alignItems={"center"}>
                <Icon as={BsLightningFill} boxSize={5} />
                <Text>How it works</Text>
              </Flex>
              <Flex px={4} gap={3} py={3} alignItems={"center"}>
                <Icon as={TbUserSearch} boxSize={5} />
                <Text>Find a designer</Text>
              </Flex>
              <Flex px={4} gap={3} py={3} alignItems={"center"}>
                <Icon as={FaLightbulb} boxSize={5} />
                <Text>Inspiration</Text>
              </Flex>
              <Flex px={4} gap={3} py={3} alignItems={"center"}>
                <Icon as={PiBuildingsBold} boxSize={5} />
                <Text>Agencies</Text>
              </Flex>
            </Flex>

            <Flex></Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

export default NavMobile
