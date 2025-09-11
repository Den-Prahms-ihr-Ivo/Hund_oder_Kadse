import { VStack, HStack, Flex, Box, Icon, Text } from "@chakra-ui/react";
import { LuGamepad2, LuDatabaseZap, LuTags } from "react-icons/lu";
import LinkWrapper from "../components/ui/link";
import TextWrapper from "./ui/TextWrapper";

import { useIsSideBar } from "../context/SideBarContext";
import { useColorMode } from "./ui/color-mode";

const NavBar = () => {
  const { isSideBar } = useIsSideBar();
  const { colorMode } = useColorMode();

  if (isSideBar) {
    return (
      <VStack py="6" key={"ghost"} className="navbar dark">
        <Box
          py={2}
          width="130px"
          className={
            "clickable nav-bar-active nav-bar-active-side " +
            (colorMode == "light" ? "light" : "dark")
          }
        >
          <LinkWrapper to="/">
            <HStack>
              <TextWrapper>
                <Icon
                  m="2"
                  size="lg"
                  className={colorMode == "light" ? "text-light" : "text-dark"}
                >
                  <LuGamepad2 />
                </Icon>
              </TextWrapper>
              <Text textStyle="xs">
                <TextWrapper>Los geht's!</TextWrapper>
              </Text>
            </HStack>
          </LinkWrapper>
        </Box>

        <Box py={2} width="130px" className="clickable">
          <LinkWrapper to="/categories">
            <HStack>
              <TextWrapper>
                <Icon
                  m="2"
                  size="lg"
                  className={colorMode == "light" ? "text-light" : "text-dark"}
                >
                  <LuTags />
                </Icon>
              </TextWrapper>
              <Text textStyle="xs">
                <TextWrapper>Kategorien</TextWrapper>
              </Text>
            </HStack>
          </LinkWrapper>
        </Box>

        <Box py={2} width="130px" className="clickable">
          <LinkWrapper to="/database">
            <HStack>
              <TextWrapper>
                <Icon
                  m="2"
                  size="lg"
                  className={colorMode == "light" ? "text-light" : "text-dark"}
                >
                  <LuDatabaseZap />
                </Icon>
              </TextWrapper>
              <Text textStyle="xs">
                <TextWrapper>Datenbank</TextWrapper>
              </Text>
            </HStack>
          </LinkWrapper>
        </Box>
      </VStack>
    );
  } else {
    return (
      <Flex
        p={2}
        pt={0}
        className={
          "nav-bar-bottom " + (colorMode == "light" ? "light" : "dark")
        }
      >
        <Box
          w="100%"
          py={2}
          className={
            "clickable nav-bar-active " +
            (colorMode == "light" ? "light" : "dark")
          }
        >
          <LinkWrapper to="/">
            <VStack>
              <TextWrapper>
                <Icon size="lg" pb={0}>
                  <LuGamepad2 />
                </Icon>
              </TextWrapper>
              <Text textStyle="xs">
                <TextWrapper>Los geht's!</TextWrapper>
              </Text>
            </VStack>
          </LinkWrapper>
        </Box>

        <Box w="100%" py={2} className="clickable">
          <LinkWrapper to="/categories">
            <VStack>
              <TextWrapper>
                <Icon size="lg" key={"ghost"}>
                  <LuTags />
                </Icon>
              </TextWrapper>
              <Text textStyle="xs">
                <TextWrapper>Kategorien</TextWrapper>
              </Text>
            </VStack>
          </LinkWrapper>
        </Box>

        <Box w="100%" py={2} className="clickable">
          <LinkWrapper to="/database">
            <VStack>
              <TextWrapper>
                <Icon size="lg" key={"ghost"}>
                  <LuDatabaseZap />
                </Icon>
              </TextWrapper>
              <Text textStyle="xs">
                <TextWrapper>Datenbank</TextWrapper>
              </Text>
            </VStack>
          </LinkWrapper>
        </Box>
      </Flex>
    );
  }
};

export default NavBar;
