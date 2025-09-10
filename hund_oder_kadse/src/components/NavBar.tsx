import { VStack, HStack, Flex, Box, Icon } from "@chakra-ui/react";
import { LuGamepad2, LuDatabaseZap, LuTags } from "react-icons/lu";
import LinkWrapper from "../components/ui/link";
import Text from "./ui/TextComponent";

import { useIsSideBar } from "../context/SideBarContext";
import { useColorMode } from "./ui/color-mode";

const NavBar = () => {
  const { isSideBar } = useIsSideBar();
  const { colorMode } = useColorMode();

  if (isSideBar) {
    return (
      <VStack py="6" key={"ghost"}>
        <Box
          py={2}
          width="130px"
          className="clickable nav-bar-active nav-bar-active-side"
        >
          <LinkWrapper to="/">
            <HStack>
              <Icon
                m="2"
                size="lg"
                className={colorMode == "light" ? "text-light" : "text-dark"}
              >
                <LuGamepad2 />
              </Icon>
              <Text textStyle="xs">Los geht's!</Text>
            </HStack>
          </LinkWrapper>
        </Box>

        <Box py={2} width="130px" className="clickable">
          <LinkWrapper to="/categories">
            <HStack>
              <Icon
                m="2"
                size="lg"
                className={colorMode == "light" ? "text-light" : "text-dark"}
              >
                <LuTags />
              </Icon>
              <Text textStyle="xs">Kategorien</Text>
            </HStack>
          </LinkWrapper>
        </Box>

        <Box py={2} width="130px" className="clickable">
          <LinkWrapper to="/database">
            <HStack>
              <Icon
                m="2"
                size="lg"
                className={colorMode == "light" ? "text-light" : "text-dark"}
              >
                <LuDatabaseZap />
              </Icon>
              <Text textStyle="xs">Datenbank</Text>
            </HStack>
          </LinkWrapper>
        </Box>
      </VStack>
    );
  } else {
    return (
      <Flex p={2} pt={0}>
        <Box w="100%" py={2} className="clickable nav-bar-active">
          <LinkWrapper to="/">
            <VStack>
              <Icon size="lg" pb={0}>
                <LuGamepad2 />
              </Icon>
              <Text textStyle="xs">Los geht's!</Text>
            </VStack>
          </LinkWrapper>
        </Box>

        <Box w="100%" py={2} className="clickable">
          <LinkWrapper to="/categories">
            <VStack>
              <Icon size="lg" key={"ghost"}>
                <LuTags />
              </Icon>
              <Text textStyle="xs">Kategorien</Text>
            </VStack>
          </LinkWrapper>
        </Box>

        <Box w="100%" py={2} className="clickable">
          <LinkWrapper to="/database">
            <VStack>
              <Icon size="lg" key={"ghost"}>
                <LuDatabaseZap />
              </Icon>
              <Text textStyle="xs">Datenbank</Text>
            </VStack>
          </LinkWrapper>
        </Box>
      </Flex>
    );
  }
};

export default NavBar;
