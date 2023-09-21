"use client";

import styled from "@emotion/styled";
import Content from "./components/Content";
import { useState } from "react";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #aaa;
  padding-bottom: 64px;
`;

const ResultHeader = styled.div`
  width: 100%;
  height: 40px;
  background-color: #fcffdd;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 24px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  border: 2px solid;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  margin-top: 8px;
  gap: 8px;
`;

const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  background-color: #fcffdd;
`;

export default function ResultPage() {
  return (
    <Container>
      {/* Header -> 이미지 대체 */}
      <ResultHeader />
      <ContentWrapper>
        <Content>
          <h3>
            언제나 논란의 중심에 있는
            <br />
            진라면
          </h3>
          <Button>결과 공유</Button>
          <ButtonWrapper>
            <Button>다시하기</Button>
            <Button>홈 화면</Button>
          </ButtonWrapper>
        </Content>
        <Content>
          <h3>
            20대 여성은
            <br />
            진라면 유형이 가장 많아요
          </h3>
        </Content>
        <Content>
          <h3>불닭볶음면 유형이 많은 연령대는?</h3>
        </Content>
        <ModalButton>전체 답변 보기</ModalButton>
      </ContentWrapper>
    </Container>
  );
}
