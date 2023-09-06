import { Flex, Icon, Image, Text } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { BsLightningFill, BsListUl } from "react-icons/bs"
import { FaLightbulb, FaPhoneAlt } from "react-icons/fa"
import { TbUserSearch } from "react-icons/tb"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { SET_SHOW_MOBILE_MENU } from "../../store/actions/globalActions"

const MainNav = () => {
  const dispatch = useDispatch()
  const mobileMenuShow = useSelector(
    (state) => state.globalactions.mobileMenuShow
  )

  useEffect(() => {
    dispatch(SET_SHOW_MOBILE_MENU(false))
  }, [])

  const handleMenuClick = () => {
    dispatch(SET_SHOW_MOBILE_MENU(!mobileMenuShow))
  }

  return (
    <Flex w={"100%"} py={"20px"} minH={'80px'}>
      {/*------------------ Mobile Only ------------------*/}
      <Flex
        w={"100%"}
        display={{ ph: "flex", lt: "None" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={{ ph: "15px", tl: "40px", lt: "50px", dt: "0px" }}
        bgColor={"#fff"}
        minW={"320px"}
      >
        <Icon
          as={GiHamburgerMenu}
          boxSize={6}
          onClick={handleMenuClick}
          cursor={"pointer"}
        />
        <Image
          src="/images/Homepage/mainLogo.svg"
          maxW={"120px"}
          maxH={"40px"}
          loading="eager"
        />
        <Link to={"/"}>
          <Text fontWeight={"semibold"}>Login</Text>
        </Link>
      </Flex>

      <Flex
        display={{ ph: "none", lt: "flex" }}
        w={"100%"}
        justifyContent={"center"}
      >
        {/*------------------ Desktop and Laptop Only ------------------*/}
        <Flex
          display={{ ph: "none", lt: "flex" }}
          w={"100%"}
          maxW={"1300px"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={{ ph: "15px", tl: "40px", lt: "50px", dt: "0px" }}
        >
          <Flex
            w={"75%"}
            minW={"75%"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={{ ph: "unset", lt: "40px", dt: "55px" }}
          >
            <Flex minW={'120px'}>
              <Image
                src="/images/Homepage/mainLogo.svg"
                maxW={"120px"}
                maxH={"40px"}
                loading="eager"
              />
            </Flex>
            <Flex gap={{ ph: "unset", lt: 4, dt: 5 }}>
              <Link to={"/"}>
                <Text fontWeight={"semibold"}>Categories</Text>
              </Link>
              <Link to={"/"}>
                <Text fontWeight={"semibold"}>How it works</Text>
              </Link>
              <Link to={"/"}>
                <Text fontWeight={"semibold"}>Find a designer</Text>
              </Link>
              <Link to={"/"}>
                <Text fontWeight={"semibold"}>Inspiration</Text>
              </Link>
              <Link to={"/"}>
                <Text fontWeight={"semibold"}>Studio</Text>
              </Link>
            </Flex>
          </Flex>

          <Flex
            w={"25%"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            gap={6}
          >
            <Flex alignItems={"center"} gap={1}>
              <Icon as={FaPhoneAlt} boxSize={4} />
              <Text fontWeight={"semibold"}>1 800 513 1678</Text>
            </Flex>
            <Link to={"/"}>
              <Text fontWeight={"semibold"}>Login</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MainNav
