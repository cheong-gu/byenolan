'use client'

import styled from "@emotion/styled";

const ParticipatedDiv = styled.div`
  display: grid;
  margin: 64px auto;
  width: 200px;
  grid-template-columns: auto 12px;
  grid-row-gap: 8px;
  grid-template-rows: 10px auto;
  color: white;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;
const ParticipatedTitle = styled.div`
  grid-column: 1/3;
  color: #5b3a09;

  text-align: center;
  /* H3 - Neo */
  font-family: NeoDunggeunmo Pro;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 20px */
  letter-spacing: -0.2px;
`;
const ParticipatedNum = styled.div`
  font-size: 37px;
  color: #5b3a09;
  text-align: center;
  /* Element1 - Neo */
  font-family: DOSGothic;
  font-size: 52px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 52px */
`;
const ParticipatedUnit = styled.div`
  margin-left: 4px;
  color: #5b3a09;
  /* H6 - Neo */
  font-family: NeoDunggeunmo Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  letter-spacing: -0.16px;
`;

export default function Participants() {
  return (
    <ParticipatedDiv>
      <ParticipatedTitle>참여한 사람</ParticipatedTitle>
      <ParticipatedNum>34,000</ParticipatedNum>
      <ParticipatedUnit>명</ParticipatedUnit>
    </ParticipatedDiv>
  );
}
