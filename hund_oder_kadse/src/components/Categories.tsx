import { Flex } from "@chakra-ui/react";
// import { RiAppleFill, RiBankCardFill, RiPaypalFill } from "react-icons/ri";
import SelectionBox from "./ui/SelectionBox";
import { useQuestionCategories } from "../context/QuestionCategoryContext";
import { usePenaltyCategories } from "../context/PenaltyCategoryContext";

const Categories = () => {
  const { categories: questions, toggle: toggleQuestions } =
    useQuestionCategories();
  const { categories: penalties, toggle: togglePenalties } =
    usePenaltyCategories();
  return (
    <Flex gap="4" wrap="wrap">
      <SelectionBox
        items={questions}
        toggle={toggleQuestions}
        title="Question Categories"
      ></SelectionBox>
      <SelectionBox
        items={penalties}
        toggle={togglePenalties}
        title="Penalty Categories"
      ></SelectionBox>
    </Flex>
  );
};

export default Categories;
