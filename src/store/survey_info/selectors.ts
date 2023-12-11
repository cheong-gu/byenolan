import { atom, selector } from "recoil";
import { infoState } from "./atoms";

export const questoinsDataSelector = selector({
  key: "questionStateSelector",
  get: ({ get }) => {
    const questions = get(infoState);
  },
});
