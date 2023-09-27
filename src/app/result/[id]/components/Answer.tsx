import styled from "@emotion/styled";
import React from "react";
import { Element2, H5 } from "../../../../styles/font";

const Container = styled.div`
  width: 100%;
  margin-bottom: 48px;
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
  background-color: #d9d9d9;
`;

const AnswerBox = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 64px;
  padding: 0px 20px;
  margin-bottom: 16px;
  background-color: #fcffdd;
`;

interface AnswerProps {
  number: number;
  question: string;
  answer: unknown;
  options: { _id: string; answer: string; answer_no: number }[];
}

const Answer = ({ number, question, answer, options }: AnswerProps) => {
  return (
    <Container>
      <QuestionBox>
        <QuestionLabel>
          <Element2>문항 {number}</Element2>
        </QuestionLabel>
        <H5>{question}</H5>
      </QuestionBox>
      <AnswerBox>
        {options.map((option) => (
          <Content key={option._id}>{option.answer}</Content>
        ))}
      </AnswerBox>
    </Container>
  );
};

export default Answer;
