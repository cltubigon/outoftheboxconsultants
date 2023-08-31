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
import { Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import { globalStyle } from "../../styles/globalStyle"
import FadeSlider from "../Sliders/FadeSlider"
import { useSelector } from "react-redux"

function SectionOne() {
  const activeColor = useSelector((state) => state.homepage.activeColor)
  const slideImageHeight = useSelector(
    (state) => state.homepage.slideImageHeight
  )

  return (
    <Flex>
      <Flex
        flexDirection={{
          base: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
        justifyContent={""}
        w={"100%"}
        py={'60px'}
      >
        <Flex w={{ base: "100%", lg: "50%" }} justifyContent={'flex-end'}>
          <FadeSlider />
        </Flex>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          gap={6}
          w={{ base: "100%", lg: "50%" }}
          pl={{ base: "0", md: "30px", lg: "70px" }}
          h={{base: 'auto', lg: slideImageHeight + 'px' }}
        >
          <Heading
            as={"h1"}
            my={"0"}
            color={activeColor}
            fontSize={{ base: "48px", xl: "78px" }}
            fontWeight={"600"}
            pr={{ base: 0, lg: "20px" }}
            lineHeight={"1.05em"}
          >
            Grow with great designss
          </Heading>
          <Text pl={{ base: "0", lg: "30px" }} pr={{ base: "0", lg: "50px" }}>
            No matter what your business needs, we can connect you with a
            creative expert to make your business look and feel professional.
            Because good design makes great business.
          </Text>
          <InputGroup
            gap={4}
            alignItems={"center"}
            pr={"20px"}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <InputLeftElement pointerEvents="none" top={"6px"} bottom={"6px"}>
              <Icon as={BsSearch} boxSize={5} color={"gray.500"} />
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
          <Flex gap={{ base: 3, xl: 5 }} alignItems={"center"}>
            <Text>Popular:</Text>
            <Link to={"/"}>
              <Text
                bgColor={"#DAD9D7"}
                borderRadius={"lg"}
                p={{ base: "3px 10px", xl: "3px 15px" }}
              >
                Logo design
              </Text>
            </Link>
            <Link to={"/"}>
              <Text
                bgColor={"#DAD9D7"}
                borderRadius={"lg"}
                p={{ base: "3px 10px", xl: "3px 15px" }}
              >
                Website
              </Text>
            </Link>
            <Link to={"/"}>
              <Text
                bgColor={"#DAD9D7"}
                borderRadius={"lg"}
                p={{ base: "3px 10px", xl: "3px 15px" }}
              >
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