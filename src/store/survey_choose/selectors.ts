import { selector } from "recoil";
import { questionsState, selectedQuestionIndexState } from "./atoms";

export const selectedQuestionState = selector({
  key: "selectedQuestionState",
  get: ({ get }) => {
    const questions = get(questionsState);
    const index = get(selectedQuestionIndexState);

    const questionValue = questions[index];

    return { questionValue };
  },
});
