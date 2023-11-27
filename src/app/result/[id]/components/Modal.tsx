import styled from "@emotion/styled";
import React, { useRef } from "react";
import HeaderImg from "../../../../public/result/modal_header.png";
import Image from "next/image";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
`;

const ModalWrapper = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100%;
  background-color: #edeef5;
  color: #191f28;
`;

const ModalHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 40px;
`;

const Button = styled.button`
  position: absolute;
  width: 60px;
  height: 40px;
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
          <Image src={HeaderImg} alt="modal_header" />
          <Button onClick={onClose} />
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
