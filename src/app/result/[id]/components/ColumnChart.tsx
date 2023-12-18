import styled from '@emotion/styled';
import React, { useCallback, useEffect, useState } from 'react';
import { H6 } from '../../../../styles/font';
import {
  InfoResultType,
  RelationshipType,
} from '../../../../store/survey_result/atoms.type';

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
  margin-right: ${(props) => (props.lastIndex ? '0px' : '24px')};
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

const Column = styled.div<{ idx: number; columnColor: string }>`
  width: 100%;
  height: ${(props) =>
    props.idx === 1 ? '112px' : props.idx === 2 ? '67px' : '32px'};
  border-radius: 6px 6px 0px 0px;
  background-color: ${(props) => props.columnColor};
  transition: height 0.5s ease-in-out;
`;

const COLUMN_CHART_COLOR = {
  핵불닭볶음면: '#191f28',
  불닭볶음면: '#1c47b5',
  신라면: '#ec4747',
  진라면: '#ff881b',
  참깨라면: '#ffe072',
  사리곰탕: '#dadde6',
};

const RESET_CHART = new Array(3).fill(0);

interface ColumnChartProps {
  type: RelationshipType;
  data: InfoResultType[];
}

const ColumnChart = ({ type, data }: ColumnChartProps) => {
  const [percentageState, setPercentageState] = useState<number[]>(RESET_CHART);

  const drawColumnChart = useCallback(() => {
    if (data.length > 0) {
      setPercentageState(RESET_CHART);
      setTimeout(() => {
        setPercentageState([1, 2, 3]);
      }, 500);
    }
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
      {data.length > 0 &&
        data?.map(({ age, gender }, idx) => (
          <ColumnBox key={`${age}_${idx}`} lastIndex={idx === 2}>
            <ColumnBackground>
              <Column
                idx={percentageState[idx]}
                columnColor={COLUMN_CHART_COLOR[type]}
              />
            </ColumnBackground>
            <H6>
              {age}대 {gender === 'M' ? '남성' : '여성'}
            </H6>
          </ColumnBox>
        ))}
    </Wrapper>
  );
};

export default ColumnChart;
