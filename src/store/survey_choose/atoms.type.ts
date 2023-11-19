interface QuestionType {
  _id: number;
  survey: AnswerInfoType[];
  totalcount: number;
}

interface AnswerInfoType {
  answer_no: string;
  question: string;
  answer: string;
  count: number;
}

interface AnswerType {
  info: InfoType;
  seleted: [{ _id: number; answer_no: string }];
  everage: number;
  everageArr: [];
}
