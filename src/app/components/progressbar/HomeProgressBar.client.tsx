"use client";

import Image from "next/image";
import CheckImg from "../../../public/home/FiCheck.svg";
import clsx from "clsx";
import { useRecoilState } from "recoil";
import { homeNolanState } from "@/store/home/atoms";

type HomeProgressProps = {
  percent: number;
  discription: string;
  answer: string;
};

export default function HomeProgressBar({
  percent,
  discription,
  answer,
}: HomeProgressProps) {
  const [nolan] = useRecoilState(homeNolanState);

  console.log(nolan.selectedAnswer, answer);
  return (
    <div
      style={{
        position: "relative",
        width: 312,
        height: 64,

        marginBottom: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          width: (312 * percent) / 100,
          background: nolan.selectedAnswer == answer ? "#FFD8F2" : "#EBECF0",
          justifyContent: "space-between",
          height: 64,
          padding: "0 20px",
          alignItems: "center",
          border: "1px solid #5B3A09",
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          top: 0,
          display: "flex",
          width: 312,
          justifyContent: "space-between",
          height: 64,
          padding: "0 20px",
          alignItems: "center",
          border: "1px solid #5B3A09",
          position: "absolute",
        }}
      >
        <div
          style={{
            color: "#5B3A09",
            fontFamily: "Pretendard",
            display: "flex",
          }}
        >
          <div
            className={clsx(
              nolan.selectedAnswer == answer ? "show-inline" : "hide"
            )}
          >
            <Image src={CheckImg} width={18} height={18} alt="check" />
          </div>
          {discription}
        </div>
        <div
          style={{
            fontFamily: "DOSGothic",
            color: "#5B3A09",
          }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
}
