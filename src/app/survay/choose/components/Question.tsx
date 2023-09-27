import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Button from "@/components/Button";
import styled from "@emotion/styled";
import { questionState } from "@/store/survay_choose/atoms";
import { useState } from "react";

const QuestionBox = styled.div`
  width: 100%;
`;

const QuestionTitle = styled.div`
  margin: 0 auto;
  max-width: 206px;
  font-size: 18px;
  color: white;
`;

const SelectBox = styled.div`
  height: 220px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  div {
    text-align: center;
    color: white;
  }
`;

export default function Question() {
  const [rate1, setRate1] = useState<string>();
  const [rate2, setRate2] = useState<string>();
  const [question, setQuestion] = useRecoilState(questionState); // useState와 같지만, useRecoilState를 사용하여 다른 파일에 있는 아톰을 읽을 수 있다.
  const currentQuestion = useRecoilValue(questionState);
  const questionHandler = useSetRecoilState(questionState);

  const clickQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const percentage1 = "51%";
    const percentage2 = "49%";
    const target = e.target as HTMLInputElement;

    setRate1(percentage1);
    setRate2(percentage2);

    if (target.classList[0] === "first") {
      questionHandler((prev) => {
        return {
          ...prev,
          answer: "o",
        };
      });
    } else if (target.classList[0] === "second") {
      questionHandler((prev) => {
        return {
          ...prev,
          answer: "x",
        };
      });
    }
  };

  return (
    <QuestionBox>
      <QuestionTitle>
        연인과 절친이 몰래 연락하며 나를 위한 이벤트를 준비한다.
      </QuestionTitle>
      <SelectBox>
        <Button
          width="100%"
          height="64px"
          fontColor="black"
          fontSize="14px"
          borderRadius="0"
          buttonColor="beige"
          className="first"
          onClick={(e) => clickQuestion(e)}
        >
          {/* 연애 경험이 없어 리드해야 하는 연인 + {rate1} */}
          {rate1
            ? currentQuestion.answer === "o"
              ? `V 연애 경험이 없어 리드해야 하는 연인  ${rate1}`
              : `연애 경험이 없어 리드해야 하는 연인  ${rate1}`
            : "연애 경험이 없어 리드해야 하는 연인"}
        </Button>
        <div>vs</div>
        <Button
          width="100%"
          height="64px"
          fontColor="black"
          fontSize="14px"
          borderRadius="0"
          buttonColor="beige"
          className="second"
          onClick={clickQuestion}
        >
          {/* 연애 경험이 많아 리드하는 연인 + {rate2} */}
          {rate2
            ? currentQuestion.answer === "x"
              ? `V 연애 경험이 많아 리드하는 연인  ${rate2}`
              : `연애 경험이 많아 리드하는 연인 ${rate2}`
            : "연애 경험이 많아 리드하는 연인"}
        </Button>
      </SelectBox>
    </QuestionBox>
  );
}
