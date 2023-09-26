import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 288px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 24px;
`;

const ColumnBox = styled.div<{ lastIndex?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  margin-right: ${(props) => (props.lastIndex ? "0px" : "24px")};
`;

const ColumnBackground = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 112px;
  margin-bottom: 8px;
`;

const Column = styled.div<{ percentage: number }>`
  width: 100%;
  height: ${(props) => Math.max(props.percentage, 28.57)}%;
  border-radius: 6px 6px 0px 0px;
  background-color: #1c2237;
  transition: height 0.5s ease-in-out;
`;

const ColumnLabel = styled.p`
  /* H6 - Neo */
  font-family: NeoDunggeunmo Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */
  letter-spacing: -0.18px;
`;

interface ColumnChartProps {
  data: { age: string; point: number }[];
}

const RESET_CHART = new Array(3).fill(0);

const ColumnChart = ({ data }: ColumnChartProps) => {
  const [percentageState, setPercentageState] = useState<number[]>(RESET_CHART);

  const drawColumnChart = useCallback(() => {
    setPercentageState(RESET_CHART);
    setTimeout(() => {
      setPercentageState(data.map((item) => item.point));
    }, 500);
  }, [data]);

  useEffect(() => {
    drawColumnChart();
    const timer = setInterval(() => {
      drawColumnChart();
    }, 10000);
    return () => clearInterval(timer);
  }, [drawColumnChart]);

  return (
    <Wrapper>
      {data.map(({ point, age }, idx) => (
        <ColumnBox key={`${age}_${idx}`} lastIndex={idx === 2}>
          <ColumnBackground>
            <Column percentage={percentageState[idx]} />
          </ColumnBackground>
          <ColumnLabel>{age}</ColumnLabel>
        </ColumnBox>
      ))}
    </Wrapper>
  );
};

export default ColumnChart;
