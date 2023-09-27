"use client";

import styled from "@emotion/styled";
import Content from "./components/Content";
import { useState } from "react";
import Link from "next/link";
import Modal from "./components/Modal";
import Toast from "./components/Toast";
import Answer from "./components/Answer";
import BarGraph from "./components/BarGraph";
import DonutChart from "./components/DonutChart";
import {
  DUMMY_CHART_DATA,
  DUMMY_COLUMN_DATA,
  DUMMY_MODAL_DATA,
  DUMMY_RESULT_DATA,
  relationshipType,
} from "./constants/dummy";
import ChartLegend from "./components/ChartLegend";
import ColumnGraph from "./components/ColumnChart";
import { Body3, H1, H3, H5 } from "../../../styles/font";

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
`;

const Margin = styled.div<{ number: number }>`
  margin-bottom: ${(props) => props.number ?? 0}px;
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

interface ResultPageProps {
  params: { id: string };
  searchParams: { type: string; age: string; gender: string };
}

export default function ResultPage({ params, searchParams }: ResultPageProps) {
  const DUMMY_TYPE = searchParams.type as relationshipType;
  const DUMMY_AGE_TYPE = "불닭볶음면";
  const DUMMY_INFO = { age: searchParams.age, gender: searchParams.gender };
  const DUMMY_PERCENTAGE = DUMMY_CHART_DATA.filter(
    ({ type, point }) => type === DUMMY_TYPE
  )[0].point;

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
          {DUMMY_MODAL_DATA.map(({ answer, options, question }, index) => (
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
          {/* 1. 결과요약 */}
          <Content>
            <div
              style={{
                width: "216px",
                height: "172px",
                border: "1px solid",
                marginBottom: "8px",
              }}
            />
            <H5>{DUMMY_RESULT_DATA[DUMMY_TYPE].title}</H5>
            <Margin number={4} />
            <H1>{DUMMY_TYPE}</H1>
            <BarGraph percentage={DUMMY_PERCENTAGE} />
            <Summary>
              <Body3>{DUMMY_RESULT_DATA[DUMMY_TYPE].summary}</Body3>
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
          {/* 2. 사용자 연령대별 유형 */}
          <Content>
            <H3>
              <Emphasis>
                {DUMMY_INFO.age} {DUMMY_INFO.gender}
              </Emphasis>
              은
            </H3>
            <Margin number={8} />
            <H3>
              <Emphasis>{DUMMY_AGE_TYPE}</Emphasis> 유형이 가장 많아요
            </H3>
            <DonutChart
              type={DUMMY_AGE_TYPE}
              percentage={DUMMY_PERCENTAGE}
              data={DUMMY_CHART_DATA}
            />
            {DUMMY_CHART_DATA.map(({ type, point }, idx) => (
              <ChartLegend
                key={`${type}_${idx}`}
                type={type}
                point={point}
                active={type === DUMMY_TYPE}
                lastIndex={idx === 5}
              />
            ))}
          </Content>
          {/* 3. 사용자 유형별 연령대 */}
          <Content>
            <H3>
              <Emphasis>{DUMMY_TYPE} </Emphasis>
              유형이 많은 연령대는?
            </H3>
            <ColumnGraph data={DUMMY_COLUMN_DATA} />
          </Content>
          <ModalButton onClick={handleModal}>전체 답변 보기</ModalButton>
        </ContentWrapper>
      </Container>
    </>
  );
}
