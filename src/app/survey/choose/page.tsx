"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import ProgressBar from "./components/ProgressBar";
import Question from "./components/Question";
import Button from "@/components/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  answersState,
  everageState,
  percentState,
  selectedQuestionIndexState,
  selectedState,
} from "@/store/survey_choose/atoms";
import { palette } from "@/components/Palette";
import { infoState } from "@/store/survey_info/atoms";
import NextArrow from "@/public/survey/nextArrow.svg";
import BackButton from "@/public/survey/backButton.svg";
import ButtonNext from "@/public/survey/buttonNext.svg";
import Image from "next/image";
import { useState } from "react";

const ChooseBox = styled.div`
  width: 100%;
  height: 800px;
  background-color: ${palette.bg};
  padding: 40px 24px;
  border: 0.5px solid white;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
  span {
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
  }
`;

const MidLine = styled.div`
  margin-top: 20px;
  max-height: 300px;
`;

const BotLine = styled.div`
  position: relative;
  height: 250px;
  width: 100%;
  div {
    width: 100%;
    position: absolute;
    bottom: 0px;
    right: 0px;

    .nextBox {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default function ChoosePage() {
  const router = useRouter();
  const [selected, setSelected] = useRecoilState(selectedState);
  const [everageArr, setEverageArr] = useRecoilState(everageState);
  const [percent, setPercent] = useRecoilState(percentState);
  const [selectedIndex, setSelectedIndex] = useRecoilState(
    selectedQuestionIndexState
  );
  const [answers, setAnswers] = useRecoilState(answersState);
  const [info, setInfo] = useRecoilState(infoState);
  const currentPage = ((selectedIndex + 1) / 12) * 100;
  if (selectedIndex === 12) {
    const newData = {
      age: info.age.slice(0, 2),
      gender: info.gender === "남자" ? "M" : "W",
      selected: answers.selected,
    };

    const dataArray = Object.values(newData.selected).map((el: any) => {
      return {
        age: newData.age,
        gender: newData.gender,
        question_id: el.question_id,
        answer_no: el.answer_no,
      };
    });

    const resultFunc = (result: number) => {
      if (0 <= result && result <= 10) {
        return "핵불닭볶음면";
      } else if (11 <= result && result <= 30) {
        return "불닭볶음면";
      } else if (31 <= result && result <= 50) {
        return "신라면";
      } else if (51 <= result && result <= 70) {
        return "진라면";
      } else if (71 <= result && result <= 90) {
        return "참깨라면";
      } else if (91 <= result && result <= 100) {
        return "사리곰탕";
      } else return "error";
    };

    const resultArray = {
      age: newData.age,
      gender: newData.gender,
      percent: answers.everage,
      title: resultFunc(answers && answers.everage),
    };

    for (let i = 0; i < dataArray.length; i++) {
      fetch(`https://byenolan.shop/survey`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(dataArray[i]),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch(() => alert("데이터저장 오류!"));

      const questionId = answers.selected.map((value) => value.question_id);
      const answerNo = answers.selected.map((value) => value.answer_no);

      router.push(
        `/result/${resultArray.percent}?type=${resultArray.title}&age=${
          resultArray.age
        }&gender=${resultArray.gender}&question=${encodeURIComponent(
          JSON.stringify(questionId)
        )}&answer=${encodeURIComponent(JSON.stringify(answerNo))}`
      );
    }

    resultArray
      ? fetch(`https://byenolan.shop/surveyResult`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(resultArray),
        })
          .then((res) => res.json())
          .then((res) => console.log(res))
          .catch(() => alert("결과오류!"))
      : "";
  }

  const everageNumArr: [] = everageArr.map((el: string[]) => {
    return Number(el.slice(0, -1));
  });

  const everageRed: number = everageNumArr.reduce(
    (acc: number, cur: number) => acc + cur,
    0
  );

  const everage = Math.round(everageRed / (selectedIndex + 1));

  const saveButtonEvent = () => {
    if (selectedIndex !== percent.length) {
      setSelectedIndex(selectedIndex + 1);
      setAnswers({ ...answers, everage });
    } else if (selectedIndex === percent.length) {
      alert("선택해주세요!");
    } else if (selected) {
      setSelectedIndex(selectedIndex + 1);
      setSelected(false);
    } else {
      alert("오류!!!");
    }
  };

  const backButtonEvent = () => {
    if (selectedIndex === 0) {
      router.back();
      setInfo(info);
      setSelected(false);
      setAnswers([]);
      setPercent([]);
    } else {
      setSelectedIndex(selectedIndex - 1);
      setSelected(true);
    }
  };

  return (
    <ChooseBox>
      <InnerContainer>
        <TopLine>
          <span onClick={() => backButtonEvent()}>
            <Image src={BackButton} alt="error" />
          </span>
          <ProgressBar progress={currentPage} />
        </TopLine>
        <MidLine>
          <Question />
        </MidLine>
        <BotLine>
          <div>
            {selectedIndex !== percent.length ? (
              <Button
                width="100%"
                height="72px"
                fontColor="white"
                fontSize="14px"
                buttonColor="transparent"
                backgroundImage={ButtonNext}
                onClick={(e) => saveButtonEvent()}
              >
                <div className="nextBox">
                  <span className="next">다음 문항 </span>
                  <Image src={NextArrow} alt="error" />
                </div>
              </Button>
            ) : (
              ""
            )}
          </div>
        </BotLine>
      </InnerContainer>
    </ChooseBox>
  );
}
