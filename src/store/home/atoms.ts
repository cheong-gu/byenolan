import { atom } from "recoil";

export const homeShowModalState = atom({
  key: "shoeModalState",
  default: false,
});

export type NolanState = {
  isSelected: boolean;
  selectedAnswer: string;
  questionId: string;
  participants: string;
};

export const homeNolanState = atom<NolanState>({
  key: "homeNolanState",
  default: {} as NolanState,
});
