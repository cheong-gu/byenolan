import { atom } from "recoil";

export const selectedQuestionIndexState = atom({
  key: "selectedQuestionIndexState",
  default: 0,
});

export const selectedState = atom({
  key: "selectedState",
  default: false,
});

export const percentState = atom({
  key: "percentState",
  default: [] as any,
});

export const everageState = atom({
  key: "everageState",
  default: [] as string[],
});

export const questionsState = atom<QuestionType[]>({
  key: "questionsState",
  default: [],
});

export const answersState = atom<AnswerType>({
  key: "answersState",
  default: {} as any,
});
