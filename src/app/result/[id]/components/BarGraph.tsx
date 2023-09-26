import styled from "@emotion/styled";
import React from "react";
import Label from "./Label";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 274px;
  margin: 24px 0px;
`;

const LabelWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 192px;
  height: 30px;
`;

const LabelBox = styled.div<{ width: number; percentage: number }>`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  left: ${(props) =>
    `${
      props.width -
      (props.percentage < 10 ? 20 : props.percentage === 100 ? 32 : 26)
    }px`};
`;

const Bar = styled.div`
  width: 192px;
  height: 12px;
  border-radius: 10px;
  background: #e6e6e6;
  margin-top: 2px;
  margin-bottom: 8px;
  overflow: hidden;
`;

const Gauge = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  height: 12px;
  border-radius: 10px;
  background: #000;
`;

const Text = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  color: #000;
`;

interface BarGraphProps {
  percentage: number;
}

const BarGraph = ({ percentage }: BarGraphProps) => {
  return (
    <Wrapper>
      <LabelWrapper>
        <LabelBox width={192 * (percentage / 100)} percentage={percentage}>
          <Label type="number" polygon>
            {percentage}%
          </Label>
        </LabelBox>
      </LabelWrapper>
      <Bar>
        <Gauge percentage={percentage} />
      </Bar>
      <Text>당신은 전체 응답자 중 {percentage}%에 속해요</Text>
    </Wrapper>
  );
};

export default BarGraph;
