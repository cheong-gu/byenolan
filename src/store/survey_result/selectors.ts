import { atom, selector } from "recoil";
import { resultState } from "./atoms";

export const resultDataSelector = selector({
  key: "resultStateSelector",
  get: ({ get }) => {
    const result = get(resultState);
  },
});
