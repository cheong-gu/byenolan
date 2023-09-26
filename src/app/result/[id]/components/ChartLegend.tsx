import React from "react";
import styled from "@emotion/styled";
import { DUMMY_DONUT_COLOR, relationshipType } from "../constants/dummy";
import Label from "./Label";

const Wrapper = styled.div<{ lastIndex?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 266px;
  margin-bottom: ${({ lastIndex }) => (lastIndex ? 0 : "2px")};
  padding: 4px;
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Tag = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 1000px;
  background-color: ${({ color }) => (color ? color : "#000")};
`;

const Text = styled.p`
  margin: 0px 4px;
  /* H6 - Neo */
  font-family: NeoDunggeunmo Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */
  letter-spacing: -0.18px;
`;

const PointText = styled.p`
  color: #000;
  text-align: right;
  /* Element3 - Dos */
  font-family: DOSGothic;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 18px */
  letter-spacing: 0.72px;
`;

interface ChartLegendProps {
  type: relationshipType;
  point: number;
  active?: boolean;
  lastIndex?: boolean;
}

const ChartLegend = ({ type, point, active, lastIndex }: ChartLegendProps) => {
  return (
    <Wrapper lastIndex={lastIndex}>
      <TagBox>
        <Tag color={DUMMY_DONUT_COLOR[type]} />
        <Text>{type}</Text>
        {active && <Label type="string">나</Label>}
      </TagBox>
      <PointText>{point}%</PointText>
    </Wrapper>
  );
};

export default ChartLegend;
