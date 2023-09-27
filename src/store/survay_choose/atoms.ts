import { atom } from "recoil";

export const questionState = atom({
  key: "questionState",
  default: [] as QuestionType[],
});
