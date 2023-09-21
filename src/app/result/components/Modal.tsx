import styled from "@emotion/styled";
import React from "react";

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #aaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 40px;
  padding: 4px 12px;
  background-color: #fcffdd;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 40px 24px;
`;

const ScrollButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;
  margin: 0px 40px;
  border-radius: 100px;
  background-color: #fcffdd;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return isOpen ? (
    <ModalContainer>
      <ModalHeader>
        <button onClick={onClose}>닫기</button>
      </ModalHeader>
      <ModalContent>
        {children}
        <ScrollButton>맨 위로 가기</ScrollButton>
      </ModalContent>
    </ModalContainer>
  ) : null;
};

export default Modal;
