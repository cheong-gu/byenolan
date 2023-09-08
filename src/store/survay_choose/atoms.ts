import { atom } from "recoil";

export const questoinState = atom({
  key: "questoinState",
  default: [] as QuestionType[],
});
