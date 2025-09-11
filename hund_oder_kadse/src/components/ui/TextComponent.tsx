import { Text as ReactText, type ConditionalValue } from "@chakra-ui/react";
import { useColorMode } from "./color-mode";

interface Props {
  children: React.ReactNode;
  textStyle?: ConditionalValue<
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "label"
    | "2xs"
    | "xs"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "none"
  >;
  marginEnd?: ConditionalValue<string | undefined>;
}

const Text = ({ children, textStyle, marginEnd }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <ReactText
      textStyle={textStyle}
      marginEnd={marginEnd}
      className={colorMode == "light" ? "text-light" : "text-dark"}
    >
      {children}
    </ReactText>
  );
};

export default Text;
