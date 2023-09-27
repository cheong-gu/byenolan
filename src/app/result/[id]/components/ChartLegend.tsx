import React from "react";
import styled from "@emotion/styled";
import { DUMMY_DONUT_COLOR, relationshipType } from "../constants/dummy";
import Label from "./Label";
import { Element3, H6 } from "../../../../styles/font";

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

const Margin = styled.div`
  margin: 0px 4px;
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
        <Margin>
          <H6>{type}</H6>
        </Margin>
        {active && <Label type="string">나</Label>}
      </TagBox>
      <Element3>{point}%</Element3>
    </Wrapper>
  );
};

export default ChartLegend;
