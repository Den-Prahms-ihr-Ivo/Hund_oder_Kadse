import { Flex, Button, HStack, Icon, Text } from "@chakra-ui/react";
import {
  LuScrollText,
  LuTag,
  LuDraftingCompass,
  LuDrama,
  LuHeart,
  LuMessageCircleHeart,
} from "react-icons/lu";
import { Fragment } from "react/jsx-runtime";
import type { CategoryItem } from "../../context/QuestionCategoryContext";

interface Props {
  items: CategoryItem[];
  title: string;
  toggle: (id: number) => void;
}

const icons = {
  story: <LuScrollText />,
  compass: <LuDraftingCompass />,
  drama: <LuDrama />,
  heart: <LuHeart />,
  message: <LuMessageCircleHeart />,
};

const SelectionBox = ({ items, title, toggle }: Props) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default SelectionBox;
