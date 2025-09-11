"use client";

import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "../components/ui/color-mode";
import TextWrapper from "./ui/TextWrapper";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="outline"
        size="sm"
        className={
          "clickable " + (colorMode == "light" ? "text-light" : "text-dark")
        }
      >
        <TextWrapper>
          {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </TextWrapper>
      </IconButton>
    </ClientOnly>
  );
};

export default ColorModeSwitch;
