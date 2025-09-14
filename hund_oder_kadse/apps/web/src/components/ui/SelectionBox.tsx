import { Flex, Button, HStack, Icon, Text, Box } from "@chakra-ui/react";
import {
  LuScrollText,
  LuTag,
  LuDraftingCompass,
  LuDrama,
  LuHeart,
  LuMessageCircleHeart,
  LuMartini,
  LuDumbbell,
  LuForklift,
  LuRabbit,
} from "react-icons/lu";
import type { CategoryItem } from "../../context/QuestionCategoryContext";

interface Props {
  items: CategoryItem[];
  title: string;
  deselectAll: () => void;
  selectAll: () => void;
  toggle: (id: number) => void;
}

const icons = {
  story: <LuScrollText />,
  compass: <LuDraftingCompass />,
  drama: <LuDrama />,
  heart: <LuHeart />,
  message: <LuMessageCircleHeart />,
  martini: <LuMartini />,
  sport: <LuDumbbell />,
  stunt: <LuForklift />,
  couple: <LuHeart />,
  funny: <LuRabbit />,
};

const SelectionBox = ({
  items,
  title,
  toggle,
  deselectAll,
  selectAll,
}: Props) => {
  return (
    <Box>
      <Text textStyle={"md"} p={2}>
        {title}
      </Text>
      <Flex gap="4" wrap="wrap" w="100%">
        {items.map((item) => {
          const icon_display = icons[item.icon as keyof typeof icons] || (
            <LuTag />
          );
          return (
            <Button
              onClick={() => toggle(item.id)}
              key={item.id}
              className={
                item.selected ? "selection-box active" : "selection-box"
              }
              px={4}
              py={6}
              rounded="md"
              colorPalette="gray"
              variant="surface"
            >
              <HStack>
                <Icon size={"lg"}>{icon_display}</Icon>
                {item.name}
              </HStack>
            </Button>
          );
        })}
      </Flex>
      <Flex p={2} gap="4" justifyContent="center" wrap="wrap" w="100%">
        <Button
          onClick={deselectAll}
          h="40px"
          w="200px"
          fontWeight="bold"
          colorPalette="gray"
          variant="surface"
        >
          Deselect All
        </Button>
        <Button
          onClick={selectAll}
          h="40px"
          w="200px"
          fontWeight="bold"
          colorPalette="orange"
          variant="surface"
        >
          Select All
        </Button>
      </Flex>
    </Box>
  );
};

export default SelectionBox;
