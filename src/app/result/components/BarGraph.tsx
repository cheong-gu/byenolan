import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 274px;
  margin: 24px 0px;
`;

const Label = styled.div`
  height: 30px;
`;

const Bar = styled.div`
  position: relative;
  width: 192px;
  height: 12px;
  border-radius: 10px;
  background: #e6e6e6;
  margin-bottom: 8px;
`;

const Gauge = styled.div`
  position: absolute;
  left: 0;
  width: 57px;
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

const BarGraph = () => {
  return (
    <Wrapper>
      <Label>라벨</Label>
      <Bar>
        <Gauge />
      </Bar>
      <Text>당신은 전체 응답자 중 40%에 속해요</Text>
    </Wrapper>
  );
};

export default BarGraph;
