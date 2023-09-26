import React from "react";
import styled from "@emotion/styled";

const Polygon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="7"
    viewBox="0 0 9 7"
    fill="none"
  >
    <path
      d="M5.36603 6.5C4.98113 7.16667 4.01887 7.16667 3.63397 6.5L1.0359 2C0.650997 1.33333 1.13212 0.499999 1.90192 0.499999L7.09807 0.499999C7.86788 0.499999 8.349 1.33333 7.9641 2L5.36603 6.5Z"
      fill="black"
    />
  </svg>
);

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  border-radius: 999px;
  background-color: #000;
`;

const PolygonBox = styled.div`
  position: absolute;
  bottom: -10px;
`;

const Text = styled.p`
  /* Element3 - Dos */
  font-family: DOSGothic;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.72px;
  color: #fff;
`;

interface LabelProps {
  polygon?: boolean;
  children: React.ReactNode;
}

const Label = ({ polygon, children }: LabelProps) => {
  return (
    <Wrapper>
      <LabelBox>
        <Text>{children}</Text>
      </LabelBox>
      {polygon && (
        <PolygonBox>
          <Polygon />
        </PolygonBox>
      )}
    </Wrapper>
  );
};

export default Label;
