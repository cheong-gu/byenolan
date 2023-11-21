"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import modalImg from "../../../public/home/1_modal_img_248x148.svg";
import { useRecoilState } from "recoil";
import { homeNolanState, homeShowModalState } from "@/store/home/atoms";
import { HomeModalFrame } from "./HomeModalframe.server";

export function HomeModal() {
  const [showModal, setShowModal] = useRecoilState(homeShowModalState);
  const [nolan, setNolan] = useRecoilState(homeNolanState);
  return (
    <HomeModalFrame isOpen={showModal}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image src={modalImg} alt="modalHand" width={248} height={148}></Image>
        <span
          style={{
            fontFamily: "NeoDunggeunmo Pro",
            fontSize: 18,
            letterSpacing: "-0.18px",
          }}
        >
          마음을 정하셨나요?
        </span>
        <ModalConfirm
          onClick={async () => {
            const aa = await fetch("https://byenolan.shop/survey", {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify({
                age: "10대",
                gender: "M",
                question_id: "27",
                answer_no: "A",
              }),
            });
            console.log(aa);
            setShowModal(false);
            setNolan({ ...nolan, isSelected: true });
          }}
        >
          네!
        </ModalConfirm>
        <ModalDenay
          onClick={() => {
            setShowModal(false);
          }}
        >
          아직이요
        </ModalDenay>
      </div>
    </HomeModalFrame>
  );
}

const ModalConfirm = styled.button`
  display: flex;
  height: 48px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: #2a3351;
  color: #fff;

  text-align: center;
  /* H6 - Neo */
  font-family: NeoDunggeunmo Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  letter-spacing: -0.16px;
  margin-top: 16px;
`;

const ModalDenay = styled.button`
  margin-top: 16px;
  color: #93a0c8;

  text-align: center;
  /* H6 - Neo */
  font-family: NeoDunggeunmo Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  letter-spacing: -0.16px;
  margin-bottom: 20px;
`;
