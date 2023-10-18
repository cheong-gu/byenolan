"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import ProgressBar from "./components/ProgressBar";
import Question from "./components/Question";
import Button from "@/components/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  percentState,
  selectedQuestionIndexState,
  selectedState,
} from "@/store/survey_choose/atoms";
import { selectedQuestionState } from "@/store/survey_choose/selectors";

const ChooseBox = styled.div`
  width: 100%;
  height: 800px;
  background-color: black;
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
  margin-bottom: 150px;
`;

export default function ChoosePage() {
  const router = useRouter();
  const [selected, setSelected] = useRecoilState(selectedState);
  const [percent, setPercent] = useRecoilState(percentState);
  const { questionValue } = useRecoilValue(selectedQuestionState);
  const [selectedIndex, setSelectedIndex] = useRecoilState(
    selectedQuestionIndexState
  );

  const saveButtonEvent = () => {
    setSelectedIndex(selectedIndex + 1);

    setSelected(false);
    setPercent([]);
  };
  return (
    <ChooseBox>
      <InnerContainer>
        <TopLine>
          <span onClick={() => router.back()}>back</span>
          <ProgressBar />
        </TopLine>
        <MidLine>
          <Question />
        </MidLine>

        <Button
          width="100%"
          height="64px"
          fontColor="white"
          fontSize="14px"
          buttonColor="black"
          onClick={(e) => saveButtonEvent()}
        >
          {selected ? "다음 문항" : "건너 뛰기"}
        </Button>
      </InnerContainer>
    </ChooseBox>
  );
}
