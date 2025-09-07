import { Text, Card, HStack, Icon, Box, Image } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";
import { LuTag } from "react-icons/lu";
import raven_2 from "../assets/raven_2.svg";
import raven from "../assets/raven.svg";

interface Props {
  title: string;
  pos_img_left: boolean;
}

const InfoCard = ({ title, pos_img_left }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Card.Root
      height="100%"
      className={
        colorMode === "light"
          ? "info-card info-card-light"
          : "info-card info-card-dark"
      }
    >
      <Card.Body gap="6">
        <Card.Title
          mt="2"
          textStyle="xl"
          className={
            colorMode === "light"
              ? "info-card-title info-card-title-light"
              : "info-card-title info-card-title-dark"
          }
        >
          {title}
        </Card.Title>
        <Card.Description
          zIndex={1}
          textStyle="lg"
          className={
            colorMode === "light"
              ? "info-card-text info-card-text-light"
              : "info-card-text info-card-text-dark"
          }
        >
          Wie viele Drittklässler kannst du unter den Tisch trinken?
        </Card.Description>
        <Card.Description
          zIndex={1}
          textStyle="md"
          className={
            colorMode === "light"
              ? "info-card-text info-card-text-light"
              : "info-card-text info-card-text-dark"
          }
        >
          Sobald einer kotzt muss der nächste ran.
        </Card.Description>
      </Card.Body>
      <Card.Footer zIndex={1} justifyContent="flex-end">
        <HStack>
          <Icon size="sm" aria-label="Call support" key={"ghost"}>
            <LuTag />
          </Icon>
          <Text textStyle="xs">Hypothetical Stories</Text>
        </HStack>
      </Card.Footer>
      <Box className={pos_img_left ? "raven left" : "raven"}>
        <Image
          zIndex={0}
          margin={pos_img_left ? "0 auto 0 0;" : "0 0 0 auto"}
          h="100%"
          src={pos_img_left ? raven : raven_2}
        />
      </Box>
    </Card.Root>
  );
};

export default InfoCard;
