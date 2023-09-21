"use client";

import styled from "@emotion/styled";
import Content from "./components/Content";
import { useState } from "react";
import Link from "next/link";
import Modal from "./components/Modal";
import Toast from "./components/Toast";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #aaa;
  padding-bottom: 64px;
`;

const ResultHeader = styled.div`
  width: 100%;
  height: 40px;
  background-color: #fcffdd;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 24px;
`;

const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  border: 2px solid;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  margin-top: 8px;
  gap: 8px;
`;

const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  background-color: #fcffdd;
`;

export default function ResultPage() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(window.location.href);
    showToastMessage();
  };

  const showToastMessage = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <Container>
      {/* Header -> 이미지 대체 */}
      <ResultHeader />
      <ContentWrapper>
        <Content>
          <h3>
            언제나 논란의 중심에 있는
            <br />
            진라면
          </h3>
          <Button onClick={copyToClipBoard}>
            <Toast
              isOpen={showToast}
              message="복사 완료! 친구에게 공유해 보세요!"
            />
            결과 공유
          </Button>
          <ButtonWrapper>
            <Button>
              <Link href={"/"} about="to home">
                다시하기
              </Link>
            </Button>
            <Button>
              <Link href={"/"} about="to home">
                홈 화면
              </Link>
            </Button>
          </ButtonWrapper>
        </Content>
        <Content>
          <h3>
            20대 여성은
            <br />
            진라면 유형이 가장 많아요
          </h3>
        </Content>
        <Content>
          <h3>불닭볶음면 유형이 많은 연령대는?</h3>
        </Content>
        <ModalButton onClick={handleModal}>전체 답변 보기</ModalButton>
      </ContentWrapper>
      {showModal && (
        <Modal isOpen={showModal} onClose={handleModal}>
          모달 예시
        </Modal>
      )}
    </Container>
  );
}
