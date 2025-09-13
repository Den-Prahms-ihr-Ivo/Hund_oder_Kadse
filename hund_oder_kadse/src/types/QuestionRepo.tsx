import type { Question } from "./Question";

export interface QuestionRepo {
  list(): Promise<Question[]>;
  create(input: Pick<Question, "name">): Promise<Question>;
}
