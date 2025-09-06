import { Text, Card } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";

const InfoCard = () => {
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
          className={
            colorMode === "light"
              ? "info-card-title info-card-title-light"
              : "info-card-title info-card-title-dark"
          }
        >
          Nue Camp
        </Card.Title>
        <Card.Description
          className={
            colorMode === "light"
              ? "info-card-text info-card-text-light"
              : "info-card-text info-card-text-dark"
          }
        >
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
          Curabitur nec odio vel dui euismod fermentum.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Text textStyle="xs">Ich bin die Kategorie</Text>
      </Card.Footer>
    </Card.Root>
  );
};

export default InfoCard;
