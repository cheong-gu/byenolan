import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Button from "@/components/Button";
import styled from "@emotion/styled";
import {
  percentState,
  answersState,
  questionsState,
  selectedQuestionIndexState,
  selectedState,
} from "@/store/survey_choose/atoms";
import { ReactNode, useEffect, useState } from "react";
import { selectedQuestionState } from "@/store/survey_choose/selectors";
import { infoState } from "@/store/survey_info/atoms";

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

type myType = {
  onClick?: (e: any) => void;
  selected: boolean;
  showDetail: boolean;
  percent?: string;
  children: ReactNode;
};

const MyButton = ({
  onClick,
  selected,
  percent,
  showDetail,
  children,
}: myType) => {
  return (
    <Button
      width="100%"
      height="64px"
      fontColor="black"
      fontSize="14px"
      borderRadius="0"
      buttonColor="beige"
      className="first"
      onClick={onClick}
    >
      {selected && showDetail ? "V" : ""}
      {children} {showDetail ? percent : ""}
    </Button>
  );
};

export default function Question() {
  const [percent, setPercent] = useRecoilState(percentState);
  const [currentVal, setCurrentVal] = useState<any>([]);
  const [selected, setSelected] = useRecoilState(selectedState);
  const [answers, setAnswers] = useRecoilState(answersState);
  const [questions, setQuestions] = useRecoilState(questionsState);
  const [info, setInfo] = useRecoilState(infoState);
  const { questionValue } = useRecoilValue(selectedQuestionState);
  const [selectedIndex, setSelectedIndex] = useRecoilState(
    selectedQuestionIndexState
  );

  const getRandomNumber = (maxLen: number, selectNum: number) => {
    const res = [];

    while (res.length < selectNum) {
      const num = Math.round(Math.random() * (maxLen - 1)) + 1;
      if (res.filter((resNum) => resNum === num).length == 0) {
        res.push(num);
      }
    }
    return res;
  };

  useEffect(() => {
    async function fetchData() {
      const ranNums = getRandomNumber(3, 3).join();

      await fetch(`https://byenolan.shop/survey/total/${ranNums}`)
        .then((res) => res.json())
        .then((res) => {
          setQuestions(res);
          setAnswers({ info });
        })
        .catch(() => alert("데이터를 불러오지 못했습니다."));
    }

    fetchData();
  }, [setQuestions]);

  const selectButtonEvent = async (data: QuestionType, answer_no: string) => {
    setSelected(true);

    const result = data.survey.filter((el: AnswerInfoType) => {
      return el.answer_no === answer_no;
    });

    const first =
      Math.round(
        (questionValue.survey[0].count / questionValue.totalcount) * 100
      ) + "%";

    const second =
      Math.round(
        (questionValue.survey[1].count / questionValue.totalcount) * 100
      ) + "%";

    if (percent.length == 0) {
      setPercent([first, second]);
      setCurrentVal([
        ...currentVal,
        { _id: data._id, answer_no: result[0].answer_no },
      ]);
      setAnswers({
        ...answers,
        selected: [
          ...currentVal,
          { _id: data._id, answer_no: result[0].answer_no },
        ],
      });

      console.log(answers);
    } else {
      alert("이미 선택되었습니다.");
    }
  };

  function isSelected(answer_no: string): boolean {
    const checkSelect = answers;
    console.log(checkSelect);
    if (!checkSelect.selected) {
      return false;
    } else {
      return (
        answer_no ===
        (checkSelect.selected[selectedIndex] &&
          checkSelect.selected[selectedIndex].answer_no)
      );
    }
  }
  console.log(answers);
  return (
    <QuestionBox>
      <QuestionTitle>
        {questionValue && questionValue.survey[0].question}
      </QuestionTitle>
      <SelectBox>
        <MyButton
          showDetail={selected}
          percent={percent && percent[0]}
          onClick={(e) =>
            selectButtonEvent(questionValue && questionValue, "A")
          }
          selected={isSelected("A")}
        >
          {questionValue && questionValue.survey[0].answer}
        </MyButton>
        <div>vs</div>

        <MyButton
          showDetail={selected}
          percent={percent && percent[1]}
          onClick={(e) =>
            selectButtonEvent(questionValue && questionValue, "B")
          }
          selected={isSelected("B")}
        >
          {questionValue && questionValue.survey[1].answer}
        </MyButton>
      </SelectBox>
    </QuestionBox>
  );
}
