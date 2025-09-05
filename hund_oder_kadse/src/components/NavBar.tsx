import { Flex, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput";
import { useColorMode } from "../components/ui/color-mode";

const NavBar = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      padding="10px"
      gap="4"
      align="center"
      bg={colorMode === "light" ? "red.300" : "blue.300"}
    >
      <Image src={logo} height={"50px"} />
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
