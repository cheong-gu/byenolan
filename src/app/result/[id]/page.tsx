'use client';

import styled from '@emotion/styled';
import Content from './components/Content';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Modal from './components/Modal';
import Toast from './components/Toast';
import Answer from './components/Answer';
import BarGraph from './components/BarGraph';
import DonutChart from './components/DonutChart';
import ChartLegend from './components/ChartLegend';
import ColumnChart from './components/ColumnChart';
import { Body3, H3, H5, H6 } from '../../../styles/font';
import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  ColumnChartState,
  donutChartState,
  modalQuestionState,
  modalResultState,
  resultState,
} from '../../../store/survey_result/atoms';
import SariGomtang from '../../../public/result/sarigomtang.svg';
import SinRamen from '../../../public/result/sinramen.svg';
import SesameRamen from '../../../public/result/sesameramen.svg';
import JinRamen from '../../../public/result/jinramen.svg';
import BuldakRamen from '../../../public/result/buldakramen.svg';
import HaekBuldakRamen from '../../../public/result/haekbuldakramen.svg';
import HeaderImage from '../../../public/result/header.svg';
import ShareIcon from '../../../public/result/share.svg';
import AnswerIcon from '../../../public/result/answers.svg';
import HomeIcon from '../../../public/result/home.svg';
import RepeatIcon from '../../../public/result/repeat.svg';
import YellowButton from '../../../public/result/yellow_button.svg';
import GreyButton from '../../../public/result/grey_button.svg';
import BlueButton from '../../../public/result/blue_button.svg';
import {
  InfoResultType,
  RelationshipType,
} from '../../../store/survey_result/atoms.type';
import Image from 'next/image';
import Stroke from './components/Stroke';
import {
  answersState,
  everageState,
  percentState,
  questionsState,
  selectedQuestionIndexState,
  selectedState,
} from '../../../store/survey_choose/atoms';
import { infoState } from '../../../store/survey_info/atoms';

const INITIAL_TYPE_DESIGN = {
  color: '#edeef5',
  stroke: '#edeef5',
  image: SariGomtang,
};
const getTypeDesign = (title: RelationshipType) => {
  switch (title) {
    case '핵불닭볶음면':
      return { color: '#191f28', stroke: '#eff1f9', image: HaekBuldakRamen };
    case '불닭볶음면':
      return { color: '#1c47b5', stroke: '#eff1f9', image: BuldakRamen };
    case '신라면':
      return { color: '#ec4747', stroke: '#ffeeea', image: SinRamen };
    case '진라면':
      return { color: '#ff881b', stroke: '#ffeddc', image: JinRamen };
    case '참깨라면':
      return { color: '#ffe072', stroke: '#fff8b6', image: SesameRamen };
    case '사리곰탕':
      return { color: '#edeef5', stroke: '#edeef5', image: SariGomtang };
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

const ShareButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  margin-top: 24px;
  gap: 5px;
  cursor: pointer;
  background-image: url(${YellowButton.src});
`;

const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  background-image: url(${GreyButton.src});
  gap: 5px;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  background-image: url(${BlueButton.src});
  color: #fff;
  gap: 4px;
`;

interface ResultPageProps {
  params: { id: string };
  searchParams: {
    age: string;
    gender: 'W' | 'M';
    question: string;
    answer: string;
  };
}

export default function ResultPage({
  params: { id },
  searchParams: { age, gender, question, answer },
}: ResultPageProps) {
  const [result, setResult] = useRecoilState(resultState);
  const [modalResult, setModalResult] = useRecoilState(modalResultState);
  const [modalQuestion, setModalQuestion] = useRecoilState(modalQuestionState);
  const [donutChartData, setDonutChartData] = useRecoilState(donutChartState);
  const [columnChartData, setColumnChartData] =
    useRecoilState(ColumnChartState);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const resetResult = useResetRecoilState(resultState);
  const resetModalResult = useResetRecoilState(modalResultState);
  const resetModalQuestion = useResetRecoilState(modalQuestionState);
  const resetDonutChart = useResetRecoilState(donutChartState);
  const resetColumnChart = useResetRecoilState(ColumnChartState);
  const resetSelectedQuestion = useResetRecoilState(selectedQuestionIndexState);
  const resetSelectedState = useResetRecoilState(selectedState);
  const resetPercentState = useResetRecoilState(percentState);
  const resetAverageState = useResetRecoilState(everageState);
  const resetQuestionState = useResetRecoilState(questionsState);
  const resetAnswerState = useResetRecoilState(answersState);
  const resetInfoState = useResetRecoilState(infoState);

  const resetData = () => {
    resetResult();
    resetModalResult();
    resetModalQuestion();
    resetDonutChart();
    resetColumnChart();
    resetSelectedQuestion();
    resetSelectedState();
    resetPercentState();
    resetAverageState();
    resetQuestionState();
    resetAnswerState();
    resetInfoState();
  };

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(`https://byenolan.shop/${url}`);
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  };

  const getDonutChartData = useCallback(async () => {
    const response = (await fetchData(
      `surveyResult?age=${age}&gender=${gender}`
    )) as InfoResultType[];
    const data = response.sort((a, b) => b.count - a.count);
    const chartData = data.map((data) =>
      parseInt(data.percent.substring(0, data.percent.length - 1))
    );
    setDonutChartData({
      data: data,
      donutData: chartData,
      mostType: data[0].title,
    });
  }, [age, gender, setDonutChartData]);

  const getColumnChartData = useCallback(
    async (type: string) => {
      const response = (await fetchData(
        `surveyResult?title=${type}`
      )) as InfoResultType[];
      const data = response.sort((a, b) => b.count - a.count);
      setColumnChartData(data.slice(0, 3));
    },
    [setColumnChartData]
  );

  const getModalResult = useCallback(
    async (result: string[]) => {
      const response = await fetchData(`survey/total/${result}`);
      setModalQuestion(response);
    },
    [setModalQuestion]
  );

  const getResult = useCallback(async () => {
    const response = await fetchData(`surveyResult/result/${id}`);
    setResult(response[0]);
    await getDonutChartData();
    await getColumnChartData(response[0].title);
  }, [getColumnChartData, getDonutChartData, id, setResult]);

  useEffect(() => {
    const decodeQuestion = JSON.parse(decodeURIComponent(question)) as string[];
    const decodeAnswer = JSON.parse(decodeURIComponent(answer)) as string[];
    setModalResult({ question: decodeQuestion, answer: decodeAnswer });
    void getResult();
    void getModalResult(decodeQuestion);
  }, [answer, getModalResult, getResult, question, setModalResult]);

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
    donutChartData.data &&
    columnChartData.length > 0 &&
    result && (
      <>
        {showModal && (
          <Modal isOpen={showModal} onClose={handleModal}>
            {modalQuestion.map(({ survey, _id }, index) => (
              <Answer
                key={_id}
                index={index + 1}
                survey={survey}
                answerList={modalResult.answer}
              />
            ))}
          </Modal>
        )}
        <Container typeColor={getTypeDesign(result.title).color}>
          <ResultHeader>
            <Image src={HeaderImage} alt="result_header" />
          </ResultHeader>
          <ContentWrapper>
            {/* 1. 결과요약 */}
            <Content index={1}>
              <ResultImage>
                <Image
                  src={getTypeDesign(result.title).image}
                  alt="type_image"
                />
              </ResultImage>
              <H5>{result.subTitle}</H5>
              <Margin number={4} />
              <Stroke
                title={result.title}
                typeColor={getTypeDesign(result.title).stroke}
                stroke={5}
                size="lg"
              />
              <BarGraph
                percentage={result.percentResult}
                color={getTypeDesign(result.title).color}
              />
              <Summary>
                <Body3>{result.content}</Body3>
              </Summary>
              <ShareButton onClick={copyToClipBoard}>
                <Image src={ShareIcon} alt="share" />
                <H6>결과 공유</H6>
                <Toast
                  isOpen={showToast}
                  message="링크 복사 완료! 친구에게 공유해 보세요!"
                />
              </ShareButton>
              <ButtonWrapper>
                <LinkButton
                  href={'/survey/info'}
                  onClick={resetData}
                  about="repeat"
                >
                  <Image src={RepeatIcon} alt="repeat" />
                  <H6>다시하기</H6>
                </LinkButton>
                <LinkButton href={'/'} onClick={resetData} about="to home">
                  <Image src={HomeIcon} alt="home" />
                  <H6>홈 화면</H6>
                </LinkButton>
              </ButtonWrapper>
            </Content>
            {/* 2. 사용자 연령대별 유형 */}
            <Content index={2}>
              <Row>
                <Stroke
                  title={`${age}대 ${gender === 'W' ? '여성' : '남성'}`}
                  typeColor={getTypeDesign(result.title).stroke}
                  stroke={2}
                  size="md"
                />
                <H3>은</H3>
              </Row>
              <Margin number={8} />
              <Row>
                <Stroke
                  title={donutChartData.mostType}
                  typeColor={getTypeDesign(result.title).stroke}
                  stroke={2}
                  size="md"
                />
                <H3>&nbsp;유형이 가장 많아요</H3>
              </Row>
              <DonutChart type={result.title} chartData={donutChartData} />
              {donutChartData.data.map(({ title, percent }, idx) => (
                <ChartLegend
                  key={`${title}_${idx}`}
                  type={title}
                  percent={percent}
                  color={getTypeDesign(title).color}
                  active={result.title === title}
                  lastIndex={idx === donutChartData.data.length}
                />
              ))}
            </Content>
            {/* 3. 사용자 유형별 연령대 */}
            <Content index={3}>
              <Row>
                <Stroke
                  title={result.title}
                  typeColor={getTypeDesign(result.title).stroke}
                  stroke={2}
                  size="md"
                />
                <H3>&nbsp;유형이 많은 연령대는?</H3>
              </Row>
              <ColumnChart type={result.title} data={columnChartData} />
            </Content>
            <ModalButton onClick={handleModal}>
              <Image src={AnswerIcon} alt="answers" />
              <H6>전체 답변 보기</H6>
            </ModalButton>
          </ContentWrapper>
        </Container>
      </>
    )
  );
}
