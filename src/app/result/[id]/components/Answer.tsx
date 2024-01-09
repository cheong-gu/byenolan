import styled from '@emotion/styled';
import React from 'react';
import { Body1, Element2, Element3, H5 } from '../../../../styles/font';
import { ModalAnswerType } from '../../../../store/survey_result/atoms.type';
import CheckedImg from '../../../../public/result/select.svg';
import Image from 'next/image';

const Container = styled.div`
  width: 100%;
  margin-bottom: 48px;
  color: #191f28;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100%;
  margin-bottom: 16px;
`;

const QuestionLabel = styled.div`
  padding: 4px 6px;
  margin-bottom: 8px;
  border-radius: 100px;
  background-color: #fff;
`;

const AnswerBox = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const Content = styled.div<{ active?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 64px;
  padding: 0px 20px;
  margin-bottom: 16px;
  border: ${(props) => (props.active ? '1px solid #2a3351' : '0px')};
  color: ${(props) => (props.active ? '#191F28' : '#7A8289')};
  background: #fff;
`;

const Gauge = styled.div<{ active?: boolean; gauge: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: ${(props) => props.gauge};
  height: 100%;
  background-color: ${(props) => (props.active ? '#94E3FF' : '#DBDFEC')};
  z-index: 1;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
  gap: 2px;
`;

interface AnswerProps {
  index: number;
  answerList: string[];
  survey: ModalAnswerType[];
}

const Answer = ({ index, answerList, survey }: AnswerProps) => {
  return (
    <Container>
      <QuestionBox>
        <QuestionLabel>
          <Element2>문항 {index}</Element2>
        </QuestionLabel>
        <H5>{survey[0].question}</H5>
      </QuestionBox>
      <AnswerBox>
        {survey.map(({ answer, answer_no, formattedPercentage }) => {
          const active = answer_no === answerList[index - 1];
          return (
            <Content key={answer_no} active={active}>
              <Gauge active={active} gauge={formattedPercentage} />
              <Row>
                {active && <Image src={CheckedImg} alt="checked" />}
                <Body1>{answer}</Body1>
              </Row>
              <Row>
                <Element3>{formattedPercentage}</Element3>
              </Row>
            </Content>
          );
        })}
      </AnswerBox>
    </Container>
  );
};

export default Answer;
