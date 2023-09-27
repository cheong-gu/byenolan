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
  buttonColor?: PaletteKeyTypes;
  borderColor?: PaletteKeyTypes;
  fontColor?: PaletteKeyTypes;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  children: ReactNode;
  className?: string;
}

// onClilck?: () => void;
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
    fontColor = "black",
    fontSize = "14px",
  }) => css`
    width: ${width};
    height: ${height};
    background-color: ${palette[buttonColor]};
    border: ${hasBorder ? `1px solid ${palette[borderColor]}` : "none"};
    border-radius: ${borderRadius};
    color: ${palette[fontColor]};
    font-size: ${fontSize};
  `}
`;

const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <StyledButton className={className} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
