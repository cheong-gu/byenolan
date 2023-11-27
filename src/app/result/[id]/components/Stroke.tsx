import styled from "@emotion/styled";
import React from "react";

interface StrokeStyleProps {
  stroke: number;
  typeColor: string;
  size: "lg" | "md";
}

interface StrokeProps extends StrokeStyleProps {
  title: string;
}

const Font = styled.h3<StrokeStyleProps>`
  font-family: "NeoDunggeunmo Pro";
  font-size: ${(props) => (props.size === "lg" ? "30px" : "20px")};
  font-weight: 400;
  line-height: 100%;
  letter-spacing: ${(props) => (props.size === "lg" ? "-0.3px" : "-0.2px")};
`;

const StrokeFont = styled(Font)<StrokeStyleProps>`
  -webkit-text-stroke: ${(props) => props.stroke * 2}px
    ${(props) => props.typeColor};
`;

const Stroke = ({ title, stroke, typeColor, size }: StrokeProps) => {
  return (
    <div style={{ position: "relative" }}>
      <StrokeFont typeColor={typeColor} stroke={stroke} size={size}>
        {title}
      </StrokeFont>
      <Font
        typeColor={typeColor}
        stroke={stroke}
        size={size}
        style={{ position: "absolute", top: 0 }}
      >
        {title}
      </Font>
    </div>
  );
};

export default Stroke;
