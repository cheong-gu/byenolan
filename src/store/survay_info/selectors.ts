import { atom, selector } from "recoil";
import { infoState } from "./atoms";

export const questoinsDataSelector = selector({
  key: "questoinStateSelector",
  get: ({ get }) => {
    const questions = get(infoState);

    // const numO = questions.filter((q) => q.answer === "o").length;
    // const numX = questions.filter((q) => q.answer === "x").length;

    return {
      // numO,
      // numX,
    };
  },
});
