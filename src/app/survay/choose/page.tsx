"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import ProgressBar from "./components/ProgressBar";
import Question from "./components/Question";
import Button from "@/components/Button";

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
        >
          건너 뛰기
        </Button>
      </InnerContainer>
    </ChooseBox>
  );
}
