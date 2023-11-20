import { atom } from "recoil";

export const homeShowModalState = atom({
  key: "shoeModalState",
  default: false,
});

type NolanState = {
  isSelected: boolean;
  selectedAnswer: string;
};

export const homeNolanState = atom<NolanState>({
  key: "homeNolanState",
  default: {} as NolanState,
});
