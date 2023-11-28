import {
  ResultType,
  InfoResultType,
  ModalResultType,
  ModalQuestionType,
} from "./atoms.type";
import { atom } from "recoil";

export const resultState = atom({
  key: "resultState",
  default: {} as ResultType,
});

export const modalResultState = atom({
  key: "modalResultState",
  default: {} as ModalResultType,
});

export const modalQuestionState = atom({
  key: "modalQuestionState",
  default: {} as ModalQuestionType[],
});

export const ageRangeState = atom({
  key: "ageRangeState",
  default: {} as InfoResultType[],
});
