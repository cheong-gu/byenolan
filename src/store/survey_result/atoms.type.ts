type relationshipType =
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
  title: relationshipType;
  type: string;
}

export interface InfoResultType {
  count: number;
  age: string;
  gender: "M" | "W";
  title: relationshipType;
}
