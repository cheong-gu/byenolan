import { atom, selector } from "recoil";
import { questoinState } from "./atoms";

export const questoinsDataSelector = selector({
  key: "questoinStateSelector",
  get: ({ get }) => {
    const questions = get(questoinState);

    const numO = questions.filter((q) => q.answer === "o").length;
    const numX = questions.filter((q) => q.answer === "x").length;

    return {
      numO,
      numX,
    };
  },
});
