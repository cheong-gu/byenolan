import styled from "@emotion/styled";
import { ReactNode } from "react";
import { PaletteKeyTypes, palette } from "./Palette";
import { css } from "@emotion/react";

interface ButtonStyle {
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  borderRadius?: string;
  hasBorder?: boolean;
  percent?: string;
  backgroundImage?: any;
  buttonColor?: PaletteKeyTypes;
  borderColor?: PaletteKeyTypes;
  fontColor?: PaletteKeyTypes;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  children: ReactNode;
  className?: string;
  // onClick?: () => void;
}

const StyledButton = styled.button<ButtonStyle>`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  ${({
    width = "auto",
    height = "auto",
    buttonColor = "white",
    hasBorder = false,
    borderColor = "white",
    borderRadius = "4px",
    fontColor = "green",
    fontSize = "14px",
    backgroundImage = "",
  }) => css`
    width: ${width};
    height: ${height};
    hasborder: ${hasBorder};
    background-image: url(${backgroundImage.src});
    background-color: ${palette[buttonColor]};
    border: ${hasBorder ? `1px solid ${palette[borderColor]}` : "none"};
    bordercolor: ${palette[borderColor]};
    border-radius: ${borderRadius};
    color: ${palette[fontColor]};
    font-size: ${fontSize};
  `}

  .image {
    height: 50px;
    pointer-events: none;
  }

  .startButton {
    display: flex;
    justify-content: center;
    align-items: center;
    .check {
      height: 20px;
    }
    .content {
      margin-left: 4px;
    }
  }
`;

const Button = ({
  className,
  children,
  backgroundImage,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      backgroundImage={backgroundImage}
      className={className}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
