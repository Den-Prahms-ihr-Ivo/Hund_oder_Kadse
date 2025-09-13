import { questionRepoReal } from "./QuestionRepo";
import { questionRepoMock } from "./mocks/QuestionRepo.mock";
export const repos =
  import.meta.env.VITE_USE_MOCKS === "true"
    ? { user: questionRepoMock }
    : { user: questionRepoReal };
