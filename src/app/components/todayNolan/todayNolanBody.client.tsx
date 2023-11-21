"use client";

import styled from "@emotion/styled";
import Image from "next/image";

import SelectImg from "../../../public/home/1_select_392x308.svg";
import { useRecoilState } from "recoil";
import { homeNolanState } from "@/store/home/atoms";
import { HomeProgressBar } from "../progressbar/HomeProgressBar.server";
import Link from "next/link";
import TodayNolanAswers from "./todayNolanAnswer.client";

const TodayNolanBodyWrapper = styled.div`
  width: 392px;
  height: 308px;
  margin: 0 auto;
  margin-top: 1rem;
  position: relative;
`;
export default function TodayNolanBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [nolan] = useRecoilState(homeNolanState);
  return (
    <TodayNolanBodyWrapper>
      <Image
        src={SelectImg}
        alt="selectBackground"
        width={392}
        height={308}
      ></Image>
      {nolan.isSelected ? (
        <div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              alignItems: "center",
              top: "63px",
              width: "392px",
              justifyItems: "center",
              flexDirection: "column",
            }}
          >
            <HomeProgressBar
              percent={51}
              selected={nolan.selectedAnswer == "A"}
              discription="부담없이 만난다"
            ></HomeProgressBar>
            <HomeProgressBar
              percent={49}
              selected={nolan.selectedAnswer == "B"}
              discription="부담스러워 거절한다"
            ></HomeProgressBar>
            <Link href={"survey/info"}>
              <button>{"계속 참여하기 •'-'•)و✧"}</button>
            </Link>
          </div>
        </div>
      ) : (
        <TodayNolanAswers>{children}</TodayNolanAswers>
      )}
    </TodayNolanBodyWrapper>
  );
}
