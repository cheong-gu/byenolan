import { ResultType, InfoResultType } from "./atoms.type";
import { atom } from "recoil";

export const resultState = atom({
  key: "resultState",
  default: {} as ResultType,
});

export const ageRangeState = atom({
  key: "ageRangeState",
  default: {} as InfoResultType[],
});
