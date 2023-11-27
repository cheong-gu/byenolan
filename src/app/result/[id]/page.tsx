"use client";

import styled from "@emotion/styled";
import Content from "./components/Content";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Modal from "./components/Modal";
import Toast from "./components/Toast";
import Answer from "./components/Answer";
import BarGraph from "./components/BarGraph";
import DonutChart from "./components/DonutChart";
import ChartLegend from "./components/ChartLegend";
import ColumnGraph from "./components/ColumnChart";
import { Body3, H1, H3, H5 } from "../../../styles/font";
import { useRecoilState } from "recoil";
import { resultState } from "../../../store/survey_result/atoms";
import SariGomtang from "../../../public/result/sarigomtang.svg";
import SinRamen from "../../../public/result/sinramen.svg";
import SesameRamen from "../../../public/result/sesameramen.svg";
import JinRamen from "../../../public/result/jinramen.svg";
import BuldakRamen from "../../../public/result/buldakramen.svg";
import HaekBuldakRamen from "../../../public/result/haekbuldakramen.svg";
import HeaderImage from "../../../public/result/header.png";
import { RelationshipType } from "../../../store/survey_result/atoms.type";
import Image from "next/image";
import Stroke from "./components/Stroke";

const INITIAL_TYPE_DESIGN = {
  color: "#edeef5",
  stroke: "#edeef5",
  image: SariGomtang,
};
const getTypeDesign = (title: RelationshipType) => {
  switch (title) {
    case "핵불닭볶음면":
      return { color: "#191f28", stroke: "#eff1f9", image: HaekBuldakRamen };
    case "불닭볶음면":
      return { color: "#1c47b5", stroke: "#eff1f9", image: BuldakRamen };
    case "신라면":
      return { color: "#ec4747", stroke: "#ffeeea", image: SinRamen };
    case "진라면":
      return { color: "#ff881b", stroke: "#ffeddc", image: JinRamen };
    case "참깨라면":
      return { color: "#ffe072", stroke: "#fff8b6", image: SesameRamen };
    case "사리곰탕":
      return { color: "#edeef5", stroke: "#edeef5", image: SariGomtang };
    default:
      return INITIAL_TYPE_DESIGN;
  }
};

const Container = styled.div<{ typeColor: string }>`
  width: 100%;
  background-color: ${(props) => props.typeColor};
  padding-bottom: 64px;
  color: #2a3351;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ResultHeader = styled.div`
  width: 100%;
  height: 40px;
`;

const ResultImage = styled.div`
  width: 216px;
  height: 172px;
  margin-bottom: 8px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 24px;
`;

const Summary = styled.div`
  width: 312px;
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
  searchParams: { type: string; age: string; gender: "W" | "M" };
}

export default function ResultPage({ params, searchParams }: ResultPageProps) {
  const { id } = params;
  const { type, age, gender } = searchParams;
  const [result, setResult] = useRecoilState(resultState);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [resultUI, setResultUI] = useState(INITIAL_TYPE_DESIGN);

  const getResultType = useCallback(async () => {
    await fetch(`https://byenolan.shop/surveyResult/result/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setResult(response[0]);
        console.log("[Result]", response[0]);
      });
  }, [id, setResult]);

  const getDonutChartData = useCallback(async () => {
    await fetch(
      `https://byenolan.shop/surveyResult?age=${age}&gender=${gender}`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("[DonutChart]", { response });
      });
  }, [age, gender]);

  const getBarGraphData = useCallback(async () => {
    await fetch(
      `https://byenolan.shop/surveyResult?title=${type}
      }`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("[BarGraph]", { response });
      });
  }, [type]);

  useEffect(() => {
    if (id && searchParams) {
      setResultUI(getTypeDesign(searchParams.type as RelationshipType));
      void getResultType();
      void getDonutChartData();
      void getBarGraphData();
    }
  }, [getResultType, getDonutChartData, getBarGraphData, id, searchParams]);

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
          {/* {DUMMY_MODAL_DATA.map(({ answer, options, question }, index) => (
            <Answer
              key={`${index}_${question}`}
              number={index + 1}
              question={question}
              answer={answer}
              options={options}
            />
          ))} */}
        </Modal>
      )}
      <Container typeColor={resultUI.color}>
        <ResultHeader>
          <Image src={HeaderImage} alt="result_header" />
        </ResultHeader>
        <ContentWrapper>
          {/* 1. 결과요약 */}
          <Content index={1}>
            <ResultImage>
              <Image src={resultUI.image} alt="type_image" />
            </ResultImage>
            <H5>{result.subTitle}</H5>
            <Margin number={4} />
            <Stroke
              title={result.title}
              typeColor={resultUI.stroke}
              stroke={5}
              size="lg"
            />
            <BarGraph
              percentage={result.percentResult}
              color={resultUI.color}
            />
            <Summary>
              <Body3>{result.content}</Body3>
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
          <Content index={2}>
            <Row>
              <Stroke
                title={`${age}대 ${gender === "W" ? "여성" : "남성"}`}
                typeColor={resultUI.stroke}
                stroke={2}
                size="md"
              />
              <H3>은</H3>
            </Row>
            <Margin number={8} />
            <Row>
              {/* FIXME: API 타입으로 바꾸기 */}
              <Stroke
                title={type}
                typeColor={resultUI.stroke}
                stroke={2}
                size="md"
              />
              <H3>&nbsp;유형이 가장 많아요</H3>
            </Row>

            {/* <DonutChart
          type={}
          percentage={}
          data={DUMMY_CHART_DATA}
        />
        {DUMMY_CHART_DATA.map(({ type, point }, idx) => (
          <ChartLegend
            key={`${type}_${idx}`}
            type={type}
            point={point}
            active={type === result.title}
            lastIndex={idx === 5}
          />
        ))} */}
          </Content>
          {/* 3. 사용자 유형별 연령대 */}
          <Content index={3}>
            <Row>
              {/* FIXME: API 타입으로 바꾸기 */}
              <Stroke
                title={type}
                typeColor={resultUI.stroke}
                stroke={2}
                size="md"
              />
              <H3>&nbsp;유형이 많은 연령대는?</H3>
            </Row>
            {/* <ColumnGraph data={DUMMY_COLUMN_DATA} /> */}
          </Content>
          <ModalButton onClick={handleModal}>전체 답변 보기</ModalButton>
        </ContentWrapper>
      </Container>
    </>
  );
}
