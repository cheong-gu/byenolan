import { atom, selector } from "recoil";
import { questionState } from "./atoms";

export const questionsDataSelector = selector({
  key: "questionStateSelector",
  get: ({ get }) => {
    const questions = get(questionState);

    const numO = questions.filter((q) => q.answer === "o").length;
    const numX = questions.filter((q) => q.answer === "x").length;

    return {
      numO,
      numX,
    };
  },
});
