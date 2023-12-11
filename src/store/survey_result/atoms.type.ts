export type RelationshipType =
  | "핵불닭볶음면"
  | "불닭볶음면"
  | "신라면"
  | "진라면"
  | "참깨라면"
  | "사리곰탕";

export interface ResultType {
  content: string;
  percentResult: number;
  subTitle: string;
  title: RelationshipType;
  type: string;
}

export interface ModalResultType {
  question: string[];
  answer: string[];
}

export interface InfoResultType {
  count: number;
  age: string;
  gender: "M" | "W";
  title: RelationshipType;
  percent: string;
}

export interface DonutChartDataType {
  myPercent: number;
  mostType: RelationshipType;
  data: InfoResultType[];
  donutData: number[];
}

export interface ModalQuestionType {
  _id: number;
  survey: ModalAnswerType[];
  totalcount: number;
}

export interface ModalAnswerType {
  answer: string;
  answer_no: string;
  count: number;
  formattedPercentage: string;
  question: string;
}
