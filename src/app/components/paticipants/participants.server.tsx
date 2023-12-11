"use client";
import { useRecoilState } from "recoil";
import style from "./participants.module.css";
import { homeNolanState } from "@/store/home/atoms";

export default function Participants() {
  const [nolan] = useRecoilState(homeNolanState);

  const { wrap, title, num, unit } = style;

  return (
    <div className={wrap}>
      <div className={title}>참여한 사람</div>
      <div className={num}>{nolan.participants ?? "0"}</div>
      <div className={unit}>명</div>
    </div>
  );
}
