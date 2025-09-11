import { Flex, Image, Avatar, Text } from "@chakra-ui/react";
import logoLight from "../assets/logo_light.svg";
import logoDark from "../assets/logo_dark.svg";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import { useIsSideBar } from "../context/SideBarContext.tsx";
import { useColorMode } from "./ui/color-mode.tsx";
import LinkWrapper from "./ui/link.tsx";
import default_user from "../assets/default_user.jpg";
import TextWrapper from "./ui/TextWrapper.tsx";

const Header = () => {
  const { isSideBar } = useIsSideBar();
  const { colorMode } = useColorMode();

  let className = "header ";
  className += isSideBar ? " " : "header-top ";
  className += colorMode === "light" ? "header-light " : "header-dark ";

  return (
    <Flex padding="10px" gap="4" align="center" className={className}>
      <Image
        marginLeft={4}
        src={colorMode == "light" ? logoLight : logoDark}
        height={"50px"}
      />
      {/* <SearchInput /> */}
      <Text textStyle="3xl" marginEnd="auto">
        <TextWrapper>Das Orakel</TextWrapper>
      </Text>
      <ColorModeSwitch />
      <LinkWrapper to="/login">
        <Avatar.Root>
          <Avatar.Image src={default_user} />
          <Avatar.Fallback name="Nate Foss" />
        </Avatar.Root>
      </LinkWrapper>
    </Flex>
  );
};

export default Header;
