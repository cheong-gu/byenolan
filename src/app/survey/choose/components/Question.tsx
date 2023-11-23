import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Button from "@/components/Button";
import styled from "@emotion/styled";
import {
  percentState,
  answersState,
  questionsState,
  selectedQuestionIndexState,
  selectedState,
  everageState,
} from "@/store/survey_choose/atoms";
import { ReactNode, useEffect, useState } from "react";
import { selectedQuestionState } from "@/store/survey_choose/selectors";
import { infoState } from "@/store/survey_info/atoms";
import Answer from "@/components/Answer";
import Image from "next/image";
import ButtonCheck from "@/public/survey/buttonCheck.svg";
import { IndexedAccessType } from "typescript";

const QuestionBox = styled.div`
  width: 100%;
  height: 100%;
`;

const QuestionTitle = styled.div`
  margin: 0 auto;
  min-width: 206px;
  text-align: center;
  font-size: 18px;
  color: black;
`;

const SelectBox = styled.div`
  height: 220px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .versus {
    text-align: center;
    color: #54a2ba;
  }
`;

type myType = {
  onClick?: (e: any) => void;
  selected: boolean;
  showDetail: boolean;
  percent?: string;
  children: ReactNode;
};

const MyAnswer = ({
  onClick,
  selected,
  percent,
  showDetail,
  children,
}: myType) => {
  const num = Number(percent?.slice(0, 2));

  return (
    <Answer
      width="100%"
      height="64px"
      hasBorder={selected && showDetail ? true : false}
      borderColor="black"
      className="first"
      percent={percent}
      onClick={onClick}
      selected={selected && showDetail ? true : false}
      progress={showDetail ? true : false}
      progressNo={showDetail ? num : 0}
    >
      <div className="text">
        <div className="head">
          <span className="marking">
            {selected && showDetail ? (
              <Image
                src={ButtonCheck}
                alt="error"
                width={20}
                height={20}
              ></Image>
            ) : (
              ""
            )}
          </span>
          <span className="title">{children}</span>
        </div>
        <span className="foot">{showDetail ? percent : ""}</span>
      </div>
    </Answer>
  );
};

export default function Question() {
  const [percent, setPercent] = useRecoilState(percentState);
  const [everageArr, setEverageArr] = useRecoilState(everageState);
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
      const ranNums = getRandomNumber(42, 12).join();

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
    // setProgress(true);
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

    if (percent.length === selectedIndex) {
      setPercent([...percent, { first, second }]);
      setEverageArr([
        ...everageArr,
        result[0].answer_no === "A" ? first : second,
      ]);

      setCurrentVal([
        ...currentVal,
        { question_id: data._id, answer_no: result[0].answer_no },
      ]);
      setAnswers({
        ...answers,
        selected: [
          ...currentVal,
          { question_id: data._id, answer_no: result[0].answer_no },
        ],
        everageArr: [
          ...everageArr,
          result[0].answer_no === "A" ? first : second,
        ],
      });
    } else {
      alert("이미 선택되었습니다.");
    }
  };

  function isSelected(answer_no: string): boolean {
    const checkSelect = answers;

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
  return (
    <QuestionBox>
      <QuestionTitle>
        {questionValue && questionValue.survey[0].question}
      </QuestionTitle>
      <SelectBox>
        <MyAnswer
          showDetail={selected}
          percent={percent[selectedIndex] && percent[selectedIndex].first}
          onClick={(e) =>
            selectButtonEvent(questionValue && questionValue, "A")
          }
          selected={isSelected("A")}
        >
          {questionValue && questionValue.survey[0].answer}
        </MyAnswer>
        <div className="versus">vs</div>
        <MyAnswer
          showDetail={selected}
          percent={percent[selectedIndex] && percent[selectedIndex].second}
          onClick={(e) =>
            selectButtonEvent(questionValue && questionValue, "B")
          }
          selected={isSelected("B")}
        >
          {questionValue && questionValue.survey[1].answer}
        </MyAnswer>
      </SelectBox>
    </QuestionBox>
  );
}
