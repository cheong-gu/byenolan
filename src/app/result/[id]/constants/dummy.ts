// 임시 데이터
export type relationshipType =
  | "핵불닭볶음면"
  | "불닭볶음면"
  | "신라면"
  | "진라면"
  | "참깨라면"
  | "사리곰탕";

export const DUMMY_RESULT_DATA = {
  핵불닭볶음면: {
    title: "후폭풍도 기꺼이 감당할 당신은",
    summary: `
    주변 사람들에게 평소 '유니크하다'라는 평을 받고 계시나요?
    논란의 중심에서도 신념을 지켜내는 당신의 화끈함을
    응원하는 사람들이 있어요!
    `,
  },
  불닭볶음면: {
    title: "맵지만 계속 생각나는 당신은",
    summary: `
    나와 다른 사람들이 더 많은 세상에서
    내 신념을 지켜내기가 참 어렵죠?
    가끔은 엉뚱하지만 대체로 귀여운 당신을
    지지하는 사람들이 있어요!
    `,
  },
  신라면: {
    title: "적당히 매콤한 당신은",
    summary: `
    가끔 이해가 안되는 부분이 있어도
    '그럴 수 있지~'하고 넘어가시는 편인가요?
    당신의 그런 배려를 주변사람들 모두 알고있어요!
    `,
  },
  진라면: {
    title: "맵기보다 구수한 당신은",
    summary: `
    대체로 무난하고 안정적인 선택을 하지만
    특정 부분에서는 꼭 지켜내고 싶은
    자신만의 신념을 가지고 계시는 군요!
    `,
  },
  참깨라면: {
    title: "모두에게 편안한 당신은",
    summary: `
    자극적인 매콤함 보다는
    여러 사람들과 조화롭게 어울리는 구수함이
    당신의 매력이에요!
    `,
  },
  사리곰탕: {
    title: "아기 궁둥이 같이 뽀얀 당신은",
    summary: `
    세상에나 마상에나!
    세상 모든 사람과 논란 없이 지낼 당신은
    주변 사람들을 편안하게 만드는 매력의 소유자!
    `,
  },
};

export const DUMMY_AGE_TYPE = [
  { age: "20대 여성", point: 100 },
  { age: "10대 여성", point: 65 },
  { age: "30대 남성", point: 25 },
];

export const DUMMY_CHART_DATA: { type: relationshipType; point: number }[] = [
  { type: "핵불닭볶음면", point: 35 },
  { type: "불닭볶음면", point: 25 },
  { type: "신라면", point: 19 },
  { type: "진라면", point: 15 },
  { type: "참깨라면", point: 3 },
  { type: "사리곰탕", point: 2 },
];

export const DUMMY_COLUMN_DATA = [
  { age: "20대 여성", point: 100 },
  { age: "10대 여성", point: 65 },
  { age: "30대 남성", point: 25 },
];

export const DUMMY_DONUT_COLOR = {
  핵불닭볶음면: "#ff9aa2",
  불닭볶음면: "#ffb7b2",
  신라면: "#ffdac1",
  진라면: "#e2f0cb",
  참깨라면: "#b5ead7",
  사리곰탕: "#c7ceea",
};

export const DUMMY_MODAL_DATA = [
  {
    question: "친구를 처음 보여주는 자리에서 더 짜증나는 상황은?",
    answer: 0,
    options: [
      {
        _id: "650bcb9b3be28c9fac971b67",
        answer: "화장실에 가있는 동안 연락처 주고받음",
        answer_no: 0,
      },
      {
        _id: "650bcb9b3be28c9fac971b68",
        answer: "같은 방향이라고 같이 택시탐",
        answer_no: 1,
      },
    ],
  },
  {
    question: "연인과 절친이 몰래 연락하며 나를 위한 이벤트를 준비했다",
    answer: 1,
    options: [
      {
        _id: "650bcb9b3be28c9fac971b69",
        answer: "나를 위한거니까 상관없다",
        answer_no: 0,
      },
      {
        _id: "650bcb9b3be28c9fac971b6a",
        answer: "몰래 연락한게 불편하다",
        answer_no: 1,
      },
    ],
  },
  {
    question: "일찍 잔다고 했는데 SNS에 접속중인걸 발견했다",
    answer: 0,
    options: [
      {
        _id: "650bcb9b3be28c9fac971b6b",
        answer: "왜 거짓말 했는지 물어본다",
        answer_no: 0,
      },
      {
        _id: "650bcb9b3be28c9fac971b6c",
        answer: "모른척 해준다",
        answer_no: 1,
      },
    ],
  },
  {
    question: "연인 사이에 스마트폰 확인",
    answer: 0,
    options: [
      {
        _id: "650bcb9b3be28c9fac971b6b",
        answer: "난 너를 믿어!",
        answer_no: 0,
      },
      {
        _id: "650bcb9b3be28c9fac971b6c",
        answer: "사귀는 사이니깐 볼 수도 있지!!",
        answer_no: 1,
      },
    ],
  },
];
