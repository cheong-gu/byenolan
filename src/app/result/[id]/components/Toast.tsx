import styled from '@emotion/styled';
import React from 'react';
import { Body3 } from '../../../../styles/font';

const ToastWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  top: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition:
    opacity 300ms,
    transform 300ms;
`;

const MessageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 234px;
  height: 30px;
  padding: 4px 8px;
  background-color: #000;
  text-align: center;
  color: #fff;
`;

const Icon = styled.div`
  margin-top: -8px;
`;

const Polygon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
  >
    <path
      d="M7.73205 9C6.96225 10.3333 5.03775 10.3333 4.26795 9L0.803849 3C0.0340483 1.66667 0.9963 1.13682e-06 2.5359 1.00222e-06L9.4641 3.96541e-07C11.0037 2.61944e-07 11.966 1.66667 11.1962 3L7.73205 9Z"
      fill="black"
    />
  </svg>
);

interface ToastProps {
  isOpen: boolean;
  message: string;
}

const Toast = ({ isOpen, message }: ToastProps) => {
  return (
    <ToastWrapper isOpen={isOpen}>
      <MessageBox>
        <Body3>{message}</Body3>
      </MessageBox>
      <Icon>
        <Polygon />
      </Icon>
    </ToastWrapper>
  );
};

export default Toast;
