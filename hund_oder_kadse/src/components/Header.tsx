import { Flex, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <Flex padding="10px" gap="4" align="center">
      <Image src={logo} height={"50px"} />
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
};

export default Header;
