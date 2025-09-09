import { Flex } from "@chakra-ui/react";
// import { RiAppleFill, RiBankCardFill, RiPaypalFill } from "react-icons/ri";
import SelectionBox from "./ui/SelectionBox";
import { useQuestionCategories } from "../context/QuestionCategoryContext";
import { usePenaltyCategories } from "../context/PenaltyCategoryContext";

const Categories = () => {
  const {
    categories: questions,
    toggle: toggleQuestions,
    selectAll: selectAllQuestions,
    deselectAll: deselectAllQuestions,
  } = useQuestionCategories();
  const {
    categories: penalties,
    toggle: togglePenalties,
    selectAll: selectAllPenalties,
    deselectAll: deselectAllPenalties,
  } = usePenaltyCategories();
  return (
    <Flex gap="4" wrap="wrap">
      <SelectionBox
        items={questions}
        toggle={toggleQuestions}
        title="Question Categories"
        selectAll={selectAllQuestions}
        deselectAll={deselectAllQuestions}
      ></SelectionBox>
      <SelectionBox
        items={penalties}
        toggle={togglePenalties}
        title="Penalty Categories"
        selectAll={selectAllPenalties}
        deselectAll={deselectAllPenalties}
      ></SelectionBox>
    </Flex>
  );
};

export default Categories;
