import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import React from "react"
import { globalStyle } from "../../styles/globalStyle"

const HomeSecEight = () => {
  return (
    <Flex
      maxW={"1300px"}
      w={'100%'}
        px={{ ph: "15px", tl: "40px", lt: "50px", dt: "0px" }}
      mb={"56px"}
      mt={"45px"}
      flexDirection={'column'}
    >
      <Flex
        w={"100%"}
        borderRadius={"15px"}
        gap={6}
        position={"relative"}
        flexDirection={"column"}
        justifyContent={'center'}
        h={{ ph: 'auto', tl: '364px', dt: "319px" }}
        bgColor={"#3767AF"}
        alignItems={{ ph: 'center', tl: 'flex-start' }}
        pl={{ ph: '45px', tl: '20px', dt: '60px' }}
        pr={{ ph: '45px', tl: '0' }}
        pt={{ ph: '42px', tl: 'unset' }}
        overflow={{ ph: 'hidden', dt: 'unset' }}
      >
        <Heading
          as={"h2"}
          maxW={{ ph: "100%", tl: '320px', lt: "370px", dt: '520px' }}
          color={"white"}
        //   textAlign={{ ph: 'center', tl: 'unset' }}
          fontWeight={"semibold"}
        >
          Ready to level up your look with a great design?
        </Heading>
        <Button
          bgColor={"#313030"}
          color={"white"}
          _hover={{
            bgColor: "#464545",
            color: "white",
          }}
          sx={globalStyle.buttons}
          fontSize={"xl"}
        >
          Browse design categories
        </Button>
        <Image
          src="/images/Homepage/https___99designs-start-static.imgix.net_homepage_categories-cta-banner.webp"
          loading="lazy"
          position={{ ph: 'unset', tl: 'absolute' }}
          w={{ ph: 'auto', tl: '50%', lt: 'auto', dt: "448px" }}
          h={{ ph: 'auto', tl: 'auto', lt: '349px', dt: "349px" }}
          bottom={"0"}
          mt={{ ph: '36px', tl: 'unset' }}
          right={{ ph: '0', dt: "55px" }}
        />
      </Flex>
      <Text fontSize={'sm'} fontStyle={'italic'} textAlign={'right'} mt={'13px'} >by Sasha Wolf</Text>
    </Flex>
  )
}

export default HomeSecEight
