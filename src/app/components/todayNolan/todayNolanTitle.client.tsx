"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import TitleTextImg from "../../../public/home/1_title_text_392x132.svg";
import IconBoltImg from "../../../public/home/1_icon_bolt_16x16.png";

const TitleText = styled.div`
  width: 392px;
  height: 132px;
  margin: 0 auto;
  position: relative;
`;

export default function TodayNolanTitleClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TitleText>
      <Image src={TitleTextImg} alt="title" width={392} height={132}></Image>
      <span
        style={{
          position: "absolute",
          top: "15px",
          width: "392px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={IconBoltImg.src} alt="bolt" width={16} height={16}></Image>
        <span
          style={{
            fontFamily: "NeoDunggeunmo Pro",
            fontSize: 20,
          }}
        >
          오늘의 논란
        </span>
        <Image src={IconBoltImg.src} alt="bolt" width={16} height={16}></Image>
      </span>
      <span
        style={{
          position: "absolute",
          width: "392px",
          display: "flex",
          justifyContent: "center",
          fontFamily: "NeoDunggeunmo Pro",
          color: "#5B3A09",
          letterSpacing: "-0.18px",
          lineHeight: "140%",
          top: "53px",
          height: "69px",
          alignItems: "center",
        }}
      >
        {children}
      </span>
    </TitleText>
  );
}
