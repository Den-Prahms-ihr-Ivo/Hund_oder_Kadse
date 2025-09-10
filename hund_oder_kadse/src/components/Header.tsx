import { Flex, Image, Avatar } from "@chakra-ui/react";
import logo from "../assets/logo_light.svg";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import { useIsSideBar } from "../context/SideBarContext.tsx";
import { useColorMode } from "./ui/color-mode.tsx";
import LinkWrapper from "./ui/link.tsx";
import default_user from "../assets/default_user.jpg";
import Text from "./ui/TextComponent.tsx";

const Header = () => {
  const { isSideBar } = useIsSideBar();
  const { colorMode } = useColorMode();

  let className = "header ";
  className += isSideBar ? " " : "header-top ";
  className += colorMode === "light" ? "header-light " : "header-dark ";

  return (
    <Flex padding="10px" gap="4" align="center" className={className}>
      <Image marginLeft={4} src={logo} height={"50px"} />
      {/* <SearchInput /> */}
      <Text textStyle="3xl" marginEnd="auto">
        Das Orakel
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
