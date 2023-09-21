"use client";

import styled from "@emotion/styled";
import Content from "./components/Content";
import { useState } from "react";
import Link from "next/link";
import Modal from "./components/Modal";
import Toast from "./components/Toast";
import Answer from "./components/Answer";
import BarGraph from "./components/BarGraph";

const Container = styled.div`
  width: 100%;
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

const Summary = styled.div`
  width: 224px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const Title = styled.h3<{ size: "sm" | "lg" }>`
  font-size: ${(props) => (props.size === "lg" ? "30px" : "18px")};
  margin-bottom: ${(props) => (props.size === "sm" ? "4px" : "0px")};
`;

const Subtitle = styled.h3`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.18px;
`;

const Emphasis = styled.span`
  color: #ff2020;
`;

const ShareButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  margin-top: 24px;
  border: 2px solid;
  cursor: pointer;
`;

const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  border: 2px solid;
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(window.location.href);
    showToastMessage();
  };

  const showToastMessage = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <>
      {showModal && (
        <Modal isOpen={showModal} onClose={handleModal}>
          {DUMMY_DATA.map(({ answer, options, question }, index) => (
            <Answer
              key={`${index}_${question}`}
              number={index + 1}
              question={question}
              answer={answer}
              options={options}
            />
          ))}
        </Modal>
      )}
      <Container>
        {/* Header -> 이미지 대체 */}
        <ResultHeader />
        <ContentWrapper>
          <Content>
            <div
              style={{
                width: "216px",
                height: "172px",
                border: "1px solid",
                marginBottom: "8px",
              }}
            />
            <Title size="sm">언제나 논란의 중심에 있는</Title>
            <Title size="lg">진라면</Title>
            <BarGraph />
            <Summary>
              유형 설명글 유형 설명글 유형 설명글 유형 설명글 유형 설명글 유형
              설명글 유형 설명글 유형 설명글 유형 설명글 유형 설명글 유형 설명글
              유형 설명글 유형 설명글 유형 설명글 유형 설명글
            </Summary>
            <ShareButton onClick={copyToClipBoard}>
              <Toast
                isOpen={showToast}
                message="복사 완료! 친구에게 공유해 보세요!"
              />
              결과 공유
            </ShareButton>
            <ButtonWrapper>
              <LinkButton href={"/"} about="to home">
                다시하기
              </LinkButton>
              <LinkButton href={"/"} about="to home">
                홈 화면
              </LinkButton>
            </ButtonWrapper>
          </Content>
          <Content>
            <Subtitle>
              <Emphasis>20대 여성</Emphasis>은
            </Subtitle>
            <Subtitle>
              <Emphasis>진라면</Emphasis> 유형이 가장 많아요
            </Subtitle>
          </Content>
          <Content>
            <Subtitle>불닭볶음면 유형이 많은 연령대는?</Subtitle>
          </Content>
          <ModalButton onClick={handleModal}>전체 답변 보기</ModalButton>
        </ContentWrapper>
      </Container>
    </>
  );
}

const DUMMY_DATA = [
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
