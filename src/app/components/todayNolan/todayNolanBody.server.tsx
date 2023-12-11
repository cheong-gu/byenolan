import Image from "next/image";

import SelectImg from "../../../public/home/1_select_392x308.svg";
import TodayNolanAswers from "./todayNolanAnswer.client";

import styles from "./styles/todayNolanBody.module.css";
import TodayNolanResult from "./todayNolanResult.client";
import TodayNolanAswersServer from "./todayNolanAnswer.server";
import TodayNolanResultServer from "./todayNolanResult.server";

export default function TodayNolanBody() {
  const { body } = styles;
  return (
    <div className={body}>
      <Image src={SelectImg} alt="selectBackground" width={392} height={308} />
      <TodayNolanAswers>
        <TodayNolanAswersServer />
      </TodayNolanAswers>
      <TodayNolanResult>
        <TodayNolanResultServer />
      </TodayNolanResult>
    </div>
  );
}
