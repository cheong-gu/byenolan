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

interface selectedType {
  question_id: number;
  answer_no: string;
}

interface AnswerType {
  info: InfoType;
  selected: selectedType[];
  everage: number;
  everageArr: string[];
}
