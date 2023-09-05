import { Flex, Icon, Text } from "@chakra-ui/react"
import React from "react"
import {
  BsFacebook,
  BsGlobe,
  BsGlobeAmericas,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Flex
      w={"100%"}
      bgColor={"#F3F2F0"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      {/*-----------------------Desktop and Laptop Only -----------------------*/}
      <Flex
        w={"100%"}
        maxW={"1300px"}
        px={{ ph: "10px", tl: "40px", lt: "50px", dt: "0px" }}
        py={"60px"}
        display={{ ph: "none", lt: "flex" }}
      >
        <Flex flexDirection={"column"} gap={3} width={"25%"}>
          <Text fontWeight={"semibold"}>Company</Text>
          <Text fontSize={"sm"}>About</Text>
          <Text fontSize={"sm"}>Contact</Text>
          <Text fontSize={"sm"}>Careers</Text>
          <Text fontSize={"sm"}>Team</Text>
          <Text fontSize={"sm"}>Press releases</Text>
          <Text fontSize={"sm"}>In the media</Text>
          <Text fontSize={"sm"}>Testimonials</Text>
          <Text fontSize={"sm"}>99nonprofits</Text>
        </Flex>

        <Flex flexDirection={"column"} gap={3} width={"25%"}>
          <Text fontWeight={"semibold"}>Design services</Text>
          <Text fontSize={"sm"}>Design contests</Text>
          <Text fontSize={"sm"}>1-to-1 Projects</Text>
          <Text fontSize={"sm"}>Find a designer</Text>
          <Text fontSize={"sm"}>Discover inspiration</Text>
          <Text fontSize={"sm"}>Pricing</Text>
          <Text fontSize={"sm"}>Agencies</Text>
          <Text fontSize={"sm"}>99designs Studio</Text>
          <Text fontSize={"sm"}>99designs Select</Text>
          <Text fontSize={"sm"}>API integrations</Text>
        </Flex>

        <Flex flexDirection={"column"} gap={3} width={"25%"}>
          <Text fontWeight={"semibold"}>Get a design</Text>
          <Text fontSize={"sm"}>Logo design</Text>
          <Text fontSize={"sm"}>Business card</Text>
          <Text fontSize={"sm"}>Web page design</Text>
          <Text fontSize={"sm"}>Brand guide</Text>
          <Text fontSize={"sm"}>Packaging design</Text>
          <Text fontSize={"sm"}>T-shirt design</Text>
          <Text fontSize={"sm"}>Book cover design</Text>
          <Text fontSize={"sm"}>Browse all categories</Text>
        </Flex>

        <Flex flexDirection={"column"} gap={3} width={"25%"}>
          <Text fontWeight={"semibold"}>Resources</Text>
          <Text fontSize={"sm"}>Become a designer</Text>
          <Text fontSize={"sm"}>Blog</Text>
          <Text fontSize={"sm"}>Design without borders</Text>
          <Text fontSize={"sm"}>99awards</Text>
          <Text fontSize={"sm"}>Affiliates</Text>
          <Text fontSize={"sm"}>Logo ideas</Text>
          <Text fontSize={"sm"}>T-shirt ideas</Text>
          <Text fontSize={"sm"}>Designer resources</Text>
          <Text fontSize={"sm"}>Featured partners</Text>
          <Text fontSize={"sm"}>Help</Text>
        </Flex>
      </Flex>
      {/*-----------------------Desktop and Laptop Only -----------------------*/}
      <Flex
        display={{ ph: "none", lt: "flex" }}
        w={"100%"}
        maxW={"1300px"}
        px={{ ph: "10px", tl: "40px", lt: "50px", dt: "0px" }}
        justifyContent={"space-between"}
        borderTop={"2px solid #dad9d7"}
        py={"30px"}
      >
        <Flex minW={"70%"}>
          <Flex borderRight={"1px solid #5b5a58"}>
            <Text pr={"10px"} fontSize={"sm"}>
              © 99designs
            </Text>
          </Flex>
          <Flex borderRight={"1px solid #5b5a58"}>
            <Text px={"10px"} fontSize={"sm"}>
              by Vista
            </Text>
          </Flex>
          <Flex borderRight={"1px solid #5b5a58"}>
            <Text px={"10px"} fontSize={"sm"}>
              Terms and Conditions
            </Text>
          </Flex>
          <Flex>
            <Text px={"10px"} fontSize={"sm"}>
              Sitemap
            </Text>
          </Flex>
          <Flex gap={4} alignItems={"center"}>
            <Icon as={BsGlobeAmericas} boxSize={4} />
            <Text fontSize={"sm"}>English</Text>
            <Text fontSize={"sm"}>español</Text>
          </Flex>
        </Flex>
        <Flex gap={4}>
          <Link to={"/"}>
            <Icon color={"#313030"} as={BsFacebook} boxSize={4} />
          </Link>
          <Link to={"/"}>
            <Icon color={"#313030"} as={BsTwitter} boxSize={4} />
          </Link>
          <Link to={"/"}>
            <Icon color={"#313030"} as={BsLinkedin} boxSize={4} />
          </Link>
          <Link to={"/"}>
            <Icon color={"#313030"} as={BsPinterest} boxSize={4} />
          </Link>
          <Link to={"/"}>
            <Icon color={"#313030"} as={BsInstagram} boxSize={4} />
          </Link>
        </Flex>
      </Flex>

      {/*----------------------- Tablet and Mobile Only -----------------------*/}
      <Flex
        display={{ ph: "flex", lt: "none" }}
        w={"100%"}
        maxW={"1300px"}
        px={{ ph: "10px", tl: "40px", lt: "50px", dt: "0px" }}
        py={"40px"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={6}
      >
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          <Flex px={"10px"} borderRight={"1px solid #5b5a58"}>
            <Text fontSize={"sm"}>© 99designs</Text>
          </Flex>
          <Flex px={"10px"} borderRight={"1px solid #5b5a58"}>
            <Text fontSize={"sm"}>by Vista</Text>
          </Flex>
          <Flex px={"10px"} borderRight={"1px solid #5b5a58"}>
            <Text fontSize={"sm"}>Terms and Conditions</Text>
          </Flex>
          <Flex px={"10px"} borderRight={"1px solid #5b5a58"}>
            <Text fontSize={"sm"}>Privacy</Text>
          </Flex>
          <Flex px={"10px"}>
            <Text fontSize={"sm"}>Sitemap</Text>
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Icon as={BsGlobeAmericas} boxSize={4} />
          <Text fontSize={"sm"}>English</Text>
          <Text fontSize={"sm"}>español</Text>
        </Flex>
        <Flex gap={4}>
          <Link to={"/"}>
            <Icon color={"#313030"} as={BsFacebook} boxSize={4} />
          </Link>
          <Link to={"/"}>
            <Icon color={"#313030"} as={BsTwitter} boxSize={4} />
          </Link>
          <Link to={"/"}>
            <Icon color={"#313030"} as={BsLinkedin} boxSize={4} />
          </Link>
          <Link to={"/"}>
            <Icon color={"#313030"} as={BsPinterest} boxSize={4} />
          </Link>
          <Link to={"/"}>
            <Icon color={"#313030"} as={BsInstagram} boxSize={4} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
