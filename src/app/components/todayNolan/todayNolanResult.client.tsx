"use client";

import Link from "next/link";
import { useRecoilState } from "recoil";
import { homeNolanState } from "@/store/home/atoms";
import styles from "./styles/todayNolanResult.module.css";
import clsx from "clsx";

export default function TodayNolanResult({
  children,
}: {
  children: React.ReactNode;
}) {
  const [nolan] = useRecoilState(homeNolanState);
  const { wrap } = styles;

  return (
    <div className={nolan.isSelected ? "show" : "hide"}>
      <div className={clsx(wrap, nolan.selectedAnswer)}>
        {children}
      </div>
    </div>
  );
}
