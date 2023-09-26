import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  width: 100%;
  margin-bottom: 48px;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 16px;
`;

const QuestionLabel = styled.div`
  padding: 4px 6px;
  margin-bottom: 8px;
  border-radius: 100px;
  background-color: #d9d9d9;
`;

const Question = styled.h3`
  margin: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.18px;
  text-align: center;
  color: #000;
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
        <QuestionLabel>문항 {number}</QuestionLabel>
        <Question>{question}</Question>
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
