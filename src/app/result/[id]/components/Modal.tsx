import styled from "@emotion/styled";
import React, { useRef } from "react";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(225, 225, 225, 0);
  z-index: 99999;
`;

const ModalWrapper = styled.div`
  max-width: 440px;
  height: 100%;
  overflow-y: scroll;
  background-color: #aaa;
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
  justify-content: flex-start;

  width: 100%;
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
  const modalRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    if (modalRef.current) {
      modalRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return isOpen ? (
    <ModalContainer>
      <ModalWrapper ref={modalRef}>
        <ModalHeader>
          <button onClick={onClose}>닫기</button>
        </ModalHeader>
        <ModalContent>
          {children}
          <ScrollButton onClick={scrollToTop}>맨 위로 가기</ScrollButton>
        </ModalContent>
      </ModalWrapper>
    </ModalContainer>
  ) : null;
};

export default Modal;
