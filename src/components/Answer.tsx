import { HTMLAttributes, ReactNode } from "react";
import { PaletteKeyTypes, palette } from "./Palette";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface AnswerStyle {
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  borderRadius?: string;
  hasBorder?: boolean;
  percent?: string;
  buttonColor?: PaletteKeyTypes;
  borderColor?: PaletteKeyTypes;
  fontColor?: PaletteKeyTypes;
  progressNo?: number;
  selected?: boolean;
  progress?: boolean;
}

interface AnswerProps extends HTMLAttributes<HTMLDivElement>, AnswerStyle {
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const StyledAnswer = styled.div<AnswerStyle>`
  cursor: pointer;
  text-align: center;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: white;
  position: relative;

  ${({
    width = "392px",
    height = "auto",
    hasBorder = false,
    borderColor = "white",
    borderRadius = "0",
  }) => css`
    width: ${width};
    height: ${height};
    hasborder: ${hasBorder};
    border: ${hasBorder ? `2px solid ${palette[borderColor]}` : "none"};
    borderColor: {borderColor};
    border-radius: ${borderRadius};

  `}

  .bar {
    position: absolute;
    height: 60px;

    ${({ selected = false }) => css`
      height: ${selected ? "60px" : "64px"};
      background-color: ${selected ? palette.main2 : "#EBECF0"};
    `}
  }
  .css-progressbar {
    ${({
      progress = false,
      selected = false,
      progressNo,
      width = "auto",
    }) => css`
      width: ${progress ? progressNo : 0}%;
    `}
  }
  .text {
    width: 100%;
    padding: 0 20px;
    position: absolute;

    z-index: 1;
    display: flex;
    align-items: center;

    ${({ progress = false }) =>
      css`
        justify-content: ${progress ? "space-between" : "center"};
      `}

    .head {
      display: flex;
      align-items: center;
      .marking {
        text-align: center;
        margin-right: 4px;
      }
    }
  }
`;

const Answer = ({
  className,
  children,
  progressNo,
  selected,
  ...rest
}: AnswerProps) => {
  return (
    <StyledAnswer
      className={className}
      selected={selected}
      progressNo={progressNo}
      {...rest}
    >
      {children}
      <div className="css-progressbar bar"></div>
    </StyledAnswer>
  );
};

export default Answer;
