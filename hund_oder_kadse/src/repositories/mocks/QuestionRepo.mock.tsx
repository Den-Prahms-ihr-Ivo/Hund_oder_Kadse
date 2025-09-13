import type { Question } from "../../types/Question";
import type { QuestionRepo } from "../../types/QuestionRepo";

let db: Question[] = [
  { id: 1, name: "Ada" },
  { id: 2, name: "Linus" },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const questionRepoMock: QuestionRepo = {
  async list() {
    await sleep(200); // simulate network
    return [...db];
  },
  async create(input) {
    await sleep(150);
    const u = { id: Date.now(), name: input.name };
    db = [...db, u];
    return u;
  },
};
